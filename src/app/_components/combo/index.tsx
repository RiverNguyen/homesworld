'use client'

import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import useSWR from 'swr'

import List from '@/app/_components/combo/components/list'
import ListMobile, { ListMobileSkeleton } from '@/app/_components/combo/components/list-mobile'
import ComboMap from '@/app/_components/combo/components/map'
import { type LocationOption } from '@/app/_components/search/components/location-popover'
import ICLocation from '@/components/icons/ICLocation'
import DrawerProvider from '@/components/providers/DrawerProvider'
import { Checkbox } from '@/components/ui/checkbox'
import { Skeleton } from '@/components/ui/skeleton'
import { ApiResponse, ComboItem, LocationTerm } from '@/interfaces/combo.interface'
import { fetcher } from '@/lib/swr'
import { cn } from '@/lib/utils'

const comboTabs = ['Combo du lịch', 'Khách sạn'] as const

const ComboListSkeleton = () => (
  <div className='flex gap-[0.625rem] w-[50.44rem] overflow-hidden pr-[1.125rem]'>
    {Array.from({ length: 3 }).map((_, index) => (
      <div
        key={index}
        className='w-[19rem] shrink-0'
      >
        <Skeleton className='h-[18.9205rem] rounded-[1.125rem] bg-[#E6EEF2]' />
        <div className='mt-4 space-y-3'>
          <Skeleton className='h-6 w-4/5 rounded-full bg-[#E6EEF2]' />
          <Skeleton className='h-4 w-3/5 rounded-full bg-[#E6EEF2]' />
          <Skeleton className='h-4 w-2/5 rounded-full bg-[#E6EEF2]' />
          <Skeleton className='h-5 w-1/2 rounded-full bg-[#E6EEF2]' />
        </div>
      </div>
    ))}
  </div>
)

const ComboEmptyState = ({ onReset, className }: { onReset: () => void; className?: string }) => (
  <div
    className={cn(
      'w-[50.44rem] min-h-[29rem] rounded-[1.125rem] flex flex-col items-center justify-center text-center px-8',
      className,
    )}
  >
    <div className='mt-5 space-y-2'>
      <h3 className='pc-2x-20-m text-[#10475F]'>Chưa có combo phù hợp</h3>
      <p className='pc-16-16-r text-[#10475F]/70 max-w-[28rem]'>
        Khu vực bạn chọn hiện chưa có combo nào. Hãy thử chọn địa điểm khác trên bản đồ hoặc bỏ bộ
        lọc để xem toàn bộ combo.
      </p>
      <button
        type='button'
        onClick={onReset}
        className='mt-6 h-[2.75rem] px-5 rounded-[6.25rem] bg-[#27AAE1] text-white pc-14-14-r-button cursor-pointer transition-opacity hover:opacity-90'
      >
        Xóa lọc
      </button>
    </div>
  </div>
)

