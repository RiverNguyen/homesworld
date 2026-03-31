'use client'

import 'swiper/css'
import SwiperList from '@/app/lien-he/_components/swiper'
import ICCall from '@/components/ui/icons/ICCall'
import ICLocation from '@/components/ui/icons/ICLocation'
import type { Contact as ContactType } from '@/interfaces/contact.interface'

const Desc = ({ data }: { data: ContactType }) => {
  return (
    <div className='contact__left flex flex-col  xsm:w-[100%]  xsm:px[2rem] xsm:py[0.75rem]'>
      <h1 className='self-stretch w-full text-[#10475F] pc-h2-46-s-mons font-montserrat xsm:s-25-mon text-trim-both text-edge-[cap_alphabetic]'>
        {data.title}
      </h1>

      <div className='mt-[1.12rem]  flex flex-col xsm:mt-[0.88rem]'>
        <div className='contact__item flex items-center leading-[1]'>
          <ICCall className='h-[1rem] w-[1rem] shrink-0 text-[#10475F]/80 xsm:size-[0.875rem]' />
          <p className='pc-16-16-r ml-[0.625rem] text-[#10475F]/80 leading-[1] xsm:r-14  xsm:ml-[0.5rem]'>
            {data.opening_hours}
          </p>
        </div>

        <div className='contact__item mt-[0.75rem] flex items-center leading-[1] xsm:mt-[0.62rem]'>
          <ICLocation className='h-[1rem] w-[1rem] shrink-0 text-[#10475F]/80 xsm:size-[0.875rem]' />

          <a
            href={data.location.link_google_map}
            target='_blank'
            rel='noopener noreferrer'
            className='pc-16-16-r ml-[0.625rem] text-[#10475F]/80 leading-[1] hover:underline xsm:r-14 xsm:ml-[0.5rem]'
          >
            {data.location.address}
          </a>
        </div>
      </div>

      <div className='flex flex-col mt-[1.88rem] xsm:mt-[1.25rem]'>
        <h3 className='pc-2x-20-m !m-[0] text-[#10475F] text-trim-both text-edge-[cap_alphabetic] xsm:m-16 py-[0.375rem] '>
          {data.social_links.follow_us_title}
        </h3>

        <div className='mt-[1.12rem] relative w-fit xsm:mt-[0.38rem]'>
          <SwiperList data={data?.social_links?.social} />
        </div>
      </div>
    </div>
  )
}

export default Desc
