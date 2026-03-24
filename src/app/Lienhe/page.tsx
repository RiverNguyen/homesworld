'use client'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

import Desc from './_components/desc'
import MyForm from './_components/form'
export default function Contact() {
  return (
    <div className='contact bg-[#FEFBF9]'>
      <div className='contact__container max-w-[87.5rem] mx-auto pt-[3.5rem] pb-[5.62rem] flex justify-between '>
        {/* LEFT */}
        <Desc />
        <MyForm />

        {/* RIGHT */}
      </div>
    </div>
  )
}
