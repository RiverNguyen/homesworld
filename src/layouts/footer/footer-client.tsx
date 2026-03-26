'use client'
import Link from 'next/link'

import { useIsMobile } from '@/hooks/useIsMobile'
import { IFooterAcf } from '@/interface/footer'

const FooterClient = ({ acfFooter: footer }: { acfFooter: IFooterAcf }) => {
  const { isMobile } = useIsMobile()

  if (!isMobile) {
    return (
      <div className='xsm:flex-row xsm:pt-[1.38rem] xsm:w-full flex flex-col xsm:border-t-1 border-dashed border-[#10475F]/20 lg:max-w-[10rem]'>
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
    )
  }
  return (
    <div className='xsm:flex-row xsm:pt-[1.38rem] xsm:w-full flex justify-between flex-col xsm:border-t-1 border-dashed border-[#10475F]/20 lg:max-w-[10rem]'>
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
  )
}

export default FooterClient
