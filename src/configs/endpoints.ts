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
}

export default ENDPOINTS
