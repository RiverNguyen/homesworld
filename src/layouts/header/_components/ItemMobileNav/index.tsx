import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const ItemMobileNav = () => {
  return (
    <div>
      <div className='flex justify-between items-center py-[1.125rem]'>
        <div className='flex'>
          <Image
            className='size-[1.375rem] mr-[0.75rem]'
            width={22}
            height={22}
            alt=''
            src={
              'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/message-question.svg'
            }
          ></Image>
          <span className='mb-20-m text-[#10475F]'>Hỗ Trợ</span>
        </div>
        <ChevronRight className='size-[1rem]'></ChevronRight>
      </div>
      <svg
        width='351'
        height='1'
        viewBox='0 0 351 1'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line
          opacity='0.2'
          x1='351'
          y1='0.5'
          x2='-4.37114e-08'
          y2='0.499969'
          stroke='#10475F'
          strokeDasharray='4 4'
        />
      </svg>
    </div>
  )
}

export default ItemMobileNav
