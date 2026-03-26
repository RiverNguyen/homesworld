import ENDPOINTS from '@/configs/endpoints'
import fetchData from '@/fetches/fetchData'

const contactService = {
  getContactPage: async () => {
    return await fetchData({
      api: ENDPOINTS.contact.page,
    })
  },
  getTaxonomies: async (taxonomy: string) => {
    return await fetchData({
      api: ENDPOINTS.taxonomies.getAll(taxonomy),
    })
  },
}

export default contactService