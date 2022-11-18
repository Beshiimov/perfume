import {
  CartPerfumeType,
  checkoutItemsType,
  CheckoutRequestType,
  OnSubmitValuesType,
} from '../../@types/Types'

export const Onsubmit = (
  values: OnSubmitValuesType,
  perfumes: CartPerfumeType[],
  totalPrice: number,
): CheckoutRequestType => {
  let phone = values.phone.substr(1).replace(/[- )(]/g, '')

  let items: checkoutItemsType[] = []
  perfumes.map((e) => {
    items.push({
      name: e.brand + ' ' + e.product,
      count: e.count,
      volume: e.volume,
      price: e.price,
    })
  })

  return {
    about: { ...values, phone: +phone, totalPrice },
    items,
  }
}
