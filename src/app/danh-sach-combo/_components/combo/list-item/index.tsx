'use client'

import Image from 'next/image'
import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SidebarContent, type FilterFormValues } from '@/app/danh-sach-combo/_components/combo/form'
import PaginationCustom from '@/app/danh-sach-combo/_components/item/pagination-custom'
import SidebarProvider from '@/app/danh-sach-combo/_components/item/sidebar-provide'
import SortDropdown from '@/app/danh-sach-combo/_components/item/sort'
import useIsMobile from '@/hooks/useIsMobile'

import { Button } from '@/components/ui/button'

import './index.css'
import 'swiper/css'
import 'swiper/css/pagination'

type TourCardProps = {
  title: string
  location: string
  duration: string
  bookingCode: string
  price: number
  isSingleColumn?: boolean
  images: string[]
}
type ListItemProps = {
  form: UseFormReturn<FilterFormValues>
}

type IconProps = React.SVGProps<SVGSVGElement>

const TourCard = ({
  title,
  location,
  duration,
  bookingCode,
  price,
  images,
  isSingleColumn,
}: TourCardProps) => {
  const infoIconSpacingClass = isSingleColumn ? 'mr-[0.38rem]' : 'mr-[0.25rem] xsm:mr-[0.31rem]'

  const imageHeightClass = isSingleColumn ? 'h-[21.92047rem]' : 'h-[20.73297rem] xsm:h-[10.75rem]'

  const locationPositionClass = isSingleColumn
    ? 'bottom-[0.88rem] right-[0.88rem] xsm:bottom-[0.5rem] xsm:right-[0.5rem]'
    : 'bottom-[0.88rem] right-[0.88rem] xsm:top-[0.62rem] xsm:left-[0.62rem] xsm:bottom-auto xsm:right-auto'

  const swiperClass = isSingleColumn ? 'tour-swiper-single' : 'tour-swiper-default'

  const titleClass = isSingleColumn ? 'm-20-20 pt-[0.75rem]' : 'pc-2x-20-m xsm:m-14-14'

  const durationClass = isSingleColumn
    ? 'r-14-14 flex items-center pt-[0.62rem]'
    : 'pc-14-14-r pt-[0.75rem] xsm:hidden xsm:text-[0.75rem] xsm:leading-[1rem] xsm:pt-[0.5rem]'

  const bookingCodeClass = isSingleColumn
    ? 'r-14-14 flex items-center pt-[0.62rem]'
    : 'pc-14-14-r flex items-center pt-[0.44rem] xsm:r-12-12'

  const priceWrapperClass = isSingleColumn ? 'pt-[0.88rem]' : 'pt-[1rem] xsm:pt-[0.31rem]'

  const pricePrefixClass = isSingleColumn
    ? 'm-16-16-m mr-[0.25rem] text-[#10475F]/60'
    : 'pc-16-16-r mr-[0.25rem] text-[#10475F]/60 xsm:r-12-12'

  const priceValueClass = isSingleColumn
    ? 'pc-18-18 text-[#10475F]'
    : 'pc-18-18-m text-[#10475F] xsm:m-14-14'

  const priceSlashClass = isSingleColumn
    ? 'm-16-16-m ml-[0.25rem] text-[#10475F]/60'
    : 'pc-16-16-r ml-[0.25rem] text-[#10475F]/60 xsm:r-12-12'

  const priceUnitClass = isSingleColumn
    ? 'm-16-16-m ml-[0.25rem] text-[#10475F]/60'
    : 'pc-16-16-r ml-[0.25rem] text-[#10475F]/60 xsm:r-12-12'
  const locationTextClass = isSingleColumn ? 'leading-[0.875rem]' : ''
  return (
    <div className='group min-w-0 w-full cursor-pointer'>
      <div
        className={`
          relative w-full overflow-hidden rounded-[1rem]
          ${imageHeightClass}
        `}
      >
        <div className='absolute left-0 top-0 h-full w-full origin-center transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:group-hover:scale-y-[0.9285]'>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className={`h-full w-full ${swiperClass}`}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className='relative h-full w-full'>
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className='rounded-[1rem] object-cover'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className={`
    absolute z-10 flex max-w-[calc(100%-1rem)] items-center rounded-[6.25rem]
    bg-white/20 py-[0.1875rem] pl-[0.625rem] pr-[0.375rem]
    font-display text-white backdrop-blur-[0.25rem] pc-14-14-r
    transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
    md:group-hover:translate-y-[-0.74rem]
    xsm:py-[0.125rem] xsm:pl-[0.5rem] xsm:pr-[0.375rem]
    xsm:text-[0.75rem] xsm:leading-[0.875rem]
    ${locationPositionClass}
    ${locationTextClass}
  `}
        >
          <span className='truncate'>{location}</span>
          <ICmap className='ml-[0.375rem] h-[0.875rem] w-[0.875rem] shrink-0' />
        </div>
      </div>

      <div className='pt-[1rem] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:group-hover:translate-y-[-0.74rem] xsm:pt-[0.5rem]'>
        <p
          className={`
            font-display text-[#10475F] text-edge-[cap_alphabetic]
            md:group-hover:text-[#27AAE1]
            md:group-hover:underline
            md:group-hover:underline-offset-[0.2rem]
            md:group-hover:decoration-[0.0625rem]
            ${titleClass}
          `}
        >
          {title}
        </p>

        <div
          className={`
            font-display text-[#10475F]/80 flex items-center
            ${durationClass}
          `}
        >
          <ICTime className={`h-[0.875rem] w-[0.875rem] shrink-0 ${infoIconSpacingClass}`} />
          <span>Thời gian: {duration}</span>
        </div>

        <div
          className={`
            font-display text-[#10475F]/80
            ${bookingCodeClass}
          `}
        >
          <ICHome className={`h-[0.875rem] w-[0.875rem] shrink-0 ${infoIconSpacingClass}`} />
          <span>Mã đặt khách sạn: {bookingCode}</span>
        </div>

        <div className={priceWrapperClass}>
          <p className='font-display'>
            <span className={pricePrefixClass}>từ</span>
            <span className={priceValueClass}>{price.toLocaleString('vi-VN')}đ</span>
            <span className={priceSlashClass}>/</span>
            <span className={priceUnitClass}>người</span>
          </p>
        </div>
      </div>
    </div>
  )
}

