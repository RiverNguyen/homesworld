import fetchData from '@/fetches/fetchData'

const footerService = {
  getFooter: async () => {
    return await fetchData({
      api: 'api/v1/site-settings?_fields=footer',
    })
  },
}

export default footerService