const Combo = ({
  data,
  comboData,
  locations,
}: {
  data: { title: string; desc: string }
  comboData: ComboItem[]
  locations: LocationTerm[]
}) => {
  const [activeTab, setActiveTab] = useState<(typeof comboTabs)[number]>('Combo du lịch')
  const [isComboListAtEnd, setIsComboListAtEnd] = useState(false)
  const [selectedLocationSlugs, setSelectedLocationSlugs] = useState<string[]>([])
  const [locationDrawerOpen, setLocationDrawerOpen] = useState(false)

  const locationOptions: LocationOption[] = useMemo(
    () => locations.map((loc) => ({ value: loc.slug, label: loc.name })),
    [locations],
  )

  const locationSummary = useMemo(() => {
    if (selectedLocationSlugs.length === 0) return null
    const labelByValue = new Map(locationOptions.map((o) => [o.value, o.label]))
    return selectedLocationSlugs.map((s) => labelByValue.get(s) ?? s).join(', ')
  }, [selectedLocationSlugs, locationOptions])

  const toggleLocation = (slug: string) => {
    setSelectedLocationSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    )
  }

  const comboFilterKey = useMemo(() => {
    if (!selectedLocationSlugs.length) return null

    const query = new URLSearchParams({
      acf: 'true',
      limit: '6',
      paged: '1',
      orderby: 'date',
      order: 'DESC',
      tax: 'location',
      location: selectedLocationSlugs.join(','),
    })

    return `api/v1/get-all/combo?${query.toString()}`
  }, [selectedLocationSlugs])

  const { data: filteredComboRes, isLoading } = useSWR<ApiResponse>(comboFilterKey, fetcher, {
    keepPreviousData: true,
    revalidateOnFocus: false,
  })

  const displayedComboData = filteredComboRes?.data ?? comboData
  const isFiltering = selectedLocationSlugs.length > 0
  const shouldShowSkeleton = isFiltering && isLoading
  const shouldShowEmptyState = isFiltering && !isLoading && displayedComboData.length === 0

  return (
    <section className='max-w-[93rem] relative mx-auto flex items-center rounded-[1.125rem] bg-white xsm:translate-y-[-3rem]'>
      <div className='p-[1.5rem] xsm:hidden '>
        <div className='w-[39.5625rem] h-[39.5625rem] bg-[#F8F8F8] rounded-[1rem]'>
          <ComboMap
            locations={locations}
            onLocationSelect={setSelectedLocationSlugs}
          />
        </div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-between xsm:flex-col xsm:justify-center items-center max-w-[47.8125rem] xsm:mb-4 mb-[1.875rem] xsm:p-[0.625rem]'>
          <div className='space-y-3'>
            <h2 className='text-[#10475F] font-montserrat text-[2.25rem] font-semibold leading-[1.3] tracking-[-0.125rem] xsm:text-[1.30208rem] xsm:font-semibold xsm:leading-[1.2] xsm:tracking-[-0.07813rem] xsm:text-center'>
              {data?.title}
            </h2>
            <p className='pc-16-16-r text-[#10475F]/80 text-edge-[cap_alphabetic] text-trim-trim-both xsm:mb-14-r xsm:mb-[0.83rem]'>
              {data?.desc}
            </p>
          </div>
          <div className='hidden xsm:block w-full shrink-0 mb-[0.83rem]'>
            <button
              type='button'
              onClick={() => setLocationDrawerOpen(true)}
              className='flex w-full items-center justify-between rounded-[5.20833rem] border border-[#10475F33] bg-white px-[0.72917rem] h-[1.875rem] text-left'
            >
              <span className={cn('text-[0.67708rem] leading-[1.5] truncate text-[#10475F]')}>
                {locationSummary ?? 'Chọn địa điểm'}
              </span>
              <ICLocation className='size-[0.67708rem] shrink-0 text-[#10475F]' />
            </button>
            <DrawerProvider
              open={locationDrawerOpen}
              setOpen={setLocationDrawerOpen}
              showDrawerDrag
            >
              <div className='relative'>
                <div className='h-[3.44rem] bg-[#27AAE1] px-3 flex items-center justify-between'>
                  <p className='mb-16-m text-trim-trim-both text-edge-[cap_alphabetic] text-white'>
                    Chọn điểm đến
                  </p>
                  <button
                    type='button'
                    onClick={() => setSelectedLocationSlugs([])}
                    disabled={selectedLocationSlugs.length === 0}
                    className='h-[2.0625rem] px-[0.6875rem] flex-center bg-white rounded-[2.5625rem] disabled:opacity-60 disabled:cursor-not-allowed'
                  >
                    <p className='mb-14-r text-[#EF2020]'>Xoá lựa chọn</p>
                    <ComboLocationDeleteIcon />
                  </button>
                </div>
                <div className='flex flex-col max-h-[18rem] overflow-y-auto bg-white'>
                  {locationOptions.map((opt) => (
                    <label
                      key={opt.value}
                      className='flex items-center px-[1.25rem] py-[0.875rem] space-x-[0.625rem] cursor-pointer'
                    >
                      <Checkbox
                        checked={selectedLocationSlugs.includes(opt.value)}
                        onCheckedChange={() => toggleLocation(opt.value)}
                        className='size-[1.125rem]'
                      />
                      <span className='text-[1.125rem] text-[#10475F] leading-[1.3] text-trim-trim-both text-edge-[cap_alphabetic]'>
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
                <div className='sticky bottom-0 left-0 w-full h-[3.625rem] bg-white shadow-[0_-3px_8px_0_rgba(0,0,0,0.06)] pt-4 px-3 pb-[0.375rem] flex items-center justify-between'>
                  <button
                    type='button'
                    onClick={() => setLocationDrawerOpen(false)}
                    className='w-full h-[2.25rem] rounded-[6.25rem] bg-[#27AAE1] text-white text-[0.8125rem] leading-[1.5] flex-center'
                  >
                    Tiếp tục
                  </button>
                </div>
              </div>
            </DrawerProvider>
          </div>
          <div className='h-[3rem] xsm:h-[2.29rem] xsm:w-full flex-center p-1 rounded-[6.25rem] bg-[#E6E6E6]/60'>
            {comboTabs.map((tab) => {
              const isActive = activeTab === tab

              return (
                <button
                  key={tab}
                  type='button'
                  onClick={() => setActiveTab(tab)}
                  className={`relative h-[2.5rem] xsm:h-[1.875rem] px-4 xsm:flex-1 rounded-[6.25rem] xsm:text-[0.67708rem] pc-14-14-r-button cursor-pointer text-trim-trim-both text-edge-[cap_alphabetic] transition-colors ${isActive ? 'text-white' : 'text-[#10475F]'}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId='combo-active-pill'
                      className='absolute inset-0 rounded-[6.25rem] bg-[#27AAE1]'
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className='relative z-[1]'>{tab}</span>
                </button>
              )
            })}
          </div>
        </div>
        <div className='xsm:hidden'>
          {shouldShowSkeleton ? (
            <ComboListSkeleton />
          ) : shouldShowEmptyState ? (
            <ComboEmptyState onReset={() => setSelectedLocationSlugs([])} />
          ) : (
            <List
              onHorizontalScrollEndChange={setIsComboListAtEnd}
              data={displayedComboData}
            />
          )}
        </div>
        <div className='hidden xsm:block w-full'>
          {shouldShowSkeleton ? (
            <ListMobileSkeleton />
          ) : shouldShowEmptyState ? (
            <ComboEmptyState
              onReset={() => setSelectedLocationSlugs([])}
              className='w-full min-h-[22rem] max-w-full'
            />
          ) : (
            <ListMobile data={displayedComboData} />
          )}
        </div>
      </div>
      <div
        className={cn(
          'z-[10] pointer-events-none h-full w-[8.25rem] absolute right-0 top-0 transition-opacity duration-300 xsm:hidden',
          (isComboListAtEnd || shouldShowSkeleton || shouldShowEmptyState) && 'opacity-0',
        )}
        style={{
          background:
            'linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.80) 15.01%, rgba(255, 255, 255, 0.31) 35.54%, rgba(255, 255, 255, 0.00) 69.61%)',
        }}
        aria-hidden={isComboListAtEnd}
      />
    </section>
  )
}

const ComboLocationDeleteIcon = () => (
  <svg
    className='size-[1.125rem] ml-1'
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
  >
    <path
      d='M15.75 4.48499C13.2525 4.23749 10.74 4.10999 8.235 4.10999C6.75 4.10999 5.265 4.18499 3.78 4.33499L2.25 4.48499'
      stroke='#EF2020'
      strokeWidth='1.35'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275'
      stroke='#EF2020'
      strokeWidth='1.35'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.1375 6.85498L13.65 14.4075C13.5675 15.585 13.5 16.5 11.4075 16.5H6.59255C4.50005 16.5 4.43255 15.585 4.35005 14.4075L3.86255 6.85498'
      stroke='#EF2020'
      strokeWidth='1.35'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.74756 12.375H10.2451'
      stroke='#EF2020'
      strokeWidth='1.35'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.125 9.375H10.875'
      stroke='#EF2020'
      strokeWidth='1.35'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default Combo
