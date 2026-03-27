'use client'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React, { ChangeEvent } from 'react'

import useIsMobile from '@/hooks/useIsMobile'
type LanguageProps = {
  language: 'en' | 'vi'
  setLanguage: (language: 'en' | 'vi') => void
}
const Language = ({ language, setLanguage }: LanguageProps) => {
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value as 'en' | 'vi')
  }

  const { isMobile } = useIsMobile()

  if (isMobile)
    return (
      <div className='px-[0.75rem]'>
        <div className='text-[#10475F]/80 mb-14-r w-full text-center mb-[0.75rem]'>
          Chọn ngôn ngữ
        </div>
        <div className='relative flex p-[0.25rem] self-stretch rounded-[6.25rem] w-full h-fit bg-[#E6E6E6]/60'>
          <div
            onClick={() => {
              setLanguage('vi')
            }}
            className='flex z-2 items-center p-[0.875rem] grow rounded-[6.25rem] w-full h-[2.25rem] '
          >
            <Image
              className='rounded-[0.25rem] w-[1.75rem] h-[1.125rem] overflow-hidden mr-[0.38rem]'
              width={28}
              height={18}
              alt=''
              src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/Language-Flag.svg'}
            ></Image>
            <span
              className={`text-[#10475F] text-[0.8125rem] font-normal font-halyard-display leading-[1.5] text-left text-edge-[cap_alphabetic] [text-box-trim:trim-both] transition-all duration-300 ${language === 'vi' ? 'text-white' : 'text-[#10475F]'}`}
            >
              Tiếng Việt
            </span>
          </div>
          <div
            onClick={() => {
              setLanguage('en')
            }}
            className='flex z-2 items-center p-[0.875rem] grow rounded-[6.25rem] w-full h-[2.25rem] mr-[0.25rem]'
          >
            <Image
              className='rounded-[0.25rem] w-[1.75rem] h-[1.125rem] overflow-hidden mr-[0.38rem]'
              width={28}
              height={18}
              alt=''
              src={
                'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/Language-Eng-Flag.svg'
              }
            ></Image>
            <span
              className={` text-[0.8125rem] font-normal font-halyard-display leading-[1.5] text-left text-edge-[cap_alphabetic] [text-box-trim:trim-both] transition-all duration-300 ${language === 'en' ? 'text-white' : 'text-[#10475F]'}`}
            >
              Tiếng Anh
            </span>
          </div>
          <div
            className={`absolute z-1 p-[0.875rem] grow rounded-[6.25rem] w-[calc(50%-0.25rem)] h-[2.25rem] bg-[#27AAE1] transition-all duration-300 ${language === 'en' ? 'translate-x-[100%]' : ''}`}
          ></div>
        </div>
      </div>
    )

  return (
    <div className=''>
      <span className='text-[#10475F]/80 opacity-[0.68] text-[0.75rem] font-normal font-halyard-display leading-[1.3] text-left'>
        Chọn ngôn ngữ
      </span>
      <div className='flex relative items-center group cursor-pointer'>
        <Image
          className='rounded-[0.25rem] w-[1.75rem] h-[1.125rem] mr-[0.5625rem]'
          alt='Language'
          width={28}
          height={18}
          src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/Language-Flag.svg'}
        />
        <span className='pc-16-16-r font-medium text-[#10475F] mr-[0.5625rem]'>Tiếng việt</span>
        <ChevronDown className='text-[#10475F] size-[0.75rem]'></ChevronDown>
        <div className='absolute top-full pt-[1rem] right-0 group-hover:opacity-100 group-hover:visible invisible opacity-0 transition-all duration-300'>
          <div className='rounded-[1.125rem] w-[10.9375rem] h-fit bg-white shadow-[0.125rem_0.375rem_2rem_0rem_rgba(0,0,0,0.06)] overflow-hidden'>
            <label className='flex items-center py-[0.875rem] px-[0.75rem] self-stretch w-full h-[3.25rem] cursor-pointer bg-white hover:bg-[#E6E6F1] transition-all duration-300'>
              <input
                name='language'
                className='mr-[0.62rem]'
                type='radio'
                value='vi'
                checked={language === 'vi'}
                onChange={handleRadioChange}
                id='language-radio'
              />
              <Image
                className='mr-[0.38rem] rounded-[0.25rem] w-[1.75rem] h-[1.125rem] overflow-hidden'
                alt=''
                width={28}
                height={18}
                src='https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/Language-Flag.svg'
              />
              <span>Tiếng Việt</span>
            </label>
            <label className='flex items-center py-[0.875rem] px-[0.75rem] self-stretch w-full h-[3.25rem] cursor-pointer bg-white hover:bg-[#E6E6F1] transition-all duration-300'>
              <input
                name='language'
                value='en'
                className='mr-[0.62rem]'
                checked={language === 'en'}
                onChange={handleRadioChange}
                type='radio'
                id='language-radio'
              />
              <Image
                className='mr-[0.38rem] rounded-[0.25rem] w-[1.75rem] h-[1.125rem] overflow-hidden'
                alt=''
                width={28}
                height={18}
                src='https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/Language-Eng-Flag.svg'
              />
              <span>Tiếng Anh</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Language
