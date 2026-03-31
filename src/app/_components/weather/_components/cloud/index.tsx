'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

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
    className: 'absolute w-[27.375rem] h-[15.3125rem] bottom-[-1.5625rem] right-[-4.75rem]',
    width: 440,
    height: 245,
    animate: { x: [0, -220, 0] },
    transition: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-4-left',
    src: '/home/img/cloud-4.svg',
    className: 'absolute w-[23rem] h-[13rem] bottom-0 left-0',
    width: 595,
    height: 550,
    animate: { x: [0, 180, 0] },
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-5-right',
    src: '/home/img/cloud-5.svg',
    className: 'absolute w-[55rem] h-[11rem] bottom-0 right-0',
    width: 960,
    height: 385,
    animate: { x: [0, -160, 0] },
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-4-mid-left',
    src: '/home/img/cloud-4.svg',
    className: 'absolute w-[18rem] h-[10rem] bottom-[3.5rem] left-[10rem] opacity-80',
    width: 595,
    height: 550,
    animate: { x: [0, 150, 0] },
    transition: { duration: 6.2, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-6-left',
    src: '/home/img/cloud-6.svg',
    className: 'absolute w-[36.25rem] h-[20.3125rem] bottom-0 left-[7rem]',
    width: 960,
    height: 385,
    animate: { x: [0, 170, 0] },
    transition: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-6-center',
    src: '/home/img/cloud-6.svg',
    className: 'absolute w-[24rem] h-[13.5rem] bottom-[4.5rem] left-[32rem] opacity-75',
    width: 960,
    height: 385,
    animate: { x: [0, -150, 0] },
    transition: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-8-right',
    src: '/home/img/cloud-8.svg',
    className: 'absolute w-[29.5rem] h-[15.75rem] bottom-0 right-0',
    width: 960,
    height: 385,
    animate: { x: [0, -240, 0] },
    transition: { duration: 7.5, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-3-mid-right',
    src: '/home/img/cloud-3.svg',
    className: 'absolute w-[20rem] h-[11.25rem] bottom-[4rem] right-[18rem] opacity-80',
    width: 440,
    height: 245,
    animate: { x: [0, 170, 0] },
    transition: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    id: 'cloud-9-center',
    src: '/home/img/cloud-9.svg',
    className: 'absolute w-[30.25063rem] h-[11.6875rem] bottom-0 left-[33.5rem]',
    width: 960,
    height: 385,
    animate: { x: [0, 165, 0] },
    transition: { duration: 5.8, repeat: Infinity, ease: 'easeInOut' },
  },
]

const Cloud = () => {
  return (
    <div className='relative h-[33.5rem] w-full overflow-hidden pointer-events-none'>
      <Image
        className='absolute left-0 bottom-5 right-0 h-[20.875rem] w-full'
        src='/home/img/cloud-1.svg'
        alt='cloud'
        width={1600}
        height={335}
      />
      <Image
        className='absolute left-0 bottom-0 right-0 h-[24.4375rem] w-full'
        src='/home/img/cloud-2.svg'
        alt='cloud'
        width={1600}
        height={390}
      />
      <Image
        className='absolute w-[12rem] h-[16.78rem] bottom-0 left-0'
        src='/home/img/cloud-7.svg'
        alt='cloud'
        width={960}
        height={385}
      />

      {movingClouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className={`${cloud.className} will-change-transform`}
          animate={cloud.animate}
          transition={cloud.transition}
        >
          <Image
            className='h-full w-full'
            src={cloud.src}
            alt='cloud'
            width={cloud.width}
            height={cloud.height}
          />
        </motion.div>
      ))}

      <div
        className='h-[7.8125rem] w-full absolute bottom-0 left-0'
        style={{
          background: 'linear-gradient(180deg, rgba(254, 251, 249, 0.00) 0%, #FEFBF9 100%)',
        }}
      />
    </div>
  )
}

export default Cloud