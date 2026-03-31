export interface ApiResponse {
  success: boolean
  total: number
  totalPages: number
  page: number
  limit: number
  count: number
  data: ComboItem[]
}

export interface ComboItem {
  id: number
  title: string
  slug: string
  type: string
  excerpt: string
  published: string
  permalink: string
  thumbnail: Thumbnail
  taxonomies: Taxonomies
  acf: null | {
    gallery: string[]
    price: string
  }
}

export interface Thumbnail {
  id: number
  url: string | null
}

export interface Taxonomies {
  service_combo: ServiceCombo[]
  location?: LocationTerm[]
  duration?: DurationTerm[]
}

export interface LocationTerm {
  id: number
  name: string
  slug: string
  acf: {
    longitude: string
    latitude: string
  }
  children: LocationTerm[]
}
export interface DurationTerm {
  id: number
  name: string
  slug: string
}

export interface ServiceCombo {
  id: number
  name: string
  slug: string
}
