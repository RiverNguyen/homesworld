'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { useGoogleTranslate } from '@/hooks/useGoogleTranslate'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import { IHeaderAcf } from '@/interfaces/header.interface'
import ItemMobileNav from '@/layouts/header/_components/ItemMobileNav'
import Language from '@/layouts/header/_components/Language'
import Navigation from '@/layouts/header/_components/Navigation'
import './style.css'
type HeaderProps = {
  data: IHeaderAcf
}
const Header = ({ data }: HeaderProps) => {
  const { language, setLanguage } = useGoogleTranslate()

  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  useScrollHeader(headerRef as React.RefObject<HTMLElement>)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])
  return (
    <header
      ref={headerRef}
      className='z-99 fixed top-0 left-0  w-full bg-[var(--header-bg)] transition-all duration-600'
    >
      {/* MB */}
      <div className='xsm:flex hidden justify-between items-center pl-[0.75rem] w-[23.4375rem] h-[3.125rem] border-white/20 border-b-[0.0625rem] shadow-[0rem_0.875rem_1.875rem_0rem_rgba(0,0,0,0.01),0rem_3.4375rem_3.4375rem_0rem_rgba(0,0,0,0.01),0rem_7.75rem_4.625rem_0rem_rgba(0,0,0,0.01),0rem_13.75rem_5.5rem_0rem_rgba(0,0,0,0),0rem_21.5rem_6rem_0rem_rgba(0,0,0,0)]'>
        <Link href={'/'}>
          <Image
            className='w-[8.5rem] h-[1.375rem]'
            width={204}
            height={34}
            alt='Logo'
            src={data?.logo}
          />
        </Link>
        <div
          onClick={() => {
            setIsOpen(true)
          }}
          className='py-[0.625rem] px-[0.875rem] border-[#10475F]/20 border-l-[0.0625rem]'
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
          className={`absolute top-0 left-0 w-screen h-screen bg-[#FEFBF9] transition-all duration-300 ${
            isOpen ? '' : 'translate-x-full'
          }`}
        >
          <div className='w-full border-[#10475F]/12 border-b-[0.0625rem]'>
            <div
              onClick={() => {
                setIsOpen(false)
              }}
              className='flex p-[0.875rem] items-center w-fit h-fit '
            >
              <div className='flex justify-center items-center mr-[0.25rem] size-[1.25rem]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                  <path d="M6.66458 13.95L1.23125 8.51667C0.589583 7.875 0.589583 6.825 1.23125 6.18333L6.66458 0.75" stroke="#10475F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {/* <ChevronLeft className='size-[1.25rem] mr-[0.25rem]'></ChevronLeft> */}
              <span className='mb-16-m font-normal text-[#10475F]'>Quay lại</span>
            </div>
          </div>
          <div className='px-[0.75rem] mb-[3.62rem]'>
            {data?.menu?.map((menu, index) => {
              return (
                <ItemMobileNav
                  key={index}
                  data={menu}
                  onClose={() => {
                    setIsOpen(false)
                  }}
                ></ItemMobileNav>
              )
            })}

            {/* <ItemMobileNav
                title='Combo du lịch'
                type={false}
              ></ItemMobileNav> */}
            {/* <ItemMobileNav></ItemMobileNav> */}
          </div>
          <Language
            language={language}
            setLanguage={setLanguage}
          ></Language>
          <div className='flex justify-center mt-[1.56rem]'>
            {data?.social_media?.map((item, index) => {
              return (
                <Link
                  key={index}
                  target={item?.link?.target}
                  href={item?.link?.url}
                  className='flex items-center justify-center rounded-[6.25rem] size-[2.875rem] bg-[#27AAE1]/10 mr-[1rem] last:mr-0'
                >
                  <Image
                    width={18}
                    height={18}
                    className='size-[1.25rem]'
                    src={item?.icon}
                    alt='Icon social media'
                  />
                </Link>
              )
            })}
            {/* <Link
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
            </Link> */}
          </div>
        </div>
      </div>
      {/* PC */}
      <div className='xsm:hidden flex justify-between items-center py-[1rem] w-[87.5rem] h-[4.88rem] mx-auto'>
        <div className='flex h-[2.37rem] items-start'>
          <Link
            href={'/'}
            className='relative w-[12.75rem] h-[2.125rem] mr-[1.5rem]'
          >
            <Image
              className='logo-dark w-[12.75rem] h-[2.125rem] absolute top-0 left-0 transition-all duration-300'
              width={204}
              height={34}
              alt='Logo'
              src={data?.logo}
            />
            <Image
              className='logo-white w-[12.75rem] h-[2.125rem] absolute top-0 left-0 opacity-0 transition-all duration-300'
              width={204}
              height={34}
              alt='Logo'
              src={data?.logo_white}
            />
          </Link>
          <Navigation data={data?.menu}></Navigation>
        </div>
        <div className='flex items-center'>
          <div className='flex justify-center mr-[1.5rem]'>
            {data?.social_media?.map((item, index) => {
              return (
                <Link
                  key={index}
                  target={item?.link?.target}
                  href={item?.link?.url}
                  className='relative flex items-center justify-center rounded-[6.25rem] size-[2.875rem] bg-[var(--header-icon)] mr-[1rem] last:mr-0 hover:opacity-70 transition-all duration-300'
                >
                  <Image
                    width={18}
                    height={18}
                    className='absolute left-1/2 top-1/2 -translate-1/2 size-[1.25rem] logo-white transition-all duration-300'
                    src={item?.icon_white}
                    alt='Icon social media'
                  />
                  <Image
                    width={18}
                    height={18}
                    className='absolute left-1/2 top-1/2 -translate-1/2 size-[1.25rem] logo-dark transition-all duration-300'
                    src={item?.icon}
                    alt='Icon social media'
                  />
                </Link>
              )
            })}
            {/* <Link
              href=''
              className='flex items-center justify-center rounded-[6.25rem] size-[2.875rem] bg-[var(--header-icon)] mr-[1rem] last:mr-0 hover:opacity-70 transition-all duration-300'
            >
              <Image
                width={18}
                height={18}
                className=' size-[1.25rem]'
                src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/03/tiktok.svg'}
                alt='Icon social media'
              />
            </Link> */}
          </div>
          <Language
            language={language}
            setLanguage={setLanguage}
          ></Language>
        </div>
      </div>
    </header>
  )
}

export default Header
