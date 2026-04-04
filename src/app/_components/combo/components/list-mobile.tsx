'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import ICCalendar2 from '@/components/icons/ICCalendar2'
import ICHotel from '@/components/icons/ICHotel'
import ICRightArrow from '@/components/icons/ICRightArrow'
import { Skeleton } from '@/components/ui/skeleton'
import { ComboItem } from '@/interfaces/combo.interface'
import { cn, formatPrice } from '@/lib/utils'

import 'swiper/css'
import 'swiper/css/pagination'

type ListMobileProps = {
  data: ComboItem[]
}

function galleryForItem(item: ComboItem) {
  const g = item.acf?.gallery
  if (g?.length) return g
  if (item.thumbnail?.url) return [item.thumbnail.url]
  return ['/default.webp']
}

export const ListMobileSkeleton = () => (
  <div className='w-full space-y-3'>
    {Array.from({ length: 4 }).map((_, i) => (
      <div
        key={i}
        className='flex gap-4 rounded-[1rem] bg-white p-[0.625rem]'
      >
        <Skeleton className='size-[7.25rem] shrink-0 rounded-[1rem] bg-[#E6EEF2]' />
        <div className='min-w-0 flex-1 space-y-2 py-0.5'>
          <Skeleton className='h-4 w-full rounded-full bg-[#E6EEF2]' />
          <Skeleton className='h-3 w-4/5 rounded-full bg-[#E6EEF2]' />
          <Skeleton className='h-3 w-3/5 rounded-full bg-[#E6EEF2]' />
          <Skeleton className='mt-auto h-5 w-2/3 rounded-full bg-[#E6EEF2]' />
        </div>
      </div>
    ))}
    <Skeleton className='h-11 w-full rounded-[6.25rem] bg-[#E6EEF2]' />
  </div>
)

const ListMobile = ({ data }: ListMobileProps) => {
  return (
    <div className='w-full bg-[#F9F9F7]'>
      <div className='space-y-3'>
        {data.map((item, index) => {
          const paginationClass = `combo-mobile-image-pagination-${index}`
          const images = galleryForItem(item)
          const locationName = item.taxonomies.location?.[0]?.name ?? ''

          return (
            <Link
              key={`${item.id}-${index}`}
              href={item.slug}
              className='flex items-center space-x-[0.52rem] bg-white p-[0.625rem]'
            >
              <div
                className={cn(
                  'relative size-[6.62891rem] shrink-0 overflow-hidden rounded-[1rem]',
                  '[&_.swiper-pagination-bullet]:!h-[0.26042rem] [&_.swiper-pagination-bullet]:!w-[0.26042rem] [&_.swiper-pagination-bullet]:m-0!',
                  '[&_.swiper-pagination-bullet]:!bg-white/35 [&_.swiper-pagination-bullet]:!opacity-100',
                  '[&_.swiper-pagination-bullet-active]:!bg-white  [&_.swiper-pagination-bullet]:transition-all',
                )}
              >
                <Swiper
                  slidesPerView={1}
                  grabCursor
                  nested
                  resistanceRatio={0}
                  modules={[Pagination]}
                  pagination={{
                    el: `.${paginationClass}`,
                    clickable: true,
                  }}
                  className='relative size-[7.25rem]'
                >
                  {images.map((src, i) => (
                    <SwiperSlide
                      key={`${src}-${i}`}
                      className='relative size-[7.25rem]'
                    >
                      <Image
                        src={src || '/default.webp'}
                        alt={item.title}
                        fill
                        className='object-cover'
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {locationName ? (
                  <div className='absolute left-2 top-2 z-[2] flex max-w-[calc(100%-1rem)] items-center rounded-[6.25rem] bg-black/45 px-2 py-0.5 backdrop-blur-[2px]'>
                    <span className='truncate text-[0.52083rem] text-white'>{locationName}</span>
                    <svg
                      className='size-[0.625rem] translate-y-[0.0625rem]'
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                    >
                      <path
                        d='M5.99989 10.481C5.96214 10.481 5.92475 10.4736 5.88987 10.4592C5.855 10.4447 5.82332 10.4235 5.79667 10.3968L3.27116 7.87142C1.76664 6.3669 1.76664 3.91843 3.27116 2.41391C4.77567 0.909394 7.22415 0.909394 8.72867 2.41391C10.2333 3.91843 10.2333 6.3669 8.72867 7.87142L6.20316 10.3968C6.17649 10.4235 6.14481 10.4447 6.10993 10.4592C6.07504 10.4736 6.03765 10.481 5.99989 10.481ZM3.67761 7.46497L5.99989 9.78712L8.32217 7.46497C9.60254 6.18447 9.60254 4.10086 8.32217 2.82036C7.04153 1.53985 4.9582 1.53985 3.67756 2.82036C2.39719 4.10086 2.39719 6.18447 3.67761 7.46497Z'
                        fill='white'
                      />
                      <path
                        d='M6.00016 6.80772C6.95261 6.80772 7.72473 6.03561 7.72473 5.08315C7.72473 4.1307 6.95261 3.35858 6.00016 3.35858C5.04771 3.35858 4.27559 4.1307 4.27559 5.08315C4.27559 6.03561 5.04771 6.80772 6.00016 6.80772Z'
                        fill='#8CC63F'
                      />
                    </svg>
                  </div>
                ) : null}

                <div
                  className={`swiper-pagination ${paginationClass} absolute bottom-[0.52rem]! left-1/2! z-[2] !flex !w-auto -translate-x-1/2 items-center justify-center gap-1`}
                />
              </div>

              <div className='flex min-w-0 flex-1 flex-col'>
                <div>
                  <Link
                    href={item.slug}
                    className='mb-16-m line-clamp-2 text-[#10475F] text-trim-trim-both text-edge-[cap_alphabetic]'
                  >
                    {item.title}
                  </Link>
                  <p className='mt-2 flex items-start gap-[0.3125rem]'>
                    <ICCalendar2 className='mt-0.5 size-[0.72917rem] shrink-0 text-[#10475F]/70' />
                    <span className='text-[0.75rem] font-normal leading-[1.4] text-[#666666]'>
                      Thời gian: {item.taxonomies.duration?.[0]?.name ?? '—'}
                    </span>
                  </p>
                  <p className='mt-1 flex items-start gap-1'>
                    <ICHotel className='mt-0.5 size-[0.72917rem] shrink-0 text-[#10475F]/70' />
                    <span className='text-[0.75rem] font-normal leading-[1.4] text-[#666666]'>
                      Mã đặt khách sạn: QKFGAKD
                    </span>
                  </p>
                </div>
                <p className='text-[0.75rem] mt-2 font-normal leading-[1.4] text-[#666666]'>
                  từ{' '}
                  <span className='pc-18-18-m text-[#10475F]'>
                    {item.acf?.price ? formatPrice(item.acf.price) : '—'}
                  </span>{' '}
                  / người
                </p>
              </div>
            </Link>
          )
        })}
      </div>

      <Link
        href='/'
        className='mt-4 flex h-11 w-[calc(100%-1.25rem)] mx-auto items-center justify-center gap-2 rounded-[6.25rem] bg-[#27AAE1] pc-14-14-r-button text-white text-trim-trim-both text-edge-[cap_alphabetic] transition-opacity hover:opacity-90'
      >
        Xem tất cả
        <ICRightArrow className='size-[0.875rem]' />
      </Link>
    </div>
  )
}

export default ListMobile
