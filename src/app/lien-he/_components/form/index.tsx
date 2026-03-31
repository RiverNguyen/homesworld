'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { useForm, useFormState, useWatch, type Control, type FieldPath } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import ButtonPrimary from '@/components/ui/ButtonPrimary'
import { Checkbox } from '@/components/ui/checkbox'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import endpoints from '@/configs/endpoints'
import CF7Request from '@/fetches/cf7Request'
import useIsMobile from '@/hooks/useIsMobile'
import { ServiceComboItem } from '@/interfaces/serviceCombo.interface'

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
    homestay_name: z.string().trim().min(1, 'Vui lòng nhập'),
    location: z.string().trim().min(1, 'Vui lòng nhập'),
    tourist_spot: z.string().trim().min(1, 'Vui lòng nhập'),
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

                {/* loading spinner */}
                {isLoading && (
                  <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                    <div className='w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin' />
                  </div>
                )}
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
        toast('Gửi thông tin thành công')
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
      toast.error('Failed to submit the form. Please try again.')
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
                  <FormLabel className='pc-16-16-r-input text-[1rem] m-0 inline-flex items-center leading-[1] text-trim-both text-edge-[cap_alphabetic]'>
                    <span
                      className={`${isError ? 'text-red-500' : 'text-[#10475F]'} pc-16-16-r-input text-[1rem] inline-flex items-center leading-[1] text-trim-both text-edge-[cap_alphabetic]`}
                    >
                      Bạn là
                      <span className='ml-[0.25rem] text-red-500'>*</span>
                    </span>
                  </FormLabel>
                  <FormControl className='mt-[0.5rem]'>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className='flex items-center xsm:flex-col xsm:items-start'
                    >
                      {userTypeOptions.map((item, index) => (
                        <FormItem
                          key={item.value}
                          className={`flex items-center ${index !== 0 ? 'ml-[2.82rem] xsm:ml-0 xsm:mt-[1rem]' : ''}`}
                        >
                          <FormControl className='m-[0]   '>
                            <RadioGroupItem
                              className='peer'
                              value={item.value}
                            />
                          </FormControl>
                          <p
                            className='
    ml-[0.5rem]
    inline-flex items-center
    font-normal leading-[1]
    text-[rgba(16,71,95,0.80)]
    peer-data-[state=checked]:text-[#10475F]
    text-trim-both text-edge-[cap_alphabetic]
    pc-14-14-r
  '
                          >
                            {item.label}
                          </p>
                        </FormItem>
                      ))}
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
                  <FormItem className='mt-[1.5rem] xsm:mt-[1rem]'>
                    <p className='pc-16-16-r-input text-[#10475F] m-0 '>Nhu cầu của bạn</p>

                    {!isMobile && (
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <button
                              type='button'
                              className='w-full h-[3rem] px-[0.75rem] flex items-center justify-between rounded-[0.5rem] bg-[#F8F8F8] border-0 mt-[0.25rem] text-[0.875rem] focus:outline-none cursor-pointer xsm:border-[#10475F]/20 xsm:border-[0.0625rem] xsm:bg-transparent'
                            >
                              <span
                                className={`${
                                  values.length > 0 ? 'text-[#10475F]' : 'text-[#10475F]/40'
                                }`}
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
                          className='p-0 mt-1 bg-white rounded-[0.5rem]  border-0 w-[var(--radix-popover-trigger-width)]'
                        >
                          <div className='flex flex-col'>
                            {serviceComboData.map((item) => (
                              <label
                                key={item.id}
                                className='flex items-center  px-[1.25rem] py-[0.88rem] cursor-pointer        hover:bg-[#F0F0F0]'
                              >
                                <Checkbox
                                  checked={values.includes(item.name)}
                                  onCheckedChange={() => toggleValue(item.name)}
                                />
                                <span className='text-[#10475F] ml-[0.62rem] pc-18-18-m font-normal! '>
                                  {item.name}
                                </span>
                              </label>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    )}

                    {isMobile && (
                      <Drawer>
                        <DrawerTrigger asChild>
                          <FormControl>
                            <button
                              type='button'
                              className='w-full h-[3rem] px-[0.75rem] flex items-center justify-between rounded-[0.5rem] bg-transparent border-[#10475F]/20 border-[0.0625rem] mt-[0.25rem] text-[0.875rem] focus:outline-none cursor-pointer'
                            >
                              <span
                                className={`${values.length > 0 ? 'text-[#10475F]' : 'text-[rgba(16,71,95,0.40)]'}`}
                              >
                                {values.length > 0 ? values.join(', ') : 'Chọn nhu cầu'}
                              </span>

                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='var(--mng-m-mng-icon, #10475F)'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='size-[1.125rem]'
                              >
                                <path d='m6 9 6 6 6-6' />
                              </svg>
                            </button>
                          </FormControl>
                        </DrawerTrigger>

                        <DrawerContent showDrawerDrag={false}>
                          <div className='max-h-[50vh] overflow-y-auto'>
                            {serviceComboData.map((item) => (
                              <label
                                key={item.id}
                                className='flex items-center   cursor-pointer'
                              >
                                <Checkbox
                                  checked={values.includes(item.name)}
                                  onCheckedChange={() => toggleValue(item.name)}
                                />
                                <span className='text-[#10475F]  pc-18-18-m font-medium'>
                                  {item.name}
                                </span>
                              </label>
                            ))}
                          </div>
                        </DrawerContent>
                      </Drawer>
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
              <FormItem className='mt-[1.5rem] xsm:mt[1rem]'>
                <p className='pc-16-16-r-input text-[#10475F] m-0 '>Ghi chú</p>
                <FormControl>
                  <Textarea
                    className='w-full h-[7.0625rem] px-[0.75rem] rounded-[0.5rem] bg-[#F8F8F8] text-[0.875rem] text-[#10475F] placeholder:text-[rgba(16,71,95,0.40)] border-0 shadow-none outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 ring-0 mt-[0.25rem] xsm:bg-transparent xsm:border-[#10475F]/20 xsm:border-[0.0625rem]'
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
            text='Gửi thông tin'
            type='submit'
            className='xsm:w-[100%] [&_svg]:size-3.5 mt-[1.5rem] xsm:mt-[1.12rem] w-[8rem] h-[2.5rem] text-white  font-normal! xsm:text-white xsm:text-[0.8125rem] xsm:font-normal font-halyard-display xsm:leading-[1.5] xsm:text-left'
          />
        </form>
      </Form>
    </div>
  )
}
