import ENDPOINTS from '@/configs/endpoints'
import fetchData from '@/fetches/fetchData'

export const homeService = {
  async getHomeData<T>(): Promise<T> {
    return (await fetchData({
      api: ENDPOINTS.home.getPage,
    })) as T
  },

  async getBlogs<T>({ limit = 12 }: { limit?: number }) {
    return (await fetchData({
      api: ENDPOINTS.blog.getAll({ limit }),
    })) as T
  },
}

export default homeService