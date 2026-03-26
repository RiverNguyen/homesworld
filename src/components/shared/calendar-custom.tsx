'use client'

import { vi } from 'date-fns/locale'
import { ChevronDownIcon } from 'lucide-react'
import * as React from 'react'
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      locale={vi}
      showOutsideDays={showOutsideDays}
      className={cn(
        'bg-background group/calendar p-1 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
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
        root: cn('w-fit', defaultClassNames.root),
        months: cn('relative flex flex-col gap-4 md:flex-row pb-3', defaultClassNames.months),
        month: cn('flex w-full flex-col gap-2', defaultClassNames.month),
        nav: cn(
          'absolute left-8 right-8 top-4 flex items-center justify-between gap-1',
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
          'flex flex-col w-full [&>span]:text-[1.125rem] [&>span]:text-[#10475F] [&>span]:font-medium [&>span]:leading-[1.3] [&>span]:tracking-[-0.03125rem] items-center justify-center px-[--cell-size] pt-4',
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
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-sm'
            : '[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5',
          defaultClassNames.caption_label,
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex px-1.5', defaultClassNames.weekdays),
        weekday: cn(
          'text-[0.75rem] text-[#10475F]/60 flex-1 select-none rounded-md leading-[1.5] font-normal',
          defaultClassNames.weekday,
        ),
        week: cn(
          'flex w-full justify-between px-[0.625rem] first-of-type:mt-1',
          defaultClassNames.week,
        ),
        week_number_header: cn('w-[--cell-size] select-none', defaultClassNames.week_number_header),
        week_number: cn(
          'text-muted-foreground select-none text-[0.8rem]',
          defaultClassNames.week_number,
        ),
        day: cn(
          'group/day relative aspect-square size-8 select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-[6.25rem] [&:last-child[data-selected=true]_button]:rounded-r-[6.25rem]',
          defaultClassNames.day,
        ),
        range_start: cn('bg-[#F5F5F5] rounded-l-[6.25rem]', defaultClassNames.range_start),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn('bg-[#F5F5F5] rounded-r-[6.25rem]', defaultClassNames.range_end),
        today: cn(
          'bg-[#F5F5F5] text-[#10475F] rounded-[6.25rem] data-[selected=true]:rounded-[6.25rem]',
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
        MonthCaption: ({
          children,
          calendarMonth: _calendarMonth,
          displayIndex: _displayIndex,
          ...props
        }) => (
          <div {...props}>
            {children}
            <svg
              className='w-full mt-4 mb-2'
              width='100%'
              height='1'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line
                opacity='0.2'
                y1='0.5'
                x2='100%'
                y2='0.5'
                stroke='#00026E'
                strokeDasharray='4 4'
              />
            </svg>
          </div>
        ),
        DayButton: CalendarDayButton,
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
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

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
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'data-[selected-single=true]:bg-[#10475F] data-[selected-single=true]:rounded-[6.25rem] data-[selected-single=true]:text-white data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-[#10475F] data-[range-start=true]:text-white data-[range-end=true]:bg-[#10475F] data-[range-end=true]:text-white group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-0 flex aspect-square size-[2rem] leading-[1.5] font-normal data-[range-end=true]:rounded-[6.25rem] data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-[6.25rem] group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 [&>span]:text-[0.875rem] text-[0.875rem] [&>span]:opacity-70 cursor-pointer rounded-[6.25rem] transition-all duration-300',
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

export { Calendar, CalendarDayButton }
