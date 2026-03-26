export interface ServiceComboResponse {
  success: boolean
  count: number
  data: ServiceComboItem[]
}

export interface ServiceComboItem {
  id: number
  name: string
  slug: string
  description: string
  count: number
  parent: number
  order_index: number
}
