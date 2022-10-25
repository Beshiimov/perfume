import { CartPerfumeType } from '../../../@types/Types'

export interface CartSliceType {
  perfumes: CartPerfumeType[]
  totalPrice: number
  totalCount: number
}
