'use client'

import type { GeoJsonObject } from 'geojson'
import { useState } from 'react'

import exampleGeoJsonData from '@/components/shared/interactive-map/custom.geo.json'
import InteractiveMap, {
  CityData,
  MapConfig,
  MapStyle,
} from '@/components/shared/interactive-map/interactive-map'
import { LocationTerm } from '@/interfaces/combo.interface'

// Example map configuration
const mapConfig: MapConfig = {
  center: [16.2, 108.5],
  zoom: 6,
  minZoom: 5,
  /** Đủ cao để click cluster zoom vào và thấy từng điểm con; có thể hạ nếu muốn giới hạn zoom tối đa. */
  maxZoom: 18,
  zoomControl: false,
  attributionControl: false,
}

// Example custom style
const customStyle: MapStyle = {
  fillColor: '#1C599E',
  fillOpacity: 0.24,
  color: '#ffffff',
  weight: 1,
  opacity: 1,
  selectedFillOpacity: 1,
  selectedFillColor: '#27A5DA',
}

export default function Map({
  locations,
  onLocationSelect,
}: {
  locations: LocationTerm[]
  onLocationSelect?: (locationSlugs: string[]) => void
}) {
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null)
  const [zoomIn, setZoomIn] = useState(0)
  const [zoomOut, setZoomOut] = useState(0)

  const cityList: CityData[] = locations.map((location) => ({
    value: location.id.toString(),
    city: location.name,
    label: location.name,
    slug: location.slug,
    lat: parseFloat(location?.acf?.latitude || '0'),
    lng: parseFloat(location?.acf?.longitude || '0'),
    children: location.children.map((child) => ({
      value: child.id.toString(),
      city: child.name,
      label: child.name,
      slug: child.slug,
      lat: parseFloat(child?.acf?.latitude || '0'),
      lng: parseFloat(child?.acf?.longitude || '0'),
    })),
  }))

  const handleCitySelect = (city: CityData) => {
    const isSameCity = selectedCity?.value === city.value
    const nextCity = isSameCity ? null : city

    setSelectedCity(nextCity)
    onLocationSelect?.(nextCity?.slug ? [nextCity.slug] : [])
  }

  const handleZoomIn = () => {
    setZoomIn((prev) => prev + 1)
  }

  const handleZoomOut = () => {
    setZoomOut((prev) => prev + 1)
  }

  return (
    <div className='w-full h-full relative'>
      {/* Map Container */}
      <div className='w-full h-full relative'>
        <InteractiveMap
          config={mapConfig}
          style={customStyle}
          geoJsonData={exampleGeoJsonData as GeoJsonObject}
          cityList={cityList}
          selectedCity={selectedCity}
          onCitySelect={handleCitySelect}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          fitBoundsToGeoJson
          clusterSpiderfyOnMaxZoom={false}
          onMapReady={(map) => {
            console.log('Map is ready:', map)
          }}
          onCityHover={(city) => {
            console.log('City hover:', city)
          }}
        />
      </div>

      {/* Control Panel */}
      <div className='absolute bottom-5 left-5 z-20'>
        <div className='space-y-2'>
          <button
            onClick={handleZoomIn}
            className='size-[2.375rem] rounded-[0.75rem] bg-[#124681]/9 flex-center cursor-pointer'
          >
            <svg
              className='size-[1.125rem]'
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
            >
              <path
                d='M9 2.8125V15.1875'
                stroke='#10475F'
                strokeWidth='2.375'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M15.1875 9L2.8125 9'
                stroke='#10475F'
                strokeWidth='2.375'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>

          <button
            onClick={handleZoomOut}
            className='size-[2.375rem] rounded-[0.75rem] bg-[#124681]/9 flex-center cursor-pointer'
          >
            <svg
              className='size-[1.125rem]'
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
            >
              <path
                d='M2.8125 9H15.1875'
                stroke='#10475F'
                strokeWidth='2.375'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
