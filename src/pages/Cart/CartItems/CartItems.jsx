import s from '../Cart.module.scss'
import { useSelector } from 'react-redux'

const CartItems = () => {
  const perfumes = useSelector((state) => state.cartSlice.perfumes)
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice)

  const item = perfumes.map((e) => (
    <div key={e.id + e.volume} className={s.cartItem}>
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
          <button className={s.increment}>Добавить</button>
          <button className={s.decrement}>Убрать</button>
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
            <span>Общая Сумма: </span>
            <b>{totalPrice} ₽</b>
          </div>
          <button className="toCatalog">Оформить Заказ</button>
        </div>
      </div>
    </>
  )
}

export default CartItems
