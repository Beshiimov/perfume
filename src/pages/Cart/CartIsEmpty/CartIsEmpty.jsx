import React, { useEffect } from 'react'

import poster from '../../../assets/img/icons/empty-cart.png'
import s from '../Cart.module.scss'
import { NavLink } from 'react-router-dom'

const CartIsEmpty = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={s.cartIsEmpty}>
      <div className={s.poster}>
        <img src={poster} alt="Cart Is Empty" />
      </div>
      <div className={s.info}>
        <div>В корзине пока ничего нет.</div>
        <span>Это отличная возможность ее заполнить!</span>
        <NavLink to="/catalog" className="toCatalog">
          Перейти к каталогу
        </NavLink>
      </div>
    </div>
  )
}

export default CartIsEmpty
