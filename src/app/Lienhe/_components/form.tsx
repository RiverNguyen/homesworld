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

const formSchema = z.object({
  you_are: z.string().min(1, 'Vui lòng nhập'),
  fullname: z.string().optional(),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true // optional
        const phoneNumber = parsePhoneNumberFromString(val, 'VN') // VN là mã quốc gia mặc định
        return phoneNumber?.isValid() ?? false
      },
      {
        message: 'Số điện thoại không hợp lệ',
      },
    ),
  your_choice: z.string().optional(),
  note: z.string().optional(),
  agree: z.boolean().refine((val) => val === true, {
    message: 'Bạn phải đồng ý',
  }),
})

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      you_are: '',
      fullname: '',
      phone: '',
      your_choice: '',
      note: '',
      agree: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values)
      toast(
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(values, null, 2)}</code>
        </pre>,
      )
    } catch (error) {
      console.error('Form submission error', error)
      toast.error('Failed to submit the form. Please try again.')
    }
  }

  return (
    <div className='w-[53.5rem] bg-[#fff] shadow-[0rem_0.875rem_1.875rem_0rem_rgba(0,0,0,0.02)] rounded-[1.125rem]  xsm:w-[100%] '>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='pt-[2.5rem] pl-[2rem] pr-[2rem] pb-[2.5rem] '
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
                    <span
                      className={` ${
                        isError || !field.value ? 'text-[#10475F]/80' : 'text-[#10475F]'
                      }`}
                    >
                      Bạn là
                      <span className='text-red-500 ml-1'>*</span>
                    </span>
                  </FormLabel>
                  <FormControl className='mt-[0.5rem]'>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className='flex center items-center'
                    >
                      <FormItem className='flex items-center'>
                        <FormControl className='m-[0]'>
                          <RadioGroupItem value='customer' />
                        </FormControl>
                        <FormLabel className='font-normal ml-[0.5rem] text-[#10475F]/80'>
                          Khách hàng
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center ml-[2.82rem]'>
                        <FormControl className='m-[0]'>
                          <RadioGroupItem value='partner' />
                        </FormControl>
                        <FormLabel className='font-normal ml-[0.5rem] text-[#10475F]/80'>
                          Đối tác (khách sạn, homestay,...)
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center ml-[2.82rem]'>
                        <FormControl className='m-[0]'>
                          <RadioGroupItem value='media' />
                        </FormControl>
                        <FormLabel className='font-normal ml-[0.5rem] text-[#10475F]/80'>
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
              <FormField
                control={form.control}
                name='fullname'
                render={({ field }) => (
                  <FormItem className='mt-[1.5rem]'>
                    <FormLabel className='pc-16-16-r-input  text-[#10475F] '>Tên của bạn</FormLabel>
                    <FormControl>
                      <Input
                        className='w-full h-[3rem] px-[0.75rem] rounded-[0.5rem] 
             bg-[#F8F8F8] text-[0.875rem]
             placeholder:text-[#10475F]/40 text-[#10475F]/40
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
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => {
                  const isError = !!form.formState.errors.phone
                  return (
                    <FormItem className='mt-[1.5rem]'>
                      <FormLabel className='pc-16-16-r-input'>
                        <span
                          className={`${
                            isError || !field.value ? 'text-[#10475F]/80' : 'text-[#10475F]'
                          }`}
                        >
                          Số điện thoại
                          <span className='text-red-500 ml-1'>*</span>
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='tel'
                          className='w-full h-[3rem] px-[0.75rem] rounded-[0.5rem] bg-[#F8F8F8] text-[0.875rem] placeholder:text-[#10475F]/40 text-[#10475F]/40 border-0 focus-visible:ring-0 mt-[0.25rem]'
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

          {/* Select */}
          <FormField
            control={form.control}
            name='your_choice'
            render={({ field }) => (
              <FormItem className='mt-[1.5rem]'>
                <FormLabel className='pc-16-16-r-input text-[#10475F] '>Nhu cầu của bạn</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className='w-full h-[3rem] px-[0.75rem] flex items-center justify-between
      rounded-[0.5rem] bg-[#F8F8F8] border-0 mt-[0.25rem]
      text-[0.875rem] !text-[#10475F]/40
      focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0
      [&>span]:!text-[#10475F]/40'
                    >
                      <SelectValue
                        placeholder='Chọn nhu cầu'
                        className='data-[placeholder]:!text-[#10475F]/40 !text-[#10475F]/40'
                      />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className='bg-white rounded-lg shadow-md border-0'>
                    <SelectItem
                      value='option1'
                      className='py-2 px-3 !text-[#10475F]/40 hover:bg-[#F0F0F0] focus:bg-[#F0F0F0]'
                    >
                      Option 1
                    </SelectItem>
                    <SelectItem
                      value='option2'
                      className='py-2 px-3 !text-[#10475F]/40 hover:bg-[#F0F0F0] focus:bg-[#F0F0F0]'
                    >
                      Option 2
                    </SelectItem>
                    <SelectItem
                      value='option3'
                      className='py-2 px-3 !text-[#10475F]/40 hover:bg-[#F0F0F0] focus:bg-[#F0F0F0]'
                    >
                      Option 3
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Textarea */}
          <FormField
            control={form.control}
            name='note'
            render={({ field }) => (
              <FormItem className='mt-[1.5rem]'>
                <FormLabel className='pc-16-16-r-input text-[#10475F] '>Ghi chú</FormLabel>
                <FormControl>
                  <Textarea
                    className='w-full h-[7.0625rem] px-[0.75rem] rounded-[0.5rem] 
             bg-[#F8F8F8] text-[0.875rem]
             placeholder:text-[#10475F]/40
             border-0 focus-visible:ring-0 mt-[0.25rem] text-[#10475F]/40'
                    placeholder='Nội dung ghi chú'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className='mt-[1.5rem] flex items-center justify-center gap-[0.5rem] py-[0.875rem] px-[1rem] rounded-[6.25rem] w-fit h-[2.5rem] bg-[#27AAE1] flex items-center justify-center gap-[0.5rem] py-[0.875rem] px-[1rem] rounded-[6.25rem] w-fit h-[2.5rem] bg-[#27AAE1] hover:bg-[#42A3CC]'
            type='submit'
          >
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
          </Button>
        </form>
      </Form>
    </div>
  )
}
