'use client'

import type {
  Feature,
  FeatureCollection,
  GeoJsonObject,
  GeoJsonProperties,
  Geometry,
} from 'geojson'
import type { Map as LeafletMap } from 'leaflet'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import './interactive-map.css'
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import { useMap } from 'react-leaflet'

import { Spinner } from '@/components/ui/spinner'

import {
  createMarkerDivIconOptions,
  MARKER_DIV_ICON_HEIGHT,
  MARKER_DIV_ICON_WIDTH,
} from './create-marker-div-icon'

/**
 * Zoom tối đa mặc định cho map. Phải đủ cao để leaflet.markercluster khi click cụm có thể
 * `zoomToBounds` vào sâu và tách các điểm con — trước đây mặc định ~9 khiến zoom bị chặn, cụm gần như không bung.
 */
const DEFAULT_MAP_MAX_ZOOM = 18

// Dynamic imports for SSR compatibility
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false,
})

const GeoJSON = dynamic(() => import('react-leaflet').then((mod) => mod.GeoJSON), { ssr: false })

const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false })

const MarkerClusterGroup = dynamic(
  () => import('react-leaflet-cluster').then((mod) => mod.default),
  { ssr: false },
)

function useLeafletModule() {
  const [leaflet, setLeaflet] = useState<any>(null)

  useEffect(() => {
    let cancelled = false
    import('leaflet').then((mod) => {
      if (cancelled) return
      // `leaflet` thường export default là namespace `L`
      setLeaflet((mod as any).default ?? mod)
    })
    return () => {
      cancelled = true
    }
  }, [])

  return leaflet
}

// Types
/** Điểm con trong một thành phố (quận, dự án, v.v.) */
export interface CityChild {
  value: string
  label: string
  slug?: string
  lat: number
  lng: number
}

export interface CityData {
  value: string
  city: string
  label: string
  slug?: string
  lat?: number
  lng?: number
  /** Khi chọn một `CityChild`, `value` là id thành phố cha */
  parentValue?: string
  /** Các marker con — hiển thị cùng cluster với marker cha (nếu có tọa độ) */
  children?: CityChild[]
}

export interface MapConfig {
  center: [number, number]
  zoom: number
  minZoom?: number
  maxZoom?: number
  zoomControl?: boolean
  attributionControl?: boolean
}

export interface MapStyle {
  fillColor: string
  fillOpacity: number
  color: string
  weight: number
  opacity: number
  selectedFillOpacity?: number
  selectedFillColor?: string
}

export interface InteractiveMapProps {
  // Map configuration
  config: MapConfig
  style?: MapStyle

  // Data
  geoJsonData: GeoJsonObject
  cityList: CityData[]

  // State
  selectedCity: CityData | null
  onCitySelect: (city: CityData) => void

  // Controls
  zoomIn?: number
  zoomOut?: number
  reCenter?: number

  // Customization
  className?: string
  customMarkerComponent?: React.ComponentType<{
    value: string
    position: [number, number]
    label: string
    city: string
    slug?: string
    clusterSlug?: string
    clusterLabel: string
    handleCitySelect: (city: CityData) => void
    selectedCity: CityData | null
    onHover?: () => void
    onLeave?: () => void
  }>
  markerProps?: Record<string, unknown>

  // Callbacks
  onMapReady?: (map: LeafletMap) => void
  onCityHover?: (city: CityData | null) => void

  /** Fit map viewport to GeoJSON extent (mainland + Hoàng Sa, Trường Sa). */
  fitBoundsToGeoJson?: boolean

  /** Fixed on-map labels for Hoàng Sa / Trường Sa (centered on each maritime feature). */
  showMaritimeLabels?: boolean

  /**
   * Khi nhiều marker trùng hoặc đè lên nhau ở zoom cao, plugin có thể **spiderfy** (xếp vòng tròn quanh một điểm + đường nối).
   * Đặt `false` để luôn vẽ đúng tọa độ — lúc đó điểm trùng sẽ chồng nhau, khó click hơn.
   * @default true
   */
  clusterSpiderfyOnMaxZoom?: boolean

