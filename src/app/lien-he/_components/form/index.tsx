'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { useState } from 'react'
import { useForm, useFormState, useWatch, type Control, type FieldPath } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import DrawerProvider from '@/components/providers/DrawerProvider'
import ButtonPrimary from '@/components/ui/ButtonPrimary'
import { Checkbox } from '@/components/ui/checkbox-custom'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group-custom'
import { Textarea } from '@/components/ui/textarea'
import endpoints from '@/configs/endpoints'
import CF7Request from '@/fetches/cf7Request'
import useIsMobile from '@/hooks/useIsMobile'
import { ServiceComboItem } from '@/interfaces/serviceCombo.interface'

type IconProps = React.SVGProps<SVGSVGElement>
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

// data
const userTypeOptions = [
  { value: 'customer', label: 'Khách hàng' },
  { value: 'partner', label: 'Đối tác (khách sạn, homestay,...)' },
  { value: 'media', label: 'Đơn vị truyền thông' },
] as const

type FormValues = z.infer<typeof formSchema>

//common input
function InputField({
  control,
  name,
  label,
  placeholder,
  required,
}: {
  control: Control<FormValues>
  name: FieldPath<FormValues>
  label: string
  placeholder?: string
  required?: boolean
}) {
  const { isSubmitting } = useFormState({ control })
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const isError = !!fieldState.error
        const isLoading = isSubmitting

        return (
          <FormItem className='mt-[1.5rem] xsm:mt-[1rem]'>
            <FormLabel>
              <span
                className={
                  isError ? 'text-red-500  pc-16-16-r-input' : 'text-[#10475F] pc-16-16-r-input'
                }
              >
                {label}
                {required && <span className='text-red-500 ml-1  pc-16-16-r-input'>*</span>}
              </span>
            </FormLabel>

            <FormControl>
              <div className='relative'>
                <Input
                  {...field}
                  placeholder={placeholder}
                  className={inputClass}
                  disabled={isLoading}
                />
              </div>
            </FormControl>

            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
const inputClass =
  'w-full h-[3rem] px-[0.75rem] rounded-[0.5rem] bg-[#F8F8F8] text-[0.875rem] placeholder:text-[rgba(16,71,95,0.40)] text-[#10475F] border-0 mt-[0.25rem] focus:outline-none focus-visible:outline-none focus-visible:ring-0 shadow-none xsm:border-[#10475F]/20 xsm:border-[0.0625rem] xsm:bg-[transparent]'
//form
export default function MyForm({ serviceComboData }: { serviceComboData: ServiceComboItem[] }) {
  const isMobile = useIsMobile()
  const [choiceDrawerOpen, setChoiceDrawerOpen] = useState(false)
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
  // Avoid React Compiler incompatibility: `form.w  atch()` returns an internal subscription function.
  // `useWatch()` is the hook-based alternative.
  const youAre = useWatch({ control: form.control, name: 'you_are' })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const payload = {
        ...values,
        your_choice: values.your_choice?.join(', '),
      }

      const request = new CF7Request(payload)
      const cf7Form = endpoints.contact.form
      const response = await request.send({
        id: cf7Form.id,
        unitTag: cf7Form.unit_tag,
      })

      const status = response?.status
      if (status === 'mail_sent' || status === 'success') {
        toast.success('Gửi thông tin thành công')
        form.reset()
        return
      }

      toast.error(
        response?.message ||
          response?.detail ||
          'Gửi thông tin chưa thành công. Vui lòng kiểm tra lại và thử lại!',
      )
    } catch (error) {
      console.error(error)
      toast.error('Gửi thông tin chưa thành công. Vui lòng kiểm tra lại và thử lại!')
    }
  }

  return (
    <div className='w-[53.5rem] bg-[#fff]  rounded-[1.125rem]  xsm:w-[100%] xsm:bg-transparent'>
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
                  <FormLabel className='pc-16-16-r-input text-[1rem] m-0 inline-flex items-center text-trim-both text-edge-[cap_alphabetic]'>
                    <span
                      className={`${isError ? 'text-red-500' : 'text-[#10475F]'} pc-16-16-r-input text-[1rem] inline-flex items-center text-trim-both text-edge-[cap_alphabetic]`}
                    >
                      Bạn là
                      <span className='ml-[0.25rem] text-red-500'>*</span>
                    </span>
                  </FormLabel>

                  <FormControl className='mt-[0.5rem]'>
                    <RadioGroup
                      onValueChange={(value) => {
                        field.onChange(value)

                        if (value !== 'customer') {
                          form.setValue('your_choice', [], {
                            shouldValidate: false,
                            shouldDirty: false,
                            shouldTouch: false,
                          })

                          form.clearErrors('your_choice')
                          setChoiceDrawerOpen(false)
                        }
                      }}
                      value={field.value}
                      className='flex items-center xsm:flex-col xsm:items-start'
                    >
                      {userTypeOptions.map((item, index) => {
                        const isChecked = field.value === item.value

                        return (
                          <FormItem
                            key={item.value}
                            className={`flex items-center ${index !== 0 ? 'ml-[2.82rem] xsm:mt-[1rem] xsm:ml-0' : ''}`}
                          >
                            <FormControl className='m-[0] cursor-pointer'>
                              <RadioGroupItem value={item.value} />
                            </FormControl>

                            <FormLabel
                              className={`ml-[0.5rem] cursor-pointer font-normal leading-none text-[#10475F] ${
                                isChecked ? 'opacity-100' : 'text-[#10475F]/80'
                              }`}
                            >
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      })}
                    </RadioGroup>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-6'>
              {/* name */}
              <InputField
                control={form.control}
                name='fullname'
                label='Tên của bạn'
                placeholder='Nhập tên...'
              />
            </div>
            <div className='col-span-6'>
              {/* phone */}
              <InputField
                control={form.control}
                name='phone'
                label='Số điện thoại'
                placeholder='Nhập số điện thoại...'
                required
              />
            </div>
          </div>
          {youAre === 'partner' && (
            <div className='grid grid-cols-12 gap-4'>
              {/* Tên homestay */}
              <div className='col-span-6'>
                <InputField
                  control={form.control}
                  name='homestay_name'
                  label='Tên homestay'
                  required
                  placeholder='Nhập tên homestay...'
                />
              </div>
              {/* Địa điểm */}
              <div className='col-span-6'>
                <InputField
                  control={form.control}
                  name='location'
                  label='Địa điểm'
                  required
                  placeholder='Nhập địa điểm...'
                />
              </div>
            </div>
          )}
          {youAre === 'media' && (
            <div className='grid grid-cols-12 gap-4'>
              {/* Điểm du lịch hợp tác */}
              <div className='col-span-6'>
                <InputField
                  control={form.control}
                  name='tourist_spot'
                  label='Điểm du lịch hợp tác'
                  required
                  placeholder='Nhập điểm du lịch hợp tác...'
                />
              </div>
              {/* Kênh truyền thông */}
              <div className='col-span-6'>
                <InputField
                  control={form.control}
                  name='koc_channel'
                  label='Kênh truyền thông'
                  placeholder='Nhập link kênh truyền thông...'
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
                    <FormLabel
                      className={`pc-16-16-r-input text-[1rem]! font-normal! ${form.formState.errors.your_choice ? 'text-red-500' : 'text-[#10475F]'}`}
                    >
                      Nhu cầu của bạn <span className='text-red-500'>*</span>
                    </FormLabel>

                    {!isMobile && (
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <button
                              type='button'
                              className='w-full h-[3rem] px-[0.75rem] flex items-center justify-between rounded-[0.5rem] bg-[#F8F8F8] border-0 mt-[0.25rem] text-[0.875rem] focus:outline-none cursor-pointer'
                            >
                              <span
                                className={`${values.length > 0 ? 'text-[#10475F]' : 'text-[#10475F]/40'}`}
                              >
                                {values.length > 0 ? values.join(', ') : 'Chọn nhu cầu'}
                              </span>

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
                                className='opacity-50 size-[1.125rem]'
                              >
                                <path d='m6 9 6 6 6-6' />
                              </svg>
                            </button>
                          </FormControl>
                        </PopoverTrigger>

                        <PopoverContent
                          align='start'
                          className='p-0 mt-1 bg-white rounded-[0.5rem] border-0 w-[var(--radix-popover-trigger-width)]'
                        >
                          <div className='flex flex-col'>
                            {serviceComboData.map((item) => (
                              <label
                                key={item.id}
                                className='flex items-center px-[1.25rem] py-[0.88rem] cursor-pointer hover:bg-[#F0F0F0]'
                              >
                                <Checkbox
                                  checked={values.includes(item.name)}
                                  onCheckedChange={() => toggleValue(item.name)}
                                />

                                <span className='text-[#10475F] ml-[0.62rem] pc-18-18-m font-normal!'>
                                  {item.name}
                                </span>
                              </label>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    )}

                    {isMobile && (
                      <>
                        <FormControl>
                          <button
                            type='button'
                            onClick={() => setChoiceDrawerOpen(true)}
                            className='w-full h-[3rem] px-[0.75rem] flex items-center justify-between rounded-[0.5rem] bg-[#F8F8F8] border-0 mt-[0.25rem] text-[0.875rem] focus:outline-none cursor-pointer xsm:border-[#10475F]/20! xsm:border-[0.0625rem]! xsm:bg-transparent!'
                          >
                            <span
                              className={`${values.length > 0 ? 'text-[#10475F] truncate max-w-[18rem]' : 'text-[#10475F]/40'}`}
                            >
                              {values.length > 0 ? values.join(', ') : 'Chọn nhu cầu'}
                            </span>

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

                        <DrawerProvider
                          open={choiceDrawerOpen}
                          setOpen={setChoiceDrawerOpen}
                          showDrawerDrag
                        >
                          <div className='relative'>
                            <div className='h-[3.44rem] bg-[#27AAE1] px-3 flex items-center justify-between'>
                              <p className='mb-16-m text-trim-trim-both text-edge-[cap_alphabetic] text-white'>
                                Chọn nhu cầu
                              </p>

                              <button
                                type='button'
                                onClick={() => field.onChange([])}
                                disabled={values.length === 0}
                                className='h-[2.0625rem] px-[0.6875rem] flex-center bg-white rounded-[2.5625rem] disabled:opacity-60 disabled:cursor-not-allowed'
                              >
                                <p className='mb-14-r text-[#EF2020]'>Xoá lựa chọn</p>
                                <ICTrash className='size-[1.125rem] ml-[0.25rem] text-[#EF2020]' />
                              </button>
                            </div>

                            <div className='flex flex-col max-h-[18rem] overflow-y-auto'>
                              {serviceComboData.map((item) => (
                                <label
                                  key={item.id}
                                  className='flex items-center px-[1.25rem] py-[0.875rem] space-x-[0.625rem] cursor-pointer xsm:py-[0.8rem] xsm:my-[0.5rem]'
                                >
                                  <Checkbox
                                    checked={values.includes(item.name)}
                                    onCheckedChange={() => toggleValue(item.name)}
                                    className='size-[1.125rem]'
                                  />

                                  <span className='text-[1.125rem] text-[#10475F] leading-[1.3] text-trim-trim-both text-edge-[cap_alphabetic] xsm:text-[1rem]'>
                                    {item.name}
                                  </span>
                                </label>
                              ))}
                            </div>

                            <div className='sticky bottom-0 left-0 w-full h-[3.625rem] bg-white shadow-[0_-3px_8px_0_rgba(0,0,0,0.06)] pt-4 px-3 pb-[0.375rem] flex items-center justify-between'>
                              <button
                                type='button'
                                onClick={() => {
                                  setChoiceDrawerOpen(false)
                                }}
                                className='w-full h-[2.25rem] rounded-[6.25rem] bg-[#27AAE1] text-white text-[0.8125rem] leading-[1.5] disabled:opacity-80 disabled:cursor-not-allowed'
                              >
                                Tiếp tục
                              </button>
                            </div>
                          </div>
                        </DrawerProvider>
                      </>
                    )}

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
              <FormItem className='mt-[1.5rem] xsm:mt-[1rem]!'>
                <p className='pc-16-16-r-input text-[#10475F] m-0  '>Ghi chú</p>
                <FormControl>
                  <Textarea
                    className='w-full h-[7.0625rem] px-[0.75rem] rounded-[0.5rem] bg-[#F8F8F8] text-[0.875rem] text-[#10475F] placeholder:text-[rgba(16,71,95,0.40)] border-0 shadow-none outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 ring-0 mt-[0.25rem] xsm:bg-transparent xsm:border-[#10475F]/20 xsm:border-[0.0625rem]  xsm:mt-[0.25rem]'
                    placeholder='Nội dung ghi chú'
                    disabled={form.formState.isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <ButtonPrimary
            isLoading={form.formState.isSubmitting}
            type='submit'
            className='xsm:w-[100%] [&_svg]:size-3.5 mt-[1.5rem] xsm:mt-[1.12rem] xsm:text-[0.8125rem] font-normal xsm:font-halyard-display xsm:leading-[1.5] '
          >
            Gửi thông tin
          </ButtonPrimary>
        </form>
      </Form>
    </div>
  )
}
export function ICTrash({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      className={className}
      {...props}
    >
      <path
        d='M15.75 4.48499C13.2525 4.23749 10.74 4.10999 8.235 4.10999C6.75 4.10999 5.265 4.18499 3.78 4.33499L2.25 4.48499'
        stroke='currentColor'
        strokeWidth='1.35'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275'
        stroke='currentColor'
        strokeWidth='1.35'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.1375 6.85498L13.65 14.4075C13.5675 15.585 13.5 16.5 11.4075 16.5H6.59255C4.50005 16.5 4.43255 15.585 4.35005 14.4075L3.86255 6.85498'
        stroke='currentColor'
        strokeWidth='1.35'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.74756 12.375H10.2451'
        stroke='currentColor'
        strokeWidth='1.35'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.125 9.375H10.875'
        stroke='currentColor'
        strokeWidth='1.35'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
