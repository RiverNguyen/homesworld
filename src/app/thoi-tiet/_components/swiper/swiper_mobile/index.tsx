'use client'

import Image from 'next/image'
import type { DestinationItem } from '../../Layout'

type DestinationMobileListProps = {
  data: DestinationItem[]
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

export default function DestinationMobileList({
  data,
  activeIndex,
  setActiveIndex,
}: DestinationMobileListProps) {
  return (
    <div className='hidden w-full xsm:block ml-[0.75rem]'>
      <div
        className='
          flex gap-[0.375rem]
          overflow-x-auto overflow-y-visible
          pl-[0.75rem] pr-[0.75rem] pt-[0.5rem] pb-[1rem]
          scrollbar-none
          snap-x snap-mandatory
          touch-pan-x
        '
      >
        {data.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={`${item.title}-${index}`}
              type='button'
              onClick={() => setActiveIndex(index)}
              className='snap-start shrink-0 text-left'
            >
              <div
                className={`
                  relative
                  w-[4.375rem] h-[4.125rem]
                  rounded-[0.75rem]
                  transition-all duration-200
                  ${
                    isActive
                      ? 'shadow-[0_0_0_0.125rem_rgba(255,255,255,0.9),0_0_0.5rem_rgba(0,0,0,0.2),0_0.25rem_0.75rem_rgba(0,0,0,0.18)]'
                      : 'shadow-[0_0_0.5rem_rgba(0,0,0,0.2),0_0.25rem_0.75rem_rgba(0,0,0,0.18)]'
                  }
                `}
              >
                <div
                  className='
                    relative h-full w-full
                    overflow-hidden rounded-[0.75rem]
                    border border-white
                  '
                >
                  <Image
                    src={item.thumb}
                    alt={item.title}
                    fill
                    className='object-cover'
                    sizes='4.375rem'
                  />

                  <div className='absolute inset-0 bg-[linear-gradient(186deg,rgba(0,0,0,0.18)_4.51%,rgba(0,0,0,0.24)_58.09%,rgba(0,0,0,0.60)_79.91%)]' />

                  <span className='absolute bottom-[0.31rem] left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.625rem] text-white'>
                    {item.title}
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
