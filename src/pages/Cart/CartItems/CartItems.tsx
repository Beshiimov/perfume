import { useDispatch, useSelector } from 'react-redux'
import s from '../Cart.module.scss'
import { addPerfume, minus } from '../../../redux/slices/cartSlice'

const CartItems = () => {
  const dispatch = useDispatch()
  //@ts-ignore
  const perfumes = useSelector((state) => state.cartSlice.perfumes)
  //@ts-ignore
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice)
  console.log(perfumes)

  const increment = (uniqueId: string) => {
    dispatch(addPerfume({ uniqueId }))
  }

  const decrement = (uniqueId: number) => {
    dispatch(minus({ uniqueId }))
  }

  //@ts-ignore
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
