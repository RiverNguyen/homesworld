import Contact from '@/app/lien-he/_components'
import contactService from '@/services/contact'

export default async function ContactPage() {
  const [contact, serviceCombo] = await Promise.all([
    contactService.getContactPage(),
    contactService.getTaxonomies('service_combo'),
  ])

  return (
    <Contact
      data={contact?.acf?.contact}
      serviceComboData={serviceCombo?.data || []}
    />
  )
}
