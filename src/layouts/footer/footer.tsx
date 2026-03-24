import Image from 'next/image'
import Link from 'next/link'
import { ComponentType, SVGProps } from 'react'

import ICEmail from '@/components/icon/ICEmail'
import ICFacebook from '@/components/icon/ICFacebook'
import ICInstagram from '@/components/icon/ICInstagram'
import ICLocation from '@/components/icon/ICLocation'
import ICPhone from '@/components/icon/ICPhone'
import ICTiktok from '@/components/icon/ICTiktok'

interface IInfoFooter {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  href: string
}

interface ILinkUrl {
  title: string
  href: string
}

const infoFooter: IInfoFooter[] = [
  {
    icon: ICPhone,
    title: '(+84) 0979 409 888',
    href: 'tel:(+84) 0979 409 888',
  },
  {
    icon: ICEmail,
    title: 'Email: info@homesworld.com.vn',
    href: 'mailto:info@homesworld.com.vn',
  },
  {
    icon: ICLocation,
    title: '31 Trần Kim Xuyến, Yên Hoà, Cầu Giấy, Hà Nội, Việt Nam',
    href: 'https://maps.google.com?q=21.0285,105.8542',
  },
]
const services: ILinkUrl[] = [
  {
    title: 'Combo du lịch',
    href: '#',
  },
  { title: 'Khách sạn', href: '#' },
  { title: 'Liên hệ', href: '#' },
  // { title: 'Chính sách', href: '#' },
]
const servicesMb: ILinkUrl[] = [
  { title: 'Combo du lịch', href: '#' },
  { title: 'Khách sạn', href: '#' },
  { title: 'Liên hệ', href: '#' },
  { title: 'Chính sách', href: '#' },
]

const policys: ILinkUrl[] = [
  { title: 'Chính sách hoàn tiền', href: '#' },
  { title: 'Chính sách thanh toán - quy trình', href: '#' },
  { title: 'Chính sách huỷ - đổi lịch - hoàn tiền ', href: '#' },
]
const iconSocial: { icon: ComponentType<SVGProps<SVGSVGElement>>; href: string }[] = [
  { icon: ICInstagram, href: '#' },
  { icon: ICFacebook, href: '#' },
  { icon: ICTiktok, href: '#' },
]

const Footer = () => {
  return (
    <footer className='bg-[#FFF] bg-white shadow-[0rem_-0.75rem_1.6875rem_0rem_rgba(217,214,211,0.1),0rem_-3.0625rem_3.0625rem_0rem_rgba(217,214,211,0.09),0rem_-6.875rem_4.125rem_0rem_rgba(217,214,211,0.05),0rem_-12.25rem_4.875rem_0rem_rgba(217,214,211,0.01),0rem_-19.1875rem_5.375rem_0rem_rgba(217,214,211,0)]'>
      <div className='xsm:pb-[5.25rem] xsm:flex-col xsm:px-[1rem] xsm:items-center xsm:px-0 xsm:py-[1.5rem] mx-auto max-w-[87.5rem] flex justify-between py-[3.375rem]'>
        <Link href={'/'}>
          <Image
            className='xsm:mb-[1.38rem] xsm:w-[14.875rem] xsm:h-[4.9375rem] w-[17.3rem] h-[5.75rem]'
            src={'/footer/logo_and_tagline.webp'}
            alt=''
            width={276}
            height={92}
          ></Image>
        </Link>

        <div className='xsm:order-5 xsm:max-w-max xsm:pt-[1.38rem] flex flex-col justify-between max-w-[17.9rem] xsm:border-t-1 border-dashed border-[#10475F]/20'>
          {infoFooter.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className='xsm:justify-center xsm:items-center flex mb-[0.75rem] last:mb-0 lg:hover:opacity-70 transition-all duration-300'
              >
                <div className='xsm:mr-[0.5rem] mr-[0.62rem] xsm:size-[0.875rem] '>
                  <Icon className='xsm:size-[0.875rem] size-[1rem] '></Icon>
                </div>
                <Link
                  href={item.href}
                  className='xsm:text-[0.875rem] pc-16-16-r text-[#10475F] text-edge-[cap_alphabetic] [text-box-trim:trim-both]'
                >
                  {item.title}
                </Link>
              </div>
            )
          })}
        </div>
        <div className='xsm:flex-row xsm:pt-[1.38rem] xsm:w-full flex flex-col justify-between xsm:border-t-1 border-dashed border-[#10475F]/20 lg:max-w-[10rem]'>
          {services.map((item, index) => {
            return (
              <a
                href={item.href}
                className='xsm:hidden xsm:text-[0.875rem] pc-16-16-r text-[#10475F] lg:hover:opacity-70 line-clamp-1 transition-all duration-300'
                key={index}
              >
                {item.title}
              </a>
            )
          })}
          {servicesMb.map((item, index) => {
            return (
              <a
                href={item.href}
                className='xsm:block xsm:text-[0.875rem] hidden pc-16-16-r text-[#10475F]'
                key={index}
              >
                {item.title}
              </a>
            )
          })}
        </div>
        <div className='xsm:hidden w-[18.1875rem] flex flex-col justify-between'>
          {policys.map((item, index) => {
            return (
              <Link
                href={item.href}
                className='pc-16-16-r text-[#10475F] lg:hover:opacity-70 transition-all duration-300'
                key={index}
              >
                {item.title}
              </Link>
            )
          })}
        </div>
        <div className='xsm:order-4 xsm:my-[1.38rem] flex'>
          {iconSocial.map((item, index) => {
            const Icon = item.icon
            return (
              <a
                href={item.href}
                target='_blank'
                key={index}
                className='xsm:rounded-[4.89131rem] flex justify-center items-center rounded-[6.25rem] mr-[1rem] last:mr-0 size-[2.875rem] bg-[#10475F]/6 lg:hover:opacity-70 transition-all duration-300'
              >
                <Icon className='xsm:size-[0.97825rem] size-[1.25rem]'></Icon>
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
