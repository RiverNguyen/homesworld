const ENDPOINTS = {
  taxonomies: {
    getAll(taxonomy: string) {
      return `api/v1/taxonomies/${taxonomy}`
    },
  },
  tour: {
    list: '/tour/list',
  },
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
}

export default ENDPOINTS
