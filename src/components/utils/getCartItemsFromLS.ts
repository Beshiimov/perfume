import { cartSliceCalc } from './cartSliceCalc'

export const getCartItemsFromLS = () => {
  const data = localStorage.getItem('cart')
  const items = data ? JSON.parse(data) : []
  const { totalCount, totalPrice, totalDiscountPrice } = cartSliceCalc(items)

  return { items, totalCount, totalPrice, totalDiscountPrice }
}
