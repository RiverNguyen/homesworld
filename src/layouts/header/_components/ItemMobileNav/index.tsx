'use client'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { IHeaderMenu } from '@/interfaces/header.interface'
import CardItem from '@/layouts/header/_components/CardItem/index'

type ItemMobileNavProps = {
  data: IHeaderMenu
  onClose: () => void
}
const ItemMobileNav = ({ data, onClose }: ItemMobileNavProps) => {
  const { link, icon } = data
  if (data?.select === 'normal')
    return (
      <Link
        href={link?.url ?? '#'}
        onClick={() => {
          onClose()
        }}
      >
        <Trigger icon={icon}>{link?.title ?? ''}</Trigger>
      </Link>
    )
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>
          <Trigger icon={icon}>{link?.title ?? ''}</Trigger>
        </button>
      </DrawerTrigger>
      <DrawerContent className=' rounded-tl-[1.5rem] rounded-tr-[1.5rem]  border-none'>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader>
            <DrawerTitle>{`${link?.title} tại địa điểm`}</DrawerTitle>
          </DrawerHeader>
          {data?.select === 'mega' ? (
            <div className='pr-[0.25rem]'>
              <div className='flex flex-col pb-[0.5rem] w-full min-h-[12rem] max-h-[33.97rem] overflow-auto'>
                {data?.links?.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item?.link?.url}
                      className='mb-16-m font-normal  w-full border-b-[0.0625rem] border-dashed border-[#10475F]/20 last:border-none'
                    >
                      <p className='my-[0.5rem] py-[0.875rem] pl-[1.25rem] w-full'>
                        {item?.link?.title}
                      </p>
                    </Link>
                  )
                })}
                {/* <Link
                  href={'#'}
                  className='mb-16-m font-normal  w-full border-b-[0.0625rem] border-dashed border-[#10475F]/20 last:border-none'
                >
                  <p className='my-[0.5rem] py-[0.875rem] pl-[1.25rem] w-full'>
                    Chính sách hoàn tiền
                  </p>
                </Link> */}
              </div>
            </div>
          ) : (
            <div className='relative pl-[0.75rem] pr-[0.25rem]'>
              <div className='pr-[0.28rem] pt-[0.75rem] pb-[3.65rem]  grid grid-cols-3 justify-items-center gap-y-[0.6875rem] w-full min-h-[12rem] max-h-[33.97rem] overflow-auto'>
                {data?.categories?.map((item, index) => {
                  return (
                    <CardItem
                      key={index}
                      slug={item?.slug}
                      image={item?.acf?.thumbnail}
                    >
                      {item?.name}
                    </CardItem>
                  )
                })}

                {/* <CardItem
                  slug=''
                  image='https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/image-item-card.webp'
                >
                  Hà Nội - Hà Đông
                </CardItem> */}
              </div>
              <div className='pointer-events-none pt-[2.59rem] pb-[0.38rem] px-[1rem] absolute w-[23.4375rem] h-[5.4375rem] bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.709)_39.57%,_rgba(255,255,255,1)_74.05%)] left-0 bottom-0'>
                <Link
                  href={'#'}
                  className='pointer-events-auto'
                >
                  <Button variant={'primary'}>Xem tất cả</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
type TrigerProps = {
  children: string
  icon: string
}
export const Trigger = ({ children, icon }: TrigerProps) => {
  return (
    <div className='flex justify-between w-[21.94rem] items-center py-[1.125rem] border-b-[0.0625rem] border-dashed border-[#10475F]/20'>
      <div className='flex'>
        <Image
          className='size-[1.375rem] mr-[0.75rem]'
          width={22}
          height={22}
          alt=''
          src={icon}
        ></Image>
        <span className='mb-20-m text-[#10475F]'>{children}</span>
      </div>
      <ChevronRight className='size-[1rem]'></ChevronRight>
    </div>
  )
}

export default ItemMobileNav
