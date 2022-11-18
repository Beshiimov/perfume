import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import s from './Total.module.scss'
import { RootState } from '../../../../redux/store'

type TotalType = {
  text?: string
}

const Total: FC<TotalType> = ({ text }) => {
  const totalPrice = useSelector(
    (state: RootState) => state.cartSlice.totalPrice,
  )
  const totalDiscountPrice = useSelector(
    (state: RootState) => state.cartSlice.totalDiscountPrice,
  )

  return (
    <div className={s.total}>
      <h2>Итого</h2>
      <div className={s.totalPrice}>
        <div className={s.sum}>
          <span>Общая Сумма: </span>
          <span>
            {totalPrice === totalDiscountPrice ? (
              <b>{totalDiscountPrice} ₽</b>
            ) : (
              <>
                <b className="discount">{totalPrice} ₽</b>
                <b>{totalDiscountPrice} ₽</b>
              </>
            )}
          </span>
        </div>
        <div className={s.delivery}>
          <span>Цена Доставки:</span>
          <b>Бесплатно</b>
        </div>
        <b>Оплата только при получении заказа</b>
      </div>

      {text && (
        <Link to="/checkout" className="toCatalog">
          {text}
        </Link>
      )}
    </div>
  )
}

export default Total
