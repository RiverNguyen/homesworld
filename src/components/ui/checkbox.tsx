'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from '@/lib/utils'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      `
    grid place-content-center
    peer
    size-[1.25rem]
    shrink-0
    rounded-[0.25rem]
    border-[0.09375rem] border-[#D1D1D6]
    shadow-none
    focus-visible:outline-none
    focus-visible:ring-0
    disabled:cursor-not-allowed
    disabled:opacity-50
    data-[state=checked]:bg-[#10475F]
    data-[state=checked]:text-white
    `,
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        'grid place-content-center text-current rounded-[0.25rem] size-[1.25rem] bg-[#10475F]',
      )}
    >
      <Check className=' size-[0.875rem]' />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