  /**
   * Từ mức zoom map này trở lên, không gom cụm nữa (điểm con hiện riêng). **Số càng nhỏ** thì càng sớm thấy điểm lẻ (ít cần zoom sâu), nhưng zoom thấp có thể có nhiều marker cùng lúc.
   * @default 11
   */
  clusterDisableClusteringAtZoom?: number

  /**
   * Bán kính gom cụm (px). **Số càng nhỏ** cụm càng dễ tách (điểm tách sớm hơn khi zoom/pan).
   * @default 48
   */
  clusterMaxRadius?: number
}

// Map Controller Component
const MapController = ({
  zoomIn,
  zoomOut,
  reCenter,
  selectedCity,
  config,
  onMapReady,
  flyToGeneration,
}: {
  zoomIn?: number
  zoomOut?: number
  reCenter?: number
  selectedCity: CityData | null
  config: MapConfig
  onMapReady?: (map: LeafletMap) => void
  /** Tăng mỗi lần chọn từ marker — đảm bảo flyTo chạy lại khi click cùng một điểm / sau cluster zoom */
  flyToGeneration: number
}) => {
  const map = useMap()

  useEffect(() => {
    if (onMapReady) {
      onMapReady(map)
    }
  }, [map, onMapReady])

  useEffect(() => {
    if (zoomIn) {
      map.zoomIn()
    }
  }, [zoomIn, map])

  useEffect(() => {
    if (zoomOut) {
      map.zoomOut()
    }
  }, [zoomOut, map])

  useEffect(() => {
    if (reCenter) {
      map.setView(config.center, config.zoom)
    }
  }, [reCenter, map, config])

  // Fly to selected city (lat/lng từ marker). flyToGeneration + setTimeout tránh trùng với zoom của cluster.
  useEffect(() => {
    if (selectedCity?.lat == null || selectedCity?.lng == null) return
    // Khi click điểm con bên trong cluster, cần zoom thêm nữa (tầm ~12).
    const cap = map.getMaxZoom()
    const isChildPoint = selectedCity.parentValue != null
    // - Điểm không có điểm con: chỉ pan + zoom nhẹ
    // - Điểm con: zoom sâu hơn để nhìn rõ tọa độ con
    const minZoom = isChildPoint ? 12 : 9
    const targetZoom = Math.min(cap, Math.max(map.getZoom(), minZoom))
    const lat = selectedCity.lat
    const lng = selectedCity.lng
    const t = window.setTimeout(() => {
      map.flyTo([lat, lng], targetZoom, {
        duration: 1.5,
        easeLinearity: 0.25,
      })
    }, 60)
    return () => window.clearTimeout(t)
  }, [
    selectedCity?.lat,
    selectedCity?.lng,
    selectedCity?.parentValue,
    flyToGeneration,
    map,
    config.zoom,
    config.maxZoom,
  ])

  return null
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

function maritimeLabelMarkersFromGeoJson(data: GeoJsonObject, leaflet: any) {
  if (data.type !== 'FeatureCollection') return []
  const { features } = data as FeatureCollection
  const items: {
    id: string
    position: [number, number]
    line1: string
    line2: string
  }[] = []
  for (const feature of features) {
    if (feature.type !== 'Feature' || !feature.geometry) continue
    const country = (feature.properties as { COUNTRY?: string } | null)?.COUNTRY
    if (country !== 'ParacelIslands' && country !== 'SpratlyIslands') continue
    const layer = leaflet.geoJSON(feature as any)
    const b = layer.getBounds()
    const c = b.getCenter()
    const name =
      ((feature.properties as { NAME_1?: string })?.NAME_1) ||
      (country === 'ParacelIslands' ? 'Hoàng Sa' : 'Trường Sa')
    items.push({
      id: country,
      position: [c.lat, c.lng],
      line1: `${name}\u00A0islands`,
      line2: '(Vietnam)',
    })
  }
  return items
}

const MaritimeLabelMarker = ({
  leaflet,
  position,
  line1,
  line2,
}: {
  leaflet: any
  position: [number, number]
  line1: string
  line2: string
}) => {
  const icon = useMemo(
    () =>
      leaflet.divIcon({
        className:
          'maritime-geo-label !m-0 !border-0 !bg-transparent shadow-none [box-shadow:none]',
        html: `<div style="text-align:center;color:#374554;font-family:system-ui">
  <div style="font-size:0.625rem;font-weight:400;line-height:120%;letter-spacing:0.00313rem">${escapeHtml(line1)}</div>
  <div style=""font-size:0.625rem;font-weight:400;line-height:120%;letter-spacing:0.00313rem">${escapeHtml(line2)}</div>
</div>`,
        iconSize: [240, 48],
        iconAnchor: [120, 24],
      }),
    [leaflet, line1, line2],
  )

  return (
    <Marker position={position} icon={icon} interactive={false} zIndexOffset={900} />
  )
}

const FitBoundsToGeoJson = ({
  data,
  leaflet,
  maxZoom = DEFAULT_MAP_MAX_ZOOM,
}: {
  data: GeoJsonObject
  leaflet: any
  /** Should match MapContainer maxZoom so fit can use the full zoom range. */
  maxZoom?: number
}) => {
  const map = useMap()

  useEffect(() => {
    if (!leaflet) return
    const layer = leaflet.geoJSON(data as any)
    const bounds = layer.getBounds()
    if (bounds.isValid()) {
      // Tighter padding + match map maxZoom so initial view isn’t stuck one level too far out
      map.fitBounds(bounds, { padding: [16, 16], maxZoom })
    }
  }, [map, data, maxZoom, leaflet])

  return null
}

// Default Marker Component
const DefaultMarker = dynamic(() => import('./default-marker').then((mod) => mod.default), {
  ssr: false,
})

const noopSubscribe = () => () => { }

/** Cùng HTML/CSS với `createMarkerDivIconOptions` — rộng hơn để vùng hover/click khớp label bung ra */
// Leaflet DivIcon cần `iconSize` dạng số, nên để tránh width cố định quá lớn
// (thường tạo ra style `width: 160px` trên element), ta dùng kích thước marker mặc định.
const CLUSTER_ICON_SIZE: [number, number] = [MARKER_DIV_ICON_WIDTH, MARKER_DIV_ICON_HEIGHT]
const CLUSTER_ICON_ANCHOR: [number, number] = [
  MARKER_DIV_ICON_WIDTH / 2,
  MARKER_DIV_ICON_HEIGHT,
]

type ClusterIconCluster = {
  getChildCount(): number
  getAllChildMarkers(): Array<{ options?: { title?: string } }>
}

/** MarkerCluster + leaflet internals dùng khi xử lý clusterclick (giống logic plugin, nhưng zoom bằng fly). */
type LeafletMarkerClusterHack = L.Marker & {
  _childClusters: LeafletMarkerClusterHack[]
  _zoom: number
  _childCount: number
  spiderfy: () => void
  getBounds: () => L.LatLngBounds
  getAllChildMarkers?: () => Array<L.Marker>
}

type LeafletMarkerClusterGroupHack = L.Layer & {
  _maxZoom: number
}

/** Zoom cố định khi click cụm (fly tới tâm cụm). Không vượt quá maxZoom của map. */
const CLUSTER_CLICK_TARGET_ZOOM = 10

/**
 * Click cụm: spiderfy khi cần, còn lại fly tới tâm cụm với zoom cố định {@link CLUSTER_CLICK_TARGET_ZOOM}.
 */
function CityMarkersCluster({
  children,
  onClusterCitySelect,
  clusterSpiderfyOnMaxZoom,
  clusterMaxRadius,
  clusterDisableClusteringAtZoom,
  iconCreate,
}: {
  children: ReactNode
  onClusterCitySelect: (city: CityData) => void
  clusterSpiderfyOnMaxZoom: boolean
  clusterMaxRadius: number
  clusterDisableClusteringAtZoom: number
  iconCreate: (cluster: ClusterIconCluster) => L.DivIcon
}) {
  const map = useMap()

  const onClusterClick = useCallback(
    (e: L.LeafletMouseEvent) => {
      const cluster = e.layer as LeafletMarkerClusterHack
      const group = e.target as LeafletMarkerClusterGroupHack

      const allChildMarkers = cluster.getAllChildMarkers?.() ?? []
      const firstChild = allChildMarkers[0] as (L.Marker & { options?: { alt?: string; title?: string } }) | undefined
      const citySlug = firstChild?.options?.alt?.trim()
      const cityLabel = firstChild?.options?.title?.trim()

      if (e.type === 'clusterkeypress') {
        const keyEv = e.originalEvent as unknown as KeyboardEvent
        if (keyEv?.keyCode !== 13) return
      }

      // Đổi màu map như khi click marker riêng.
      if (citySlug) {
        onClusterCitySelect({
          value: citySlug,
          city: cityLabel || citySlug,
          slug: citySlug,
          label: cityLabel || citySlug,
        })
      }

      let bottom: LeafletMarkerClusterHack = cluster
      while (bottom._childClusters.length === 1) {
        bottom = bottom._childClusters[0]
      }

      if (
        bottom._zoom === group._maxZoom &&
        bottom._childCount === cluster._childCount &&
        clusterSpiderfyOnMaxZoom
      ) {
        cluster.spiderfy()
        return
      }

      const targetZoom = Math.min(CLUSTER_CLICK_TARGET_ZOOM, map.getMaxZoom())
      map.flyTo(cluster.getBounds().getCenter(), targetZoom, {
        duration: 1.15,
        easeLinearity: 0.25,
      })
    },
    [map, clusterSpiderfyOnMaxZoom, onClusterCitySelect],
  )

  return (
    <MarkerClusterGroup
      chunkedLoading
      zoomToBoundsOnClick={false}
      spiderfyOnMaxZoom={false}
      showCoverageOnHover={false}
      maxClusterRadius={clusterMaxRadius}
      disableClusteringAtZoom={clusterDisableClusteringAtZoom}
      iconCreateFunction={iconCreate}
      onClick={onClusterClick}
    >
      {children}
    </MarkerClusterGroup>
  )
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  config,
  style,
  geoJsonData,
  cityList,
  selectedCity,
  onCitySelect,
  zoomIn,
  zoomOut,
  reCenter,
  className = '',
  customMarkerComponent: CustomMarker = DefaultMarker,
  markerProps = {},
  onMapReady,
  onCityHover,
  fitBoundsToGeoJson,
  showMaritimeLabels = true,
  clusterSpiderfyOnMaxZoom = true,
  clusterDisableClusteringAtZoom = 9,
  clusterMaxRadius = 48,
}) => {
  const leaflet = useLeafletModule()

  const normalizeForCompare = (value: string | undefined | null) => {
    if (!value) return ''
    // GeoJSON đang dùng dạng "không dấu" (VD: VARNAME_1 = "BacLieu"),
    // còn marker city name có thể là dạng "có dấu" (VD: "Bạc Liêu").
    // Normalize + remove diacritics để so sánh tương đương.
    const normalized = value
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .trim()
      .toLowerCase()

    // VARNAME_1 đôi khi dùng format không có space hoặc có dấu gạch.
    // Để map tô màu ổn định, loại bỏ mọi ký tự không thuộc [a-z0-9].
    return normalized.replace(/[^a-z0-9]/g, '')
  }

  const maritimeLabelItems = useMemo(() => {
    if (!leaflet) return []
    return showMaritimeLabels ? maritimeLabelMarkersFromGeoJson(geoJsonData, leaflet) : []
  }, [geoJsonData, showMaritimeLabels, leaflet])

  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  )

  const [flyToGeneration, setFlyToGeneration] = useState(0)
  const handleMarkerSelect = useCallback(
    (city: CityData) => {
      setFlyToGeneration((n) => n + 1)
      onCitySelect(city)
    },
    [onCitySelect],
  )
  const clusterIconCreateFunction = useCallback(
    (cluster: ClusterIconCluster) => {
      const firstChildLabel = cluster
        .getAllChildMarkers()
        .map((marker) => marker.options?.title?.trim())
        .find(Boolean)

      const locationLabel = firstChildLabel ?? `${cluster.getChildCount()} diem`

      return leaflet.divIcon(
        createMarkerDivIconOptions(locationLabel, {
          iconSize: CLUSTER_ICON_SIZE,
          iconAnchor: CLUSTER_ICON_ANCHOR,
        }),
      )
    },
    [leaflet],
  )

  const mapMaxZoom = config.maxZoom ?? DEFAULT_MAP_MAX_ZOOM

  // Debug nhanh: xem `selectedCity` có match với bất kỳ `VARNAME_1` nào trong GeoJSON không.
  // Đặt ở đầu component để không vi phạm rules Hooks (dù render loading vẫn phải gọi hook).
  useEffect(() => {
    if (!mounted) return
    if (!selectedCity) return
    if (geoJsonData.type !== 'FeatureCollection') return

    const normalizedSelected = normalizeForCompare(selectedCity.city)
    const features = (geoJsonData as FeatureCollection).features as Feature<Geometry, GeoJsonProperties>[]
    const hit = features.some((f) => normalizeForCompare(f?.properties?.VARNAME_1 as string) === normalizedSelected)

    console.warn('[InteractiveMap] selectedCity match VARNAME_1?', {
      selectedCity: selectedCity.city,
      normalizedSelected,
      hit,
    })
  }, [mounted, selectedCity, geoJsonData])

  if (!mounted) {
    return (
      <div
        role='status'
        aria-busy
        aria-live='polite'
        className={`relative w-full h-full min-h-[12rem] overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-[#1C599E]/[0.08] flex items-center justify-center ${className}`}
      >
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,rgb(148_163_184/0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.35)_1px,transparent_1px)] bg-[length:20px_20px]'
          aria-hidden
        />
        <div className='relative flex flex-col items-center gap-3'>
          <Spinner className='size-9 text-[#1C599E]' />
          <span className='text-sm font-medium text-slate-600'>Đang tải bản đồ…</span>
        </div>
      </div>
    )
  }

  // Default style (dark stroke — white borders vanish on light UI backgrounds)
  const defaultStyle: MapStyle = {
    fillColor: '#C4D2E3',
    fillOpacity: 0.24,
    color: '#C4D2E3',
    weight: 1,
    opacity: 1,
    selectedFillOpacity: 1,
  }

  const mapStyle = style || defaultStyle

  const maritimeStyle = {
    ...mapStyle,
    fillColor: mapStyle.fillColor,
    fillOpacity: 0.55,
    color: mapStyle.color,
    weight: 1,
  }

  // Get style for GeoJSON features
  const getStyle = (feature: Feature<Geometry, GeoJsonProperties> | undefined) => {
    const country = feature?.properties?.COUNTRY as string | undefined
    if (country === 'ParacelIslands' || country === 'SpratlyIslands') {
      const cityName = feature?.properties?.VARNAME_1
      if (selectedCity && cityName && normalizeForCompare(cityName) === normalizeForCompare(selectedCity.city)) {
        return {
          ...maritimeStyle,
          fillColor: mapStyle.selectedFillColor || mapStyle.fillColor,
          fillOpacity: mapStyle.selectedFillOpacity || maritimeStyle.fillOpacity,
        }
      }
      return maritimeStyle
    }

    const cityName = feature?.properties?.VARNAME_1
    if (selectedCity && cityName && normalizeForCompare(cityName) === normalizeForCompare(selectedCity.city)) {
      return {
        ...mapStyle,
        fillColor: mapStyle.selectedFillColor || mapStyle.fillColor,
        fillOpacity: mapStyle.selectedFillOpacity || mapStyle.fillOpacity,
      }
    }
    return mapStyle
  }

  return (
    <MapContainer
      center={config.center}
      zoom={config.zoom}
      minZoom={config.minZoom || 6}
      maxZoom={mapMaxZoom}
      className={`w-full h-full absolute top-0 left-0 !bg-transparent !z-10 ${className}`}
      zoomControl={config.zoomControl ?? false}
      attributionControl={config.attributionControl ?? false}
    >
      <MapController
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        reCenter={reCenter}
        selectedCity={selectedCity}
        config={config}
        onMapReady={onMapReady}
        flyToGeneration={flyToGeneration}
      />

      {fitBoundsToGeoJson && leaflet ? (
        <FitBoundsToGeoJson data={geoJsonData} leaflet={leaflet} maxZoom={mapMaxZoom} />
      ) : null}

      <GeoJSON
        key={selectedCity ? `selected-${selectedCity.value}-${normalizeForCompare(selectedCity.city)}` : 'selected-none'}
        data={geoJsonData}
        style={getStyle}
      />

      {maritimeLabelItems.map((item) => (
        <MaritimeLabelMarker
          key={item.id}
          leaflet={leaflet}
          position={item.position}
          line1={item.line1}
          line2={item.line2}
        />
      ))}

      {leaflet ? (
        <CityMarkersCluster
          clusterSpiderfyOnMaxZoom={clusterSpiderfyOnMaxZoom}
          clusterMaxRadius={clusterMaxRadius}
          clusterDisableClusteringAtZoom={clusterDisableClusteringAtZoom}
          iconCreate={clusterIconCreateFunction}
          onClusterCitySelect={handleMarkerSelect}
        >
          {cityList.flatMap((city) => {
            const nodes: ReactNode[] = []
            if (city.lat != null && city.lng != null) {
              nodes.push(
                <CustomMarker
                  key={city.value}
                  value={city.value}
                  position={[city.lat, city.lng]}
                  label={city.label}
                  city={city.city}
                  slug={city.slug}
                  clusterSlug={city.slug}
                  clusterLabel={city.label}
                  handleCitySelect={handleMarkerSelect}
                  selectedCity={selectedCity}
                  onHover={onCityHover ? () => onCityHover(city) : undefined}
                  onLeave={onCityHover ? () => onCityHover(null) : undefined}
                  {...markerProps}
                />,
              )
            }
            for (const child of city.children ?? []) {
              const childCity: CityData = {
                value: child.value,
                city: city.city,
                label: child.label,
                slug: child.slug,
                lat: child.lat,
                lng: child.lng,
                parentValue: city.value,
              }
              nodes.push(
                <CustomMarker
                  key={`${city.value}-${child.value}`}
                  value={child.value}
                  position={[child.lat, child.lng]}
                  label={child.label}
                  city={city.city}
                  slug={child.slug}
                  clusterSlug={city.slug}
                  clusterLabel={city.label}
                  handleCitySelect={(c) =>
                    handleMarkerSelect({
                      ...c,
                      parentValue: city.value,
                    })
                  }
                  selectedCity={selectedCity}
                  onHover={onCityHover ? () => onCityHover(childCity) : undefined}
                  onLeave={onCityHover ? () => onCityHover(null) : undefined}
                  {...markerProps}
                />,
              )
            }
            return nodes
          })}
        </CityMarkersCluster>
      ) : null}
    </MapContainer>
  )
}

export default InteractiveMap
