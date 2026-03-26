const ENDPOINTS = {
  taxonomies: {
    getAll(taxonomy: string) {
      return `api/v1/taxonomies/${taxonomy}`
    },
  },
  tour: {
    list: '/tour/list',
  },
  paymentPolicyPageId: 18,
  home: 'wp/v2/pages/66?_fields=acf&acf_format=standard',
  blog: {
    getAll: ({ limit }: { limit: number }) =>
      `api/v1/get-all/post?orderby=date&order=DESC&limit=${limit}&paged=1&acf=true`,
  },
}

export default ENDPOINTS
