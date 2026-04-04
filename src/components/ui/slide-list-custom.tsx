'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, value, defaultValue, ...props }, ref) => {
  const values = React.useMemo(() => {
    if (Array.isArray(value)) return value
    if (Array.isArray(defaultValue)) return defaultValue
    return [props.min ?? 0]
  }, [value, defaultValue, props.min])

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn('relative flex w-full touch-none select-none items-center !', className)}
      value={value}
      defaultValue={defaultValue}
      {...props}
    >
      <SliderPrimitive.Track className='relative h-[0.125rem] w-full overflow-hidden rounded-full bg-[#10475F]/10 mt-[0.5rem]'>
        <SliderPrimitive.Range className='absolute h-full bg-[#27AAE1]' />
      </SliderPrimitive.Track>

      {values.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className='block  size-[1rem] rounded-full border-[0.125rem] border-white bg-[#27AAE1]   shadow-[0_0_0_0.125rem_rgba(39,170,225,0.2)] transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 mt-[0.5rem]'
        />
      ))}
    </SliderPrimitive.Root>
  )
})

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
