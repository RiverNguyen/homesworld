'use client'

import { useMemo, useState } from 'react'

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

const ICLocation = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='14'
    height='14'
    viewBox='0 0 14 14'
    fill='none'
    {...props}
  >
    <path
      d='M7.00018 7.83421C8.00533 7.83421 8.82018 7.01937 8.82018 6.01421C8.82018 5.00906 8.00533 4.19421 7.00018 4.19421C5.99502 4.19421 5.18018 5.00906 5.18018 6.01421C5.18018 7.01937 5.99502 7.83421 7.00018 7.83421Z'
      stroke='#10475F'
    />
    <path
      d='M2.11182 4.95246C3.26099 -0.099206 10.7452 -0.0933725 11.8885 4.95829C12.5593 7.92163 10.716 10.43 9.10016 11.9816C7.92766 13.1133 6.07266 13.1133 4.89432 11.9816C3.28432 10.43 1.44099 7.91579 2.11182 4.95246Z'
      stroke='#10475F'
    />
  </svg>
)

export default LocationPopover
