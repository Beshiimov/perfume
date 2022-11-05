import { CartPerfumeType } from '../../@types/Types'

export const cartSliceCalc = (perfumes: CartPerfumeType[]) => {
  const totalCount = perfumes.reduce((acc, curr) => acc + curr.count, 0)
  const totalPrice = perfumes.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0,
  )
  const totalDiscountPrice = perfumes.reduce(
    (acc, curr) => acc + (curr.discountPrice || curr.price) * curr.count,
    0,
  )

  return { totalCount, totalPrice, totalDiscountPrice }
}
