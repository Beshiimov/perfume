import { CartPerfumeType } from '../../@types/Types'

export const cartSliceCalc = (perfumes: CartPerfumeType[]) => {
  const totalPrice = perfumes.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0,
  )
  const totalCount = perfumes.reduce((acc, curr) => acc + curr.count, 0)

  return { totalPrice, totalCount }
}
