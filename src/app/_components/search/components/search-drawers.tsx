import { type Dispatch, type SetStateAction } from 'react'
import { type DateRange } from 'react-day-picker'

import { type LocationOption } from '@/app/_components/search/components/location-popover'
import { CounterRow } from '@/app/_components/search/components/number-popover'
import DrawerProvider from '@/components/providers/DrawerProvider'
import { CalendarMobile } from '@/components/shared/calendar-custom-mobile'
import { Checkbox } from '@/components/ui/checkbox'

type SearchDrawersProps = {
  dateDrawerOpen: boolean
  locationDrawerOpen: boolean
  numberDrawerOpen: boolean
  setDateDrawerOpen: Dispatch<SetStateAction<boolean>>
  setLocationDrawerOpen: Dispatch<SetStateAction<boolean>>
  setNumberDrawerOpen: Dispatch<SetStateAction<boolean>>
  today: Date
  selectedDateRange?: DateRange
  startDate?: Date
  endDate?: Date
  formattedStartDate: string
  formattedEndDate: string
  hasSelectedDateRange: boolean
  locationOptions: LocationOption[]
  selectedLocations: string[]
  rooms: number
  adults: number
  toggleLocation: (value: string) => void
  setStartDate: Dispatch<SetStateAction<Date | undefined>>
  setEndDate: Dispatch<SetStateAction<Date | undefined>>
  setConfirmedStartDate: Dispatch<SetStateAction<Date | undefined>>
  setConfirmedEndDate: Dispatch<SetStateAction<Date | undefined>>
  setSelectedLocations: Dispatch<SetStateAction<string[]>>
  setConfirmedLocations: Dispatch<SetStateAction<string[]>>
  setRooms: Dispatch<SetStateAction<number>>
  setAdults: Dispatch<SetStateAction<number>>
  setConfirmedRooms: Dispatch<SetStateAction<number>>
  setConfirmedAdults: Dispatch<SetStateAction<number>>
  setHasConfirmedNumber: Dispatch<SetStateAction<boolean>>
}

