const ENDPOINTS = {
  taxonomies: {
    getAll(taxonomy: string) {
      return `api/v1/taxonomies/${taxonomy}?nested=true&parent=0&acf=true`
    },
  },
  combo: {
    list: 'api/v1/get-all/combo?acf=true&limit=6&paged=1&orderby=date&order=DESC',
  },
  paymentPolicyPageId: 18,
  home: 'wp/v2/pages/66?_fields=acf&acf_format=standard',
  contact: {
    page: 'wp/v2/pages/177?_fields=acf&acf_format=standard',
    form: {
      id: '13',
      unit_tag: '8c2ce8d',
    },
  },
  blog: {
    getAll: ({ limit }: { limit: number }) =>
      `api/v1/get-all/post?orderby=date&order=DESC&limit=${limit}&paged=1&acf=true`,
  },
  weather: {
    page_id: {
      vi: 66,
    },
    rank_math: {
      vi: 66,
    },
  },
}

export default ENDPOINTS
