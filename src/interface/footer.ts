export interface IFooterAcf {
  first_column: {
    link: Link
  }[]
  info: {
    icon: string
    link: Link
  }[]
  link_mobile: {
    link: Link
  }[]
  logo: string
  second_column: {
    link: Link
  }[]
  social_footer: {
    icon: string
    link: Link
  }[]
}

interface Link {
  target: string
  title: string
  url: string
}
