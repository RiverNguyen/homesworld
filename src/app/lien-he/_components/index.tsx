import Desc from '@/app/lien-he/_components/desc'
import MyForm from '@/app/lien-he/_components/form'
import type { Contact as ContactType } from '@/interfaces/contact.interface'
import { ServiceComboItem } from '@/interfaces/serviceCombo.interface'

export default function Contact({
  data,
  serviceComboData,
}: {
  data: ContactType
  serviceComboData: ServiceComboItem[]
}) {
  return (
    <div className=' bg-[#FEFBF9]'>
      <div className=' max-w-[87.5rem] mx-auto pt-[3.5rem] pb-[5.62rem] flex justify-between xsm:flex-col xsm:py-[2rem] xsm:mx-[0.75rem]'>
        {/* LEFT */}
        <Desc data={data} />
        {/* RIGHT */}
        <MyForm serviceComboData={serviceComboData || []} />
      </div>
    </div>
  )
}
