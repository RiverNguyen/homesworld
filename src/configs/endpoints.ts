const ENDPOINTS = {
  tour: {
    list: '/tour/list',
  },
  blog: {
    getAll: ({ limit }: { limit: number }) =>
      `api/v1/get-all/post?orderby=date&order=DESC&limit=${limit}&paged=1&acf=true`,
  },
  home: {
    getPage: 'wp/v2/pages/66?_fields=acf&acf_format=standard',
  },
}

export default ENDPOINTS
