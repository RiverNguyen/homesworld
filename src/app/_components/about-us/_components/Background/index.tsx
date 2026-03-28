import Image from 'next/image'
import Layout from '@/app/_components/about-us/_components/Form'

const BG_DESKTOP = '/ve-chung-toi/background.png'
const BG_MOBILE = '/ve-chung-toi/bg-mobile.webp'
const BG_OVERLAY = '/ve-chung-toi/riso_texture_1_11zon.jpg'

const TOP_OVERLAY_STYLE = {
  background:
    'linear-gradient(180deg, #FEFBF9 2.65%, rgba(254, 251, 249, 0.75) 38.52%, rgba(254, 251, 249, 0) 86.05%)',
}

const DESKTOP_CLOUD_OVERLAY_STYLE = {
  background: `
    radial-gradient(ellipse 70% 50% at 20% 20%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 65%),
    radial-gradient(ellipse 80% 55% at 50% 10%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 65%),
    radial-gradient(ellipse 70% 50% at 80% 25%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 65%),
    linear-gradient(180deg, rgba(250,250,247,1) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0) 100%)
  `,
  filter: 'blur(18px)',
}

const MOBILE_CLOUD_OVERLAY_STYLE = {
  background: `
    radial-gradient(ellipse 70% 60% at 20% 0%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%),
    radial-gradient(ellipse 80% 65% at 60% 10%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%),
    radial-gradient(ellipse 70% 60% at 90% 0%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%),
    linear-gradient(180deg, #FAFAF7 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0) 100%)
  `,
  filter: 'blur(14px)',
}

const Background = () => {
  return (
    <div className='relative mx-auto flex h-[49.875rem] max-w-[100rem] items-center justify-center overflow-hidden xsm:h-[73rem]'>
      <Image
        src={BG_DESKTOP}
        alt='Background'
        fill
        priority
        className='absolute left-0 top-0 h-full w-full object-cover xsm:hidden'
      />

      <Image
        src={BG_MOBILE}
        alt='Background mobile'
        width={1600}
        height={1200}
        priority
        className='absolute left-0 top-0 hidden h-[71.94rem] w-full object-cover xsm:block'
      />
      <Image
        src={BG_OVERLAY}
        alt='Background'
        fill
        priority
        className='absolute left-0 top-0 h-full w-full object-cover opacity-[0.4] xsm:opacity-[0.3]'
      />
      <div
        className='pointer-events-none absolute inset-x-0 top-0 z-10 h-[6.53044rem]'
        style={TOP_OVERLAY_STYLE}
      />

      <div
        className='pointer-events-none absolute inset-x-0 bottom-[-4rem] z-20 h-[18.875rem] xsm:hidden'
        style={DESKTOP_CLOUD_OVERLAY_STYLE}
      />

      <div
        className='pointer-events-none absolute bottom-0 z-10 hidden h-[7.3125rem] w-full xsm:block'
        style={MOBILE_CLOUD_OVERLAY_STYLE}
      />

      <div className='relative z-[25] mt-[0rem] flex items-center justify-center xsm:mt-[0rem]'>
        <Layout />
      </div>

      {DESKTOP_DECORATIONS.map((item) => (
        <Image
          key={item.src}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className={item.className}
        />
      ))}

      {MOBILE_DECORATIONS.map((item) => (
        <Image
          key={item.src}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className={item.className}
        />
      ))}
    </div>
  )
}

export default Background
const DESKTOP_DECORATIONS = [
  {
    // chùa 
    src: '/ve-chung-toi/bg-ve-chung-toi/frame_2147264195.webp',
    alt: 'Background Overlay Desktop 1',
    width: 400,
    height: 300,
    className:
      'absolute bottom-0 left-0 z-[101] h-[20.8125rem] w-[30.375rem] overflow-hidden xsm:hidden',
  },
  // nhà
  {
    src: '/ve-chung-toi/bg-ve-chung-toi/frame_2147264194.webp',
    alt: 'Background Overlay Desktop 2',
    width: 400,
    height: 300,
    className:
      'absolute bottom-0 left-[17rem] z-[100] h-[7.4375rem] w-[42.1875rem] overflow-hidden xsm:hidden',
  },
  // cầu 
  {
    src: '/ve-chung-toi/bg-ve-chung-toi/frame_2147264192.webp',
    alt: 'Background Overlay Desktop 3',
    width: 400,
    height: 300,
    className:
      'absolute bottom-0 left-0 z-[99] h-[17.75rem] w-[18.5625rem] overflow-hidden xsm:hidden',
  },
  // vườn cỏ + thờ 
  {
    src: '/ve-chung-toi/bg-ve-chung-toi/frame_2147264193.webp',
    alt: 'Background Overlay Desktop 4',
    width: 400,
    height: 300,
    className:
      'absolute bottom-0 right-0 z-[100] h-[10.6875rem] w-[43.625rem] overflow-hidden xsm:hidden',
  },
  // hỏa phải 
  {
    src: '/ve-chung-toi/bg-ve-chung-toi/frame_2147264191.webp',
    alt: 'Background Overlay Desktop 5',
    width: 400,
    height: 300,
    className:
      'absolute bottom-[3.4375rem] right-0 z-[19] h-[29.1875rem] w-[19.625rem] overflow-hidden xsm:hidden',
  },
] as const

const MOBILE_DECORATIONS = [
  // chùa 
  {
    src: '/ve-chung-toi/bg-mobile-vechung-toi/frame_2147264202.webp',
    alt: 'Background Overlay Mobile 1',
    width: 400,
    height: 300,
    className:
      'absolute bottom-0 right-0 z-[104] hidden h-[11.5rem] w-[13.375rem] overflow-hidden xsm:block',
  },
  // cỏ
  {
    src: '/ve-chung-toi/bg-mobile-vechung-toi/frame_2147264204.webp',
    alt: 'Background Overlay Mobile 2',
    width: 400,
    height: 300,
    className:
      'absolute bottom-0 left-0 z-[101] hidden h-[7.75rem] w-[23.4375rem] overflow-hidden xsm:block',
  },
  // nhà 
  {
    src: '/ve-chung-toi/bg-mobile-vechung-toi/frame_2147264203.webp',
    alt: 'Background Overlay Mobile 3',
    width: 400,
    height: 300,
    className:
      'absolute bottom-0 left-0 z-[102] hidden h-[3.875rem] w-[19rem] overflow-hidden xsm:block',
  },
] as const
