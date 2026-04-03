'use client'

import { RadioGroup } from '@radix-ui/react-radio-group'
import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

import { ICTrash } from '@/app/lien-he/_components/form'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox-list-custom'
import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slide-list-custom'
import useIsMobile from '@/hooks/useIsMobile'
import { cn } from '@/lib/utils'

export type FilterFormValues = {
  priceRange: [number, number]
  stay: string[]
  area: string[]
}
type IconProps = React.SVGProps<SVGSVGElement>
type SelectedFilterItem = {
  key: string
  label: string
  type: 'priceRange' | 'stay' | 'area'
  value?: string
}

type SidebarProps = {
  form: UseFormReturn<FilterFormValues>
  className?: string
  onApply?: (payload: {
    formValues: FilterFormValues
    selectedItems: SelectedFilterItem[]
    sortValue?: string
  }) => void
}
const stayTypes = [
  { id: 'hotel-2', label: 'Khách sạn 2 sao' },
  { id: 'hotel-3', label: 'Khách sạn 3 sao' },
  { id: 'homestay', label: 'Homestay' },
  { id: 'villa', label: 'Villa' },
]

const areas = [
  { id: 'demo-1', label: 'Demo 1' },
  { id: 'demo-2', label: 'Demo 2' },
  { id: 'demo-3', label: 'Demo 3' },
  { id: 'demo-4', label: 'Demo 4' },
  { id: 'demo-5', label: 'Demo 5' },
]

const formatPrice = (value: number) => value.toLocaleString('vi-VN')

const buildSelectedItems = (values: FilterFormValues) => {
  const items: SelectedFilterItem[] = []

  const [min, max] = values.priceRange
  items.push({
    key: `price-${min}-${max}`,
    type: 'priceRange',
    label: `${formatPrice(min)}đ - ${formatPrice(max)}đ`,
  })

  values.stay.forEach((id) => {
    const found = stayTypes.find((item) => item.id === id)
    if (found) {
      items.push({
        key: `stay-${found.id}`,
        type: 'stay',
        value: found.id,
        label: found.label,
      })
    }
  })

  values.area.forEach((id) => {
    const found = areas.find((item) => item.id === id)
    if (found) {
      items.push({
        key: `area-${found.id}`,
        type: 'area',
        value: found.id,
        label: found.label,
      })
    }
  })

  return items
}
const sortOptions = [
  'Giá Combo tăng dần',
  'Giá Combo giảm dần',
  'Giá Combo phù hợp nhất',
  'Combo mới nhất',
]
const defaultValues: FilterFormValues = {
  priceRange: [100000, 10000000],
  stay: ['hotel-2', 'hotel-3'],
  area: ['demo-1'],
}

