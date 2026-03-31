'use client'

import { FC, useMemo } from 'react'
import { Marker } from 'react-leaflet'

import { createMarkerDivIcon } from './create-marker-div-icon'
import { CityData } from './interactive-map'

// Types
export interface DefaultMarkerProps {
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
}

const DefaultMarker: FC<DefaultMarkerProps> = ({
  value,
  position,
  label,
  city,
  slug,
  clusterSlug,
  clusterLabel,
  handleCitySelect,
  onHover,
  onLeave,
}) => {
  const icon = useMemo(() => createMarkerDivIcon(label), [label])

  return (
    <Marker
      position={position}
      icon={icon}
      title={clusterLabel}
      alt={clusterSlug || slug || city}
      eventHandlers={{
        click: () =>
          handleCitySelect({
            value,
            city,
            slug,
            label,
            lat: position[0],
            lng: position[1],
          }),
        mouseover: onHover,
        mouseout: onLeave,
      }}
    />
  )
}

export default DefaultMarker
