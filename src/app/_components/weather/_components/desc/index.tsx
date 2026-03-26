'use client'

import Image from 'next/image'
import { memo } from 'react'

import ButtonPrimary from '@/components/ui/ButtonPrimary'


type DescData = {
  qrSrc: string
  linkUrl: string
  buttonText: string
  temperature: string
  weatherText: string
}

type DescProps = {
  descData: DescData
}
// icon nhiệt độ
const ThermometerIcon = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 35 35'
    fill='none'
    aria-hidden='true'
    {...props}
  >
    <path
      opacity='0.4'
      d='M12.4044 17.9469V7.15845C12.4044 5.85872 12.9207 4.61222 13.8398 3.69318C14.7588 2.77413 16.0053 2.25781 17.3051 2.25781C18.6048 2.25781 19.8513 2.77413 20.7703 3.69318C21.6894 4.61222 22.2057 5.85872 22.2057 7.15845V17.9469C23.2333 18.7106 24.0678 19.7044 24.6422 20.8486C25.2167 21.9928 25.5151 23.2557 25.5137 24.536C25.5137 29.0271 21.8544 32.7101 17.364 32.7417H17.3045C15.5789 32.7416 13.8973 32.1978 12.4985 31.1875C11.0996 30.1772 10.0547 28.7518 9.51214 27.1138C8.96956 25.4758 8.95693 23.7084 9.47603 22.0629C9.99513 20.4173 11.0196 18.9771 12.4038 17.9469H12.4044ZM17.3051 30.4792H17.3479C18.3624 30.4713 19.358 30.2041 20.2401 29.7031C21.1222 29.202 21.8615 28.4837 22.3879 27.6164C22.9142 26.7491 23.21 25.7617 23.2472 24.7479C23.2844 23.7341 23.0618 22.7276 22.6004 21.8241C22.182 21.0132 21.5846 20.3082 20.8536 19.7622L19.9432 19.0841V7.15845C19.9432 6.45877 19.6653 5.78774 19.1705 5.29299C18.6758 4.79824 18.0047 4.52029 17.3051 4.52029C16.6054 4.52029 15.9343 4.79824 15.4396 5.29299C14.9448 5.78774 14.6669 6.45877 14.6669 7.15845V19.0829L13.7565 19.7622C13.0255 20.3083 12.4283 21.0136 12.0103 21.8246C11.579 22.6625 11.3556 23.5919 11.3589 24.5343C11.3613 26.1104 11.9885 27.6214 13.1032 28.7358C14.2178 29.8502 15.7289 30.4772 17.3051 30.4792Z'
      fill='white'
    />
    <path
      d='M16.2336 20.3934V11.197C16.2336 10.9128 16.3466 10.6402 16.5475 10.4392C16.7485 10.2382 17.0211 10.1253 17.3053 10.1253C17.5896 10.1253 17.8622 10.2382 18.0632 10.4392C18.2641 10.6402 18.377 10.9128 18.377 11.197V20.3934C19.3845 20.6542 20.2624 21.2734 20.846 22.135C21.4297 22.9966 21.6792 24.0414 21.5478 25.0738C21.4163 26.1061 20.913 27.0551 20.132 27.743C19.351 28.4308 18.346 28.8103 17.3053 28.8103C16.2647 28.8103 15.2597 28.4308 14.4787 27.743C13.6977 27.0551 13.1944 26.1061 13.0629 25.0738C12.9315 24.0414 13.181 22.9966 13.7647 22.135C14.3483 21.2734 15.2262 20.6542 16.2336 20.3934ZM10.0011 8.21176H5.69528C5.41105 8.21176 5.13846 8.09885 4.93747 7.89786C4.73649 7.69688 4.62358 7.42429 4.62358 7.14006C4.62358 6.85583 4.73649 6.58324 4.93747 6.38225C5.13846 6.18127 5.41105 6.06836 5.69528 6.06836H10.0011C10.2854 6.06836 10.5579 6.18127 10.7589 6.38225C10.9599 6.58324 11.0728 6.85583 11.0728 7.14006C11.0728 7.42429 10.9599 7.69688 10.7589 7.89786C10.5579 8.09885 10.2854 8.21176 10.0011 8.21176ZM5.69528 15.2528H10.0011C10.2854 15.2528 10.5579 15.3657 10.7589 15.5667C10.9599 15.7677 11.0728 16.0403 11.0728 16.3245C11.0728 16.6087 10.9599 16.8813 10.7589 17.0823C10.5579 17.2833 10.2854 17.3962 10.0011 17.3962H5.69528C5.41105 17.3962 5.13846 17.2833 4.93747 17.0823C4.73649 16.8813 4.62358 16.6087 4.62358 16.3245C4.62358 16.0403 4.73649 15.7677 4.93747 15.5667C5.13846 15.3657 5.41105 15.2528 5.69528 15.2528ZM10.0011 12.8046H7.84761C7.56337 12.8046 7.29078 12.6917 7.0898 12.4907C6.88882 12.2897 6.77591 12.0171 6.77591 11.7329C6.77591 11.4487 6.88882 11.1761 7.0898 10.9751C7.29078 10.7741 7.56337 10.6612 7.84761 10.6612H10.0011C10.1419 10.6612 10.2812 10.6889 10.4112 10.7428C10.5413 10.7966 10.6594 10.8756 10.7589 10.9751C10.8584 11.0746 10.9374 11.1927 10.9912 11.3228C11.0451 11.4528 11.0728 11.5921 11.0728 11.7329C11.0728 11.8736 11.0451 12.013 10.9912 12.143C10.9374 12.273 10.8584 12.3912 10.7589 12.4907C10.6594 12.5902 10.5413 12.6691 10.4112 12.723C10.2812 12.7769 10.1419 12.8046 10.0011 12.8046Z'
      fill='white'
    />
  </svg>
)
// icon dọc
const VerticalDashLine = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-[7.625rem] w-[0.0625rem]'
    viewBox='0 0 1 122'
    fill='none'
    {...props}
  >
    <line
      opacity='0.2'
      x1='0.5'
      y1='0'
      x2='0.5'
      y2='122'
      stroke='white'
      strokeDasharray='4 4'
    />
  </svg>
)

