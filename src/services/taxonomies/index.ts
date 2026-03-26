import ENDPOINTS from '@/configs/endpoints'
import fetchData from '@/fetches/fetchData'

const taxonomiesService = {
  getAllTaxonomies: async (taxonomy: string) => {
    return await fetchData({
      api: ENDPOINTS.taxonomies.getAll(taxonomy),
    })
  },
}
export default taxonomiesService
