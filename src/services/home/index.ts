import ENDPOINTS from '@/configs/endpoints'
import fetchData from '@/fetches/fetchData'

const homeService = {
  getHome: async () => {
    return await fetchData({
      api: ENDPOINTS.home,
    })
  },
}

export default homeService
