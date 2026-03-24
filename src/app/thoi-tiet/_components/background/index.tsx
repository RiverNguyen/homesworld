import Image from 'next/image'
import React from 'react'
import Desc from '../desc'

const Backgroud
 = () => {
  return (
    <div className='relative w-[87.5rem] h-[37.1rem]'>
      <Image
        src='/thoi-tiet/backgroud.webp'
        alt='weather'
        fill
        className='absolute w-full top-0 left-0 w-full h-full '
      />
      <h1 className='absolute top-[2.5rem] left-[2.5rem] text-[white] pc-h2-46-s-mons font-montserrat max-w-[27rem]   flex-shrink-0 '>
        Nắng mưa tại nơi bạn sắp đến
      </h1>


      <Desc />
    </div>
  )
}

export default Backgroud
