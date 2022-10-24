import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import CartIsEmpty from './CartIsEmpty/CartIsEmpty'
import s from './Cart.module.scss'
import CartItems from './CartItems/CartItems'
import { RootState } from '../../redux/store'

const Cart = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  const cartItems = useSelector((state: RootState) => state.cartSlice.perfumes)
  return (
    <div className="container">
      <div className={s.Cart}>
        {cartItems.length > 0 ? <CartItems /> : <CartIsEmpty />}
      </div>
    </div>
  )
}

export default Cart
