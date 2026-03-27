'use client'

import { format } from 'date-fns'
import { type ComponentProps, useEffect, useState } from 'react'

import ICCalendar from '@/components/icons/ICCalendar'
import { Calendar } from '@/components/shared/calendar-custom'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn, convertRemToPx } from '@/lib/utils'

type DatePickerProps = {
  className?: string
  placeholder?: string
  label?: string
  value?: Date
  onChange?: (date?: Date) => void
  defaultMonth?: Date
  disabled?: ComponentProps<typeof Calendar>['disabled']
}

const DatePicker = ({
  className,
  placeholder,
  label,
  value,
  onChange,
  defaultMonth,
  disabled,
}: DatePickerProps) => {
  const [internalDate, setInternalDate] = useState<Date | undefined>(value)
  useEffect(() => {
    setInternalDate(value)
  }, [value])

  const selectedDate = value ?? internalDate
  const [open, setOpen] = useState(false)

  const handleSelect = (nextDate?: Date) => {
    if (onChange) onChange(nextDate)
    else setInternalDate(nextDate)
  }

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <button
          data-empty={!selectedDate}
          className={cn(
            'w-full space-y-1 cursor-pointer text-[1.25rem] font-medium leading-[1.3] text-edge-[cap_alphabetic] text-trim-trim-both text-[#10475F]',
            className,
          )}
        >
          <div className='flex-y-center space-x-[0.375rem]'>
            <ICCalendar className='size-[0.875rem]' />
            <p className='pc-14-14-r text-[#10475F]'>{label}</p>
          </div>
          <div className='flex-y-center justify-between space-x-[0.375rem]'>
            {selectedDate ? (
              format(selectedDate, 'dd/MM/yyyy')
            ) : (
              <p className='opacity-55'>{placeholder}</p>
            )}
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
        className='w-[19.5rem] shadow-[2px_6px_32px_0_rgba(0,0,0,0.06)] p-0 rounded-[1.125rem]'
        align='start'
        sideOffset={convertRemToPx(1.675)}
        alignOffset={convertRemToPx(-1.25)}
      >
        <Calendar
          mode='single'
          selected={selectedDate}
          onSelect={handleSelect}
          defaultMonth={defaultMonth ?? selectedDate ?? new Date()}
          disabled={disabled}
          className='w-full rounded-[1.125rem]'
        />
      </PopoverContent>
    </Popover>
  )
}


export default DatePicker
