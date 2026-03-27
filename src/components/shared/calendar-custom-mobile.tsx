'use client'

import { isSameDay } from 'date-fns'
import { vi } from 'date-fns/locale'
import { ChevronDownIcon } from 'lucide-react'
import * as React from 'react'
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function CalendarMobile({
  className,
  classNames,
  showOutsideDays = false,
  captionLayout = 'label',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
}) {
  const defaultClassNames = getDefaultClassNames()
  const selectedRange =
    props.mode === 'range' && props.selected && typeof props.selected === 'object' && 'from' in props.selected
      ? props.selected
      : undefined
  const isPartialRangeSelection =
    !!selectedRange?.from &&
    (!selectedRange.to || isSameDay(selectedRange.from, selectedRange.to))
  const rangeStartClass = isPartialRangeSelection
    ? 'relative rounded-l-[6.25rem] bg-transparent [&>button]:relative [&>button]:z-10'
    : "relative rounded-l-[6.25rem] bg-transparent after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-1/2 after:bg-[#10475F] [&>button]:relative [&>button]:z-10"
  const rangeEndClass = isPartialRangeSelection
    ? 'relative rounded-r-[6.25rem] bg-transparent [&>button]:relative [&>button]:z-10'
    : "relative rounded-r-[6.25rem] bg-transparent after:content-[''] after:absolute after:inset-y-0 after:left-0 after:w-1/2 after:bg-[#10475F] [&>button]:relative [&>button]:z-10"
  const monthCount = typeof props.numberOfMonths === 'number' ? props.numberOfMonths : 1

  return (
    <DayPicker
      locale={vi}
      showOutsideDays={showOutsideDays}
      className={cn(
        'bg-background group/calendar  [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatCaption: (month) => `Tháng ${month.getMonth() + 1} - ${month.getFullYear()}`,
        // Vietnamese weekday header abbreviations: "CN", "T2"..."T7"
        formatWeekdayName: (weekday) => {
          const day = weekday.getDay() // 0=Sun ... 6=Sat
          switch (day) {
            case 0:
              return 'CN'
            case 1:
              return 'T2'
            case 2:
              return 'T3'
            case 3:
              return 'T4'
            case 4:
              return 'T5'
            case 5:
              return 'T6'
            case 6:
              return 'T7'
            default:
              return 'CN'
          }
        },
        formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('w-full', defaultClassNames.root),
        months: cn('relative flex flex-col gap-0 md:flex-row pb-3', defaultClassNames.months),
        month: cn(
          'flex w-full flex-col',
          defaultClassNames.month,
        ),
        nav: cn(
          'absolute left-8 right-8 top-4 flex items-center justify-between gap-1 xsm:hidden',
          defaultClassNames.nav,
        ),
        button_previous: cn(
          'size-6 select-none p-0 aria-disabled:opacity-50 cursor-pointer hover:opacity-80 transition-all duration-300',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          'size-6 select-none p-0 aria-disabled:opacity-50 cursor-pointer hover:opacity-80 transition-all duration-300',
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          'flex flex-col w-full [&>span]:text-[1.125rem] [&>span]:text-[#10475F] [&>span]:font-medium [&>span]:leading-[1.3] [&>span]:tracking-[-0.03125rem] items-center justify-center px-[1.625rem] pt-5 xsm:[&>span]:mb-16-m',
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          'flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium',
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          'has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-[6.25rem] border',
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn('bg-popover absolute inset-0 opacity-0', defaultClassNames.dropdown),
        caption_label: cn(
          'select-none font-medium mb-2',
          captionLayout === 'label'
            ? 'text-sm'
            : '[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5',
          defaultClassNames.caption_label,
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex px-[0.75rem]', defaultClassNames.weekdays),
        weekday: cn(
          'text-[0.75rem] leading-[1.5] text-[#10475F]/40 font-normal flex-1 select-none rounded-md',
          defaultClassNames.weekday,
        ),
        week: cn(
          'flex w-full px-[0.75rem] first-of-type:mt-1',
          defaultClassNames.week,
        ),
        week_number_header: cn('w-[--cell-size] select-none', defaultClassNames.week_number_header),
        week_number: cn(
          'text-muted-foreground select-none text-[0.8rem]',
          defaultClassNames.week_number,
        ),
        day: cn(
          'group/day relative size-[3.1rem] p-0 flex items-center justify-center select-none overflow-visible',
          defaultClassNames.day,
        ),
        range_start: cn(rangeStartClass, defaultClassNames.range_start),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn(rangeEndClass, defaultClassNames.range_end),
        today: cn(
          'bg-[#F5F5F5] text-[#10475F] rounded-[6.25rem] data-[selected=true]:bg-transparent data-[selected=true]:rounded-none',
          defaultClassNames.today,
        ),
        outside: cn(
          'text-muted-foreground aria-selected:text-muted-foreground',
          defaultClassNames.outside,
        ),
        disabled: cn('text-muted-foreground opacity-50', defaultClassNames.disabled),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot='calendar'
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return (
              <ICChevronLeft
                className={cn('size-6', className)}
                {...props}
              />
            )
          }

          if (orientation === 'right') {
            return (
              <ICChevronRight
                className={cn('size-6', className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon
              className={cn('size-4', className)}
              {...props}
            />
          )
        },
        Month: ({ children, displayIndex, className, ...props }) => (
          <div className={cn(className)} {...props}>
            {children}
            {displayIndex < monthCount - 1 && (
              <svg
                className='block w-full mt-4'
                width='100%'
                height='1'
                viewBox='0 0 375 1'
                preserveAspectRatio='none'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <line opacity='0.2' y1='0.5' x2='375' y2='0.5' stroke='#10475F' strokeDasharray='4 4' />
              </svg>
            )}
          </div>
        ),
        MonthCaption: ({
          children,
          calendarMonth: _calendarMonth,
          displayIndex: _displayIndex,
          ...props
        }) => (
          <div {...props}>
            {children}
          </div>
        ),
        DayButton: (dayButtonProps) => (
          <CalendarDayButton
            {...dayButtonProps}
            isPartialRangeSelection={isPartialRangeSelection}
          />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className='flex size-[--cell-size] items-center justify-center text-center'>
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  isPartialRangeSelection = false,
  ...props
}: React.ComponentProps<typeof DayButton> & {
  isPartialRangeSelection?: boolean
}) {
  const defaultClassNames = getDefaultClassNames()
  const isSingleRangeAnchor =
    isPartialRangeSelection &&
    modifiers.selected &&
    (modifiers.range_start || modifiers.range_end) &&
    !modifiers.range_middle

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant='ghost'
      size='icon'
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        isSingleRangeAnchor ||
        (modifiers.selected &&
          !modifiers.range_start &&
          !modifiers.range_end &&
          !modifiers.range_middle)
      }
      data-range-start={isSingleRangeAnchor ? false : modifiers.range_start}
      data-range-end={isSingleRangeAnchor ? false : modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'data-[selected-single=true]:bg-[#FFF] data-[selected-single=true]:border-[2px] data-[selected-single=true]:rounded-[6.25rem] data-[selected-single=true]:text-[#10475F] data-[range-middle=true]:bg-[#10475F] data-[range-middle=true]:text-white data-[range-start=true]:bg-[#FFF] data-[range-start=true]:text-[#10475F] data-[range-end=true]:bg-[#fff] data-[range-end=true]:text-[#10475F]  flex aspect-square size-[3.1rem] leading-[1.5] font-normal data-[range-end=true]:rounded-[6.25rem] data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-[6.25rem] group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 [&>span]:text-[0.875rem] text-[0.875rem] cursor-pointer rounded-[6.25rem] transition-all duration-300 text-[#10475F] data-[range-start=true]:border-[2px] border-[#10475F] data-[range-end=true]:border-[2px]',
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  )
}

const ICChevronLeft = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <path
      d='M15 18L9 12L15 6'
      stroke='#124681'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ICChevronRight = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <path
      d='M9 18L15 12L9 6'
      stroke='#124681'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export { CalendarMobile, CalendarDayButton }
