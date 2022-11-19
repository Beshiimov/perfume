import { cartSliceCalc } from './cartSliceCalc'

export const getCartItemsFromLS = () => {
  const limit = 6 * 3600 * 1000 // 6 часов
  let localStorageInitTime: number | null = Number(
    localStorage.getItem('localStorageInitTime'),
  )

  if (localStorageInitTime === null) {
    localStorage.setItem('localStorageInitTime', String(+new Date()))
  } else if (+new Date() - localStorageInitTime > limit) localStorage.clear()
  localStorage.setItem('localStorageInitTime', String(+new Date()))

  const data = localStorage.getItem('cart')
  const items = data ? JSON.parse(data) : []
  const { totalCount, totalPrice, totalDiscountPrice } = cartSliceCalc(items)

  return { items, totalCount, totalPrice, totalDiscountPrice }
}