type SelectedFilterItem = {
  key: string
  label: string
  type: 'priceRange' | 'stay' | 'area'
  value?: string
}
const ListItem = ({ form }: ListItemProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isSingleColumn, setIsSingleColumn] = useState(false)
  const isMobile = useIsMobile()
  const [openSidebar, setOpenSidebar] = useState(false)

  const [selectedItems, setSelectedItems] = useState<SelectedFilterItem[]>([])
  const [selectedSort, setSelectedSort] = useState('')
  return (
    <div className='flex flex-col'>
      <div className='flex items-end justify-between xsm:flex-col xsm:items-start'>
        <div className='flex items-end justify-between w-full xsm:items-center xsm:px-[0.75rem]'>
          <p className='font-display text-[#27AAE1] pc-2x-20-m xsm:m-16-16'>58 Kết quả liên quan</p>

          <SortDropdown isMobile={isMobile} />

          {isMobile && (
            <div className='flex items-center justify-center'>
              <Button
                type='button'
                onClick={() => setOpenSidebar(true)}
                className='mr-[0.5rem] flex h-[2.25rem] w-[5.25rem] items-center justify-center rounded-[6.25rem] bg-[#27AAE1] p-[0.875rem] font-display text-white'
              >
                Bộ lọc <ICSort className='size-[0.8125rem]' />
              </Button>

              <SidebarProvider
                open={openSidebar}
                setOpen={setOpenSidebar}
                className='rounded-l-[1rem]'
              >
                <SidebarContent
                  form={form}
                  onApply={({ formValues: _formValues, selectedItems, sortValue }) => {
                    // TODO: dùng formValues để call API search/filter data thật
                    setSelectedItems(selectedItems)
                    setSelectedSort(sortValue ?? '')
                    setOpenSidebar(false)
                  }}
                />
              </SidebarProvider>

              <Button
                type='button'
                className='flex size-[2.25rem] items-center justify-center rounded-[6.25rem] bg-[#27AAE1] p-[0.875rem]'
                onClick={() => setIsSingleColumn((prev) => !prev)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='size-[0.8125rem]'
                  viewBox='0 0 13 13'
                  fill='none'
                >
                  <g clipPath='url(#clip0_2637_19367)'>
                    <path
                      d='M0.619141 7.30957H5.57129C5.63704 7.30957 5.69043 7.36296 5.69043 7.42871V12.3809C5.69043 12.4466 5.63704 12.5 5.57129 12.5H0.619141C0.553392 12.5 0.5 12.4466 0.5 12.3809V7.42871C0.5 7.36296 0.553392 7.30957 0.619141 7.30957ZM7.42871 7.30957H12.3809C12.4466 7.30957 12.5 7.36296 12.5 7.42871V12.3809C12.5 12.4466 12.4466 12.5 12.3809 12.5H7.42871C7.36296 12.5 7.30957 12.4466 7.30957 12.3809V7.42871C7.30957 7.36296 7.36296 7.30957 7.42871 7.30957ZM0.619141 0.5H5.57129C5.63704 0.5 5.69043 0.553392 5.69043 0.619141V5.57129C5.69043 5.63704 5.63704 5.69043 5.57129 5.69043H0.619141C0.553392 5.69043 0.5 5.63704 0.5 5.57129V0.619141C0.5 0.553392 0.553393 0.5 0.619141 0.5ZM7.42871 0.5H12.3809C12.4466 0.5 12.5 0.553392 12.5 0.619141V5.57129C12.5 5.63704 12.4466 5.69043 12.3809 5.69043H7.42871C7.36296 5.69043 7.30957 5.63704 7.30957 5.57129V0.619141C7.30957 0.553392 7.36296 0.5 7.42871 0.5Z'
                      stroke='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_2637_19367'>
                      <rect
                        width='13'
                        height='13'
                        fill='white'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </div>
          )}
        </div>
      </div>
      {isMobile && (
        <>
          {/* TODO: render danh sách filter đã chọn, dài thì vuốt ngang */}
          {!!selectedItems.length && (
            <div className='mt-[1rem] overflow-x-auto overflow-y-hidden no-scrollbar bg-transparent pl-[0.75rem]'>
              <div className='flex min-w-max items-center gap-[0.5rem] bg-transparent'>
                {selectedItems.map((item) => (
                  <div
                    key={item.key}
                    className='flex h-[2.25rem] shrink-0 items-center rounded-[6.25rem] border-[0.0625rem] border-[#D9D9D9] bg-white pr-[0.38rem]'
                  >
                    <span className='ml-[0.62rem] text-[#10475F] r-14'>{item.label}</span>

                    <ICClose className='ml-[0.38rem] flex size-[1.04169rem] items-center justify-center rounded-full text-[#27AAE1]' />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
      <div
        className={`
    mt-[1rem] grid grid-cols-3 gap-x-[1rem] gap-y-[3rem]
    xsm:gap-y-[1.5rem] xsm:px-[0.75rem]
    ${isMobile ? (isSingleColumn ? 'xsm:grid-cols-1' : 'xsm:grid-cols-2 xsm:gap-x-[0.5rem]') : ''}
  `}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className='w-full min-w-0 xsm:max-w-full'
          >
            <TourCard
              {...item}
              isSingleColumn={isSingleColumn}
            />
          </div>
        ))}
      </div>
      <div className='mt-[2rem] flex justify-center'>
        <PaginationCustom
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default ListItem
type ICMapProps = React.SVGProps<SVGSVGElement> & {
  sizeRem?: number
}
export function ICClose({ className, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      className={className}
    >
      <path
        d='M9.99999 18.3337C14.5833 18.3337 18.3333 14.5837 18.3333 10.0003C18.3333 5.41699 14.5833 1.66699 9.99999 1.66699C5.41666 1.66699 1.66666 5.41699 1.66666 10.0003C1.66666 14.5837 5.41666 18.3337 9.99999 18.3337Z'
        stroke='#27AAE1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.64166 12.3583L12.3583 7.6416'
        stroke='#27AAE1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.3583 12.3583L7.64166 7.6416'
        stroke='#27AAE1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function ICmap({ sizeRem = 1, style, ...props }: ICMapProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      fill='none'
      style={{
        width: `${sizeRem}rem`,
        height: `${sizeRem}rem`,
        aspectRatio: '1 / 1',
        ...style,
      }}
    >
      <path
        d='M7.99976 13.9745C7.94942 13.9746 7.89957 13.9647 7.85307 13.9454C7.80657 13.9261 7.76433 13.8979 7.72879 13.8622L4.36145 10.4951C2.35543 8.48904 2.35543 5.2244 4.36145 3.21838C6.36747 1.21236 9.6321 1.21236 11.6381 3.21838C13.6443 5.2244 13.6443 8.48904 11.6381 10.4951L8.27078 13.8622C8.23523 13.8979 8.19298 13.9261 8.14647 13.9454C8.09996 13.9647 8.0501 13.9746 7.99976 13.9745ZM4.90338 9.95313L7.99976 13.0493L11.0961 9.95313C12.8033 8.24579 12.8033 5.46765 11.0961 3.76031C9.38861 2.05297 6.61084 2.05297 4.90332 3.76031C3.19616 5.46765 3.19616 8.24579 4.90338 9.95313Z'
        fill='white'
      />
      <path
        d='M8.00011 9.07639C9.27005 9.07639 10.2995 8.04691 10.2995 6.77697C10.2995 5.50703 9.27005 4.47754 8.00011 4.47754C6.73017 4.47754 5.70068 5.50703 5.70068 6.77697C5.70068 8.04691 6.73017 9.07639 8.00011 9.07639Z'
        fill='#8CC63F'
      />
    </svg>
  )
}

const data = [
  {
    id: 1,
    title: 'Combo du lịch Tà Xùa',
    location: 'Demo 1',
    duration: '3 ngày 2 đêm',
    bookingCode: 'QKFGAKD',
    price: 1850000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 2,
    title: 'Combo du lịch Sapa',
    location: 'Demo 2',
    duration: '2 ngày 1 đêm',
    bookingCode: 'ABCD123',
    price: 2250000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 3,
    title: 'Combo du lịch Mộc Châu',
    location: 'Demo 3',
    duration: '3 ngày 2 đêm',
    bookingCode: 'XYZ456',
    price: 1990000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 4,
    title: 'Combo du lịch Đà Lạt',
    location: 'Demo 4',
    duration: '4 ngày 3 đêm',
    bookingCode: 'DLAT789',
    price: 3150000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 5,
    title: 'Combo du lịch Phú Quốc',
    location: 'Demo 5',
    duration: '3 ngày 2 đêm',
    bookingCode: 'PQ12345',
    price: 4250000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 6,
    title: 'Combo du lịch Nha Trang',
    location: 'Demo 6',
    duration: '3 ngày 2 đêm',
    bookingCode: 'NT67890',
    price: 2890000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },

  {
    id: 7,
    title: 'Combo du lịch Đà Lạt',
    location: 'Demo 4',
    duration: '4 ngày 3 đêm',
    bookingCode: 'DLAT789',
    price: 3150000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 8,
    title: 'Combo du lịch Phú Quốc',
    location: 'Demo 5',
    duration: '3 ngày 2 đêm',
    bookingCode: 'PQ12345',
    price: 4250000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 9,
    title: 'Combo du lịch Nha Trang',
    location: 'Demo 6',
    duration: '3 ngày 2 đêm',
    bookingCode: 'NT67890',
    price: 2890000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 10,
    title: 'Combo du lịch Tà Xùa',
    location: 'Demo 1',
    duration: '3 ngày 2 đêm',
    bookingCode: 'QKFGAKD',
    price: 1850000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 11,
    title: 'Combo du lịch Sapa',
    location: 'Demo 2',
    duration: '2 ngày 1 đêm',
    bookingCode: 'ABCD123',
    price: 2250000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 12,
    title: 'Combo du lịch Mộc Châu',
    location: 'Demo 3',
    duration: '3 ngày 2 đêm',
    bookingCode: 'XYZ456',
    price: 1990000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 13,
    title: 'Combo du lịch Đà Lạt',
    location: 'Demo 4',
    duration: '4 ngày 3 đêm',
    bookingCode: 'DLAT789',
    price: 3150000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 14,
    title: 'Combo du lịch Phú Quốc',
    location: 'Demo 5',
    duration: '3 ngày 2 đêm',
    bookingCode: 'PQ12345',
    price: 4250000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 15,
    title: 'Combo du lịch Nha Trang',
    location: 'Demo 6',
    duration: '3 ngày 2 đêm',
    bookingCode: 'NT67890',
    price: 2890000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },

  {
    id: 16,
    title: 'Combo du lịch Đà Lạt',
    location: 'Demo 4',
    duration: '4 ngày 3 đêm',
    bookingCode: 'DLAT789',
    price: 3150000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 17,
    title: 'Combo du lịch Phú Quốc',
    location: 'Demo 5',
    duration: '3 ngày 2 đêm',
    bookingCode: 'PQ12345',
    price: 4250000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
  {
    id: 18,
    title: 'Combo du lịch Nha Trang',
    location: 'Demo 6',
    duration: '3 ngày 2 đêm',
    bookingCode: 'NT67890',
    price: 2890000,
    images: [
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
      '/danh-sach-combo/product_image.webp',
    ],
  },
]
export function ICHome({ className, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 14 14'
      fill='none'
      className={`w-[0.875rem] h-[0.875rem] ${className ?? ''}`}
    >
      <path
        d='M1.1665 12.8333H12.8332'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.75584 12.8274L1.75584 12.8391L1.75 4.12409C1.75 3.73325 1.94834 3.37157 2.26918 3.15573L4.60251 1.59824C4.99334 1.33574 5.50666 1.33574 5.89749 1.59824L8.23082 3.15573C8.55749 3.37157 8.75 3.73325 8.75 4.12409L8.75584 12.8274Z'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.6548 12.8392V10.5'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.6667 7C11.025 7 10.5 7.525 10.5 8.16667V9.33333C10.5 9.975 11.025 10.5 11.6667 10.5C12.3083 10.5 12.8333 9.975 12.8333 9.33333V8.16667C12.8333 7.525 12.3083 7 11.6667 7Z'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.75 8.16675H8.75'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.25 12.8333V10.6458'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.25 6.125C5.73325 6.125 6.125 5.73325 6.125 5.25C6.125 4.76675 5.73325 4.375 5.25 4.375C4.76675 4.375 4.375 4.76675 4.375 5.25C4.375 5.73325 4.76675 6.125 5.25 6.125Z'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export function ICTime({ className, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 14 14'
      fill='none'
      className={`w-[0.875rem] h-[0.875rem] ${className ?? ''}`}
    >
      <path
        d='M4.6665 1.16675V2.91675'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeWidth='1.3'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.3335 1.16675V2.91675'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeWidth='1.3'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.0415 5.30249H11.9582'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeWidth='1.3'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.25 4.95841V9.91675C12.25 11.6667 11.375 12.8334 9.33333 12.8334H4.66667C2.625 12.8334 1.75 11.6667 1.75 9.91675V4.95841C1.75 3.20841 2.625 2.04175 4.66667 2.04175H9.33333C11.375 2.04175 12.25 3.20841 12.25 4.95841Z'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeWidth='1.3'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.15516 7.99162H9.1604'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.15516 9.74162H9.1604'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.99745 7.99162H7.00269'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.99745 9.74162H7.00269'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.83827 7.99162H4.84351'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.83827 9.74162H4.84351'
        stroke='#10475F'
        strokeOpacity='0.8'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export function ICSort({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='13'
      height='13'
      viewBox='0 0 13 13'
      fill='none'
      className={className}
      {...props}
    >
      <g clipPath='url(#clip0_2682_12768)'>
        <path
          d='M0.40625 2.29217H6.59153C6.77795 3.1407 7.53571 3.77772 8.43941 3.77772C9.34312 3.77772 10.1009 3.14072 10.2873 2.29217H12.5938C12.8181 2.29217 13 2.11027 13 1.88592C13 1.66157 12.8181 1.47967 12.5938 1.47967H10.2871C10.1003 0.631572 9.34152 -0.00585938 8.43941 -0.00585938C7.53683 -0.00585938 6.77838 0.631471 6.59169 1.47967H0.40625C0.181898 1.47967 0 1.66157 0 1.88592C0 2.11027 0.181898 2.29217 0.40625 2.29217ZM7.36016 1.88699L7.36018 1.88262C7.36196 1.28932 7.84608 0.806666 8.43941 0.806666C9.0319 0.806666 9.51605 1.28866 9.51862 1.88168L9.51869 1.88765C9.51775 2.48196 9.03396 2.96525 8.43941 2.96525C7.84512 2.96525 7.36148 2.48245 7.36013 1.88848L7.36016 1.88699ZM12.5938 10.7087H10.2871C10.1003 9.86061 9.34152 9.22315 8.43941 9.22315C7.53683 9.22315 6.77838 9.86051 6.59169 10.7087H0.40625C0.181898 10.7087 0 10.8906 0 11.1149C0 11.3393 0.181898 11.5212 0.40625 11.5212H6.59153C6.77795 12.3697 7.53571 13.0067 8.43941 13.0067C9.34312 13.0067 10.1009 12.3697 10.2873 11.5212H12.5938C12.8181 11.5212 13 11.3393 13 11.1149C13 10.8906 12.8181 10.7087 12.5938 10.7087ZM8.43941 12.1942C7.84512 12.1942 7.36148 11.7114 7.36013 11.1175L7.36016 11.116L7.36018 11.1116C7.36196 10.5183 7.84608 10.0357 8.43941 10.0357C9.0319 10.0357 9.51605 10.5176 9.51862 11.1106L9.51869 11.1166C9.51783 11.711 9.03401 12.1942 8.43941 12.1942ZM12.5938 6.09419H6.40847C6.22205 5.24566 5.46429 4.60866 4.56059 4.60866C3.65688 4.60866 2.89913 5.24566 2.71271 6.09419H0.40625C0.181898 6.09419 0 6.27609 0 6.50044C0 6.72481 0.181898 6.90669 0.40625 6.90669H2.71291C2.89971 7.75476 3.65848 8.39222 4.56059 8.39222C5.46317 8.39222 6.22162 7.75486 6.40831 6.90669H12.5938C12.8181 6.90669 13 6.72481 13 6.50044C13 6.27609 12.8181 6.09419 12.5938 6.09419ZM5.63984 6.49937L5.63982 6.50374C5.63804 7.09704 5.15392 7.57969 4.56059 7.57969C3.9681 7.57969 3.48395 7.0977 3.48138 6.5047L3.48131 6.49876C3.4822 5.90437 3.96602 5.42116 4.56059 5.42116C5.15488 5.42116 5.63852 5.90394 5.63987 6.49792L5.63984 6.49937Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_2682_12768'>
          <rect
            width='13'
            height='13'
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
