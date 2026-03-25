'use client'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
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
        className='size-[0.65217rem] text-white'
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
        alt='Facebook'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/d-imagectity.webp',
    text: 'Twitter',
    icon: (
      <Image
        src='/lien-he/d-icon-instagra.svg'
        width={16}
        height={16}
        alt='TikTok'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/d-imagectity.webp',
    text: 'Facebook',
    icon: (
      <Image
        src='/lien-he/d-iconfb.svg'
        width={16}
        height={16}
        alt='Facebook'
        className='size-[0.65217rem] text-white'
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
        alt='Facebook'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/d-imagectity.webp',
    text: 'Twitter',
    icon: (
      <Image
        src='/lien-he/d-icon-instagra.svg'
        width={16}
        height={16}
        alt='TikTok'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/d-imagectity.webp',
    text: 'Facebook',
    icon: (
      <Image
        src='/lien-he/d-iconfb.svg'
        width={16}
        height={16}
        alt='Facebook'
        className='size-[0.65217rem] text-white'
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
        alt='Facebook'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/d-imagectity.webp',
    text: 'Twitter',
    icon: (
      <Image
        src='/lien-he/d-icon-instagra.svg'
        width={16}
        height={16}
        alt='TikTok'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/d-imagectity.webp',
    text: 'Facebook',
    icon: (
      <Image
        src='/lien-he/d-iconfb.svg'
        width={16}
        height={16}
        alt='Facebook'
        className='size-[0.65217rem] text-white'
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
        alt='Facebook'
        className='size-[0.65217rem] text-white'
      />
    ),
  },
  {
    image: '/lien-he/d-imagectity.webp',
    text: 'Twitter',
    icon: (
      <Image
        src='/lien-he/d-icon-instagra.svg'
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
    <div className='relative w-[25rem]'>
      {/* NAVIGATION */}
      <div className='flex items-center justify-between gap-[1.25rem] absolute w-[31.2rem] h-[2.5rem] left-[-3.0625rem] top-[2.5625rem] xsm:hidden z-10'>
        {/* PREV */}
        <div
          onClick={() => swiperRef.current?.slidePrev()}
          className='cursor-pointer flex items-center justify-center p-[0.625rem] rounded-[6.25rem] bg-white shadow-[0_0_1.875rem_rgba(0,0,0,0.12)] '
        >
          <ICArrowLeft className='w-[1.25rem] h-[1.25rem] text-[#10475F]' />
        </div>

        {/* NEXT */}
        <div
          onClick={() => swiperRef.current?.slideNext()}
          className='cursor-pointer flex items-center justify-center p-[0.625rem] rounded-[6.25rem] bg-white shadow-[0_0_1.875rem_rgba(0,0,0,0.12)]'
        >
          <ICRight className='w-[1.25rem] h-[1.25rem] text-[#10475F]' />
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
                isFirstItemOfNextSlides ? ' lg:ml-[0.75rem]' : ''
              }`}
            >
              <div className='relative w-full h-[6.8125rem] lg:h-[7.75rem] rounded-xl overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.text}
                  className='w-full h-full object-cover'
                />

                {/* overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'></div>

                {/* content */}
                <div className='absolute bottom-2 left-2 right-2 flex items-center z-10'>
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
