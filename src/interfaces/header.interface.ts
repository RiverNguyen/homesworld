import { ILink } from './link.interface'

export interface ApiHeaderResponse {
  header: IHeaderAcf
}

export interface IHeaderAcf {
  logo_white: string
  logo: string
  menu: IHeaderMenu[]
  social_media: {
    link: ILink
    icon: string
    icon_white: string
  }[]
}

export interface IHeaderMenu {
  select: 'mega' | 'normal' | 'category'
  link: ILink
  links: { link: ILink }[]
  categories: ICategory[]
  icon: string
}
export interface ICategory {
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
  acf: {
    thumbnail: string
    background_image: string
    weather: string
    weather_desc: string
  }
}
