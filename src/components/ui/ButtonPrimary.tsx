import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ButtonPrimaryProps {
  isLoading?: boolean
  text?: string
  className?: string
  type?: 'submit' | 'button' | 'link'
  href?: string
  rightIcon?: React.ReactNode
  hideDefaultIcon?: boolean
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  isLoading = false,
  text = 'Gửi thông tin',
  className = '',
  type = 'button',
  href = '#',
  rightIcon,
  hideDefaultIcon = false,
}) => {
  const defaultIcon = (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
    >
      <path
        d='M11.7356 11.4832L11.8125 2.1875C9.48489 2.21014 4.84544 2.24182 2.51786 2.26446L2.49862 3.42782C4.59316 3.40744 7.37221 3.39046 9.81771 3.36784L2.1875 10.9988L3.00109 11.8125L10.6313 4.18151L10.5657 11.4956L11.7357 11.4819L11.7356 11.4832Z'
        fill='white'
      />
    </svg>
  )

  const content = isLoading ? (
    <span>Đang gửi...</span>
  ) : (
    <>
      <span>{text}</span>
      {!hideDefaultIcon && <span className=''>{defaultIcon}</span>}
      {rightIcon}
    </>
  )

  const classNames = `font-halyard-display flex w-fit items-center justify-center rounded-full bg-[#27AAE1] px-[0.88rem] py-[1rem] cursor-pointer hover:bg-[#42A3CC] xsm:w-full xsm:hover:bg-[#27AAE1] ${className}`

  if (type === 'link') {
    return (
      <Button
        asChild
        className={classNames}
      >
        <Link href={href}>{content}</Link>
      </Button>
    )
  }

  return (
    <Button
      type={type}
      disabled={isLoading}
      className={classNames}
    >
      {content}
    </Button>
  )
}

export default ButtonPrimary
