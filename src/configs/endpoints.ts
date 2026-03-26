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
