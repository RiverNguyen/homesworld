'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import ICLocation from '@/components/ui/icons/ICLocation'
import ICCall from '@/components/ui/icons/ICCall'

const socialData = [
  {
    image: '/contact/dFacebook.webp',
    text: 'Facebook',
    icon: <ICCall className='size-[0.65217rem] text-white' />,
  },
  {
    image: '/contact/dIg.webp',
    text: 'Instagram',
    icon: <ICLocation className='size-[0.65217rem] text-white' />,
  },
  {
    image: '/contact/dTiktok.webp',
    text: 'Twitter',
    icon: <ICCall className='size-[0.65217rem] text-white' />,
  },
  {
    image: '/contact/dFacebook.webp',
    text: 'Facebook',
    icon: <ICCall className='size-[0.65217rem] text-white' />,
  },
  {
    image: '/contact/dIg.webp',
    text: 'Instagram',
    icon: <ICLocation className='size-[0.65217rem] text-white' />,
  },
  {
    image: '/contact/dTiktok.webp',
    text: 'Twitter',
    icon: <ICCall className='size-[0.65217rem] text-white' />,
  },
]

const Desc = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <div className='contact__left flex flex-col'>
      <h1 className='self-stretch w-full text-[#10475F] pc-h2-46-s-mons font-montserrat'>
        Liên hệ với chúng tôi
      </h1>

      <div className='flex flex-col mt-[1.12rem]'>
        <div className='contact__item flex items-center text-sm'>
          <ICCall className='w-4 h-4 aspect-square text-[#10475F]/80' />
          <p className='pc-16-16-r text-[#10475F]/80 ml-[0.62rem]'>
            Giờ làm việc: 6h - 20h (Thứ 2 - Thứ 7)
          </p>
        </div>

        <div className='contact__item flex items-center text-sm mt-[0.75rem]'>
          <ICLocation className='w-4 h-4 aspect-square text-[#10475F]/80' />
          <p className='pc-16-16-r text-[#10475F]/80 ml-[0.62rem]'>
            31 Trần Kim Xuyến, Yên Hòa, Cầu Giấy, Hà Nội
          </p>
        </div>
      </div>

      <div className='flex flex-col mt-[1.18rem]'>
        <h3 className='pc-2x-20-m text-[#10475F]'>Theo dõi chúng tôi</h3>

        <div className='mt-[1.12rem] relative w-fit'>
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={16}
            loop={false}
            grabCursor={true}
            autoplay={false}
            className='max-w-[25.9375rem]'
          >
            {socialData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='relative w-[7.5625rem] h-[7.5625rem] flex flex-col items-center justify-center'>
                  <img
                    src={item.image}
                    alt={item.text}
                    className='w-[7.5625rem] h-[7.5625rem] object-cover rounded-xl'
                  />
                  <div className='absolute bottom-2 left-2 right-2 flex items-center justify-start rounded-lg p-1'>
                    <div className='flex items-center justify-center rounded-[3.26087rem] size-[1.5rem] bg-white/20'>
                      {item.icon}
                    </div>
                    <p className='text-[0.875rem] leading-none font-regular text-white ml-[0.38rem]'>
                      {item.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <button
            type='button'
            onClick={() => swiperRef.current?.slidePrev()}
            className='absolute left-[-3.0625rem] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-[0.625rem] rounded-[6.25rem] bg-white shadow-[0rem_0rem_1.875rem_0rem_rgba(0,0,0,0.12)]'
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
          </button>

          <button
            type='button'
            onClick={() => swiperRef.current?.slideNext()}
            className='absolute right-[-3.0625rem] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-[0.625rem] rounded-[6.25rem] bg-white shadow-[0rem_0rem_1.875rem_0rem_rgba(0,0,0,0.12)]'
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
          </button> */}
          {/* ARROWS - GIỮ NGUYÊN UI, CHỈ THÊM onClick */}
          <div className='flex items-center justify-between gap-[1.25rem] absolute w-[31.6rem] h-[2.5rem] left-[-3.0625rem] top-[2.5625rem]'>
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
        </div>
      </div>
    </div>
  )
}

export default Desc
