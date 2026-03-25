'use client'

import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import Desc from '../desc'
import SwipperItem2 from '../swiper/swiper_deskop'
import DestinationMobileList from '../swiper/swiper_mobile'

export type DestinationItem = {
  title: string
  thumb: string
  bgDesktop: string
  bgMobile: string
}

const destinationData: DestinationItem[] = [
  {
    title: 'Quan Lạn',
    thumb: '/thoi-tiet/d-item1.webp',
    bgDesktop: '/thoi-tiet/background.webp',
    bgMobile: '/thoi-tiet/background_mobile.webp',
  },
  {
    title: 'Hà Giang',
    thumb: '/thoi-tiet/d-item2.webp',
    bgDesktop: '/thoi-tiet/Dhagiang.webp',
    bgMobile: '/thoi-tiet/Dhagiang.webp',
  },
  {
    title: 'Vĩnh Hy',
    thumb: '/thoi-tiet/d-item1.webp',
    bgDesktop: '/thoi-tiet/background.webp',
    bgMobile: '/thoi-tiet/background_mobile.webp',
  },
  {
    title: 'Ninh Bình',
    thumb: '/thoi-tiet/d-item2.webp',
    bgDesktop: '/thoi-tiet/Dhagiang.webp',
    bgMobile: '/thoi-tiet/Dhagiang.webp',
  },
  {
    title: 'Sapa',
    thumb: '/thoi-tiet/d-item1.webp',
    bgDesktop: '/thoi-tiet/background.webp',
    bgMobile: '/thoi-tiet/background_mobile.webp',
  },
  {
    title: 'Ninh Bình',
    thumb: '/thoi-tiet/d-item2.webp',
    bgDesktop: '/thoi-tiet/Dhagiang.webp',
    bgMobile: '/thoi-tiet/Dhagiang.webp',
  },
  {
    title: 'Sapa',
    thumb: '/thoi-tiet/d-item1.webp',
    bgDesktop: '/thoi-tiet/background.webp',
    bgMobile: '/thoi-tiet/background_mobile.webp',
  },
]

const Layout = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeItem = useMemo(() => {
    return destinationData[activeIndex] ?? destinationData[0]
  }, [activeIndex])

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='relative w-[87.5rem] h-[37.1rem] xsm:w-full xsm:h-[25.875rem]'>
        {/* Desktop background */}
        <Image
          key={`desktop-${activeItem.bgDesktop}`}
          src={activeItem.bgDesktop}
          alt={activeItem.title}
          fill
          priority
          className='object-cover xsm:hidden'
        />

        {/* Mobile background */}
        <div className='hidden xsm:block absolute inset-0 px-[0.75rem]'>
          <div className='relative w-full h-[25.875rem] overflow-hidden rounded-[1rem]'>
            <Image
              key={`mobile-${activeItem.bgMobile}`}
              src={activeItem.bgMobile}
              alt={`${activeItem.title} mobile`}
              fill
              priority
              className='object-cover'
            />
          </div>
        </div>

        <h1 className='absolute top-[2.5rem] left-[2.5rem] z-10 text-[white] pc-h2-46-s-mons font-montserrat max-w-[27rem] flex-shrink-0 xsm:s-25-mon xsm:top-[1.25rem] xsm:left-[2rem] xsm:max-w-[15rem]'>
          Nắng mưa tại nơi bạn sắp đến
        </h1>

        <Desc />

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
