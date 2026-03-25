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