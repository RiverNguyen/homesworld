import fetchData from '@/fetches/fetchData'

const weatherService = {
  getAcfData: async (pageId: number | string) => {
    return await fetchData({
      api: `wp/v2/pages/${pageId}?_fields=acf&acf_format=standard`,
    })
  },
}

export default weatherService
