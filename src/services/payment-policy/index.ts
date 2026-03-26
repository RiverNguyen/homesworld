import fetchData from '@/fetches/fetchData'

const paymentPolicyService = {
  getContent: async (pageId: number) => {
    return await fetchData({
      api: `wp/v2/pages/${pageId}?_fields=content`,
    })
  },
}

export default paymentPolicyService
