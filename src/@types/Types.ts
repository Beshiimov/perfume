export type PerfumeType = {
  id: string
  attributes: {
    brand: string
    product: string
    concentration: number
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
}

export type CartPerfumeType = {
  uniqueId: number
  count: number
  price: number
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
