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

export type PerfumeRowMappingProps = {
  perfumes: PerfumeType[]
  width: number
  height: number
  fit: string
}

export type CartPerfumeType = {
  uniqueId: number
  count: number
  price: number
  concentration: string
  id: number
  imgUrl: string
  manufacturer: string
  product: string
  sex: string
  volume: number
}

export enum LoadingStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
