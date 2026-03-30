import Image from 'next/image'
import Link from 'next/link'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import ICCalendar2 from '@/components/icons/ICCalendar2'
import ICHotel from '@/components/icons/ICHotel'
import ICRightArrow from '@/components/icons/ICRightArrow'
import { convertRemToPx, formatPrice } from '@/lib/utils'

import 'swiper/css'
import 'swiper/css/pagination'

type ListProps = {
  onHorizontalScrollEndChange?: (isAtEnd: boolean) => void
}

/** Swiper cập nhật `isEnd` sau transition; dùng thêm progress/translate để khớp khi kéo tay. */
function emitComboEnd(swiper: SwiperType, cb?: (isAtEnd: boolean) => void) {
  if (!cb) return
  const atEnd =
    swiper.isEnd ||
    swiper.progress >= 0.997 ||
    Math.abs(swiper.translate - swiper.maxTranslate()) < 2
  cb(atEnd)
}

const data = [
  {
    title: 'Combo du lịch Tà Xùa',
    slug: 'combo-du-lich-ta-xua',
    image: ['/home/img/d-combo.webp', '/home/img/d-combo.webp', '/home/img/d-combo.webp'],
    duration: '3 ngày 2 đêm',
    hotelCode: '123456',
    price: '1850000',
    location: 'Ha noi',
  },
  {
    title: 'Combo du lịch Tà Xùa',
    slug: 'combo-du-lich-ta-xua',
    image: ['/home/img/d-combo.webp', '/home/img/d-combo.webp', '/home/img/d-combo.webp'],
    duration: '3 ngày 2 đêm',
    hotelCode: '123456',
    price: '1850000',
    location: 'Ha noi',
  },
  {
    title: 'Combo du lịch Tà Xùa',
    slug: 'combo-du-lich-ta-xua',
    image: ['/home/img/d-combo.webp', '/home/img/d-combo.webp', '/home/img/d-combo.webp'],
    duration: '3 ngày 2 đêm',
    hotelCode: '123456',
    price: '1850000',
    location: 'Ha noi',
  },
  {
    title: 'Combo du lịch Tà Xùa',
    slug: 'combo-du-lich-ta-xua',
    image: ['/home/img/d-combo.webp', '/home/img/d-combo.webp', '/home/img/d-combo.webp'],
    duration: '3 ngày 2 đêm',
    hotelCode: '123456',
    price: '1850000',
    location: 'Ha noi',
  },
  {
    title: 'Combo du lịch Tà Xùa',
    slug: 'combo-du-lich-ta-xua',
    image: ['/home/img/d-combo.webp', '/home/img/d-combo.webp', '/home/img/d-combo.webp'],
    duration: '3 ngày 2 đêm',
    hotelCode: '123456',
    price: '1850000',
    location: 'Ha noi',
  },
  {
    title: 'Combo du lịch Tà Xùa',
    slug: 'combo-du-lich-ta-xua',
    image: ['/home/img/d-combo.webp', '/home/img/d-combo.webp', '/home/img/d-combo.webp'],
    duration: '3 ngày 2 đêm',
    hotelCode: '123456',
    price: '1850000',
    location: 'Ha noi',
  },
]

