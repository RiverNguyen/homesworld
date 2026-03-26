'use client'

import Image from 'next/image'
import { useRef, useCallback, useMemo } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

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

  const slideToIndex = useCallback(
    (newIndex: number) => {
      setActiveIndex(newIndex)
      swiperRef.current?.slideTo(newIndex)
    },
    [setActiveIndex],
  )

  const handlePrev = useCallback(() => {
    if (!data.length) return
    const newIndex = Math.max(activeIndex - 1, 0)
    slideToIndex(newIndex)
  }, [activeIndex, data.length, slideToIndex])

  const handleNext = useCallback(() => {
    if (!data.length) return
    const newIndex = Math.min(activeIndex + 1, data.length - 1)
    slideToIndex(newIndex)
  }, [activeIndex, data.length, slideToIndex])

  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper
  }, [])

  return (
    <div className='absolute bottom-[2.5rem] right-0 z-20 w-full max-w-[36.5rem] xsm:bottom-[1rem] xsm:max-w-full xsm:px-[0.75rem] xsm:hidden'>
      <div className='absolute right-[2.5rem] top-[-0.87rem] z-50 flex   xsm:right-[0.75rem]'>
        <button
          type='button'
          onClick={handlePrev}
          className='flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-full bg-white shadow mr-[0.62rem]'
          aria-label='Previous slide'
        >
          <ICArrowLeft className='h-[1.25rem] w-[1.25rem] text-[#10475F] cursor-pointer' />
        </button>

        <button
          type='button'
          onClick={handleNext}
          className='flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-full bg-white shadow'
          aria-label='Next slide'
        >
          <ICRight className='h-[1.25rem] w-[1.25rem] text-[#10475F] cursor-pointer' />
        </button>
      </div>

      <div className='pt-[3.5rem]'>
        <div className='-mt-[0.88rem] pt-[0.88rem] pr-[1rem] overflow-hidden'>
          <Swiper
            onSwiper={handleSwiper}
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
                  <button
                    type='button'
                    onClick={() => slideToIndex(index)}
                    className={`group relative overflow-hidden cursor-pointer rounded-[0.75rem] transition-all duration-300 w-[7.25rem] h-[6.875rem] hover:-translate-y-[0.88rem] ${
                      isActive ? 'border-2 border-white' : 'border border-white/30'
                    }`}
                    aria-label={`Select ${item.title}`}
                  >
                    <Image
                      src={item.thumb}
                      alt={item.title}
                      fill
                      className='object-cover '
                      sizes='(max-width: 640px) 6.8125rem, 7.25rem'
                    />

                    <div
                      className={`absolute inset-0 transition-opacity duration-300 bg-[linear-gradient(186deg,rgba(0,0,0,0.18)_4.51%,rgba(0,0,0,0.24)_58.09%,rgba(0,0,0,0.60)_79.91%)] ${
                        isActive ? 'opacity-0' : 'group-hover:opacity-0'
                      }`}
                    />

                    <span className='absolute bottom-[0.44rem] left-1/2 -translate-x-1/2 text-center whitespace-nowrap text-white pc-14-14-r'>
                      {item.title}
                    </span>
                  </button>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