function SidebarInner({
  form,
  onApply,
}: {
  form: UseFormReturn<FilterFormValues>
  onApply?: (payload: {
    formValues: FilterFormValues
    selectedItems: SelectedFilterItem[]
    sortValue?: string
  }) => void
}) {
  const handleReset = () => {
    form.reset(defaultValues)

    // TODO: reset xong thì bắn lại selectedItems mặc định ra ngoài
    onApply?.({
      formValues: defaultValues,
      selectedItems: buildSelectedItems(defaultValues),
      sortValue: sortOptions[0],
    })

    setActiveSort(sortOptions[0])
  }
  const isMobile = useIsMobile()
  const formatPrice = (value: number) => {
    return value.toLocaleString('vi-VN')
  }
  const [activeSort, setActiveSort] = useState(sortOptions[0])

  // TODO: bắn data filter đã chọn ra component cha
  const handleApply = () => {
    const values = form.getValues()

    onApply?.({
      formValues: values,
      selectedItems: buildSelectedItems(values),
      sortValue: activeSort,
    })
  }
  return (
    <>
      {!isMobile && (
        <div className='w-full border-b border-[#E5E7EB] p-[1.25rem]'>
          <div className='flex items-center justify-between'>
            <p className='pc-2x-24-m font-display text-[#10475F]'>Bộ lọc</p>

            <button
              type='button'
              onClick={handleReset}
              className='flex cursor-pointer items-center justify-center font-display pc-14-14-r text-[#EF2020]'
            >
              Xoá chọn
              <ICTrash className='ml-[0.25rem] size-[1rem] aspect-square' />
            </button>
          </div>
        </div>
      )}
      {isMobile && (
        <div className='flex flex-col px-[1.25rem] '>
          <div className='h-[3.19rem]  flex items-center'>
            {' '}
            <p className=' font-display text-[#27AAE1] '>Xắp xếp theo</p>
          </div>
          <RadioGroup
            value={activeSort}
            onValueChange={setActiveSort}
            className='flex flex-col'
          >
            {sortOptions.map((item, index) => {
              const checked = activeSort === item

              return (
                <label
                  key={item}
                  htmlFor={`sort-${index}`}
                  className='group flex cursor-pointer items-center py-[0.88rem]'
                >
                  <RadioGroupItem
                    value={item}
                    id={`sort-${index}`}
                    className='pointer-events-none absolute opacity-0'
                  />

                  <span
                    className={`relative flex size-[1.5rem] shrink-0 items-center justify-center rounded-[62.5rem] border-[0.125rem] transition-all ${checked ? 'border-[#10475F]' : 'border-[rgba(16,71,95,0.6)] group-hover:border-[#10475F]'}`}
                  >
                    <span
                      className={`block size-[0.75rem] rounded-[0.75rem] transition-all ${checked ? 'bg-[#10475F]' : 'bg-transparent group-hover:bg-[#10475F]'}`}
                    />
                  </span>

                  <span
                    className={`
            ml-[0.62rem] font-display text-[1.125rem] font-normal leading-[1.3] transition-colors
            text-[#10475F]
          `}
                  >
                    {item}
                  </span>
                </label>
              )
            })}
          </RadioGroup>{' '}
        </div>
      )}
      <div className='w-full relative'>
        <FormField
          control={form.control}
          name='priceRange'
          render={({ field }) => (
            <FormItem className='px-[1.25rem]  pb-[1rem]'>
              <div className='h-[3.19rem]  flex items-center'>
                <p className=' font-display pc-16-16-r text-[#27AAE1] font-medium'>
                  Chọn khoảng giá
                </p>
              </div>

              <FormControl>
                <Slider
                  min={100000}
                  max={10000000}
                  step={100000}
                  minStepsBetweenThumbs={1}
                  value={field.value}
                  onValueChange={(value) =>
                    field.onChange([value[0] ?? 100000, value[1] ?? 10000000])
                  }
                />
              </FormControl>

              <div className='flex items-center justify-between'>
                <span className='pc-14-14-r font-display text-[#10475F]'>
                  {formatPrice(field.value[0])}đ
                </span>
                <span className='pc-14-14-r font-display text-[#10475F]'>
                  {formatPrice(field.value[1])}đ
                </span>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='stay'
          render={({ field }) => (
            <FormItem className='my-[0.5rem]  border-t-[0.0625rem] border-[#E5E7EB] '>
              <div className=' px-[1.25rem] h-[3.19rem]  flex items-center mb-0'>
                <p className=' font-display pc-16-16-r text-[#27AAE1] font-medium '>
                  Chọn loại hình lưu trú
                </p>
              </div>

              <div className='mx-[1.25rem] flex flex-col max-h-[14rem] overflow-y-auto'>
                {stayTypes.map((item) => {
                  const checked = field.value.includes(item.id)

                  return (
                    <label
                      key={item.id}
                      className='my-[0.88rem] flex cursor-pointer items-center'
                    >
                      <Checkbox
                        checked={checked}
                        onCheckedChange={(checkedValue) => {
                          if (checkedValue) {
                            field.onChange([...field.value, item.id])
                            return
                          }

                          field.onChange(field.value.filter((value) => value !== item.id))
                        }}
                      />

                      <span className='ml-[0.62rem] pc-18-18-r text-[#10475F]'>{item.label}</span>
                    </label>
                  )
                })}
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='area'
          render={({ field }) => (
            <FormItem className='my-[0.5rem] border-t-[0.0625rem] border-[#E5E7EB] '>
              <div className=' px-[1.25rem] h-[3.19rem]  flex items-center mb-0'>
                <p className=' font-display pc-16-16-r text-[#27AAE1] font-medium'>Chọn khu vực</p>
              </div>

              <div className='max-h-[10rem] overflow-y-auto'>
                <div className='mx-[1.25rem] flex flex-col'>
                  {areas.map((item) => {
                    const checked = field.value.includes(item.id)

                    return (
                      <label
                        key={item.id}
                        className='my-[0.88rem] flex cursor-pointer items-center'
                      >
                        <Checkbox
                          checked={checked}
                          onCheckedChange={(checkedValue) => {
                            if (checkedValue) {
                              field.onChange([...field.value, item.id])
                              return
                            }

                            field.onChange(field.value.filter((value) => value !== item.id))
                          }}
                        />

                        <span className='ml-[0.62rem] pc-18-18-r text-[#10475F]'>{item.label}</span>
                      </label>
                    )
                  })}
                </div>
              </div>
            </FormItem>
          )}
        />
        <div className='pointer-events-none fixed bottom-0 left-0 right-0 h-[5rem] bg-gradient-to-t from-white to-transparent z-10' />
        {isMobile && (
          <div className='fixed bottom-[2.56rem] left-0 right-0 px-[1.25rem]'>
            <Button
              onClick={handleApply}
              className='w-full h-[2.25rem] bg-[#27AAE1] rounded-[6.25rem]'
            >
              Áp dụng
            </Button>
          </div>
        )}
      </div>
    </>
  )
}

export default function Sidebar({ form, className, onApply }: SidebarProps) {
  return (
    <div
      className={cn(
        'flex w-[20.1875rem] flex-col rounded-[1.125rem] bg-white shadow-[0.125rem_0.375rem_2rem_0rem_rgba(0,0,0,0.06)]',
        className,
      )}
    >
      <SidebarInner
        form={form}
        onApply={onApply}
      />
    </div>
  )
}
export function SidebarContent({
  form,
  onApply,
}: {
  form: UseFormReturn<FilterFormValues>
  onApply?: (payload: {
    formValues: FilterFormValues
    selectedItems: SelectedFilterItem[]
    sortValue?: string
  }) => void
}) {
  // TODO: truyền onApply từ ListItem xuống SidebarInner
  return (
    <SidebarInner
      form={form}
      onApply={onApply}
    />
  )
}
export function ICClose({ className, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      className={className}
    >
      <path
        d='M9.99999 18.3337C14.5833 18.3337 18.3333 14.5837 18.3333 10.0003C18.3333 5.41699 14.5833 1.66699 9.99999 1.66699C5.41666 1.66699 1.66666 5.41699 1.66666 10.0003C1.66666 14.5837 5.41666 18.3337 9.99999 18.3337Z'
        stroke='#27AAE1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.64166 12.3583L12.3583 7.6416'
        stroke='#27AAE1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.3583 12.3583L7.64166 7.6416'
        stroke='#27AAE1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
