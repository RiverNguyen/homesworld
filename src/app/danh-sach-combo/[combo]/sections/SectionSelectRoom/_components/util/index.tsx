import React from 'react'
const amenities = [
  'Wi-Fi miễn phí',
  'Quầy lễ tân [24h]',
  'Đỗ xe miễn phí',
  'Quầy bar',
  'Hồ bơi',
  'Nhà hàng',
  'Bồn ngâm chân',
  'Sân golf',
  'Sân gôn',
  'Bể bơi',
  'Dịch vụ taxi',
  'Bãi đỗ xe',
  'Bãi đỗ xe đạp',
  'Nhà hàng',
  'Bồn ngâm chân',
  'Đưa đón sân bay',
]
const UtilDetailCombo = () => {
  return (
    <div className='mb-[2.5rem]'>
      <h3 className='pc-18-18-m text-[#10475F] text-fit'>Tiện ích của khách sạn</h3>
      <div className='grid grid-cols-4 my-[1.12rem] gap-x-[1.31rem] gap-y-[0.5rem]'>
        {amenities.map((item, index) => {
          return (
            <div
              className='flex items-center pc-14-14-r w-[8.60938rem] line-clamp-1 text-[#10475F]/80'
              key={index}
            >
              <ICCheckGreen className='mr-[0.5rem]'></ICCheckGreen>
              <span>{item}</span>
            </div>
          )
        })}
      </div>
      <div className='flex items-center'>
        <span className='pc-16-16-r text-fit text-[#27AAE1] mr-[0.38rem]'>Xem thêm</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          viewBox='0 0 14 14'
          fill='none'
        >
          <path
            d='M11.6209 5.2207L7.81753 9.02404C7.36836 9.4732 6.63336 9.4732 6.18419 9.02404L2.38086 5.2207'
            stroke='#27AAE1'
            strokeWidth='1.25'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </div>
  )
}
const ICCheckGreen = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      {...props}
    >
      <path
        d='M5.36718 11.2018C5.31522 11.2018 5.26379 11.1909 5.21603 11.17C5.16827 11.149 5.12516 11.1183 5.08933 11.0798L1.38462 7.28437C1.34813 7.24699 1.31919 7.20261 1.29944 7.15377C1.2797 7.10493 1.26953 7.05258 1.26953 6.99971C1.26953 6.94685 1.2797 6.8945 1.29944 6.84566C1.31919 6.79682 1.34813 6.75244 1.38462 6.71506C1.42111 6.67768 1.46443 6.64803 1.5121 6.6278C1.55978 6.60756 1.61087 6.59715 1.66247 6.59715C1.71408 6.59715 1.76517 6.60756 1.81285 6.6278C1.86052 6.64803 1.90384 6.67768 1.94033 6.71506L5.36718 10.219L12.4987 2.91967C12.5724 2.84417 12.6724 2.80176 12.7766 2.80176C12.8808 2.80176 12.9808 2.84417 13.0544 2.91967C13.1281 2.99516 13.1695 3.09755 13.1695 3.20432C13.1695 3.31109 13.1281 3.41348 13.0544 3.48897L5.64503 11.0798C5.6092 11.1183 5.56609 11.149 5.51833 11.17C5.47056 11.1909 5.41914 11.2018 5.36718 11.2018Z'
        fill='#8CC63F'
      />
    </svg>
  )
}

export default UtilDetailCombo