const SearchDrawers = ({
  dateDrawerOpen,
  locationDrawerOpen,
  numberDrawerOpen,
  setDateDrawerOpen,
  setLocationDrawerOpen,
  setNumberDrawerOpen,
  today,
  selectedDateRange,
  startDate,
  endDate,
  formattedStartDate,
  formattedEndDate,
  hasSelectedDateRange,
  locationOptions,
  selectedLocations,
  rooms,
  adults,
  toggleLocation,
  setStartDate,
  setEndDate,
  setConfirmedStartDate,
  setConfirmedEndDate,
  setSelectedLocations,
  setConfirmedLocations,
  setRooms,
  setAdults,
  setConfirmedRooms,
  setConfirmedAdults,
  setHasConfirmedNumber,
}: SearchDrawersProps) => {
  return (
    <>
      <DrawerProvider open={dateDrawerOpen} setOpen={setDateDrawerOpen} showDrawerDrag>
        <div className='h-[2.69rem] bg-[#27AAE1]'>
          <p className='mb-16-m text-trim-trim-both text-edge-[cap_alphabetic] text-white text-center mt-[0.6275rem]'>
            Ngày nhận phòng và trả phòng
          </p>
        </div>
        <div className='relative'>
          <div className='overflow-y-auto max-h-[28.12rem] overflow-x-hidden'>
            <CalendarMobile
              initialFocus
              mode='range'
              className='w-full rounded-[1.125rem]'
              numberOfMonths={2}
              selected={selectedDateRange}
              onSelect={(range) => {
                setStartDate(range?.from)
                setEndDate(range?.to)
              }}
              disabled={{ before: today }}
              defaultMonth={startDate ?? today}
            />
          </div>
          <div className='sticky bottom-0'>
            <div className='h-[5.8125rem] bg-[#27AAE1] pt-4 px-3 pb-[2.56rem] flex items-center justify-between'>
              <div className='flex items-center text-white space-x-3'>
                <div>
                  <p className='mb-14-r'>Nhận phòng</p>
                  <p className='mb-16-m'>{formattedStartDate}</p>
                </div>
                <ArrowIcon />
                <div>
                  <p className='mb-14-r'>Trả phòng</p>
                  <p className='mb-16-m'>{formattedEndDate}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (!hasSelectedDateRange) return
                  setConfirmedStartDate(startDate)
                  setConfirmedEndDate(endDate)
                  setDateDrawerOpen(false)
                }}
                disabled={!hasSelectedDateRange}
                className='h-[2.25rem] min-w-[6.6875rem] rounded-[6.25rem] bg-white text-[#10475F] flex-center text-[0.8125rem] leading-[1.5] disabled:opacity-80 disabled:cursor-not-allowed'
              >
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      </DrawerProvider>

      <DrawerProvider open={locationDrawerOpen} setOpen={setLocationDrawerOpen} showDrawerDrag>
        <div className='relative'>
          <div className='h-[3.44rem] bg-[#27AAE1] px-3 flex items-center justify-between'>
            <p className='mb-16-m text-trim-trim-both text-edge-[cap_alphabetic] text-white'>Chọn điểm đến</p>
            <button
              onClick={() => setSelectedLocations([])}
              disabled={selectedLocations.length === 0}
              className='h-[2.0625rem] px-[0.6875rem] flex-center bg-white rounded-[2.5625rem] disabled:opacity-60 disabled:cursor-not-allowed'
            >
              <p className='mb-14-r text-[#EF2020]'>Xoá lựa chọn</p>
              <DeleteIcon />
            </button>
          </div>
          <div className='flex flex-col max-h-[18rem] overflow-y-auto'>
            {locationOptions.map((opt) => (
              <label
                key={opt.value}
                className='flex items-center px-[1.25rem] py-[0.875rem] space-x-[0.625rem] cursor-pointer'
              >
                <Checkbox
                  checked={selectedLocations.includes(opt.value)}
                  onCheckedChange={() => toggleLocation(opt.value)}
                  className='size-[1.125rem]'
                />
                <span className='text-[1.125rem] text-[#10475F] leading-[1.3] text-trim-trim-both text-edge-[cap_alphabetic]'>
                  {opt.label}
                </span>
              </label>
            ))}
          </div>

          <div className='sticky bottom-0 left-0 w-full h-[3.625rem] bg-white shadow-[0_-3px_8px_0_rgba(0,0,0,0.06)] pt-4 px-3 pb-[0.375rem] flex items-center justify-between'>
            <button
              onClick={() => {
                setConfirmedLocations(selectedLocations)
                setLocationDrawerOpen(false)
              }}
              className='w-full h-[2.25rem] rounded-[6.25rem] bg-[#27AAE1] text-white text-[0.8125rem] leading-[1.5] disabled:opacity-80 disabled:cursor-not-allowed'
            >
              Tiếp tục
            </button>
          </div>
        </div>
      </DrawerProvider>

      <DrawerProvider open={numberDrawerOpen} setOpen={setNumberDrawerOpen} showDrawerDrag>
        <div className='relative'>
          <div className='h-[2.69rem] bg-[#27AAE1]'>
            <p className='mb-16-m text-trim-trim-both text-edge-[cap_alphabetic] text-white text-center pt-[0.6275rem]'>
              Chọn số người, phòng
            </p>
          </div>
          <div className='flex flex-col'>
            <CounterRow
              label='Số phòng'
              value={rooms}
              min={1}
              onDecrease={() => setRooms((prev) => Math.max(1, prev - 1))}
              onIncrease={() => setRooms((prev) => prev + 1)}
            />
            <CounterRow
              label='Người lớn ( >18 tuổi)'
              value={adults}
              min={1}
              onDecrease={() => setAdults((prev) => Math.max(1, prev - 1))}
              onIncrease={() => setAdults((prev) => prev + 1)}
            />
          </div>
          <div className='sticky bottom-0 left-0 w-full h-[3.625rem] bg-white shadow-[0_-3px_8px_0_rgba(0,0,0,0.06)] pt-4 px-3 pb-[0.375rem] flex items-center justify-between'>
            <button
              onClick={() => {
                setConfirmedRooms(rooms)
                setConfirmedAdults(adults)
                setHasConfirmedNumber(true)
                setNumberDrawerOpen(false)
              }}
              className='w-full h-[2.25rem] rounded-[6.25rem] bg-[#27AAE1] text-white text-[0.8125rem] leading-[1.5] disabled:opacity-80 disabled:cursor-not-allowed'
            >
              Tiếp tục
            </button>
          </div>
        </div>
      </DrawerProvider>
    </>
  )
}

const ArrowIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='21' height='21' viewBox='0 0 21 21' fill='none'>
    <path
      d='M12.6262 5.18872L17.9375 10.5L12.6262 15.8112'
      stroke='white'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3.0625 10.5H17.7887'
      stroke='white'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const DeleteIcon = () => (
  <svg className='size-[1.125rem] ml-1' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
    <path
      d='M15.75 4.48499C13.2525 4.23749 10.74 4.10999 8.235 4.10999C6.75 4.10999 5.265 4.18499 3.78 4.33499L2.25 4.48499'
      stroke='#EF2020'
      strokeWidth='1.35'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275'
      stroke='#EF2020'
      strokeWidth='1.35'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.1375 6.85498L13.65 14.4075C13.5675 15.585 13.5 16.5 11.4075 16.5H6.59255C4.50005 16.5 4.43255 15.585 4.35005 14.4075L3.86255 6.85498'
      stroke='#EF2020'
      strokeWidth='1.35'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7.74756 12.375H10.2451' stroke='#EF2020' strokeWidth='1.35' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.125 9.375H10.875' stroke='#EF2020' strokeWidth='1.35' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export default SearchDrawers
