'use client'

import { format, startOfDay } from 'date-fns'
import { useState } from 'react'
import { type DateRange } from 'react-day-picker'

import { type LocationOption } from '@/app/_components/search/components/location-popover'
import { type MobileRowKey } from '@/app/_components/search/components/search-constants'
import SearchDesktop from '@/app/_components/search/components/search-desktop'
import SearchDrawers from '@/app/_components/search/components/search-drawers'
import SearchMobile from '@/app/_components/search/components/search-mobile'
import ServiceTabs from '@/app/_components/search/components/service-tabs'
import { ITaxonomies } from '@/interfaces/taxonomies.interface'

const FilterSearch = ({
  taxonomies,
  locations,
}: {
  taxonomies: ITaxonomies[]
  locations: ITaxonomies[]
}) => {
  const [activeId, setActiveId] = useState<string | null>(taxonomies?.[0]?.id ?? null)
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [confirmedStartDate, setConfirmedStartDate] = useState<Date | undefined>(undefined)
  const [confirmedEndDate, setConfirmedEndDate] = useState<Date | undefined>(undefined)
  const [dateDrawerOpen, setDateDrawerOpen] = useState(false)
  const [locationDrawerOpen, setLocationDrawerOpen] = useState(false)
  const [numberDrawerOpen, setNumberDrawerOpen] = useState(false)
  const [rooms, setRooms] = useState(1)
  const [adults, setAdults] = useState(1)
  const [confirmedRooms, setConfirmedRooms] = useState(1)
  const [confirmedAdults, setConfirmedAdults] = useState(1)
  const [hasConfirmedNumber, setHasConfirmedNumber] = useState(false)
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [confirmedLocations, setConfirmedLocations] = useState<string[]>([])

  const today = startOfDay(new Date())

  const handleStartDateChange = (d?: Date) => {
    setStartDate(d)
    setEndDate((prev) => {
      if (d && prev && prev < d) return undefined
      return prev
    })
  }

  const locationOptions: LocationOption[] =
    locations?.map((item) => ({ value: item.slug, label: item.name })) ?? []
  const hasSelectedDateRange = !!(startDate && endDate)
  const hasConfirmedDateRange = !!(confirmedStartDate && confirmedEndDate)
  const selectedDateRange: DateRange | undefined = startDate
    ? { from: startDate, to: endDate }
    : undefined
  const formattedStartDate = startDate ? format(startDate, 'dd/MM/yyyy') : '--/--/----'
  const formattedEndDate = endDate ? format(endDate, 'dd/MM/yyyy') : '--/--/----'
  const mobileSelectedDateText = hasConfirmedDateRange
    ? `${format(confirmedStartDate, 'dd/MM/yyyy')} - ${format(confirmedEndDate, 'dd/MM/yyyy')}`
    : null
  const mobileSelectedLocationText = confirmedLocations.length
    ? locationOptions
        .filter((opt) => confirmedLocations.includes(opt.value))
        .map((opt) => opt.label)
        .join(', ')
    : null
  const mobileSelectedNumberText = hasConfirmedNumber
    ? `${confirmedAdults} người lớn, ${confirmedRooms} phòng`
    : null
  const mobileRowLabels: Record<MobileRowKey, string> = {
    date: mobileSelectedDateText ?? 'Ngày nhận phòng và trả phòng',
    location: mobileSelectedLocationText ?? 'Chọn điểm đến',
    number: mobileSelectedNumberText ?? 'Chọn số người, phòng',
  }

  const toggleLocation = (value: string) => {
    setSelectedLocations((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  const openDrawer = (key: MobileRowKey) => {
    if (key === 'date') setDateDrawerOpen(true)
    else if (key === 'location') setLocationDrawerOpen(true)
    else setNumberDrawerOpen(true)
  }

  return (
    <section className='translate-y-[-6.1875rem] xsm:translate-y-[-7.75rem] relative z-[11] max-w-[87.5rem] mx-auto'>
      <ServiceTabs
        taxonomies={taxonomies}
        activeId={activeId}
        onChange={setActiveId}
      />
      <SearchDesktop
        startDate={startDate}
        endDate={endDate}
        today={today}
        locations={locations}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={setEndDate}
      />
      <SearchMobile
        rowLabels={mobileRowLabels}
        onOpenDrawer={openDrawer}
      />
      <SearchDrawers
        dateDrawerOpen={dateDrawerOpen}
        locationDrawerOpen={locationDrawerOpen}
        numberDrawerOpen={numberDrawerOpen}
        setDateDrawerOpen={setDateDrawerOpen}
        setLocationDrawerOpen={setLocationDrawerOpen}
        setNumberDrawerOpen={setNumberDrawerOpen}
        today={today}
        selectedDateRange={selectedDateRange}
        startDate={startDate}
        endDate={endDate}
        formattedStartDate={formattedStartDate}
        formattedEndDate={formattedEndDate}
        hasSelectedDateRange={hasSelectedDateRange}
        locationOptions={locationOptions}
        selectedLocations={selectedLocations}
        rooms={rooms}
        adults={adults}
        toggleLocation={toggleLocation}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setConfirmedStartDate={setConfirmedStartDate}
        setConfirmedEndDate={setConfirmedEndDate}
        setSelectedLocations={setSelectedLocations}
        setConfirmedLocations={setConfirmedLocations}
        setRooms={setRooms}
        setAdults={setAdults}
        setConfirmedRooms={setConfirmedRooms}
        setConfirmedAdults={setConfirmedAdults}
        setHasConfirmedNumber={setHasConfirmedNumber}
      />
    </section>
  )
}

export default FilterSearch
