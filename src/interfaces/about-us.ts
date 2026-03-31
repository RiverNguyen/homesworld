export interface ILink {
  title: string
  url: string
  target: string
}

export interface ISocialItem {
  icon: string
  name: string
  link: ILink
}

export interface IGroup1 {
  title: string
  desc: string
  image: string
}

export interface IGroup2 {
  title: string
  desc: string
  gallery: string[]
  desc_gallery: string
}

export interface IGroup3 {
  icon: string
  title: string
  desc: string
  link: ILink
}

export interface ISocialMedia {
  title: string
  social: ISocialItem[]
}

export interface IDistinctive {
  title: string
  desc: string
  group_1: IGroup1
  group_2: IGroup2
  group_3: IGroup3
  social_media: ISocialMedia
}

export interface IAboutUs {
  distinctive: IDistinctive
}
