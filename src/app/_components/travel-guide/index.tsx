'use client'

import Link from 'next/link'
import { Fragment } from 'react'

import ICLineDashed from '@/components/icons/ICLineDashed'
import ICRightArrow from '@/components/icons/ICRightArrow'
import BlogItemCompact from '@/components/shared/blog/BlogItemCompact'
import useIsMobile from '@/hooks/useIsMobile'
import { PostItem } from '@/interfaces/blog.interface'
import { TravelGuide as TravelGuideType } from '@/interfaces/home.interface'

interface TravelGuideProps {
  data: PostItem[]
  page: TravelGuideType
}

export default function TravelGuide({ page, data }: TravelGuideProps) {
  const featuredData = data.slice(0, 2)
  const compactData = data.slice(2, 5)

  const isMobile = useIsMobile()

  return (
    <section className='pt-30 mb-28.75 xsm:pt-0 xsm:mb-18 relative z-[5] bg-[#FEFBF9]'>
      <div className='w-full max-w-350 mx-auto flex flex-col gap-8'>
        <div className='flex justify-between xsm:flex-col xsm:gap-6'>
          <div className='flex flex-col gap-2.5 xsm:px-3 xsm:gap-1.5'>
            <h2 className='text-[#10475F] font-montserrat text-[2.875rem] font-semibold leading-[130%] tracking-[-0.15625rem] xsm:text-[1.5625rem] xsm:leading-[120%] xsm:tracking-[-0.09375rem]'>
              {page.title}
            </h2>
            <p className='text-box-trim-both text-box-edge-cap-alphabetic text-[rgba(16,71,95,0.80)] font-halyard-display text-[1rem] leading-[150%] xsm:text-[0.875rem]'>
              {page.description}
            </p>
          </div>

          {isMobile && (
            <div className='flex gap-3 px-3 overflow-x-auto hidden_scroll scroll-smooth'>
              {data.map((item) => (
                <div
                  key={item.id}
                  className='w-76 h-90.75 shrink-0'
                >
                  <BlogItemCompact
                    blog={item}
                    variant='large'
                  />
                </div>
              ))}
            </div>
          )}

          <Link
            href='/blog'
            className='flex-center gap-2 h-10 px-4 rounded-[6.25rem] bg-[#27AAE1] hover:bg-[#42A3CC] transition-colors duration-300 ease-out xsm:h-9 xsm:px-3.5 xsm:gap-1.75 xsm:mx-3'
          >
            <span className='text-white text-[0.875rem] leading-[150%]'>Xem tất cả</span>
            <ICRightArrow className='size-3.5 xsm:size-3.25' />
          </Link>
        </div>

        {!isMobile && (
          <div className='flex-y-center gap-5'>
            <div className='flex-y-center flex-1 gap-5'>
              {featuredData.map((item) => (
                <div
                  key={item.id}
                  className='w-98.5 h-117.75'
                >
                  <BlogItemCompact
                    blog={item}
                    variant='large'
                  />
                </div>
              ))}
            </div>

            <div className='flex flex-col gap-4 w-143.25'>
              {compactData?.map((item, index) => (
                <Fragment key={item.id}>
                  {index === 0 && <ICLineDashed className='w-full' />}
                  <BlogItemCompact blog={item} />
                  <ICLineDashed className='w-full' />
                </Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
