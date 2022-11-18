import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { RootState, useAppDispatch } from '../../redux/store'
import { useNavigate } from 'react-router-dom'

import { clearStore } from '../../redux/slices/cart/slice'
import s from './Chekout.module.scss'
import { useSelector } from 'react-redux'

const SuccessPopup = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const totalCount = useSelector(
    (state: RootState) => state.cartSlice.totalCount,
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    if (totalCount === 0) {
      navigate('/home')
    } else {
      dispatch(clearStore())
    }
  }, [])

  return (
    <div className={s.SuccessPopup}>
      <h2>Покупка прошла успешно</h2>
      <h3>Мы уже начали собирать Ваш заказ</h3>
      <h3>Оплата только при получении заказа</h3>
      <Link to="/catalog" className="toCatalog">
        Перейти к каталогу
      </Link>
    </div>
  )
}

export default SuccessPopup
