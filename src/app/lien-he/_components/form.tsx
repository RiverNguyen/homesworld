'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

/* ================= SCHEMA ================= */

const base = {
  fullname: z.string().optional(),
  phone: z
    .string()
    .trim()
    .min(1, 'Vui lòng nhập')
    .refine(
      (val) => {
        const phoneNumber = parsePhoneNumberFromString(val, 'VN')
        return phoneNumber?.isValid() ?? false
      },
      { message: 'Số điện thoại không hợp lệ' },
    ),
  note: z.string().optional(),
}

const customerSchema = z.object({
  you_are: z.literal('customer'),
  ...base,
  your_choice: z.array(z.string()).min(1, 'Vui lòng chọn'),
})

const partnerSchema = z.object({
  you_are: z.literal('partner'),
  ...base,
  homestay_name: z.string().min(1, 'Vui lòng nhập'),
  location: z.string().min(1, 'Vui lòng nhập'),
})

const mediaSchema = z.object({
  you_are: z.literal('media'),
  ...base,
  tourist_spot: z.string().min(1, 'Vui lòng nhập'),
  koc_channel: z.string().optional(),
})

const formSchema = z.discriminatedUnion('you_are', [customerSchema, partnerSchema, mediaSchema])

type FormType = z.infer<typeof formSchema>

/* ================= OPTIONS ================= */

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]

/* ================= REUSABLE INPUT ================= */

const baseInputClass =
  'w-full h-[3rem] px-[0.75rem] rounded-[0.5rem] bg-[#F8F8F8] text-[0.875rem] placeholder:text-[#10475F]/40 text-[#10475F] border-0 focus-visible:ring-0 mt-[0.25rem]'

