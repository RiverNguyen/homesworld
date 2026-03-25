export interface IWeatherLink {
  title: string
  url: string
  target: string
}

export interface IWeatherBannerItem {
  image: string
  location: string
}

export interface IWeatherBanner {
  title: string
  desc: string
  image_array: IWeatherBannerItem[]
}

export interface IDistinctiveGroup1 {
  title: string
  desc: string
  image: string
}

export interface IDistinctiveGroup2 {
  title: string
  desc: string
  gallery: string[]
  desc_gallery: string
}

export interface IDistinctiveGroup3 {
  icon: string
  title: string
  desc: string
  link: IWeatherLink
}

export interface ISocialItem {
  icon: string
  name: string
  link: IWeatherLink
}

export interface ISocialMedia {
  title: string
  social: ISocialItem[]
}

export interface IDistinctive {
  title: string
  desc: string
  group_1: IDistinctiveGroup1
  group_2: IDistinctiveGroup2
  group_3: IDistinctiveGroup3
  social_media: ISocialMedia
}

export interface ILocationItem {
  term_id: number
  name: string
  slug: string
  taxonomy: string
  acf: {
    thumbnail: string
    background_image: string
    weather: string
    weather_desc: string
  }
}

export interface IWeatherSection {
  title: string
  qr_zalo: string
  link: IWeatherLink
  location: ILocationItem[]
}

export interface ITravelGuide {
  title: string
  description: string
}

export interface IWeatherAcf {
  banner: IWeatherBanner
  distinctive: IDistinctive
  weather: IWeatherSection
  travel_guide: ITravelGuide
}

export interface IWeatherResponse {
  acf: IWeatherAcf
}
