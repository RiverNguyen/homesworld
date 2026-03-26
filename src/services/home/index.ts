import ENDPOINTS from '@/configs/endpoints'
import fetchData from '@/fetches/fetchData'

const homeService = {
  getHome: async () => {
    return await fetchData({
      api: ENDPOINTS.home,
    })
  },
  getBlogs: async ({ limit = 12 }: { limit?: number }) => {
    return await fetchData({
      api: ENDPOINTS.blog.getAll({ limit }),
    })
  },
}
export default homeService
