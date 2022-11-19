export type PerfumeType = {
  id: string
  attributes: {
    brand: string
    product: string
    concentration: number
    season: number
    description: string | null
    gender: number
    items: {
      id: string
      volume: number
      imgUrl: string
      discountPrice: number | null
      price: number
      image: {
        data: {
          id: string
          attributes: {
            url: string
            height: number
            width: number
          }
        }
      }
    }[]
  }
}

export type OtherPerfumeType = {
  data: PerfumeType[]
  pageCount: number
}

export type meta = {
  pagination: {
    page: number
    pageCount: number
    pageSize: number
    total: number
  }
}

export type PerfumeRowMappingProps = {
  perfumes: PerfumeType[]
  width: number
  height: number
  fit: string
  status: LoadingStatus
  text?: string
}

export type CartPerfumeType = {
  uniqueId: number
  count: number
  price: number
  discountPrice?: number | null
  concentration: string
  id: string
  image: string
  brand: string
  product: string
  gender: string
  volume: number
}

export type PaginationMeta = {
  pagination: {
    page: number
    pageCount: number
    pageSize: number
    total: number
  }
}
export type OnSubmitValuesType = {
  name: string
  phone: string
  city: string
  adress: string
  comment?: string
}

export type CheckoutRequestType = {
  about: {
    name: string
    phone: number
    city: string
    adress: string
    totalPrice: number
  }
  items: checkoutItemsType[]
}

export type checkoutItemsType = {
  name: string
  count: number
  volume: number
  price: number
}

export enum LoadingStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum Gender {
  UNISEX,
  MAN,
  WOMEN,
}

export enum CheckoutStatus {
  NULL = 'null',
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
}
