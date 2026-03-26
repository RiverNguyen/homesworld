'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import type { Swiper as SwiperType } from 'swiper'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'

import type { DestinationItem } from '@/app/_components/weather/_components/Layout'

import ICArrowLeft from '@/components/ui/icons/ICLeft'
import ICRight from '@/components/ui/icons/ICRight'

type DestinationSwiperProps = {
  data?: DestinationItem[]
  activeIndex: number
  setActiveIndex: (index: number) => void
  onPrev: () => void
  onNext: () => void
}

export default function SwipperItem2({
  data = [],
  activeIndex,
  setActiveIndex,
  onPrev,
  onNext,
}: DestinationSwiperProps) {
  const thumbsSwiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    if (!thumbsSwiperRef.current) return

    thumbsSwiperRef.current.slideTo(activeIndex)
  }, [activeIndex])

  const handleClickThumb = (index: number) => {
    setActiveIndex(index)
    thumbsSwiperRef.current?.slideTo(index)
  }

  return (
    <div className='absolute bottom-[2.5rem] right-0 z-10 w-full max-w-[36.5rem] xsm:bottom-[1rem] xsm:max-w-full xsm:px-[0.75rem] xsm:hidden'>
      <div className='absolute right-[2.5rem] top-[-0.875rem] z-20 flex xsm:right-[0.75rem]'>
        <button
          type='button'
          onClick={onPrev}
          className='mr-[0.625rem] flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-full bg-white shadow cursor-pointer'
          aria-label='Previous slide'
        >
          <ICArrowLeft className='h-[1.25rem] w-[1.25rem] cursor-pointer text-[#10475F]' />
        </button>

        <button
          type='button'
          onClick={onNext}
          className='flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-full bg-white shadow cursor-pointer'
          aria-label='Next slide'
        >
          <ICRight className='h-[1.25rem] w-[1.25rem] cursor-pointer text-[#10475F]' />
        </button>
      </div>

      <div className='pt-[3.5rem]'>
        <div className='overflow-hidden pr-[1rem] pt-[0.875rem]'>
          <Swiper
            modules={[FreeMode]}
            onSwiper={(swiper) => {
              thumbsSwiperRef.current = swiper
            }}
            slidesPerView='auto'
            spaceBetween={12}
            freeMode
            watchSlidesProgress
            speed={700}
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
                    onClick={() => handleClickThumb(index)}
                    className={`group relative h-[6.875rem] w-[7.25rem] cursor-pointer overflow-hidden rounded-[0.75rem] transition-all duration-500 ease-out hover:-translate-y-[0.5rem] ${
                      isActive ? 'border-[0.125rem] border-white' : 'border border-white/30'
                    }`}
                    aria-label={`Select ${item.title}`}
                  >
                    <Image
                      src={item.thumb}
                      alt={item.title}
                      fill
                      className='object-cover'
                      sizes='7.25rem'
                    />

                    <div
                      className={`absolute left-0 top-0 h-full w-full bg-[linear-gradient(186deg,rgba(0,0,0,0.18)_4.51%,rgba(0,0,0,0.24)_58.09%,rgba(0,0,0,0.60)_79.91%)] transition-opacity duration-300 ${
                        isActive ? 'opacity-0' : 'group-hover:opacity-0'
                      }`}
                    />

                    <span className='absolute bottom-[0.44rem] left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-white pc-14-14-r'>
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
