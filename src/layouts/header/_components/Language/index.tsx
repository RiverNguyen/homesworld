'use client'
import Image from 'next/image'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
// import { ChevronDown } from 'lucide-react'

type LanguageProps = {
  language: 'en' | 'vi'
  setLanguage: (language: 'en' | 'vi') => void
}
const Language = ({ language, setLanguage }: LanguageProps) => {

  return (
    <>
      {/* MB */}
      <div className='xsm:block hidden px-[0.75rem]'>
        <div className='text-[#10475F]/80 mb-14-r w-full text-center mb-[0.75rem]'>
          Chọn ngôn ngữ
        </div>
        <div className='relative flex p-[0.25rem] self-stretch rounded-[6.25rem] w-full h-fit bg-[#E6E6E6]/60'>
          <div
            onClick={() => {
              setLanguage('vi')
            }}
            className='flex justify-center z-2 items-center p-[0.875rem] grow rounded-[6.25rem] w-full h-[2.25rem] '
          >
            <Image
              className='rounded-[0.25rem] w-[1.75rem] h-[1.125rem] overflow-hidden mr-[0.38rem]'
              width={28}
              height={18}
              alt=''
              src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/Language-Flag.svg'}
            ></Image>
            <span
              className={`text-[#10475F] text-[0.8125rem] font-normal font-halyard-display leading-[1.5] text-left text-edge-[cap_alphabetic] [text-box-trim:trim-both] transition-all duration-300 ${
                language === 'vi' ? 'text-white' : 'text-[#10475F]'
              }`}
            >
              Tiếng Việt
            </span>
          </div>
          <div
            onClick={() => {
              setLanguage('en')
            }}
            className='flex justify-center z-2 items-center p-[0.875rem] grow rounded-[6.25rem] w-full h-[2.25rem] mr-[0.25rem]'
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
              className={` text-[0.8125rem] font-normal font-halyard-display leading-[1.5] text-left text-edge-[cap_alphabetic] [text-box-trim:trim-both] transition-all duration-300 ${
                language === 'en' ? 'text-white' : 'text-[#10475F]'
              }`}
            >
              Tiếng Anh
            </span>
          </div>
          <div
            className={`absolute z-1 p-[0.875rem] grow rounded-[6.25rem] w-[calc(50%-0.25rem)] h-[2.25rem] bg-[#27AAE1] transition-all duration-300 ${
              language === 'en' ? 'translate-x-[100%]' : ''
            }`}
          ></div>
        </div>
      </div>
      {/* PC */}
      <div className='xsm:hidden flex flex-col justify-center cursor-pointer h-[2.88rem]'>
        <span className='text-[var(--header-color)] transition-all duration-300 opacity-[0.68] text-[0.75rem] font-normal font-halyard-display leading-[1.3] text-left [font-feature-settings:"liga"_off,"clig"_off] mb-[0.25rem]'>
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
          <span className='text-[var(--header-bold-color)] transition-all duration-300 pc-16-16-r font-medium mr-[0.5625rem]'>
            Tiếng việt
          </span>
          <svg className='text-[var(--header-bold-color)] size-[0.75rem]' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1.5 3.49994L6.36291 8.25009L11 3.49994" stroke="currentColor" strokeWidth="1.52"/>
          </svg>
          {/* <ChevronDown className='text-[var(--header-color)] size-[0.75rem]'></ChevronDown>  */}
          <div className='absolute pt-[1.4rem] top-full right-0 group-hover:opacity-100 group-hover:visible invisible opacity-0 transition-all duration-300'>
            <div className='rounded-[1.125rem] w-[10.9375rem] h-fit bg-white shadow-[0.125rem_0.375rem_2rem_0rem_rgba(0,0,0,0.06)] overflow-hidden'>
              <RadioGroup defaultValue="1" value={language} onValueChange={(data)=>{
                setLanguage(data as 'en' | 'vi')
              }}
              className="w-full gap-0">
                <Label className='flex w-full items-center justify-start py-[0.875rem] pl-[0.75rem] pr-[1.25rem] self-stretch h-[3.5rem] bg-white cursor-pointer hover:bg-[#E6E6F1] transition-all duration-300'>
                  <div className='mr-[0.62rem]'>
                    <RadioGroupItem value={'vi'} />
                  </div>
                  <Image
                    className='mr-[0.38rem] rounded-[0.25rem] w-[1.75rem] h-[1.125rem] overflow-hidden'
                    alt=''
                    width={28}
                    height={18}
                    src='https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/Language-Flag.svg'
                  />
                  <span className='pc-16-16-r font-medium text-[#10475F]'>Tiếng Việt</span>
                </Label>
                <Label className='flex w-full items-center justify-start py-[0.875rem] pl-[0.75rem] pr-[1.25rem] self-stretch h-[3.5rem] bg-white cursor-pointer hover:bg-[#E6E6F1] transition-all duration-300'>
                  <div className='mr-[0.62rem]'>
                    <RadioGroupItem value={'en'} />
                  </div>
                  <Image
                    className='mr-[0.38rem] rounded-[0.25rem] w-[1.75rem] h-[1.125rem] overflow-hidden'
                    alt=''
                    width={28}
                    height={18}
                    src='https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/Language-Eng-Flag.svg'
                  />
                  <span className='pc-16-16-r font-medium text-[#10475F]'>Tiếng Anh</span>
                </Label>
              </RadioGroup>

              {/* <label className='flex items-center py-[0.875rem] px-[0.75rem] self-stretch w-full h-[3.25rem] cursor-pointer bg-white hover:bg-[#E6E6F1] transition-all duration-300'>
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
                <span className='pc-16-16-r font-medium text-[#10475F]'>Tiếng Việt</span>
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
                <span className='pc-16-16-r font-medium text-[#10475F]'>Tiếng Anh</span>
              </label> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Language
