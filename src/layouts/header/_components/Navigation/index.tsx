'use client'
import Link from 'next/link'

import ListCard from '@/layouts/header/_components/ListCard'

const Navigation = () => {
  return (
    <nav className='flex pt-[0.88rem]'>
      <div className='relative group '>
        <Link
          href={'#'}
          className='text-[#10475F]/80 pc-16-16-r uppercase group-hover:opacity-50  transition-all duration-300 px-[1.25rem] py-[0.5rem]'
        >
          Hỗ trợ
        </Link>
        <div className='-translate-x-1/2 absolute left-1/2 top-full pt-[1.5rem] group-hover:opacity-100 group-hover:visible invisible opacity-0 transition-all duration-300'>
          <ul className='bg-white rounded-[1.125rem] shadow-[0.125rem_0.375rem_2rem_0rem_rgba(0,0,0,0.06)] overflow-hidden'>
            <Link href={'#'}>
              <li className='pc-18-18-m font-normal cursor-pointer py-[0.875rem] pl-[1.25rem] w-[21.4375rem] h-[3.25rem] bg-white hover:bg-[#E6E6F1] transition-all duration-300'>
                Chính sách hoàn tiền
              </li>
            </Link>
            <Link href={'#'}>
              <li className='pc-18-18-m font-normal cursor-pointer py-[0.875rem] pl-[1.25rem] w-[21.4375rem] h-[3.25rem] bg-white hover:bg-[#E6E6F1] transition-all duration-300'>
                Chính sách thanh toán - quy trình
              </li>
            </Link>
            <Link href={'#'}>
              <li className='pc-18-18-m font-normal cursor-pointer py-[0.875rem] pl-[1.25rem] w-[21.4375rem] h-[3.25rem] bg-white hover:bg-[#E6E6F1] transition-all duration-300'>
                Chính sách hủy đổi lịch hoàn tiền
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className='relative group '>
        <Link
          href={'#'}
          className='text-[#10475F]/80 pc-16-16-r uppercase group-hover:opacity-50 transition-all duration-300 px-[1.25rem] py-[0.5rem]'
        >
          Combo du lịch
        </Link>
        <div className='fixed left-1/2 -translate-x-1/2 pt-[1.5rem] group-hover:opacity-100 group-hover:visible invisible opacity-0  transition-all duration-300'>
          <ListCard></ListCard>
        </div>
      </div>
      <div className='relative group '>
        <Link
          href={'#'}
          className='text-[#10475F]/80 pc-16-16-r uppercase group-hover:opacity-50  transition-all duration-300 px-[1.25rem] py-[0.5rem]'
        >
          Khách sạn
        </Link>
        <div className='fixed left-1/2 -translate-x-1/2 pt-[1.5rem] group-hover:opacity-100 group-hover:visible invisible opacity-0 transition-all duration-300'>
          <ListCard></ListCard>
        </div>
      </div>
      <div className='relative group '>
        <Link
          href={'#'}
          className='text-[#10475F]/80 pc-16-16-r uppercase group-hover:opacity-50  transition-all duration-300 px-[1.25rem] py-[0.5rem]'
        >
          Tin tức
        </Link>
      </div>
      <div className='relative group '>
        <Link
          href={'#'}
          className='text-[#10475F]/80 pc-16-16-r uppercase group-hover:opacity-50  transition-all duration-300 px-[1.25rem] py-[0.5rem]'
        >
          Liên hệ
        </Link>
      </div>
    </nav>
  )
}
export default Navigation
