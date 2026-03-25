'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'

import ICArrowLeft from '@/components/ui/icons/ICLeft'
import ICRight from '@/components/ui/icons/ICRight'

const socialData = [
  {
    image: '/lien-he/d-imagectity.webp',
    text: 'Facebook',
    icon: (
      <Image
        src='/lien-he/d-iconfb.svg'
        width={16}
        height={16}
        alt='Facebook'
        className='size-[0.65217rem]'
      />
    ),
  },
  {
    image: '/lien-he/d-viewcity.webp',
    text: 'Instagram',
    icon: (
      <Image
        src='/lien-he/d-icon-tiktok.svg'
        width={16}
        height={16}
        alt='Instagram'
        className='size-[0.65217rem]'
      />
    ),
  },
  {
    image: '/lien-he/d-imagectity.webp',
    text: 'Tiktok',
    icon: (
      <Image
        src='/lien-he/d-icon-tiktok.svg'
        width={16}
        height={16}
        alt='Tiktok'
        className='size-[0.65217rem]'
      />
    ),
  },
  {
    image: '/lien-he/d-viewcity.webp',
    text: 'Youtube',
    icon: (
      <Image
        src='/lien-he/d-iconfb.svg'
        width={16}
        height={16}
        alt='Youtube'
        className='size-[0.65217rem]'
      />
    ),
  },
  {
    image: '/lien-he/d-viewcity.webp',
    text: 'Youtube',
    icon: (
      <Image
        src='/lien-he/d-iconfb.svg'
        width={16}
        height={16}
        alt='Youtube'
        className='size-[0.65217rem]'
      />
    ),
  },
  {
    image: '/lien-he/d-viewcity.webp',
    text: 'Youtube',
    icon: (
      <Image
        src='/lien-he/d-iconfb.svg'
        width={16}
        height={16}
        alt='Youtube'
        className='size-[0.65217rem]'
      />
    ),
  },
]

export default function SocialSwiper() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <>
      {/* desktop */}
      <section className='w-full xsm:hidden'>
        <div className='flex items-center relative'>
          <button
            type='button'
            onClick={() => swiperRef.current?.slidePrev()}
            className='absolute left-[-15%] z-10 top-1/2 -translate-y-1/2 flex size-[3rem] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
            aria-label='Previous'
          >
            <ICArrowLeft className='h-[1.25rem] w-[1.25rem] text-[#10475F]' />
          </button>

          <div className='w-[24.6875rem] overflow-hidden'>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              slidesPerView='auto'
              slidesPerGroup={1}
              spaceBetween={16}
            >
              {socialData.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className='!w-[7.5625rem]'
                >
                  <div className='relative h-[7.5625rem] w-[7.5625rem] overflow-hidden rounded-[1.125rem]'>
                    <Image
                      src={item.image}
                      alt={item.text}
                      fill
                      className='object-cover'
                    />

                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'></div>

                    <div className='absolute bottom-2 left-2 right-2 z-10 flex items-center'>
                      <div className='flex size-[1.5rem] items-center justify-center rounded-full bg-white/20'>
                        {item.icon}
                      </div>

                      <p className='ml-[0.375rem] text-[0.875rem] leading-[1.5] text-white'>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            type='button'
            onClick={() => swiperRef.current?.slideNext()}
            className='absolute right-[-15%] z-10 top-1/2 -translate-y-1/2 flex size-[3rem] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
            aria-label='Next'
          >
            <ICRight className='h-[1.25rem] w-[1.25rem] text-[#10475F]' />
          </button>
        </div>
      </section>

    
      {/* mobile */}
      <section className='hidden w-full xsm:block'>
        <div className='w-[21.9375rem] overflow-x-auto scrollbar-none'>
          <div className='flex gap-[0.75rem]'>
            {socialData.map((item, index) => (
              <div
                key={index}
                className='relative h-[6.8125rem] w-[6.8125rem] shrink-0 overflow-hidden rounded-[1rem]'
              >
                <Image
                  src={item.image}
                  alt={item.text}
                  fill
                  className='object-cover'
                />

                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />

                <div className='absolute bottom-[0.75rem] left-[0.75rem] z-10 flex items-center'>
                  <div className='flex size-[1.5rem] items-center justify-center rounded-full bg-white/20'>
                    {item.icon}
                  </div>

                  <p className='ml-[0.38rem] truncate text-[0.75rem] leading-[1.4] text-white'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
