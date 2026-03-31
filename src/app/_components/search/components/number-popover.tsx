'use client'
import { useState } from 'react'

import ICCountNumber from '@/components/icons/ICCountNumber'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn, convertRemToPx } from '@/lib/utils'

type NumberPopoverProps = {
  className?: string
  placeholder?: string
  label?: string
  value: { adults: number; rooms: number } // controlled
  onChange: (adults: number, rooms: number) => void
}

const NumberPopover = ({ className, placeholder, label, value, onChange }: NumberPopoverProps) => {
  const [open, setOpen] = useState(false)

  const summary = `${String(value.adults).padStart(2, '0')} người, ${String(value.rooms).padStart(2, '0')} phòng`
  const displayText = value?.adults !== 0 || value?.rooms !== 0 ? summary : placeholder
  const handleRoomsChange = (direction: 'increase' | 'decrease') => {
    if (direction === 'decrease') {
      onChange(value.adults, Math.max(1, value.rooms - 1))
    } else {
      onChange(value.adults, value.rooms + 1)
    }
  }

  const handleAdultsChange = (direction: 'increase' | 'decrease') => {
    if (direction === 'decrease') {
      onChange(Math.max(1, value.adults - 1), value.rooms)
    } else {
      onChange(value.adults + 1, value.rooms)
    }
  }

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <button
          className={cn(
            'w-full space-y-1 cursor-pointer text-[1.25rem] font-medium leading-[1.3] text-edge-[cap_alphabetic] text-trim-trim-both text-[#10475F]',
            className,
          )}
        >
          <div className='flex-y-center space-x-[0.375rem]'>
            <ICCountNumber className='size-[0.875rem]' />
            <p className='pc-14-14-r text-[#10475F]'>{label}</p>
          </div>
          <div className='flex-y-center justify-between space-x-[0.375rem]'>
            <p
              className={cn(
                !(value?.adults !== 0 || value?.rooms !== 0) && 'opacity-55',
                'line-clamp-1',
              )}
            >
              {displayText}
            </p>
            <svg
              className={cn(
                'size-5 transition-transform duration-200 ease-out',
                open ? 'rotate-180' : 'rotate-0',
              )}
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
            >
              <path
                d='M16.5999 7.45837L11.1666 12.8917C10.5249 13.5334 9.4749 13.5334 8.83324 12.8917L3.3999 7.45837'
                stroke='#10475F'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className='w-[21.4375rem] shadow-[2px_6px_32px_0_rgba(0,0,0,0.06)] p-0 rounded-[1.125rem] overflow-hidden'
        align='start'
        sideOffset={convertRemToPx(1.675)}
        alignOffset={convertRemToPx(-1.25)}
      >
        <div className='flex flex-col max-h-[12.75rem] overflow-y-auto'>
          <div className='flex flex-col'>
            <CounterRow
              label='Số phòng'
              value={value?.rooms}
              min={1}
              onDecrease={() => handleRoomsChange('decrease')}
              onIncrease={() => handleRoomsChange('increase')}
            />
            <CounterRow
              label='Người lớn ( >18 tuổi)'
              value={value?.adults}
              min={1}
              onDecrease={() => handleAdultsChange('decrease')}
              onIncrease={() => handleAdultsChange('increase')}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

type CounterRowProps = {
  label: string
  value: number
  min?: number
  onDecrease: () => void
  onIncrease: () => void
}

export const CounterRow = ({ label, value, min = 0, onDecrease, onIncrease }: CounterRowProps) => {
  const isMin = value <= min

  return (
    <div className='flex items-center justify-between px-[1.5rem] py-[0.875rem]'>
      <p className='text-[1.125rem] xsm:text-[1rem] text-[#10475F] leading-[1.3]'>{label}</p>
      <div className='flex items-center space-x-[0.5rem]'>
        <button
          type='button'
          onClick={onDecrease}
          disabled={isMin}
          className='size-8 cursor-pointer rounded-full bg-[#ECECEC] flex-center text-[#10475F] disabled:opacity-55 disabled:cursor-not-allowed'
        >
          <svg
            className='size-[1.125rem]'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
          >
            <path
              d='M4.5 9H13.5'
              stroke='#0B1E3E'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <p className='text-[#10475F] text-[1.125rem] xsm:text-[1rem] leading-[1.3]'>
          {String(value).padStart(2, '0')}
        </p>
        <button
          type='button'
          onClick={onIncrease}
          className='size-8 cursor-pointer rounded-full bg-[#ECECEC] flex-center text-[#10475F] disabled:opacity-55 disabled:cursor-not-allowed'
        >
          <svg
            className='size-[1.125rem]'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
          >
            <path
              d='M4.5 9H9M9 9H13.5M9 9V13.5M9 9V4.5'
              stroke='#0B1E3E'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default NumberPopover
