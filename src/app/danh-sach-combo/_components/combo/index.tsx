'use client'

import { useForm } from 'react-hook-form'

import ListItem from '@/app/danh-sach-combo/_components/combo/ListItem'
import Sidebar, { type FilterFormValues } from '@/app/danh-sach-combo/_components/combo/form'
import { Form } from '@/components/ui/form'

const defaultValues: FilterFormValues = {
  priceRange: [100000, 10000000],
  stay: ['hotel-2', 'hotel-3'],
  area: ['demo-1'],
}

export default function Combo() {
  const form = useForm<FilterFormValues>({
    defaultValues,
  })

  const onSubmit = (values: FilterFormValues) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex w-full max-w-[87.5rem] xsm:flex-col'
      >
        <div className='sticky top-[4.63rem] w-[20.1875rem] shrink-0 self-start xsm:hidden'>
          <Sidebar form={form} />
        </div>

        <div className='ml-[2.5rem] w-[64.8125rem] min-w-0 xsm:ml-0 xsm:w-full'>
          <ListItem form={form} />
        </div>
      </form>
    </Form>
  )
}
