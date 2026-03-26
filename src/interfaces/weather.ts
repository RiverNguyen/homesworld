export interface IWeatherLink {
  title: string
  url: string
  target: string
}

export interface ILocationItem {
  name: string
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

export interface IWeatherAcf {
  weather: IWeatherSection
}

export interface IWeatherResponse {
  acf: IWeatherAcf
}
