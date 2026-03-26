'use client'

import Image from 'next/image'
import React, { useMemo, useState } from 'react'

import { IWeatherAcf } from '@/interfaces/weather'

import Desc from '../desc'
import SwipperItem2 from '../swiper/swiper_deskop'
import DestinationMobileList from '../swiper/swiper_mobile'

export type DestinationItem = {
  title: string
  thumb: string
  bgDesktop: string
  bgMobile: string
  weather: string
  weatherDesc: string
}

const Layout = ({ acfData }: { acfData: IWeatherAcf }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  //data swiper, bg
  const destinationData: DestinationItem[] = useMemo(() => {
    return (acfData?.weather?.location || []).map((item) => ({
      title: item.name,
      thumb: item.acf.thumbnail,
      bgDesktop: item.acf.background_image,
      bgMobile: item.acf.background_image,
      weather: item.acf.weather,
      weatherDesc: item.acf.weather_desc,
    }))
  }, [acfData])

  const activeItem = destinationData[activeIndex] || destinationData[0]
  if (!activeItem) return null

  // data desc
  const descData = {
    temperature: activeItem?.weather || '',
    weatherText: activeItem?.weatherDesc || '',
    qrSrc: acfData?.weather?.qr_zalo || '',
    linkUrl: acfData?.weather?.link?.url || '',
    buttonText: acfData?.weather?.link?.title || '',
  }

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='relative w-[87.5rem] h-[37.1rem] xsm:w-full xsm:h-[25.875rem] rounded-[1.125rem]'>
        {/* Desktop background */}
        <Image
          src={activeItem.bgDesktop}
          alt={activeItem.title}
          fill
          priority
          className='object-cover xsm:hidden rounded-[1.125rem]'
        />

        {/* Desktop overlay */}
        <div className='absolute inset-0 xsm:hidden rounded-[1.125rem] bg-gradient-to-b from-transparent via-black/40 to-black/80' />

        {/* Mobile background */}
        <div className='hidden xsm:block absolute inset-0 px-[0.75rem]'>
          <div className='relative w-full h-[25.875rem] overflow-hidden rounded-[1rem]'>
            <Image
              src={activeItem.bgMobile}
              alt={`${activeItem.title} mobile`}
              fill
              priority
              className='object-cover'
            />

            <div
              className='absolute inset-0'
              style={{
                opacity: 0.56,
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0.20) 40.53%, rgba(0,0,0,0.55) 50.77%, #000 62.22%)',
              }}
            />
          </div>
        </div>

        <h1 className='absolute top-[2.5rem] left-[2.5rem] z-10 text-[white] pc-h2-46-s-mons font-montserrat max-w-[27rem] flex-shrink-0 xsm:s-25-mon xsm:top-[1.25rem] xsm:left-[2rem] xsm:max-w-[15rem]'>
          {acfData.weather.title}
        </h1>

        <Desc descData={descData} />

        <div className='xsm:hidden'>
          <SwipperItem2
            data={destinationData}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>

      <div className='hidden xsm:block w-full '>
        <DestinationMobileList
          data={destinationData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  )
}

export default Layout