const List = ({ onHorizontalScrollEndChange }: ListProps) => {
  return (
    <div className='w-full relative'>
      <Swiper
        slidesPerView={2.6}
        spaceBetween={convertRemToPx(0.625)}
        grabCursor={true}
        nested={true}
        resistanceRatio={0}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: '.combo-next',
          prevEl: '.combo-prev',
          disabledClass: 'opacity-0 cursor-not-allowed',
        }}
        className='w-[50.44rem] overflow-hidden pr-[1.125rem]!'
        onSwiper={(swiper) => {
          requestAnimationFrame(() => {
            swiper.update()
            emitComboEnd(swiper, onHorizontalScrollEndChange)
          })
        }}
        pagination={{
          el: '.combo-pagination',
          clickable: true,
        }}
        onSlideChange={(swiper) =>
          queueMicrotask(() => emitComboEnd(swiper, onHorizontalScrollEndChange))
        }
        onSlideChangeTransitionEnd={(swiper) => emitComboEnd(swiper, onHorizontalScrollEndChange)}
        onSlidesUpdated={(swiper) => emitComboEnd(swiper, onHorizontalScrollEndChange)}
        onResize={(swiper) => emitComboEnd(swiper, onHorizontalScrollEndChange)}
        onTouchEnd={(swiper) => {
          requestAnimationFrame(() => emitComboEnd(swiper, onHorizontalScrollEndChange))
        }}
        onReachEnd={(swiper) => emitComboEnd(swiper, onHorizontalScrollEndChange)}
        onFromEdge={(swiper) => emitComboEnd(swiper, onHorizontalScrollEndChange)}
      >
        {Array.isArray(data) &&
          data?.map((item, index) => {
            const paginationClass = `combo-image-pagination-${index}`

            return (
              <SwiperSlide key={index}>
                <div className='relative overflow-hidden [&_.swiper-pagination-bullet]:!h-[0.375rem] [&_.swiper-pagination-bullet]:!w-[0.375rem] [&_.swiper-pagination-bullet]:!bg-white/30 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet-active]:!bg-white'>
                  <Swiper
                    slidesPerView={1}
                    grabCursor={true}
                    nested={true}
                    resistanceRatio={0}
                    modules={[Pagination]}
                    pagination={{
                      el: `.${paginationClass}`,
                      clickable: true,
                    }}
                    className='!h-[18.9205rem] rounded-[1.125rem] relative'
                  >
                    {Array.isArray(item.image) &&
                      item.image?.map((image, index) => (
                        <SwiperSlide
                          key={index}
                          className='relative w-full !h-[18.9205rem]'
                        >
                          <div
                            className='absolute inset-0 opacity-60 z-[1]'
                            style={{
                              background:
                                'linear-gradient(180deg, rgba(24, 24, 24, 0.10) 0%, rgba(24, 24, 24, 0.20) 77.82%, rgba(24, 24, 24, 0.76) 87.05%, #181818 100%)',
                            }}
                          />
                          <Image
                            src={image}
                            alt={item.title}
                            fill
                            className='object-cover'
                          />
                        </SwiperSlide>
                      ))}
                    <div className='absolute bottom-[0.875rem] h-[1.8125rem] pl-[0.625rem] pr-[0.375rem] right-[0.875rem] z-[2] rounded-[6.25rem] bg-white/20 backdrop-blur-[2px] flex-center space-x-[0.1875rem]'>
                      <p className='pc-14-14-r text-white'>{item.location}</p>
                      <svg
                        className='size-4'
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <path
                          d='M8.00024 13.9747C7.94991 13.9748 7.90006 13.9649 7.85356 13.9456C7.80706 13.9264 7.76482 13.8981 7.72928 13.8625L4.36194 10.4953C2.35592 8.48928 2.35592 5.22465 4.36194 3.21863C6.36796 1.21261 9.63259 1.21261 11.6386 3.21863C13.6448 5.22465 13.6448 8.48928 11.6386 10.4953L8.27127 13.8625C8.23572 13.8981 8.19347 13.9264 8.14696 13.9456C8.10045 13.9649 8.05059 13.9748 8.00024 13.9747ZM4.90387 9.95338L8.00024 13.0496L11.0966 9.95338C12.8038 8.24604 12.8038 5.4679 11.0966 3.76056C9.3891 2.05322 6.61133 2.05322 4.9038 3.76056C3.19665 5.4679 3.19665 8.24604 4.90387 9.95338Z'
                          fill='white'
                        />
                        <path
                          d='M8.0006 9.077C9.27054 9.077 10.3 8.04752 10.3 6.77758C10.3 5.50764 9.27054 4.47815 8.0006 4.47815C6.73066 4.47815 5.70117 5.50764 5.70117 6.77758C5.70117 8.04752 6.73066 9.077 8.0006 9.077Z'
                          fill='#8CC63F'
                        />
                      </svg>
                    </div>
                    <div
                      className={`swiper-pagination ${paginationClass} cursor-pointer space-x-2 absolute bottom-[1.25rem]! left-[0.875rem]! z-[2] flex items-center justify-center w-fit!`}
                    />
                  </Swiper>

                  <div className='mt-4'>
                    <Link
                      href={item.slug}
                      className='pc-2x-20-m text-[#10475F] text-trim-trim-both text-edge-[cap_alphabetic] hover:text-[#27AAE1] transition-colors duration-300'
                    >
                      {item.title}
                    </Link>
                    <p className='flex items-center mt-3'>
                      <ICCalendar2 className='size-[0.875rem] mr-[0.375rem]' />
                      <span className='pc-14-14-r text-[#10475F]/80'>
                        Thời gian: {item.duration}
                      </span>
                    </p>
                    <p className='flex items-center mt-[0.4375rem]'>
                      <ICHotel className='size-[0.875rem] mr-[0.375rem]' />
                      <span className='pc-14-14-r text-[#10475F]/80'>
                        Mã khách sạn: {item.hotelCode}
                      </span>
                    </p>
                    <p className='pc-16-16-r text-[#10475F]/60 mt-4'>
                      từ{' '}
                      <strong className='pc-18-18-m text-[#10475F]'>
                        {formatPrice(item.price)}
                      </strong>{' '}
                      / người
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
      </Swiper>
      <div className='flex-y-center justify-between absolute top-[7.4375rem] left-[-1.125rem] right-[0.6875rem] z-[11]'>
        <button
          type='button'
          className='transition-all duration-300 combo-prev size-[2.5rem] rounded-full bg-white flex-center cursor-pointer shadow-[0_0_30px_0_rgba(0,0,0,0.12)]'
        >
          <svg
            className='size-[1.25rem]'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              d='M3.55762 10.0004L8.91992 15.3617L10.2939 15.3197L8.14355 13.1693C7.4445 12.4713 6.80521 11.8461 6.22461 11.2943L5.42383 10.5326L6.52832 10.5277L15.415 10.4857L15.3672 9.42419L6.44629 9.46716L5.32324 9.47302L6.13867 8.70056C6.42226 8.43187 6.72109 8.14414 7.03516 7.83728L8.02344 6.85876L10.252 4.63123L8.9707 4.58923L3.55762 10.0004Z'
              fill='#10475F'
              stroke='#10475F'
              strokeWidth='0.8888'
            />
          </svg>
        </button>
        <button
          type='button'
          className='transition-all duration-300 combo-next size-[2.5rem] rounded-full bg-white flex-center cursor-pointer shadow-[0_0_30px_0_rgba(0,0,0,0.12)]'
        >
          <svg
            className='size-[1.25rem] rotate-180'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              d='M3.55762 10.0004L8.91992 15.3617L10.2939 15.3197L8.14355 13.1693C7.4445 12.4713 6.80521 11.8461 6.22461 11.2943L5.42383 10.5326L6.52832 10.5277L15.415 10.4857L15.3672 9.42419L6.44629 9.46716L5.32324 9.47302L6.13867 8.70056C6.42226 8.43187 6.72109 8.14414 7.03516 7.83728L8.02344 6.85876L10.252 4.63123L8.9707 4.58923L3.55762 10.0004Z'
              fill='#10475F'
              stroke='#10475F'
              strokeWidth='0.8888'
            />
          </svg>
        </button>
      </div>
      <div className='flex-y-center justify-between mt-[1.4375rem] w-[47.4375rem]'>
        <div className='combo-pagination' />
        <Link
          href='/'
          className='pc-16-16-r text-[#FFF] text-trim-trim-both text-edge-[cap_alphabetic] h-[2.5rem] px-4 flex-center bg-[#27AAE1] rounded-[6.25rem]'
        >
          Xem tất cả
          <ICRightArrow className='size-[0.875rem] ml-2' />
        </Link>
      </div>
    </div>
  )
}

export default List
