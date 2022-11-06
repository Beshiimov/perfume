import React, { FC } from 'react'
import { CartPerfumeType } from '../../../../@types/Types'
import { RootState, useAppDispatch } from '../../../../redux/store'
import { useSelector } from 'react-redux'

import s from '../../Cart.module.scss'
import { HOST_URL } from '../../../../env'
import { addPerfume, minus } from '../../../../redux/slices/cart/slice'

const CartItem: FC = () => {
  const dispatch = useAppDispatch()
  const perfumes = useSelector((state: RootState) => state.cartSlice.perfumes)

  const increment = (uniqueId: number) => {
    dispatch(addPerfume({ uniqueId } as CartPerfumeType))
  }
  const decrement = (uniqueId: number) => {
    dispatch(minus({ uniqueId } as CartPerfumeType))
  }

  return (
    <>
      {perfumes.map((e) => (
        <div key={e.uniqueId} className={s.cartItem}>
          <div className={s.poster}>
            <img src={HOST_URL + e.image} alt="Perfume Image" />
          </div>
          <div className={s.about}>
            <div className={s.title}>
              <h3>{e.brand} </h3>
              <span>{e.product}</span>
            </div>
            <div className={s.info}>
              <div className={s.row}>
                <div className={s.infoTitle}>Объём:</div>
                <div className={s.count}> {e.volume} ML</div>
              </div>
              <div className={s.row}>
                <div className={s.infoTitle}>Концентрать:</div>
                <div className={s.count}> {e.concentration}</div>
              </div>
              <div className={s.row}>
                <div className={s.infoTitle}>Пол:</div>
                <div className={s.count}>{e.gender}</div>
              </div>
              <div className={s.row}>
                <div className={s.infoTitle}>Цена за единицу:</div>
                {e.discountPrice ? (
                  <div className={s.count}>{e.discountPrice} ₽</div>
                ) : (
                  <div className={s.count}>{e.price} ₽</div>
                )}
              </div>
              <div className={s.row}>
                <div className={s.infoTitle}>Количество:</div>
                <div className={s.count}>{e.count} ед.</div>
              </div>
            </div>
            <div className={s.edit}>
              <button
                className={s.increment}
                onClick={() => increment(e.uniqueId)}
              >
                Добавить
              </button>
              <button
                className={s.decrement}
                onClick={() => decrement(e.uniqueId)}
              >
                Убрать
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CartItem
