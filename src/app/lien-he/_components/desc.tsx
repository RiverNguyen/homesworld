'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import ICLocation from '@/components/ui/icons/ICLocation'
import ICCall from '@/components/ui/icons/ICCall'
import Image from 'next/image'
import SwiperList from './swiper/swipe'

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

const Desc = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <div className='contact__left flex flex-col  xsm:w-[100%]  xsm:px[2rem] xsm:py[0.75rem]'>
      <h1 className='self-stretch w-full text-[#10475F] pc-h2-46-s-mons font-montserrat xsm:s-25-mon'>
        Liên hệ với chúng tôi
      </h1>

      <div className='flex flex-col mt-[1.12rem]'>
        <div className='contact__item flex items-center text-sm'>
          <ICCall className='w-4 h-4 aspect-square text-[#10475F]/80' />
          <p className='pc-16-16-r text-[#10475F]/80 ml-[0.62rem] xsm:r-14'>
            Giờ làm việc: 6h - 20h (Thứ 2 - Thứ 7)
          </p>
        </div>

        <div className='contact__item flex items-center text-sm mt-[0.75rem]'>
          <ICLocation className='w-4 h-4 aspect-square text-[#10475F]/80' />

          <a
            href='https://www.google.com/maps?q=31+Trần+Kim+Xuyến,+Yên+Hòa,+Cầu+Giấy,+Hà+Nội'
            target='_blank'
            rel='noopener noreferrer'
            className='pc-16-16-r text-[#10475F]/80 ml-[0.62rem] xsm:r-14 hover:underline'
          >
            31 Trần Kim Xuyến, Yên Hòa, Cầu Giấy, Hà Nội
          </a>
        </div>
      </div>

      <div className='flex flex-col mt-[1.18rem]'>
        <h3 className='pc-2x-20-m text-[#10475F] xsm:m-16 !m-[0]'>Theo dõi chúng tôi</h3>

        <div className='mt-[1.12rem] relative w-fit'>
          
          <SwiperList />
         
          
        </div>
      </div>
    </div>
  )
}

export default Desc
