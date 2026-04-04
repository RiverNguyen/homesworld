'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

import useIsMobile from '@/hooks/useIsMobile'

type MovingCloud = {
  id: string
  src: string
  className: string
  width: number
  height: number
  animate: {
    x: number[]
  }
  transition: {
    duration: number
    repeat: number
    ease: 'easeInOut'
  }
}

const movingClouds: MovingCloud[] = [
  {
    id: 'cloud-3-right',
    src: '/home/img/cloud-3.svg',
    className:
      'absolute bottom-0 right-[-1rem] w-[13rem] h-[7.25rem] sm:bottom-[-1.5625rem] sm:right-[-4.75rem] sm:w-[27.375rem] sm:h-[15.3125rem]',
    width: 440,
    height: 245,
    animate: { x: [0, -220, 0] },
    transition: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-4-left',
    src: '/home/img/cloud-4.svg',
    className: 'absolute bottom-0 left-0 w-[12rem] h-[6.75rem] sm:w-[23rem] sm:h-[13rem]',
    width: 595,
    height: 550,
    animate: { x: [0, 180, 0] },
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-5-right',
    src: '/home/img/cloud-5.svg',
    className:
      'absolute bottom-0 right-0 w-[min(140vw,42rem)] h-[6.5rem] sm:w-[55rem] sm:h-[11rem]',
    width: 960,
    height: 385,
    animate: { x: [0, -160, 0] },
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-4-mid-left',
    src: '/home/img/cloud-4.svg',
    className:
      'hidden sm:block absolute w-[18rem] h-[10rem] bottom-[3.5rem] left-[10rem] opacity-80',
    width: 595,
    height: 550,
    animate: { x: [0, 150, 0] },
    transition: { duration: 6.2, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-6-left',
    src: '/home/img/cloud-6.svg',
    className:
      'absolute bottom-0 left-0 w-[16rem] h-[9rem] sm:left-[7rem] sm:w-[36.25rem] sm:h-[20.3125rem]',
    width: 960,
    height: 385,
    animate: { x: [0, 170, 0] },
    transition: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-6-center',
    src: '/home/img/cloud-6.svg',
    className:
      'hidden sm:block absolute w-[24rem] h-[13.5rem] bottom-[4.5rem] left-[32rem] opacity-75',
    width: 960,
    height: 385,
    animate: { x: [0, -150, 0] },
    transition: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-8-right',
    src: '/home/img/cloud-8.svg',
    className: 'absolute bottom-0 right-0 w-[14rem] h-[7.5rem] sm:w-[29.5rem] sm:h-[15.75rem]',
    width: 960,
    height: 385,
    animate: { x: [0, -240, 0] },
    transition: { duration: 7.5, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-3-mid-right',
    src: '/home/img/cloud-3.svg',
    className:
      'hidden sm:block absolute w-[20rem] h-[11.25rem] bottom-[4rem] right-[18rem] opacity-80',
    width: 440,
    height: 245,
    animate: { x: [0, 170, 0] },
    transition: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-9-center',
    src: '/home/img/cloud-9.svg',
    className:
      'hidden sm:block absolute w-[30.25063rem] h-[11.6875rem] bottom-0 left-[33.5rem]',
    width: 960,
    height: 385,
    animate: { x: [0, 165, 0] },
    transition: { duration: 5.8, repeat: Infinity, ease: 'easeInOut' },
  },
]

const MOBILE_ANIM_SCALE = 0.42

const Cloud = () => {
  const isMobile = useIsMobile()

  return (
    <div className='relative h-[15rem] w-full overflow-hidden sm:h-[24rem] lg:h-[33.5rem]'>
      <Image
        className='absolute left-0 bottom-2 right-0 h-[9rem] w-full object-cover object-bottom sm:bottom-5 sm:h-[16rem] lg:h-[20.875rem]'
        src='/home/img/cloud-1.svg'
        alt='cloud'
        width={1600}
        height={335}
        sizes='100vw'
      />
      <Image
        className='absolute left-0 bottom-0 right-0 h-[11rem] w-full object-cover object-bottom sm:h-[18rem] lg:h-[24.4375rem]'
        src='/home/img/cloud-2.svg'
        alt='cloud'
        width={1600}
        height={390}
        sizes='100vw'
      />
      <Image
        className='absolute w-[6.5rem] h-[9rem] bottom-0 left-0 sm:w-[12rem] sm:h-[16.78rem]'
        src='/home/img/cloud-7.svg'
        alt='cloud'
        width={960}
        height={385}
        sizes='(max-width: 639px) 30vw, 12rem'
      />

      {movingClouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className={`${cloud.className} will-change-transform`}
          animate={
            isMobile
              ? { x: cloud.animate.x.map((v) => Math.round(v * MOBILE_ANIM_SCALE)) }
              : cloud.animate
          }
          transition={cloud.transition}
        >
          <Image
            className='h-full w-full object-contain object-bottom'
            src={cloud.src}
            alt='cloud'
            width={cloud.width}
            height={cloud.height}
            sizes='(max-width: 639px) 40vw, 30vw'
          />
        </motion.div>
      ))}

      <div
        className='h-[4rem] w-full absolute bottom-0 left-0 sm:h-[6rem] lg:h-[7.8125rem]'
        style={{
          background: 'linear-gradient(180deg, rgba(254, 251, 249, 0.00) 0%, #FEFBF9 100%)',
        }}
      />
    </div>
  )
}

export default Cloud
