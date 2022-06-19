export interface ResultProp {
  success: boolean
  desc: string
  data: any
}

export interface listProp {
  id: number
  name: string
  icon: string
  price: string
  endDate: string
  status: string
  activeIndex?: number
  onClick?: () => Record<string, never>
}
