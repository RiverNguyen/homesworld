'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'

import ICArrowLeft from '@/components/ui/icons/ICLeft'
import ICRight from '@/components/ui/icons/ICRight'
import type { DestinationItem } from '../../Layout'

type DestinationSwiperProps = {
  data?: DestinationItem[]
  activeIndex: number
  setActiveIndex: (index: number) => void
}

export default function DestinationSwiper({
  data = [],
  activeIndex,
  setActiveIndex,
}: DestinationSwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <div className='absolute bottom-[2.5rem] right-0 z-20 w-full max-w-[36.5rem] xsm:bottom-[1rem] xsm:max-w-full xsm:px-[0.75rem] xsm:hidden'>
      <div className='absolute right-[2.5rem] top-[-0.87rem] z-50 flex gap-2 xsm:right-[0.75rem]'>
        <button
          type='button'
          onClick={() => swiperRef.current?.slidePrev()}
          className='flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-full bg-white shadow'
        >
          <ICArrowLeft className='h-[1.25rem] w-[1.25rem] text-[#10475F]' />
        </button>

        <button
          type='button'
          onClick={() => swiperRef.current?.slideNext()}
          className='flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-full bg-white shadow'
        >
          <ICRight className='h-[1.25rem] w-[1.25rem] text-[#10475F]' />
        </button>
      </div>

      <div className='pt-[3.5rem]'>
        <div className='-mt-[0.88rem] pt-[0.88rem] overflow-hidden'>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            slidesPerView='auto'
            spaceBetween={12}
            className='!overflow-visible'
          >
            {data.map((item, index) => {
              const isActive = activeIndex === index

              return (
                <SwiperSlide
                  key={`${item.title}-${index}`}
                  className='!w-auto'
                >
                  <div
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      group relative cursor-pointer overflow-hidden
                      w-[7.25rem] h-[6.875rem]
                      xsm:w-[6.8125rem] xsm:h-[6.25rem]
                      rounded-[0.75rem]
                      border border-white
                      transition-all duration-300
                      shadow-[0_46px_18px_rgba(0,0,0,0.03),_0_26px_16px_rgba(0,0,0,0.1),_0_12px_12px_rgba(0,0,0,0.17),_0_3px_6px_rgba(0,0,0,0.2)]
                      ${isActive ? '-translate-y-[0.88rem] border-2' : 'hover:-translate-y-[0.88rem] hover:border-2'}
                    `}
                  >
                    <Image
                      src={item.thumb}
                      alt={item.title}
                      fill
                      className='object-cover'
                      sizes='(max-width: 640px) 6.8125rem, 7.25rem'
                    />

                    <div
                      className={`
                        absolute inset-0 transition-opacity duration-300
                        bg-[linear-gradient(186deg,rgba(0,0,0,0.18)_4.51%,rgba(0,0,0,0.24)_58.09%,rgba(0,0,0,0.60)_79.91%)]
                        ${isActive ? 'opacity-0' : 'group-hover:opacity-0'}
                      `}
                    />

                    <span className='absolute bottom-[0.44rem] left-1/2 -translate-x-1/2 text-center whitespace-nowrap text-white pc-14-14-r'>
                      {item.title}
                    </span>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
