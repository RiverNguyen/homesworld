'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper/modules'
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
  return (
    <div className='w-[400px] h-[400px]'>
      <Swiper
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
              className={`
          !w-[6.8125rem] lg:!w-auto
          ${isFirstItemOfNextSlides ? 'ml-[5px] lg:ml-[12px]' : ''}
        `}
            >
              <div className='relative w-full h-[6.8125rem] lg:h-[7.75rem] flex items-center justify-center bg-[linear-gradient(180deg,_rgba(0,0,0,0)_52.39%,_rgba(0,0,0,1)_92.6%)] rounded-xl'>
                <img
                  src={item.image}
                  alt={item.text}
                  className='w-full h-full object-cover rounded-xl'
                />

                <div className='absolute bottom-2 left-2 right-2 flex items-center'>
                  <div className='flex items-center justify-center rounded-full w-[1.5rem] h-[1.5rem] bg-white/20'>
                    {item.icon}
                  </div>

                  <p className='ml-[0.375rem] text-white text-[0.875rem] font-normal font-halyard-display leading-[1.5]'>
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