function RHFInput({ control, name, label, required, placeholder }: any) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const isError = !!fieldState.error

        return (
          <FormItem className='mt-[1.5rem] xsm:mt-[1.62rem]'>
            <FormLabel className='pc-16-16-r-input'>
              <span className={isError ? 'text-red-500' : 'text-[#10475F]'}>
                {label}
                {required && <span className='text-red-500 ml-1'>*</span>}
              </span>
            </FormLabel>

            <FormControl>
              <Input
                {...field}
                placeholder={placeholder}
                className={baseInputClass}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

/* ================= MAIN ================= */

export default function MyForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      you_are: 'customer',
      fullname: '',
      phone: '',
      your_choice: [],
      homestay_name: '',
      location: '',
      tourist_spot: '',
      koc_channel: '',
      note: '',
    } as any,
  })

  const youAre = form.watch('you_are')

  async function onSubmit(values: FormType) {
    try {
      let payload

      if (values.you_are === 'customer') {
        payload = {
          you_are: values.you_are,
          fullname: values.fullname,
          phone: values.phone,
          your_choice: values.your_choice,
          note: values.note,
        }
      }

      if (values.you_are === 'partner') {
        payload = {
          you_are: values.you_are,
          fullname: values.fullname,
          phone: values.phone,
          homestay_name: values.homestay_name,
          location: values.location,
          note: values.note,
        }
      }

      if (values.you_are === 'media') {
        payload = {
          you_are: values.you_are,
          fullname: values.fullname,
          phone: values.phone,
          tourist_spot: values.tourist_spot,
          koc_channel: values.koc_channel,
          note: values.note,
        }
      }

      console.log(payload)

      toast.success('Gửi thành công')
      form.reset()
    } catch (error) {
      toast.error('Failed')
    }
  }

  return (
    <div className='w-[53.5rem] bg-[#fff] shadow-[0rem_0.875rem_1.875rem_0rem_rgba(0,0,0,0.02)] rounded-[1.125rem] xsm:w-full xsm:bg-transparent'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='py-[2.5rem] px-[2rem]'
        >
          {/* YOU ARE */}
          <FormField
            control={form.control}
            name='you_are'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='pc-16-16-r-input text-[#10475F]'>
                  Bạn là <span className='text-red-500 ml-1'>*</span>
                </FormLabel>

                <FormControl className='mt-[0.5rem]'>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className='flex items-center xsm:flex-col xsm:items-start'
                  >
                    <div className='flex items-center'>
                      <RadioGroupItem value='customer' />
                      <span className='ml-[0.5rem]'>Khách hàng</span>
                    </div>

                    <div className='flex items-center ml-[2.82rem]'>
                      <RadioGroupItem value='partner' />
                      <span className='ml-[0.5rem]'>Đối tác</span>
                    </div>

                    <div className='flex items-center ml-[2.82rem]'>
                      <RadioGroupItem value='media' />
                      <span className='ml-[0.5rem]'>Media</span>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          {/* COMMON */}
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-6'>
              <RHFInput
                control={form.control}
                name='fullname'
                label='Tên của bạn'
                placeholder='Nhập tên của bạn'
              />
            </div>

            <div className='col-span-6'>
              <RHFInput
                control={form.control}
                name='phone'
                placeholder='Nhập số điện thoại'
                label='Số điện thoại'
                required
              />
            </div>
          </div>

          {/* PARTNER */}
          {youAre === 'partner' && (
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-6'>
                <RHFInput
                  control={form.control}
                  name='homestay_name'
                  label='Tên homestay'
                  placeholder='Nhập tên homestay của bạn'
                  required
                />
              </div>

              <div className='col-span-6'>
                <RHFInput
                  control={form.control}
                  name='location'
                  label='Địa điểm'
                  placeholder='Bạn vui lòng nhập địa điểm của homestay'
                  required
                />
              </div>
            </div>
          )}

          {/* MEDIA */}
          {youAre === 'media' && (
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-6'>
                <RHFInput
                  control={form.control}
                  name='tourist_spot'
                  label='Điểm du lịch'
                  placeholder='Nhập tên địa điểm'
                  required
                />
              </div>

              <div className='col-span-6'>
                <RHFInput
                  control={form.control}
                  name='koc_channel'
                  label='Kênh truyền thông của KOC'
                  placeholder='Bạn vui lòng dán link truyền thông vào đây'
                />
              </div>
            </div>
          )}

          {/* CUSTOMER */}
          {youAre === 'customer' && (
            <FormField
              control={form.control}
              name='your_choice'
              render={({ field }) => {
                const values: string[] = field.value || []

                const toggleValue = (val: string) => {
                  if (values.includes(val)) {
                    field.onChange(values.filter((v) => v !== val))
                  } else {
                    field.onChange([...values, val])
                  }
                }

                return (
                  <FormItem className='mt-[1.5rem]'>
                    <FormLabel className='pc-16-16-r-input text-[#10475F]'>
                      Nhu cầu của bạn
                    </FormLabel>

                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <button
                            type='button'
                            className='w-full h-[3rem] px-[0.75rem] flex items-center justify-between
                rounded-[0.5rem] bg-[#F8F8F8] border-0 mt-[0.25rem]
                text-[0.875rem] focus:outline-none'
                          >
                            <span
                              className={`${
                                values.length > 0 ? 'text-[#10475F]' : 'text-[#10475F]/40'
                              }`}
                            >
                              {values.length > 0 ? values.join(', ') : 'Chọn nhu cầu'}
                            </span>

                            {/* ICON (GIỐNG SELECT) */}
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='16'
                              height='16'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='#10475F'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              className='opacity-50'
                            >
                              <path d='m6 9 6 6 6-6' />
                            </svg>
                          </button>
                        </FormControl>
                      </PopoverTrigger>

                      <PopoverContent
                        align='start'
                        className='p-0 mt-1 bg-white rounded-[0.5rem] shadow-md border-0
            w-[var(--radix-popover-trigger-width)]'
                      >
                        <div className='flex flex-col'>
                          {options.map((item) => (
                            <label
                              key={item.value}
                              className='flex items-center gap-2 px-3 py-2 cursor-pointer
                  hover:bg-[#F0F0F0]'
                            >
                              <Checkbox
                                checked={values.includes(item.value)}
                                onCheckedChange={() => toggleValue(item.value)}
                              />
                              <span className='text-[#10475F] text-[0.875rem]'>{item.label}</span>
                            </label>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          )}

          {/* NOTE */}
          <FormField
            control={form.control}
            name='note'
            render={({ field }) => (
              <FormItem className='mt-[1.5rem] xsm:mt-[1.62rem]'>
                <FormLabel className='pc-16-16-r-input text-[#10475F]'>Ghi chú</FormLabel>

                <FormControl>
                  <Textarea
                    {...field}
                    placeholder='Nội dung ghi chú'
                    className='w-full h-[7.0625rem] px-[0.75rem] rounded-[0.5rem] 
          bg-[#F8F8F8] text-[0.875rem]
          placeholder:text-[#10475F]/40 text-[#10475F]
          border-0 focus-visible:ring-0 mt-[0.25rem]'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className='mt-[1.5rem]'
            type='submit'
          >
            Gửi thông tin
          </Button>
        </form>
      </Form>
    </div>
  )
}
