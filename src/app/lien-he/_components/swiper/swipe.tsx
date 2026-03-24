'use client'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
const socialData = [
  {
    image: '/lien-he/dFacebook.webp',
    text: 'Facebook',
    icon: (
      <Image
        src='/lien-he/dfb.svg'
        width={16}
        height={16}
        alt='Facebook'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/dIg.webp',
    text: 'Instagram',
    icon: (
      <Image
        src='/lien-he/dinstagra.svg'
        width={16}
        height={16}
        alt='Facebook'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/dTiktok.webp',
    text: 'Twitter',
    icon: (
      <Image
        src='/lien-he/dtiktok.svg'
        width={16}
        height={16}
        alt='TikTok'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/dFacebook.webp',
    text: 'Facebook',
    icon: (
      <Image
        src='/lien-he/dinstagram-[#167].svg'
        width={16}
        height={16}
        alt='Facebook'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/dIg.webp',
    text: 'Instagram',
    icon: (
      <Image
        src='/lien-he/dtiktok.svg'
        width={16}
        height={16}
        alt='Instagram'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/dTiktok.webp',
    text: 'TikTok',
    icon: (
      <Image
        src='/lien-he/dtk.svg'
        width={16}
        height={16}
        alt='TikTok'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/dFacebook.webp',
    text: 'Facebook',
    icon: (
      <Image
        src='/lien-he/dinstagram-[#167].svg'
        width={16}
        height={16}
        alt='Facebook'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/dIg.webp',
    text: 'Instagram',
    icon: (
      <Image
        src='/lien-he/dtiktok.svg'
        width={16}
        height={16}
        alt='Instagram'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/dTiktok.webp',
    text: 'TikTok',
    icon: (
      <Image
        src='/lien-he/dtk.svg'
        width={16}
        height={16}
        alt='TikTok'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
]
export default function GridSwiper() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <div className='relative w-[400px]'>
      {/* NAVIGATION */}
      <div className='flex items-center justify-between gap-[1.25rem] absolute w-[31.6rem] h-[2.5rem] left-[-3.0625rem] top-[2.5625rem] xsm:hidden z-10'>
        {/* PREV */}
        <div
          onClick={() => swiperRef.current?.slidePrev()}
          className='cursor-pointer flex items-center justify-center p-[0.625rem] rounded-[6.25rem] bg-white shadow-[0_0_1.875rem_rgba(0,0,0,0.12)] '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='13'
            height='12'
            viewBox='0 0 13 12'
            fill='none'
          >
            <path
              d='M0.629639 5.86133L5.99194 11.2227L7.36597 11.1807L5.21558 9.03027C4.51652 8.33222 3.87724 7.70705 3.29663 7.15527L2.49585 6.39355L3.60034 6.38867L12.4871 6.34668L12.4392 5.28516L3.51831 5.32812L2.39526 5.33398L3.21069 4.56152C3.49428 4.29284 3.79311 4.0051 4.10718 3.69824L5.09546 2.71973L7.32397 0.492188L6.04272 0.450195L0.629639 5.86133Z'
              fill='#10475F'
              stroke='#10475F'
              stroke-width='0.8888'
            />
          </svg>
        </div>

        {/* NEXT */}
        <div
          onClick={() => swiperRef.current?.slideNext()}
          className='cursor-pointer flex items-center justify-center p-[0.625rem] rounded-[6.25rem] bg-white shadow-[0_0_1.875rem_rgba(0,0,0,0.12)]'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='13'
            height='12'
            viewBox='0 0 13 12'
            fill='none'
          >
            <path
              d='M12.3223 5.86133L6.95996 11.2227L5.58594 11.1807L7.73633 9.03027C8.43538 8.33222 9.07467 7.70705 9.65527 7.15527L10.4561 6.39355L9.35156 6.38867L0.464844 6.34668L0.512695 5.28516L9.43359 5.32812L10.5566 5.33398L9.74121 4.56152C9.45763 4.29284 9.1588 4.0051 8.84473 3.69824L7.85645 2.71973L5.62793 0.492188L6.90918 0.450195L12.3223 5.86133Z'
              fill='#10475F'
              stroke='#10475F'
              stroke-width='0.8888'
            />
          </svg>
        </div>
      </div>

      {/* SWIPER */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          0: {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            spaceBetween: 12,
          },
          1025: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 16,
          },
        }}
      >
        {socialData.map((item, index) => {
          const isFirstItemOfNextSlides = index !== 0 && index % 3 === 0

          return (
            <SwiperSlide
              key={index}
              className={`!w-[6.8125rem] lg:!w-auto ${
                isFirstItemOfNextSlides ? ' lg:ml-[12px]' : ''
              }`}
            >
              <div className='relative w-full h-[6.8125rem] lg:h-[7.75rem] flex items-center justify-center rounded-xl overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.text}
                  className='w-full h-full object-cover'
                />

                <div className='absolute bottom-2 left-2 right-2 flex items-center'>
                  <div className='flex items-center justify-center rounded-full w-[1.5rem] h-[1.5rem] bg-white/20'>
                    {item.icon}
                  </div>

                  <p className='ml-[0.375rem] text-white text-[0.875rem] leading-[1.5]'>
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
