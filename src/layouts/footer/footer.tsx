import Image from 'next/image'
import Link from 'next/link'

import { IFooterAcf } from '@/interfaces/footer.interface'
import footerService from '@/services/footer'

const Footer = async () => {
  const [{ footer }]: [{ footer: IFooterAcf }] = await Promise.all([footerService.getFooter()])

  return (
    <footer className='bg-white shadow-[0rem_-0.75rem_1.6875rem_0rem_rgba(217,214,211,0.1),0rem_-3.0625rem_3.0625rem_0rem_rgba(217,214,211,0.09),0rem_-6.875rem_4.125rem_0rem_rgba(217,214,211,0.05),0rem_-12.25rem_4.875rem_0rem_rgba(217,214,211,0.01),0rem_-19.1875rem_5.375rem_0rem_rgba(217,214,211,0)]'>
      <div className='xsm:pb-[5.25rem] xsm:flex-col xsm:items-center xsm:px-0 xsm:py-[1.5rem] mx-auto max-w-[87.5rem] flex justify-between py-[3.375rem]'>
        <Link href={'/'}>
          <Image
            className='xsm:mb-[1.38rem] xsm:w-[14.875rem] xsm:h-[4.9375rem] w-[17.3rem] h-[5.75rem]'
            src={footer.logo}
            alt='Logo'
            width={276}
            height={92}
          />
        </Link>
        <div className='xsm:order-5 xsm:max-w-max flex flex-col max-w-[17.9rem]'>
          <svg className='mb-[1.38rem] lg:hidden' width="350" height="1" viewBox="0 0 350 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line opacity="0.2" x1="350" y1="0.5" x2="-4.37114e-08" y2="0.499971" stroke="#10475F" strokeDasharray="4 4"/>
          </svg>
          {footer.info.map((item, index) => {
            if (!item.link.url || !item.link.title) {
              return
            }
            return (
              <div
                key={index}
                className='xsm:justify-center xsm:items-center flex mb-[0.75rem] last:mb-0 lg:hover:opacity-70 transition-all duration-300'
              >
                {/* <Icon className='xsm:size-[0.875rem] size-[1rem] '></Icon> */}
                <Image
                  className='size-[1rem] xsm:mr-[0.5rem] mr-[0.62rem] xsm:size-[0.875rem] shrink-0'
                  width={16}
                  height={16}
                  alt='Logo info'
                  src={item.icon}
                />
                <Link
                  href={item.link.url}
                  target={item.link.target}
                  className='xsm:text-[0.875rem] pc-16-16-r text-[#10475F] text-edge-[cap_alphabetic] [text-box-trim:trim-both]'
                >
                  {item.link.title}
                </Link>
              </div>
            )
          })}
        </div>
        {/* <FooterClient acfFooter={footer}></FooterClient> */}
        <div className='xsm:hidden flex flex-col lg:max-w-[10rem]'>
          {footer.first_column.map((item, index) => {
            if (!item.link.url || !item.link.title) {
              return
            }
            return (
              <Link
                href={item.link.url}
                className='pc-16-16-r text-[#10475F] lg:hover:opacity-70 transition-all duration-300 mb-[1.62rem] last:mb-0 text-edge-[cap_alphabetic] [text-box-trim:trim-both]'
                key={index}
              >
                {item.link.title}
              </Link>
            )
          })}
        </div>

        <div className='xsm:flex relative hidden flex-row pt-[1.38rem] px-[1rem] w-full justify-between lg:max-w-[10rem]'>
          <svg className='absolute top-0 left-1/2 -translate-x-1/2 mb-[1.38rem] lg:hidden' width="350" height="1" viewBox="0 0 350 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line opacity="0.2" x1="350" y1="0.5" x2="-4.37114e-08" y2="0.499971" stroke="#10475F" strokeDasharray="4 4"/>
          </svg>
          {footer.link_mobile.map((item, index) => {
            if (!item.link.url || !item.link.title) {
              return
            }
            return (
              <a
                href={item.link.url}
                className='xsm:block xsm:text-[0.875rem] hidden pc-16-16-r text-[#10475F]'
                key={index}
              >
                {item.link.title}
              </a>
            )
          })}
        </div>
        <div className='xsm:hidden w-[18.1875rem] flex flex-col'>
          {footer.second_column.map((item, index) => {
            if (!item.link.url || !item.link.title) {
              return
            }
            return (
              <Link
                href={item?.link?.url}
                className='pc-16-16-r text-[#10475F] lg:hover:opacity-70 transition-all duration-300 mb-[1.62rem] last:mb-0 text-edge-[cap_alphabetic] [text-box-trim:trim-both]'
                key={index}
              >
                {item.link.title}
              </Link>
            )
          })}
        </div>
        <div className='xsm:order-4 xsm:my-[1.38rem] flex'>
          {footer.social_footer.map((item, index) => {
            return (
              <a
                href={item?.link?.url ?? '#'}
                target='_blank'
                key={index}
                className='xsm:rounded-[4.89131rem] flex justify-center items-center rounded-[6.25rem] mr-[1rem] last:mr-0 size-[2.875rem] bg-[#10475F]/6 lg:hover:opacity-70 transition-all duration-300'
              >
                <Image
                  width={18}
                  height={18}
                  className='xsm:size-[0.88044rem] size-[1.25rem]'
                  src={item?.icon}
                  alt='Icon social media'
                />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
