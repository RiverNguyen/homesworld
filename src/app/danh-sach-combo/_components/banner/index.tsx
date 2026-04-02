'use client'

import Image from 'next/image'

import useIsMobile from '@/hooks/useIsMobile'

const Banner = () => {
  const isMobile = useIsMobile()

  return (
    <div className='relative max-w-[100rem] w-full'>
      {/* ẢNH */}
      <Image
        src={
          isMobile
            ? '/danh-sach-combo/background_mobile.webp'
            : '/danh-sach-combo/background_image.webp'
        }
        alt='Banner'
        width={1200}
        height={400}
        className='w-full h-auto object-cover'
        
      />
      {/* TEXT */}
      <div
        className='absolute left-[6.25rem] bottom-[3rem] z-[2]   xsm:left-[0.75rem]
    xsm:top-[2.56rem]
    xsm:bottom-[2.56rem]

    xsm:flex xsm:flex-col xsm:justify-center'
      >
        <h1 className='pc-h1-48-s text-white font-montserrat mb-[0.75rem] xsm:pc-26-s-mons xsm:mb-[0.25rem]'>
          Danh sách combo
        </h1>
        <p className='pc-16-16-r text-white xsm:r-14 opacity-[0.8] xsm:max-w-[15rem] '>
          Danh sách địa điểm được chúng tôi tổng hợp cho là tốt nhất
        </p>
      </div>
    </div>
  )
}

export default Banner
