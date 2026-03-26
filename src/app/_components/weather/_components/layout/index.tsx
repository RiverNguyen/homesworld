'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'

import type { IWeatherAcf } from '@/interfaces/weather'

import Desc from '@/app/_components/weather/_components/desc'
import SwipperDesktop from '@/app/_components/weather/_components/swiper/desktop'
import SwipperMobile from '@/app/_components/weather/_components/swiper/mobile'

export type DestinationItem = {
  title: string
  thumb: string
  bgDesktop: string
  bgMobile: string
  weather: string
  weatherDesc: string
}

type LayoutProps = {
  acfData: IWeatherAcf
}

const Layout = ({ acfData }: LayoutProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const mainSwiperRef = useRef<SwiperType | null>(null)
  const bgRef = useRef<HTMLDivElement | null>(null)
  const destinationData: DestinationItem[] =
    acfData?.weather?.location?.map((item) => ({
      title: item?.name || '',
      thumb: item?.acf?.thumbnail || '',
      bgDesktop: item?.acf?.background_image || '',
      bgMobile: item?.acf?.background_image || '',
      weather: item?.acf?.weather || '',
      weatherDesc: item?.acf?.weather_desc || '',
    })) || []

  const activeItem = destinationData[activeIndex] || destinationData[0]

  useEffect(() => {
    if (!mainSwiperRef.current) return
    if (mainSwiperRef.current.activeIndex === activeIndex) return

    mainSwiperRef.current.slideTo(activeIndex)
  }, [activeIndex])

  if (!activeItem) return null

  const descData = {
    temperature: activeItem?.weather || '',
    weatherText: activeItem?.weatherDesc || '',
    qrSrc: acfData?.weather?.qr_zalo || '',
    linkUrl: acfData?.weather?.link?.url || '',
    buttonText: acfData?.weather?.link?.title || '',
  }

  const handlePrev = () => {
    if (!destinationData.length) return
    mainSwiperRef.current?.slidePrev()
  }

  const handleNext = () => {
    if (!destinationData.length) return
    mainSwiperRef.current?.slideNext()
  }

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='relative h-[37.1rem] w-[87.5rem] rounded-[1.125rem] xsm:h-[25.875rem] xsm:w-full'>
        {/* Desktop background swiper */}
        <div className='absolute left-0 top-0 h-full w-full overflow-hidden rounded-[1.125rem] xsm:hidden'>
          <Swiper
            modules={[EffectFade]}
            effect='fade'
            fadeEffect={{ crossFade: true }}
            onSwiper={(swiper) => {
              mainSwiperRef.current = swiper
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper?.activeIndex ?? 0)
            }}
            slidesPerView={1}
            speed={700}
            allowTouchMove
            className='h-full w-full rounded-[1.125rem]'
          >
            {Array.isArray(destinationData) &&
              destinationData
                ?.filter((item) => item && typeof item === 'object' && item?.bgDesktop)
                ?.map((item, index) => {
                  const title = item?.title || `Destination ${index + 1}`

                  return (
                    <SwiperSlide key={`${title}-${index}`}>
                      <div className='relative h-[37.1rem] w-full overflow-hidden rounded-[1.125rem]'>
                        <Image
                          src={item?.bgDesktop}
                          alt={title}
                          fill
                          priority={index === 0}
                          className='rounded-[1.125rem] object-cover'
                          sizes='87.5rem'
                        />
                      </div>
                    </SwiperSlide>
                  )
                })}
          </Swiper>

          <div className='pointer-events-none absolute left-0 top-0 z-10 h-full w-full rounded-[1.125rem] bg-[linear-gradient(180deg,rgba(0,0,0,0)_54.4%,rgba(0,0,0,0.548)_67%,rgba(0,0,0,1)_79.99%)]' />
        </div>

        {/* Desktop overlay */}
        <div className='absolute left-0 top-0 h-full w-full rounded-[1.125rem] bg-gradient-to-b from-transparent via-black/40 to-black/80 xsm:hidden' />

        {/* Mobile background */}
        <div className='absolute left-0 top-0 hidden h-full w-full px-[0.75rem] xsm:block'>
          <div className='relative h-[25.875rem] w-full overflow-hidden rounded-[1rem]'>
            <Image
              src={activeItem?.bgMobile}
              alt={`${activeItem?.title} mobile`}
              fill
              priority
              className='object-cover'
              sizes='100vw'
            />

            <div
              className='absolute left-0 top-0 h-full w-full'
              style={{
                opacity: 0.56,
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0.20) 40.53%, rgba(0,0,0,0.55) 50.77%, #000 62.22%)',
              }}
            />
          </div>
        </div>

        <h1 className='absolute left-[2.5rem] top-[2.5rem] z-10 max-w-[27rem] flex-shrink-0 font-montserrat text-white pc-h2-46-s-mons xsm:left-[2rem] xsm:top-[1.25rem] xsm:max-w-[15rem] xsm:s-25-mon'>
          {acfData?.weather?.title}
        </h1>

        <Desc descData={descData} />

        <div className='xsm:hidden'>
          <SwipperDesktop
            data={destinationData}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
      </div>

      <div className='hidden w-full xsm:block'>
        <SwipperMobile
          data={destinationData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  )
}

export default Layout
