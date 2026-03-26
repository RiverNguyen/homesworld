'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
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

  return (
    <>
      {/* desktop */}
      <section className='w-full xsm:hidden'>
        <div className='flex items-center relative'>
          {isShowPagination && (
            <button
              type='button'
              onClick={() => swiperRef.current?.slidePrev()}
              className='absolute left-[-15%] z-10 top-1/2 -translate-y-1/2 flex size-[3rem] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
              aria-label='Previous'
            >
              <ICArrowLeft className='h-[1.25rem] w-[1.25rem] text-[#10475F] cursor-pointer' />
            </button>
          )}

          <div className='w-[24.9rem] overflow-hidden'>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
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
              className='absolute right-[-15%] z-10 top-1/2 -translate-y-1/2 flex size-[3rem] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
              aria-label='Next'
            >
              <ICRight className='h-[1.25rem] w-[1.25rem] text-[#10475F] cursor-pointer' />
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

                  <p className='ml-[0.38rem] truncate r-14 leading-[1.4] text-white'>{item.link?.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
