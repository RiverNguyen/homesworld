'use client'

import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/parallax'
import { Autoplay, Pagination, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IHome } from '@/interfaces/home.interface'

export default function BannerHomepage({ data }: { data: IHome['banner'] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const images = data?.image_array ?? []
  const activeLocation = images[activeIndex]?.location ?? data?.location ?? ''

  return (
    <section className='w-full h-[36.5rem] overflow-hidden relative xsm:h-[21.06rem]'>
      <h1 className='sr-only'>HomesWorld</h1>
      <div className='absolute top-0 left-0 w-full h-full bg-black/40 z-10 pointer-events-none' />
      <article className='absolute z-[10] left-0 w-[87.5rem] xsm:right-3 xsm:left-3 right-0 mx-auto absolute-y-center pointer-events-none'>
        <h2 className='w-[33.18rem] pc-h1-48-s text-white font-montserrat pointer-events-auto xsm:mb-26-s xsm:w-[17.25rem]'>
          {data?.title}
        </h2>
        <p className='text-white opacity-[0.8] xsm:w-[18.75rem] leading-[1.5] xsm:mb-14-r mt-3 xsm:mt-2 text-edge-[cap_alphabetic] text-trim-trim-both pointer-events-auto'>
          {data?.desc}
        </p>
      </article>
      <Swiper
        slidesPerView={1}
        modules={[Parallax, Autoplay, Pagination]}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        parallax={true}
        pagination={{
          el: '.banner-pagination',
          clickable: true,
        }}
        className='w-full h-full'
        grabCursor={true}
      >
        {Array.isArray(data?.image_array) &&
          data?.image_array.map((image, index) => (
            <SwiperSlide
              key={index}
              className='relative overflow-hidden'
            >
              <div
                className='size-full overflow-hidden absolute top-0 left-0 will-change-transform'
                data-swiper-parallax='70%'
              >
                <Image
                  width={1920}
                  height={1080}
                  src={image.image}
                  alt={`Banner ${index + 1}`}
                  className='w-full h-full object-cover will-change-transform'
                  preload
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className='xsm:hidden h-[2.25rem] absolute bottom-[5.125rem] pl-4 z-[11] pr-[0.625rem] rounded-[6.25rem] bg-white/20 backdrop-blur-[2px] flex-center space-x-[0.375rem] right-[6.25rem] transition-all duration-300'>
        <p className='pc-16-r text-white text-trim-trim-both text-edge-[cap_alphabetic] relative overflow-hidden inline-flex items-center min-h-[1.2em]'>
          <AnimatePresence
            mode='wait'
            initial={false}
          >
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='inline-block text-trim-trim-both'
            >
              {activeLocation}
            </motion.span>
          </AnimatePresence>
        </p>
        <ILocation className='size-5 shrink-0' />
      </div>

      <div className='banner-pagination' />
    </section>
  )
}

const ILocation = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    {...props}
  >
    <path
      d='M9.99982 17.4684C9.9369 17.4684 9.87459 17.4561 9.81646 17.432C9.75833 17.4079 9.70554 17.3726 9.66111 17.328L5.45193 13.1191C2.94441 10.6115 2.94441 6.53075 5.45193 4.02322C7.95946 1.5157 12.0403 1.5157 14.5478 4.02322C17.0555 6.53075 17.0555 10.6115 14.5478 13.1191L10.3386 17.328C10.2942 17.3726 10.2413 17.4079 10.1832 17.432C10.1251 17.4561 10.0627 17.4684 9.99982 17.4684ZM6.12934 12.4417L9.99982 16.3119L13.8703 12.4417C16.0042 10.3075 16.0042 6.83481 13.8703 4.70063C11.7359 2.56646 8.26367 2.56646 6.12927 4.70063C3.99532 6.83481 3.99532 10.3075 6.12934 12.4417Z'
      fill='white'
    />
    <path
      d='M10.0003 11.3462C11.5877 11.3462 12.8745 10.0594 12.8745 8.47194C12.8745 6.88452 11.5877 5.59766 10.0003 5.59766C8.41284 5.59766 7.12598 6.88452 7.12598 8.47194C7.12598 10.0594 8.41284 11.3462 10.0003 11.3462Z'
      fill='#8CC63F'
    />
  </svg>
)
