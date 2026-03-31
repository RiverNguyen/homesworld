'use client'

import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import useSWR from 'swr'

import List from '@/app/_components/combo/components/list'
import Map from '@/app/_components/combo/components/map'
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

const ComboEmptyState = ({ onReset }: { onReset: () => void }) => (
  <div className='w-[50.44rem] min-h-[29rem] rounded-[1.125rem] flex flex-col items-center justify-center text-center px-8'>
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
    <section className='max-w-[93rem] relative mx-auto flex items-center rounded-[1.125rem] bg-white'>
      <div className='p-[1.5rem]'>
        <div className='w-[39.5625rem] h-[39.5625rem] bg-[#F8F8F8] rounded-[1rem]'>
          <Map
            locations={locations}
            onLocationSelect={setSelectedLocationSlugs}
          />
        </div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-between items-center max-w-[47.8125rem] mb-[1.875rem]'>
          <div className='space-y-3'>
            <h2 className='text-[#10475F] font-montserrat text-[2.25rem] font-semibold leading-[1.3] tracking-[-0.125rem]'>
              {data?.title}
            </h2>
            <p className='pc-16-16-r text-[#10475F]/80 text-edge-[cap_alphabetic] text-trim-trim-both'>
              {data?.desc}
            </p>
          </div>
          <div className='h-[3rem] flex-center p-1 rounded-[6.25rem] bg-[#E6E6E6]/60'>
            {comboTabs.map((tab) => {
              const isActive = activeTab === tab

              return (
                <button
                  key={tab}
                  type='button'
                  onClick={() => setActiveTab(tab)}
                  className={`relative h-[2.5rem] px-4 rounded-[6.25rem] pc-14-14-r-button cursor-pointer text-trim-trim-both text-edge-[cap_alphabetic] transition-colors ${isActive ? 'text-white' : 'text-[#10475F]'}`}
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
      <div
        className={cn(
          'z-[10] pointer-events-none h-full w-[8.25rem] absolute right-0 top-0 transition-opacity duration-300',
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

export default Combo