// line mobile
const HorizontalDashLineMobile = memo(function HorizontalDashLineMobile() {
  return (
    <div
      className='relative hidden xsm:mt-[0.62rem] xsm:block'
      aria-hidden='true'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-auto w-[19.4375rem]'
        viewBox='0 0 311 1'
        fill='none'
      >
        <line
          x1='311'
          y1='0.5'
          x2='0'
          y2='0.5'
          stroke='white'
          strokeOpacity='0.4'
          strokeDasharray='4 4'
        />
      </svg>
    </div>
  )
})

function TemperatureDesktop({
  temperature,
  buttonText,
  linkUrl,
}: {
  temperature: string
  buttonText: string
  linkUrl: string
}) {
  return (
    <div className='mt-[0.38rem] flex items-center xsm:hidden'>
      <ThermometerIcon className='h-[2.1875rem] w-[2.1875rem]' />
      <p className='pc-h3-32-r ml-[0.25rem] font-halyard-display text-[2rem] font-normal text-white'>
        {temperature}
      </p>

      {linkUrl && (
        <ButtonPrimary
          text={buttonText}
          className='ml-[1.5rem]'
          type='link'
          href={linkUrl}
        />
      )}
    </div>
  )
}

function TemperatureMobile({
  temperature,
  buttonText,
  linkUrl,
}: {
  temperature: string
  buttonText: string
  linkUrl: string
}) {
  return (
    <div className='mt-[0.38rem] hidden xsm:ml-[0.88rem] xsm:flex xsm:flex-wrap xsm:items-center xsm:justify-center'>
      <div className='flex w-full items-center justify-center xsm:mb-[0.44rem]'>
        <p className='pc-14-14-r mr-[0.5rem] flex items-center justify-center font-halyard-display text-[0.875rem] font-normal text-white opacity-[0.72]'>
          Nhiệt độ hôm nay :
        </p>
        <ThermometerIcon className='xsm:size-[1rem]' />
        <p className='pc-h3-32-r font-halyard-display text-[2rem] font-normal text-white xsm:text-[1.25rem] xsm:leading-[1]'>
          {temperature}
        </p>
      </div>

      {linkUrl && (
        <ButtonPrimary
          text={buttonText}
          className='xsm:w-[14rem]'
          type='link'
          href={linkUrl}
        />
      )}
    </div>
  )
}

function Desc({ descData }: DescProps) {

  const { temperature, weatherText, qrSrc, linkUrl, buttonText } = descData

  return (
    <div className='absolute bottom-[2.5rem] left-[2.5rem] flex flex-col xsm:bottom-[1.25rem] xsm:left-[1rem] xsm:right-[1rem] xsm:px-[1.25rem]'>
      <div className='flex items-end justify-start xsm:items-center'>
        <div className='relative h-[7.625rem] w-[7.625rem] xsm:h-[4.5rem] xsm:w-[4.5rem] xsm:shrink-0'>
          {qrSrc && (
            <Image
              alt='QR Zalo thời tiết'
              src={qrSrc}
              fill
              className='object-contain'
              sizes='(max-width: 640px) 72px, 122px'
            />
          )}
        </div>

        <VerticalDashLine />

        <div className='flex flex-col justify-center'>
          <p className='pc-14-14-r xsm:hidden font-halyard-display text-[0.875rem] font-normal text-white opacity-[0.72]'>
            Nhiệt độ hôm nay
          </p>

          <TemperatureDesktop
            temperature={temperature}
            buttonText={buttonText}
            linkUrl={linkUrl}
          />

          <TemperatureMobile
            temperature={temperature}
            buttonText={buttonText}
            linkUrl={linkUrl}
          />

          <p className='pc-14-14-r mt-[0.75rem] max-w-[33rem] font-halyard-display text-white xsm:hidden'>
            {weatherText}
          </p>
        </div>
      </div>

      <HorizontalDashLineMobile />

      <p className='pc-14-14-r mt-[0.75rem] hidden max-w-[33rem] font-halyard-display text-white xsm:mt-[0.62rem] xsm:block xsm:max-w-none'>
        {weatherText}
      </p>
    </div>
  )
}

export default memo(Desc)
