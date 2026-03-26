import { ILink } from '@/interfaces/link.interface'

export interface IHome {
  banner: {
    title: string
    desc: string
    image_array: {
      image: string
      location: string
    }[]
    location: string
  }
  distinctive: {
    title: string
    desc: string
    group_1: {
      title: string
      desc: string
      image: string
    }
    group_2: {
      title: string
      desc: string
      gallery: string[]
      desc_galley: string
    }
    group_3: {
      icon: string
      title: string
      desc: string
      link: ILink
    }
  }
  social_media: {
    title: string
    social: {
      icon: string
      name: string
      link: ILink
    }[]
  }
}
export interface HomeResponse {
  acf: {
    banner: Banner
    distinctive: Distinctive
    weather: WeatherSection
    travel_guide: TravelGuide
  }
}

/* ================== BANNER ================== */
export interface Banner {
  title: string
  desc: string
  image_array: BannerImage[]
}

export interface BannerImage {
  image: string
  location: string
}

/* ================== DISTINCTIVE ================== */
export interface Distinctive {
  title: string
  desc: string
  group_1: DistinctiveGroup1
  group_2: DistinctiveGroup2
  group_3: DistinctiveGroup3
  social_media: SocialMedia
}

export interface DistinctiveGroup1 {
  title: string
  desc: string
  image: string
}

export interface DistinctiveGroup2 {
  title: string
  desc: string
  gallery: string[]
  desc_gallery: string
}

export interface DistinctiveGroup3 {
  icon: string
  title: string
  desc: string
  link: Link
}

/* ================== SOCIAL ================== */
export interface SocialMedia {
  title: string
  social: SocialItem[]
}

export interface SocialItem {
  icon: string
  name: string
  link: Link
}

/* ================== WEATHER ================== */
export interface WeatherSection {
  title: string
  qr_zalo: string
  link: Link
  location: LocationItem[]
}

export interface LocationItem {
  term_id: number
  name: string
  slug: string
  term_group: number
  term_taxonomy_id: number
  taxonomy: string
  description: string
  parent: number
  count: number
  filter: string
  acf: LocationACF
}

export interface LocationACF {
  thumbnail: string
  background_image: string
  weather: string
  weather_desc: string
}

/* ================== TRAVEL GUIDE ================== */
export interface TravelGuide {
  title: string
  description: string
}

/* ================== COMMON ================== */
export interface Link {
  title: string
  url: string
  target: string
}
