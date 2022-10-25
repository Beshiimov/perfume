import { cartSliceCalc } from './cartSliceCalc'

export const getCartItemsFromLS = () => {
  const data = localStorage.getItem('cart')
  const items = data ? JSON.parse(data) : []
  const { totalPrice, totalCount } = cartSliceCalc(items)

  return { items, totalPrice, totalCount }
}
