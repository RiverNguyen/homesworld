import fetchData from '@/fetches/fetchData'

const headerService = {
  getHeader: async () => {
    return await fetchData({
      api: 'api/v1/site-settings?_fields=header',
    })
  },
}

export default headerService
