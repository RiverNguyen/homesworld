'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { parsePhoneNumberFromString } from 'libphonenumber-js'

const formSchema = z
  .object({
    you_are: z.enum(['customer', 'partner', 'media']),
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
    your_choice: z.array(z.string()).optional(),
    homestay_name: z.string().optional(),
    location: z.string().optional(),
    tourist_spot: z.string().optional(),
    koc_channel: z.string().optional(),
    note: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.you_are === 'customer') {
      if (!data.your_choice || data.your_choice.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['your_choice'],
          message: 'Vui lòng chọn',
        })
      }
    }

    if (data.you_are === 'partner') {
      if (!data.homestay_name?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['homestay_name'],
          message: 'Vui lòng nhập',
        })
      }

      if (!data.location?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['location'],
          message: 'Vui lòng nhập',
        })
      }
    }

    if (data.you_are === 'media') {
      if (!data.tourist_spot?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['tourist_spot'],
          message: 'Vui lòng nhập',
        })
      }
    }
  })
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]
export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
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
    },
  })
  const youAre = form.watch('you_are')
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const payload = (() => {
        switch (values.you_are) {
          case 'customer':
            return {
              you_are: values.you_are,
              fullname: values.fullname,
              phone: values.phone,
              your_choice: values.your_choice,
              note: values.note,
            }
          case 'partner':
            return {
              you_are: values.you_are,
              fullname: values.fullname,
              phone: values.phone,
              homestay_name: values.homestay_name,
              location: values.location,
              note: values.note,
            }
          case 'media':
            return {
              you_are: values.you_are,
              fullname: values.fullname,
              phone: values.phone,
              tourist_spot: values.tourist_spot,
              koc_channel: values.koc_channel,
              note: values.note,
            }
        }
      })()

      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log(payload)
      toast(
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(payload, null, 2)}</code>
        </pre>,
      )
      form.reset()
    } catch (error) {
      console.error(error)
      toast.error('Failed to submit the form. Please try again.')
    }
  }

  return (
    <div className='w-[53.5rem] bg-[#fff] shadow-[0rem_0.875rem_1.875rem_0rem_rgba(0,0,0,0.02)] rounded-[1.125rem]  xsm:w-[100%] xsm:bg-transparent'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='py-[2.5rem] px-[2rem]  xsm:py-[2rem] xsm:px-[0rem]'
        >
          {/* Bạn là */}
          <FormField
            control={form.control}
            name='you_are'
            render={({ field }) => {
              const isError = !!form.formState.errors.you_are
              return (
                <FormItem className='flex flex-col'>
                  <FormLabel className='pc-16-16-r-input'>
                    <span className={`${isError ? 'text-red-500' : 'text-[#10475F]'}`}>
                      Bạn là
                      <span className='text-red-500 ml-1'>*</span>
                    </span>
                  </FormLabel>
                  <FormControl className='mt-[0.5rem]'>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className='flex items-center xsm:flex-col xsm:items-start'
                    >
                      <FormItem className='flex items-center '>
                        <FormControl className='m-[0]'>
                          <RadioGroupItem value='customer' />
                        </FormControl>
                        <FormLabel className='font-normal text-[#10475F]/80 leading-none ml-[0.5rem]'>
                          Khách hàng
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center ml-[2.82rem] xsm:ml-[0] xsm:mt-[1rem] '>
                        <FormControl className='m-[0]'>
                          <RadioGroupItem value='partner' />
                        </FormControl>
                        <FormLabel className='font-normal text-[#10475F]/80 leading-none  ml-[0.5rem]'>
                          Đối tác (khách sạn, homestay,...)
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center ml-[2.82rem] xsm:ml-[0] xsm:mt-[1rem]'>
                        <FormControl className='m-[0]'>
                          <RadioGroupItem value='media' />
                        </FormControl>
                        <FormLabel className='font-normal text-[#10475F]/80 leading-none  ml-[0.5rem]'>
                          Đơn vị truyền thông
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          {/* 2 cột */}
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-6'>
              {/* name */}
              <FormField
                control={form.control}
                name='fullname'
                render={({ field }) => (
                  <FormItem className='mt-[1.5rem] xsm:mt-[1.62rem]'>
                    <FormLabel className='pc-16-16-r-input  text-[#10475F] '>Tên của bạn</FormLabel>
                    <FormControl>
                      <Input
                        className='w-full h-[3rem] px-[0.75rem] rounded-[0.5rem] 
             bg-[#F8F8F8] text-[0.875rem]
             placeholder:text-[#10475F]/40 text-[#10475F]
             border-0 focus-visible:ring-0 mt-[0.25rem]'
                        placeholder='Nhập tên...'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='col-span-6'>
              {/* phone */}
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => {
                  const isError = !!form.formState.errors.phone
                  return (
                    <FormItem className='mt-[1.5rem] xsm:mt-[1.62rem] '>
                      <FormLabel className='pc-16-16-r-input'>
                        <span className={`${isError ? 'text-red-500' : 'text-[#10475F]'}`}>
                          Số điện thoại
                          <span className='text-red-500 ml-1'>*</span>
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='tel'
                          className='w-full h-[3rem] px-[0.75rem] rounded-[0.5rem] bg-[#F8F8F8] text-[0.875rem] placeholder:text-[#10475F]/40 text-[#10475F] border-0 focus-visible:ring-0 mt-[0.25rem]'
                          placeholder='Nhập số điện thoại...'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
            </div>
          </div>
          {youAre === 'partner' && (
            <div className='grid grid-cols-12 gap-4'>
              {/* Tên homestay */}
              <div className='col-span-6'>
                <FormField
                  control={form.control}
                  name='homestay_name'
                  render={({ field, fieldState }) => {
                    const isError = !!fieldState.error

                    return (
                      <FormItem className='mt-[1.5rem] xsm:mt-[1.62rem]'>
                        <FormLabel className='pc-16-16-r-input'>
                          <span className={isError ? 'text-red-500' : 'text-[#10475F]'}>
                            Tên homestay
                            <span className='text-red-500 ml-1'>*</span>
                          </span>
                        </FormLabel>

                        <FormControl>
                          <Input
                            className='w-full h-[3rem] px-[0.75rem] rounded-[0.5rem] 
            bg-[#F8F8F8] text-[0.875rem]
            placeholder:text-[#10475F]/40 text-[#10475F]
            border-0 focus-visible:ring-0 mt-[0.25rem]'
                            placeholder='Nhập tên homestay...'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>

              {/* Địa điểm */}
              <div className='col-span-6'>
                <FormField
                  control={form.control}
                  name='location'
                  render={({ field, fieldState }) => {
                    const isError = !!fieldState.error

                    return (
                      <FormItem className='mt-[1.5rem] xsm:mt-[1.62rem]'>
                        <FormLabel className='pc-16-16-r-input'>
                          <span className={isError ? 'text-red-500' : 'text-[#10475F]'}>
                            Địa điểm
                            <span className='text-red-500 ml-1'>*</span>
                          </span>
                        </FormLabel>

                        <FormControl>
                          <Input
                            className='w-full h-[3rem] px-[0.75rem] rounded-[0.5rem] 
            bg-[#F8F8F8] text-[0.875rem]
            placeholder:text-[#10475F]/40 text-[#10475F]
            border-0 focus-visible:ring-0 mt-[0.25rem]'
                            placeholder='Nhập địa điểm...'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
            </div>
          )}
          {youAre === 'media' && (
            <div className='grid grid-cols-12 gap-4'>
              {/* Điểm du lịch hợp tác */}
              <div className='col-span-6'>
                <FormField
                  control={form.control}
                  name='tourist_spot'
                  render={({ field }) => {
                    const isError = !!form.formState.errors.tourist_spot

                    return (
                      <FormItem className='mt-[1.5rem] xsm:mt-[1.62rem]'>
                        <FormLabel className='pc-16-16-r-input'>
                          <span className={isError ? 'text-red-500' : 'text-[#10475F]'}>
                            Điểm du lịch hợp tác
                            <span className='text-red-500 ml-1'>*</span>
                          </span>
                        </FormLabel>

                        <FormControl>
                          <Input
                            className='w-full h-[3rem] px-[0.75rem] rounded-[0.5rem] 
            bg-[#F8F8F8] text-[0.875rem]
            placeholder:text-[#10475F]/40 text-[#10475F]
            border-0 focus-visible:ring-0 mt-[0.25rem]'
                            placeholder='Nhập điểm du lịch hợp tác...'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>

              {/* Kênh truyền thông */}
              <div className='col-span-6'>
                <FormField
                  control={form.control}
                  name='koc_channel'
                  render={({ field }) => (
                    <FormItem className='mt-[1.5rem] xsm:mt-[1.62rem]'>
                      <FormLabel className='pc-16-16-r-input text-[#10475F]'>
                        Kênh truyền thông của KOC
                      </FormLabel>

                      <FormControl>
                        <Input
                          className='w-full h-[3rem] px-[0.75rem] rounded-[0.5rem] 
              bg-[#F8F8F8] text-[0.875rem]
              placeholder:text-[#10475F]/40 text-[#10475F]
              border-0 focus-visible:ring-0 mt-[0.25rem]'
                          placeholder='Bạn vui lòng dán link truyền thông vào đây'
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          )}
          {/* choice */}

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
        text-[0.875rem]
        focus:outline-none'
                          >
                            <span
                              className={`${
                                values.length > 0 ? 'text-[#10475F]' : 'text-[#10475F]/40'
                              }`}
                            >
                              {values.length > 0 ? values.join(', ') : 'Chọn nhu cầu'}
                            </span>

                            {/* icon giống select */}
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

          {/* Textarea */}
          <FormField
            control={form.control}
            name='note'
            render={({ field }) => (
              <FormItem className='mt-[1.5rem] xsm:mt[1.62rem]'>
                <FormLabel className='pc-16-16-r-input text-[#10475F] '>Ghi chú</FormLabel>
                <FormControl>
                  <Textarea
                    className='w-full h-[7.0625rem] px-[0.75rem] rounded-[0.5rem] 
             bg-[#F8F8F8] text-[0.875rem]
             placeholder:text-[#10475F]/40
             border-0 focus-visible:ring-0 mt-[0.25rem] text-[#10475F]'
                    placeholder='Nội dung ghi chú'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className='mt-[1.5rem] xsm:mt-[1.62rem] flex items-center justify-center gap-2 px-4 py-3 h-10 w-fit rounded-full bg-[#27AAE1] hover:bg-[#42A3CC] xsm:w-[100%] xsm:hover:bg-[#27AAE1] '
            type='submit'
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <span>Đang gửi...</span>
            ) : (
              <>
                Gửi thông tin{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                >
                  <path
                    d='M11.7356 11.4832L11.8125 2.1875C9.48489 2.21014 4.84544 2.24182 2.51786 2.26446L2.49862 3.42782C4.59316 3.40744 7.37221 3.39046 9.81771 3.36784L2.1875 10.9988L3.00109 11.8125L10.6313 4.18151L10.5657 11.4956L11.7357 11.4819L11.7356 11.4832Z'
                    fill='white'
                  />
                </svg>
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
