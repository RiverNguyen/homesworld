import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

import { Button } from '@/components/ui/button'
import { ICategory } from '@/interfaces/header.interface'
import CardItem from '@/layouts/header/_components/CardItem/index'

type ListCardProps = {
  data: ICategory[]
}
const ListCard = ({ data }: ListCardProps) => {
  const decoRef = useRef<HTMLDivElement>(null)
  const checkScrollPosition = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement
    const scrollHeight = element.scrollHeight
    const scrollPosition = element.scrollTop + element.clientHeight
    if (scrollPosition + 20 >= scrollHeight) {
      if (decoRef.current) decoRef.current.style.opacity = '0'
    } else if (decoRef.current) {
      decoRef.current.style.opacity = '1'
    }
  }
  const lockBodyScroll = () => {
    document.body.style.overflow = 'hidden'
  }
  const unlockBodyScroll = () => {
    document.body.style.overflow = ''
  }

  return (
    <div className='pointer-events-none'>
      <div className='absolute z-[-1] w-screen h-screen left-[50%] -translate-x-1/2 top-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.3)_8.1%,_rgba(0,0,0,0.7)_24.19%)]'></div>
      {/* Clound */}
      <div
        onMouseEnter={lockBodyScroll}
        onMouseLeave={unlockBodyScroll}
        className='w-[87.5rem] bg-white h-[30.38rem] pointer-events-auto p-[2.1875rem] pr-[0.62rem] mx-auto rounded-[1.125rem] shadow-[0.125rem_0.375rem_2rem_0rem_rgba(0,0,0,0.06)] overflow-hidden'
      >
        <div
          className='grid grid-cols-9 grid-auto-rows pr-[1.38rem] gap-[1rem] max-h-full overflow-auto'
          onScroll={checkScrollPosition}
        >
          {Array.isArray(data) &&
            data?.map((category, index) => {
              return (
                <CardItem
                  key={index}
                  slug={category?.slug}
                  image={category?.acf?.thumbnail}
                >
                  {category?.name}
                </CardItem>
              )
            })}
          {/* <CardItem image='https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/image-item-card.webp'>
            Hà Nội - Hà Đông
          </CardItem> */}
        </div>
        <div
          ref={decoRef}
          className='z-[1] pointer-events-none rounded-b-[1.125rem] absolute w-full h-[6.625rem] bg-[linear-gradient(180deg,_rgba(248,248,248,0)_0%,_rgba(248,248,248,0.709)_39.57%,_rgba(248,248,248,1)_74.05%)] left-[0rem] bottom-0 transition-all duration-300'
        ></div>
        <Link href={'#'}>
          <Button
            variant={'primary'}
            className='z-2 absolute right-[2.19rem] bottom-[1.25rem] w-fit'
          >
            Xem tất cả
            <ArrowUpRight className='size-[0.875rem]'></ArrowUpRight>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ListCard
