import { FC } from 'react'
import { useSelector } from 'react-redux'

import { RootState, useAppDispatch } from '../../../redux/store'
import { addPerfume, minus } from '../../../redux/slices/cartSlice'
import { CartPerfumeType } from '../../../@types/Types'
import s from '../Cart.module.scss'

const CartItems: FC = () => {
  const dispatch = useAppDispatch()
  const perfumes = useSelector((state: RootState) => state.cartSlice.perfumes)
  const totalPrice = useSelector(
    (state: RootState) => state.cartSlice.totalPrice,
  )

  const increment = (uniqueId: number) => {
    dispatch(addPerfume({ uniqueId } as CartPerfumeType))
  }

  const decrement = (uniqueId: number) => {
    dispatch(minus({ uniqueId } as CartPerfumeType))
  }

  const item = perfumes.map((e) => (
    <div key={e.uniqueId} className={s.cartItem}>
      <div className={s.poster}>
        <img src={e.imgUrl} alt="Perfume Image" />
      </div>
      <div className={s.about}>
        <div className={s.title}>
          <h3>{e.manufacturer} </h3>
          <span>{e.product}</span>
        </div>
        <div className={s.info}>
          <div className={s.row}>
            <div className={s.infoTitle}>Объём: </div>
            <div className={s.count}> {e.volume} ML</div>
          </div>
          <div className={s.row}>
            <div className={s.infoTitle}>Концентрать: </div>
            <div className={s.count}> {e.concentration}</div>
          </div>
          <div className={s.row}>
            <div className={s.infoTitle}>Для: </div>
            <div className={s.count}>{e.sex}</div>
          </div>
          <div className={s.row}>
            <div className={s.infoTitle}>Цена за единицу: </div>
            <div className={s.count}>{e.price} ₽</div>
          </div>
          <div className={s.row}>
            <div className={s.infoTitle}>Количество: </div>
            <div className={s.count}>{e.count} ед.</div>
          </div>
        </div>
        <div className={s.edit}>
          <button className={s.increment} onClick={() => increment(e.uniqueId)}>
            Добавить
          </button>
          <button className={s.decrement} onClick={() => decrement(e.uniqueId)}>
            Убрать
          </button>
        </div>
      </div>
    </div>
  ))

  return (
    <>
      <h2>Корзина</h2>
      <div className={s.cartBody}>
        <div className={s.cartItems}>{item}</div>
        <div className={s.total}>
          <h2>Итого</h2>
          <div className={s.totalPrice}>
            <div>
              <span>Общая Сумма: </span>
              <b>{totalPrice} ₽</b>
            </div>
            <div>
              <span>Цена Доставки:</span>
              <b>0 ₽</b>
            </div>
          </div>
          <button className="toCatalog">Оформить Заказ</button>
        </div>
      </div>
    </>
  )
}

export default CartItems
