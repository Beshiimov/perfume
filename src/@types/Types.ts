export type PerfumeRowMappingProps = {
  perfumes: PerfumeType[]
  width: number
  height: number
  fit: string
}

export type PerfumeType = {
  id: number
  manufacturer: string
  product: string
  concentration: number
  description?: string
  sex: number
  items: {
    volume: number
    imgUrl: string
    price: {
      discountPrice: number
      isDiscount: boolean
      price: number
    }
  }[]
}
