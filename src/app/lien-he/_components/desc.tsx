'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import ICLocation from '@/components/ui/icons/ICLocation'
import ICCall from '@/components/ui/icons/ICCall'
import Image from 'next/image'
import SwiperList from './swipper'

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
          {/* <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            loop={false}
            grabCursor={true}
            autoplay={false}
            watchOverflow={true}
            watchSlidesProgress={true}
            resistanceRatio={0}
            className='social-swiper max-w-[25.9rem] overflow-hidden'
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
                      className='w-full h-[6.8125rem] lg:h-[7.75rem] object-cover rounded-xl'
                    />

                    <div className='absolute bottom-2 left-2 right-2 flex items-center'>
                      <div className='flex items-center justify-center rounded-full w-[1.5rem] h-[1.5rem] bg-white/20'>
                        {item.icon}
                      </div>

                      <p className='ml-[0.375rem] text-white text-[0.875rem] font-normal font-halyard-display leading-[1.5] text-left'>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper> */}
          <SwiperList />
          <div className='flex items-center justify-between gap-[1.25rem] absolute w-[31.6rem] h-[2.5rem] left-[-3.0625rem] top-[2.5625rem] xsm:hidden'>
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className='cursor-pointer flex items-center justify-start gap-[0.625rem] p-[0.625rem] rounded-[6.25rem] w-fit h-fit bg-white shadow-[0rem_0rem_1.875rem_0rem_rgba(0,0,0,0.12)] rotate-[-180deg]'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  d='M16.4423 10.0003L11.08 15.3616L9.70593 15.3196L11.8563 13.1693C12.5554 12.4712 13.1947 11.846 13.7753 11.2943L14.576 10.5325L13.4716 10.5276L4.58484 10.4857L4.63269 9.42413L13.5536 9.4671L14.6766 9.47296L13.8612 8.7005C13.5776 8.43181 13.2788 8.14407 12.9647 7.83722L11.9764 6.8587L9.74792 4.63116L11.0292 4.58917L16.4423 10.0003Z'
                  fill='#10475F'
                  stroke='#10475F'
                  strokeWidth='0.8888'
                />
              </svg>
            </div>
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className='cursor-pointer flex items-center justify-start gap-[0.625rem] p-[0.625rem] rounded-[6.25rem] w-fit h-fit bg-white shadow-[0rem_0rem_1.875rem_0rem_rgba(0,0,0,0.12)] rotate-[-180deg]'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  d='M3.55762 10.0003L8.91992 15.3616L10.2939 15.3196L8.14355 13.1693C7.4445 12.4712 6.80521 11.846 6.22461 11.2943L5.42383 10.5325L6.52832 10.5276L15.415 10.4857L15.3672 9.42413L6.44629 9.4671L5.32324 9.47296L6.13867 8.7005C6.42226 8.43181 6.72109 8.14407 7.03516 7.83722L8.02344 6.8587L10.252 4.63116L8.9707 4.58917L3.55762 10.0003Z'
                  fill='#10475F'
                  stroke='#10475F'
                  strokeWidth='0.8888'
                />
              </svg>
            </div>{' '}
          </div>
          {/* <div
            onClick={() => swiperRef.current?.slidePrev()}
            className='absolute top-[2.5625rem] left-[-12%] cursor-pointer flex items-center justify-start gap-[0.625rem] p-[0.625rem] rounded-[6.25rem] w-fit h-fit bg-white shadow-[0rem_0rem_1.875rem_0rem_rgba(0,0,0,0.12)] rotate-[-180deg] xsm:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
            >
              <path
                d='M16.4423 10.0003L11.08 15.3616L9.70593 15.3196L11.8563 13.1693C12.5554 12.4712 13.1947 11.846 13.7753 11.2943L14.576 10.5325L13.4716 10.5276L4.58484 10.4857L4.63269 9.42413L13.5536 9.4671L14.6766 9.47296L13.8612 8.7005C13.5776 8.43181 13.2788 8.14407 12.9647 7.83722L11.9764 6.8587L9.74792 4.63116L11.0292 4.58917L16.4423 10.0003Z '
                fill='#10475F'
                stroke='#10475F'
                strokeWidth='0.8888'
              />
            </svg>
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className='absolute top-[2.5625rem] right-[-10%]  cursor-pointer flex items-center justify-start gap-[0.625rem] p-[0.625rem] rounded-[6.25rem] w-fit h-fit bg-white shadow-[0rem_0rem_1.875rem_0rem_rgba(0,0,0,0.12)] rotate-[-180deg] xsm:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
            >
              <path
                d='M3.55762 10.0003L8.91992 15.3616L10.2939 15.3196L8.14355 13.1693C7.4445 12.4712 6.80521 11.846 6.22461 11.2943L5.42383 10.5325L6.52832 10.5276L15.415 10.4857L15.3672 9.42413L6.44629 9.4671L5.32324 9.47296L6.13867 8.7005C6.42226 8.43181 6.72109 8.14407 7.03516 7.83722L8.02344 6.8587L10.252 4.63116L8.9707 4.58917L3.55762 10.0003Z'
                fill='#10475F'
                stroke='#10475F'
                strokeWidth='0.8888'
              />
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Desc
