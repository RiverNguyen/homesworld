'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@/lib/utils'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      className={cn(
        `
        flex items-center
        xsm:flex-col xsm:items-start
        `,
        className,
      )}
      {...props}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        `
        relative block shrink-0
        h-[1.25rem] w-[1.25rem]
        rounded-full
        border-[0.125rem] border-solid
        border-[#10475F]
        bg-transparent
        align-middle
        appearance-none
        outline-none
        opacity-[0.34]

        data-[state=checked]:border-[#10475F]
        data-[state=checked]:opacity-100

        focus:outline-none
        focus-visible:ring-[0.0625rem]
        focus-visible:ring-ring

        disabled:cursor-not-allowed
        disabled:opacity-50
        `,
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator asChild>
        <div className='absolute left-0 top-0 h-full w-full'>
          <div
            className='
              absolute left-1/2 top-1/2
              h-[0.625rem] w-[0.625rem]
              -translate-x-1/2 -translate-y-1/2
              rounded-full bg-[#10475F]
            '
          />
        </div>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
