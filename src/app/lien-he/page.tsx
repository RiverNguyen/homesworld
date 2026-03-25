'use client'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

import Desc from './_components/desc/desc'
import MyForm from './_components/form/form'
export default function Contact() {
  return (
    <div className=' bg-[#FEFBF9]'>
      <div className=' max-w-[87.5rem] mx-auto pt-[3.5rem] pb-[5.62rem] flex justify-between xsm:flex-col xsm:py-[2rem] xsm:mx-[0.75rem]'>
        {/* LEFT */}
        <Desc />
        {/* RIGHT */}
        <MyForm />
      </div>
    </div>
  )
}
