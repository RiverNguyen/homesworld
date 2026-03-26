'use client'

import { format } from 'date-fns'
import { type ComponentProps, useEffect, useState } from 'react'

import { Calendar } from '@/components/shared/calendar-custom'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
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
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          data-empty={!selectedDate}
          className={cn('w-full space-y-1 cursor-pointer text-[1.25rem] font-medium leading-[1.3] text-edge-[cap_alphabetic] text-trim-trim-both text-[#10475F]', className)}
        >
          <div className="flex-y-center space-x-[0.375rem]">
            <ICCalendar className='size-[0.875rem]' />
            <p className='pc-14-14-r text-[#10475F]'>{label}</p>
          </div>
          <div className="flex-y-center justify-between space-x-[0.375rem]">
            {selectedDate ? format(selectedDate, 'dd/MM/yyyy') : <p className='opacity-55'>{placeholder}</p>}
            <svg
              className={cn(
                'size-5 transition-transform duration-200 ease-out',
                open ? 'rotate-180' : 'rotate-0',
              )}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path d="M16.5999 7.45837L11.1666 12.8917C10.5249 13.5334 9.4749 13.5334 8.83324 12.8917L3.3999 7.45837" stroke="#10475F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[19.5rem] shadow-[2px_6px_32px_0_rgba(0,0,0,0.06)] p-0 rounded-[1.125rem]" align="start" sideOffset={convertRemToPx(1.675)} alignOffset={convertRemToPx(-1.25)}>
        <Calendar
          mode="single"
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

const ICCalendar = (props: React.SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <path d="M4.66699 1.16663V2.91663" stroke="#10475F" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.33301 1.16663V2.91663" stroke="#10475F" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.04199 5.30249H11.9587" stroke="#10475F" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.2058 9.19912L9.14078 11.2641C9.05912 11.3458 8.98327 11.4975 8.96577 11.6083L8.85494 12.3958C8.8141 12.6816 9.01244 12.88 9.29828 12.8391L10.0858 12.7283C10.1966 12.7108 10.3541 12.635 10.4299 12.5533L12.4949 10.4883C12.8508 10.1325 13.0199 9.7183 12.4949 9.1933C11.9758 8.67414 11.5616 8.84329 11.2058 9.19912Z" stroke="#10475F" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.9082 9.49658C11.0832 10.1266 11.5732 10.6166 12.2032 10.7916" stroke="#10475F" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 12.8333H4.66667C2.625 12.8333 1.75 11.6666 1.75 9.91663V4.95829C1.75 3.20829 2.625 2.04163 4.66667 2.04163H9.33333C11.375 2.04163 12.25 3.20829 12.25 4.95829V6.99996" stroke="#10475F" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.99745 7.99162H7.00269" stroke="#10475F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.83827 7.99162H4.84351" stroke="#10475F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.83827 9.74162H4.84351" stroke="#10475F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default DatePicker
