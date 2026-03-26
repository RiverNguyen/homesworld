'use client'

import Image from 'next/image'

import type { DestinationItem } from '@/app/_components/weather/_components/layout'
import '@/app/_components/weather/_components/swiper/mobile/index.css'

type DestinationMobileListProps = {
  data: DestinationItem[]
  activeIndex: number
  setActiveIndex: (index: number) => void
}

export default function DestinationMobileList({
  data,
  activeIndex,
  setActiveIndex,
}: DestinationMobileListProps) {
  const handleSelectItem = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className='hidden w-full xsm:block'>
      <div
        className='
          scrollbar-none
          flex
          overflow-x-auto overflow-y-visible
          snap-x snap-mandatory
          touch-pan-x
          scrollbar-hide ml-[0.33rem]
           pt-[0.5rem] pb-[2rem]
        '
      >
        {Array.isArray(data) && data?.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={`${item.title}-${index}`}
              type='button'
              onClick={() => handleSelectItem(index)}
              className='snap-start shrink-0 text-left pl-[0.38rem]'
            >
              <div
                className={`
                  relative box-border h-[4.125rem] w-[4.375rem] overflow-hidden rounded-[0.75rem]
                  transition-all duration-200 
                  shadow-[0_72px_20px_rgba(0,0,0,0),_0_46px_18px_rgba(0,0,0,0.03),_0_26px_16px_rgba(0,0,0,0.10),_0_12px_12px_rgba(0,0,0,0.17),_0_3px_6px_rgba(0,0,0,0.20)]
                  ${isActive ? 'border-2 border-white' : 'border border-white/30'}
                `}
              >
                <Image
                  src={item.thumb}
                  alt={item.title}
                  fill
                  className='object-cover '
                  sizes='4.375rem '
                />

                <div
                  className={`
                    absolute inset-0 bg-[linear-gradient(186deg,rgba(0,0,0,0.18)_4.51%,rgba(0,0,0,0.24)_58.09%,rgba(0,0,0,0.60)_79.91%)]
                    transition-opacity duration-200
                    ${isActive ? 'opacity-0' : 'opacity-100'}
                  `}
                />

                <span className='absolute bottom-[0.31rem] left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.625rem] text-white'>
                  {item.title}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
