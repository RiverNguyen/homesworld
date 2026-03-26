'use client'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

import useIsMobile from '@/hooks/useIsMobile'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import ItemMobileNav from '@/layouts/header/_components/ItemMobileNav'
import Language from '@/layouts/header/_components/Language'
import Navigation from '@/layouts/header/_components/Navigation'
import './style.css'
const Header = () => {
  const { isMobile } = useIsMobile()
  const [language, setLanguage] = useState<'en' | 'vi'>('vi')
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  useScrollHeader(headerRef as React.RefObject<HTMLElement>)
  return (
    <header
      ref={headerRef}
      className='transparent z-99 fixed top-0 left-0  w-full bg-[var(--header-bg)] transition-all duration-600'
    >
      {isMobile ? (
        <div className='flex justify-between items-center w-full pl-[0.75rem] w-[23.4375rem] h-[3.125rem]  border-white/20 border-b-[0.0625rem] shadow-[0rem_0.875rem_1.875rem_0rem_rgba(0,0,0,0.01),0rem_3.4375rem_3.4375rem_0rem_rgba(0,0,0,0.01),0rem_7.75rem_4.625rem_0rem_rgba(0,0,0,0.01),0rem_13.75rem_5.5rem_0rem_rgba(0,0,0,0),0rem_21.5rem_6rem_0rem_rgba(0,0,0,0)]'>
          <Link href={'/'}>
            <Image
              className='w-[8.5rem] h-[1.375rem]'
              width={204}
              height={34}
              alt='Logo'
              src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/Logo.svg'}
            />
          </Link>
          <div
            onClick={() => {
              setIsOpen(true)
            }}
            className='py-[0.625rem] px-[0.875rem] border-[#10475F]/20 border-l-[0.0625rem] opacity-[0.55] '
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3 7H21'
                stroke='#10475F'
                strokeWidth='1.2'
                strokeLinecap='round'
              />
              <path
                d='M3 12H21'
                stroke='#10475F'
                strokeWidth='1.2'
                strokeLinecap='round'
              />
              <path
                d='M3 17H21'
                stroke='#10475F'
                strokeWidth='1.2'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div
            className={`absolute top-0 left-0 w-screen h-screen bg-white transition-all duration-300 ${
              isOpen ? '' : 'translate-x-full'
            }`}
          >
            <div className='w-full border-[#10475F]/12 border-b-[0.0625rem]'>
              <div
                onClick={() => {
                  setIsOpen(false)
                }}
                className='flex p-[0.875rem] w-fit h-fit '
              >
                <ChevronLeft className='size-[1.25rem] mr-[0.25rem]'></ChevronLeft>
                <span className='mb-16-m font-normal'>Quay lại</span>
              </div>
            </div>
            <div className='px-[0.75rem] mb-[3.62rem]'>
              <ItemMobileNav
                title='Hỗ trợ'
                type={true}
              ></ItemMobileNav>
              <ItemMobileNav
                title='Combo du lịch'
                type={false}
              ></ItemMobileNav>
              {/* <ItemMobileNav></ItemMobileNav> */}
            </div>
            <Language
              language={language}
              setLanguage={setLanguage}
            />
            <div className='flex justify-center mt-[1.56rem]'>
              <Link
                href=''
                className='flex items-center justify-center rounded-[6.25rem] size-[2.875rem] bg-[#27AAE1]/10 mr-[1rem] last:mr-0'
              >
                <Image
                  width={18}
                  height={18}
                  className='size-[1.25rem]'
                  src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/instagram.svg'}
                  alt='Icon social media'
                />
              </Link>
              <Link
                href=''
                className='flex items-center justify-center rounded-[6.25rem] size-[2.875rem] bg-[#27AAE1]/10 mr-[1rem] last:mr-0'
              >
                <Image
                  width={18}
                  height={18}
                  className='size-[1.25rem]'
                  src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/facebook.svg'}
                  alt='Icon social media'
                />
              </Link>
              <Link
                href=''
                className='flex items-center justify-center rounded-[6.25rem] size-[2.875rem] bg-[#27AAE1]/10 mr-[1rem] last:mr-0'
              >
                <Image
                  width={18}
                  height={18}
                  className='size-[1.25rem]'
                  src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/tiktok.svg'}
                  alt='Icon social media'
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex justify-between items-center py-[1rem] w-[87.5rem] mx-auto'>
          <div className='flex items-center'>
            <Link
              href={'/'}
              className='relative w-[12.75rem] h-[2.125rem] mr-[2.62rem]'
            >
              <Image
                className='logo-dark absolute top-0 left-0 transition-all duration-300'
                width={204}
                height={34}
                alt='Logo'
                src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/Logo.svg'}
              />
              <Image
                className='logo-white absolute top-0 left-0 opacity-0 transition-all duration-300'
                width={204}
                height={34}
                alt='Logo'
                src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/Icon-white.svg'}
              />
            </Link>
            <Navigation></Navigation>
          </div>
          <div className='flex items-center'>
            <div className='flex justify-center mr-[1.5rem]'>
              <Link
                href=''
                className='flex items-center justify-center rounded-[6.25rem] size-[2.875rem] bg-[#27AAE1]/10 mr-[1rem] last:mr-0 hover:opacity-70 transition-all duration-300'
              >
                <Image
                  width={18}
                  height={18}
                  className='size-[1.25rem]'
                  src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/instagram.svg'}
                  alt='Icon social media'
                />
              </Link>
              <Link
                href=''
                className='flex items-center justify-center rounded-[6.25rem] size-[2.875rem] bg-[#27AAE1]/10 mr-[1rem] last:mr-0 hover:opacity-70 transition-all duration-300'
              >
                <Image
                  width={18}
                  height={18}
                  className=' size-[1.25rem]'
                  src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/facebook.svg'}
                  alt='Icon social media'
                />
              </Link>
              <Link
                href=''
                className='flex items-center justify-center rounded-[6.25rem] size-[2.875rem] bg-[#27AAE1]/10 mr-[1rem] last:mr-0 hover:opacity-70 transition-all duration-300'
              >
                <Image
                  width={18}
                  height={18}
                  className=' size-[1.25rem]'
                  src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/tiktok.svg'}
                  alt='Icon social media'
                />
              </Link>
            </div>
            <Language
              language={language}
              setLanguage={setLanguage}
            />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
