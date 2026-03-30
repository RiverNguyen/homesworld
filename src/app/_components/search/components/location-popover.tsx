'use client'

import { useMemo, useState } from 'react'

import ICLocation from '@/components/icons/ICLocation'
import { Checkbox } from '@/components/ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn, convertRemToPx } from '@/lib/utils'

export type LocationOption = { value: string; label: string }

type LocationPopoverProps = {
  className?: string
  placeholder?: string
  label?: string
  options?: LocationOption[]
  value?: string[] // controlled
  defaultValue?: string[] // uncontrolled
  onChange?: (values: string[]) => void
}

const DEFAULT_OPTIONS: LocationOption[] = [
  { value: 'Tà Xùa', label: 'Tà Xùa' },
  { value: 'Hà Giang', label: 'Hà Giang' },
  { value: 'Quan Lạn', label: 'Quan Lạn' },
  { value: 'Bắc Ninh', label: 'Bắc Ninh' },
]

const LocationPopover = ({
  className,
  placeholder,
  label,
  options = DEFAULT_OPTIONS,
  value,
  defaultValue,
  onChange,
}: LocationPopoverProps) => {
  const [open, setOpen] = useState(false)
  const [internalSelected, setInternalSelected] = useState<string[]>(defaultValue ?? [])
  const selected = value ?? internalSelected

  const selectedLabels = useMemo(() => {
    const labelByValue = new Map(options.map((o) => [o.value, o.label]))
    return selected.map((v) => labelByValue.get(v) ?? v)
  }, [options, selected])

  const summary = selectedLabels.join(', ')

  const toggle = (nextValue: string) => {
    const next = selected.includes(nextValue)
      ? selected.filter((v) => v !== nextValue)
      : [...selected, nextValue]

    // Uncontrolled: update local state. Controlled: parent owns `value`.
    if (value === undefined) setInternalSelected(next)
    onChange?.(next)
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
            <ICLocation className='size-[0.875rem]' />
            <p className='pc-14-14-r text-[#10475F]'>{label}</p>
          </div>
          <div className='flex-y-center justify-between space-x-[0.375rem]'>
            <p
              className={cn(
                'truncate max-w-[12.5rem]',
                selected.length > 0 ? 'text-[#10475F]' : 'opacity-55',
              )}
            >
              {selected.length > 0 ? summary : placeholder}
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
        className='w-[19.5rem] shadow-[2px_6px_32px_0_rgba(0,0,0,0.06)] p-0 rounded-[1.125rem] overflow-hidden'
        align='start'
        sideOffset={convertRemToPx(1.675)}
        alignOffset={convertRemToPx(-1.25)}
      >
        <div className='flex flex-col max-h-[12.75rem] overflow-y-auto'>
          {options.map((opt) => {
            const isChecked = selected.includes(opt.value)
            return (
              <label
                key={opt.value}
                className='flex items-center px-[1.25rem] py-[0.875rem] space-x-[0.625rem] cursor-pointer hover:bg-[#F0F0F0]'
              >
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={() => toggle(opt.value)}
                  className='size-[1.25rem]'
                />
                <span className='pc-18-r text-[#10475F] text-trim-trim-both text-edge-[cap_alphabetic]'>
                  {opt.label}
                </span>
              </label>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default LocationPopover
