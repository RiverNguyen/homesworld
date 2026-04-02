'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const sortOptions = [
  'Giá Combo tăng dần',
  'Giá Combo giảm dần',
  'Giá Combo phù hợp nhất',
  'Combo mới nhất',
]

type SortDropdownProps = {
  isMobile: boolean
}
type IconProps = React.SVGProps<SVGSVGElement>
export default function SortDropdown({ isMobile }: SortDropdownProps) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(sortOptions[0])

  if (isMobile) return null

  return (
    <div className='relative'>
      <Button
        type='button'
        onClick={() => setOpen((prev) => !prev)}
        className={`
    flex h-[2.5rem] w-[16.25rem] items-center justify-center rounded-[6.25rem]
    border-[0.0625rem] font-display pc-14-14-r-button transition-all duration-200
    ${
      open
        ? '!border-[#27AAE1] !bg-[#27AAE1] !text-white'
        : '!border-[#10475F]/20 !bg-transparent !text-[#10475F] hover:!bg-[#27AAE1] hover:!text-white hover:!border-[#27AAE1]'
    }
  `}
      >
        <ICSort className='size-[0.875rem] mr-[0.5rem]' /> Sắp xếp theo: {active}
      </Button>
      {open && (
        <div className='absolute left-0 top-[3rem] z-[20] min-w-[18rem] rounded-[1.5rem] bg-white px-[1.25rem] shadow-[0_0.25rem_1.5rem_rgba(0,0,0,0.12)]'>
          <RadioGroup
            value={active}
            onValueChange={(value) => {
              setActive(value)
              setOpen(false)
            }}
            className='flex flex-col'
          >
            {sortOptions.map((item, index) => {
              const checked = active === item

              return (
                <label
                  key={item}
                  htmlFor={`sort-${index}`}
                  className='group flex cursor-pointer items-center py-[0.88rem]'
                >
                  <RadioGroupItem
                    value={item}
                    id={`sort-${index}`}
                    className='absolute opacity-0 pointer-events-none'
                  />

                  <span
                    className={`
                      relative flex size-[1.5rem] shrink-0 items-center justify-center rounded-[62.5rem]
                      border-[0.125rem] transition-all
                      ${
                        checked
                          ? 'border-[#10475F]'
                          : 'border-[rgba(16,71,95,0.60)] group-hover:border-[#10475F]'
                      }
                    `}
                  >
                    <span
                      className={`
                        block rounded-[0.75rem] transition-all
                        ${checked ? 'size-[0.75rem] bg-[#10475F]' : 'size-[0.75rem] bg-transparent group-hover:bg-[#10475F]'}
                      `}
                    />
                  </span>

                  <span
                    className={`
                      ml-[0.62rem] pc-18-18-r font-display leading-[1.3] transition-colors
                      ${checked ? 'text-[#10475F]' : 'text-[#10475F] group-hover:text-[#10475F]'}
                    `}
                  >
                    {item}
                  </span>
                </label>
              )
            })}
          </RadioGroup>
        </div>
      )}
    </div>
  )
}
export function ICSort({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      className={className}
      {...props}
    >
      <path
        d='M6.09586 3.91998L3.92584 1.75L1.75586 3.91998'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.92578 12.25V1.75'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.90417 10.0801L10.0742 12.2501L12.2442 10.0801'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.0742 1.75V12.25'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
