'use client'

import { startOfDay } from 'date-fns'
import Image from 'next/image'

import DatePicker from '@/app/_components/search/components/datepicker-popover'
import LocationPopover from '@/app/_components/search/components/location-popover'
import NumberPopover from '@/app/_components/search/components/number-popover'
import ICSearch from '@/components/icons/ICSearch'
import { ITaxonomies } from '@/interfaces/taxonomies.interface'
import { useFilterStore } from '@/store/store'

const ICONS = [
  { src: '/home/icon/icon-1.svg', hoverSrc: '/home/icon/icon-1-hover.svg' },
  { src: '/home/icon/icon-2.svg', hoverSrc: '/home/icon/icon-2-hover.svg' },
  { src: '/home/icon/icon-3.svg', hoverSrc: '/home/icon/icon-3-hover.svg' },
  { src: '/home/icon/icon-4.svg', hoverSrc: '/home/icon/icon-4-hover.svg' },
]

const FilterSearch = ({
  taxonomies,
  locations,
}: {
  taxonomies: ITaxonomies[]
  locations: ITaxonomies[]
}) => {
  const {
    combo,
    setCombo,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    locations: pickLocations,
    setLocations,
    quantity,
    setQuantity,
  } = useFilterStore()
  // const [activeId, setActiveId] = useState<string | null>(taxonomies?.[0]?.id ?? null)
  // const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  // const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  const today = startOfDay(new Date())

  const SERVICE_COMBO = taxonomies?.map((item, index) => ({
    ...item,
    icon: ICONS[index]?.src ?? ICONS[0].src,
    iconHover: ICONS[index]?.hoverSrc ?? ICONS[0].hoverSrc,
  }))

  return (
    <section
      id='filter'
      className='translate-y-[-6.1875rem] relative z-[11] max-w-[87.5rem] mx-auto'
    >
      <div className='flex space-x-2'>
        {SERVICE_COMBO?.map((item) => {
          const isActive = combo === item.id
          return (
            <button
              key={item.id}
              onClick={() => setCombo(item.id)}
              className={`group h-[2.875rem] px-4 space-x-2 flex-center cursor-pointer rounded-[6.25rem] backdrop-blur-[5px] transition-colors ${isActive ? 'bg-[#27AAE1] text-white' : 'bg-white text-[#10475F]'}`}
            >
              <Image
                src={isActive ? item.iconHover : item.icon}
                alt={item.name}
                width={30}
                height={30}
                className='size-[1.875rem] object-cover'
              />
              <span className='pc-16-r  text-trim-trim-both text-edge-[cap_alphabetic]'>
                {item.name}
              </span>
            </button>
          )
        })}
      </div>

      <div className='flex bg-white w-full h-[5.625rem] mt-[0.9125rem] rounded-[1.125rem] shadow-[0_315px_88px_0_rgba(168,168,168,0),0_202px_81px_0_rgba(168,168,168,0.01),0_113px_68px_0_rgba(168,168,168,0.05),0_50px_50px_0_rgba(168,168,168,0.09),0_13px_28px_0_rgba(168,168,168,0.10)]'>
        <div className='px-[1.25rem] py-4 flex flex-col space-y-1 w-[19.6875rem] flex-center'>
          <DatePicker
            label='Bắt đầu'
            placeholder='Ngày nhận phòng'
            value={startDate}
            onChange={setStartDate}
            disabled={{ before: today }}
            defaultMonth={startDate ?? today}
          />
        </div>
        <svg
          width='1'
          height='90'
          className='h-full w-[0.0625rem]'
          viewBox='0 0 1 90'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            opacity='0.2'
            x1='0.5'
            y1='2.18557e-08'
            x2='0.499996'
            y2='90'
            stroke='#10475F'
            strokeDasharray='4 4'
          />
        </svg>
        <div className='px-[1.25rem] py-4 flex flex-col space-y-1 w-[19.6875rem] flex-center'>
          <DatePicker
            label='Đến ngày'
            placeholder='Ngày trả phòng'
            value={endDate}
            onChange={(d) => setEndDate(d)}
            disabled={{ before: startDate ?? today }}
            defaultMonth={startDate ?? today}
          />
        </div>
        <svg
          width='1'
          height='90'
          className='h-full w-[0.0625rem]'
          viewBox='0 0 1 90'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            opacity='0.2'
            x1='0.5'
            y1='2.18557e-08'
            x2='0.499996'
            y2='90'
            stroke='#10475F'
            strokeDasharray='4 4'
          />
        </svg>
        <div className='px-[1.25rem] py-4 flex flex-col space-y-1 w-[19.6875rem] flex-center'>
          <LocationPopover
            label='Địa điểm'
            placeholder='Điểm đến'
            options={locations?.map((item) => ({
              value: item.slug,
              label: item.name,
            }))}
            value={pickLocations}
            onChange={setLocations}
          />
        </div>
        <svg
          width='1'
          height='90'
          className='h-full w-[0.0625rem]'
          viewBox='0 0 1 90'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            opacity='0.2'
            x1='0.5'
            y1='2.18557e-08'
            x2='0.499996'
            y2='90'
            stroke='#10475F'
            strokeDasharray='4 4'
          />
        </svg>
        <div className='px-[1.25rem] py-4 flex flex-col space-y-1 w-[19.6875rem] flex-center'>
          <NumberPopover
            label='Số lượng'
            placeholder='Số người, phòng'
            value={quantity}
            onChange={(adults, rooms) => {
              setQuantity({ adults, rooms: rooms })
            }}
          />
        </div>

        <button className='w-[6.625rem] hover:opacity-80 transition-opacity cursor-pointer duration-300 h-[4.625rem] flex-center flex-col rounded-[0.75rem] bg-[#27AAE1] text-white ml-[1.25rem] my-auto'>
          <ICSearch className='size-8' />
          <p className='text-[0.75rem] leading-[1.5]'>Tìm kiếm</p>
        </button>
      </div>
    </section>
  )
}

export default FilterSearch
