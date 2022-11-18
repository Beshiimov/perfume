import React, { useEffect } from 'react'

import poster from '../../../assets/img/icons/empty-cart.png'
import s from '../Cart.module.scss'
import { Link } from 'react-router-dom'

const CartIsEmpty = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className={s.cartIsEmpty}>
      <div className={s.poster}>
        <img src={poster} alt="Cart Is Empty" />
      </div>
      <div className={s.info}>
        <div>В корзине пока ничего нет.</div>
        <span>Это отличная возможность ее заполнить!</span>
        <Link to="/catalog" className="toCatalog">
          Перейти к каталогу
        </Link>
      </div>
    </div>
  )
}

export default CartIsEmpty
