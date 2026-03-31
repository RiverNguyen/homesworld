'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import ICArrowLeft from '@/components/ui/icons/ICLeft'
import ICRight from '@/components/ui/icons/ICRight'
import type { SocialItem } from '@/interfaces/contact.interface'

export default function SocialSwiper({ data }: { data: SocialItem[] }) {
  const swiperRef = useRef<SwiperType | null>(null)
  const sliderPerview = 3
  const isShowPagination = data?.length > sliderPerview

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  return (
    <>
      {/* desktop */}
      <section className='w-full xsm:hidden'>
        <div className='flex items-center relative'>
          {isShowPagination && (
            <button
              type='button'
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`
    absolute  left-[-2.96rem] top-1/2 -translate-y-1/2 z-10
    flex size-[2.5rem] items-center justify-center rounded-full
    shadow-[0_4px_16px_rgba(0,0,0,0.08)]
    ${isBeginning ? 'bg-gray-200 cursor-not-allowed opacity-50' : 'bg-white'}
  `}
            >
              <ICArrowLeft className='w-[0.8095rem] h-[0.72956rem] text-[#10475F]' />
            </button>
          )}

          <div className='w-[24.9rem] overflow-hidden'>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
                setIsBeginning(swiper.isBeginning)
                setIsEnd(swiper.isEnd)
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning)
                setIsEnd(swiper.isEnd)
              }}
              slidesPerView='auto'
              slidesPerGroup={1}
              spaceBetween={16}
            >
              {data?.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className='!w-[7.5625rem]'
                >
                  <Link
                    href={item.link?.url}
                    target={item.link?.target}
                    className='relative block h-[7.5625rem] w-[7.5625rem] overflow-hidden rounded-[1.125rem]'
                  >
                    <Image
                      src={item.image}
                      alt={item.link?.title}
                      fill
                      sizes='7.5625rem'
                      className='object-cover'
                    />

                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'></div>

                    <div className='absolute bottom-[0.75rem] left-[0.75rem] right-[0.75rem] z-10 flex items-center'>
                      <div className='flex size-[1.5rem] items-center justify-center rounded-full bg-white/20'>
                        <Image
                          src={item.icon}
                          width={16}
                          height={16}
                          alt={item.link?.title}
                          className='size-[0.65217rem]'
                        />
                      </div>

                      <p className='ml-[0.375rem] text-[0.875rem] leading-[1.5] text-white pc-14-14-r'>
                        {item.link?.title}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {isShowPagination && (
            <button
              type='button'
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`
    absolute right-[-2.96rem] top-1/2 -translate-y-1/2 z-10
    flex size-[2.5rem] items-center justify-center rounded-full
    shadow-[0_4px_16px_rgba(0,0,0,0.08)]
    ${isEnd ? 'bg-gray-200 cursor-not-allowed opacity-50' : 'bg-white'}
  `}
            >
              <ICRight className='h-[0.8095rem] w-[0.72956rem] text-[#10475F]' />
            </button>
          )}
        </div>
      </section>

      {/* mobile */}
      <section className='hidden w-full xsm:block'>
        <div className='w-[21.9375rem] overflow-x-auto hidden_scroll'>
          <div className='flex gap-[0.75rem]'>
            {data?.map((item, index) => (
              <Link
                href={item.link?.url}
                target={item.link?.target}
                key={index}
                className='relative h-[6.8125rem] w-[6.8125rem] shrink-0 overflow-hidden rounded-[1rem]'
              >
                <Image
                  src={item.image}
                  alt={item.link?.title}
                  fill
                  sizes='6.8125rem'
                  className='object-cover'
                />

                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />

                <div className='absolute bottom-[0.75rem] left-[0.75rem] z-10 flex items-center'>
                  <div className='flex size-[1.5rem] items-center justify-center rounded-full bg-white/20'>
                    <Image
                      src={item.icon}
                      alt={item.link?.title}
                      width={16}
                      height={16}
                      className='size-[0.65217rem]'
                    />
                  </div>

                  <p className='ml-[0.38rem] truncate r-14 leading-[1.4] text-white'>
                    {item.link?.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
