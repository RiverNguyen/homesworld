import React from 'react'

const ICLocation = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      {...props}
    >
      <path
        d='M7.99997 9.13213C9.26362 9.13213 10.288 8.10774 10.288 6.84408C10.288 5.58043 9.26362 4.55603 7.99997 4.55603C6.73631 4.55603 5.71191 5.58043 5.71191 6.84408C5.71191 8.10774 6.73631 9.13213 7.99997 9.13213Z'
        stroke='currentColor'
        strokeOpacity='0.8'
        strokeWidth='1.5'
      />
      <path
        d='M1.85454 5.50944C3.29924 -0.841368 12.7081 -0.834034 14.1455 5.51678C14.9888 9.24219 12.6715 12.3956 10.6401 14.3463C9.16604 15.769 6.83399 15.769 5.35262 14.3463C3.32857 12.3956 1.01119 9.23486 1.85454 5.50944Z'
        stroke='currentColor'
        strokeOpacity='0.8'
        strokeWidth='1.5'
      />
    </svg>
  )
}

export default ICLocation
