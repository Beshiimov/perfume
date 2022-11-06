import { FC } from 'react'

import s from '../Cart.module.scss'
import Total from './Total/Total'
import CartItem from './CartItem/CartItem'

const CartItems: FC = () => {
  return (
    <>
      <h2>Корзина</h2>
      <div className={s.cartBody}>
        <div className={s.cartItems}>
          <CartItem />
        </div>
        <Total text="Перейти к оформлению" />
      </div>
    </>
  )
}

export default CartItems
