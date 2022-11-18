import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../redux/store'
import { Formik, Field, Form } from 'formik'
import MaskedInput from 'react-text-mask'

import s from './Chekout.module.scss'
import Total from '../Cart/CartItems/Total/Total'
import { Onsubmit } from './Onsubmit'
import { checkoutSchema, phoneNumberMask } from './Validation'
import { fetchCheckoutToServer } from '../../redux/slices/checkout/slice'
import { CheckoutRequestType, CheckoutStatus } from '../../@types/Types'

interface Values {
  name: string
  phone: string
  city: string
  adress: string
  comment: string
  date?: number
}

const Checkout: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const checkoutStatus = useSelector(
    (state: RootState) => state.checkoutSlice.status,
  )
  const totalPrice = useSelector(
    (state: RootState) => state.cartSlice.totalDiscountPrice,
  )
  const perfumes = useSelector((state: RootState) => state.cartSlice.perfumes)
  const totalCount = useSelector(
    (state: RootState) => state.cartSlice.totalCount,
  )

  const fetchCheckout = (data: CheckoutRequestType) =>
    dispatch(fetchCheckoutToServer(data))

  useEffect(() => {
    if (totalCount === 0) {
      navigate('/home')
    }
  }, [])
  if (checkoutStatus === CheckoutStatus.SUCCESS) {
    navigate('success')
  }

  return (
    <div className="container">
      <h2>Оформление Заказа</h2>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          city: '',
          adress: '',
          comment: '',
        }}
        validationSchema={checkoutSchema}
        onSubmit={(values: Values) =>
          fetchCheckout(Onsubmit(values, perfumes, totalPrice))
        }
      >
        {({ errors, touched }) => (
          <Form className={s.Form}>
            <p>
              <label htmlFor="firstName">Как к Вам обращаться*</label>
              <Field id="name" name="name" placeholder="Ваше Имя" autoFocus />
              {errors.name && touched.name ? (
                <span className={s.error}>{errors.name}</span>
              ) : null}
            </p>
            <p>
              <label htmlFor="phone">Номер Телефона*</label>
              <Field
                name="phone"
                render={({ field }: any) => (
                  <MaskedInput
                    {...field}
                    mask={phoneNumberMask}
                    id="phone"
                    placeholder="+7"
                    type="text"
                  />
                )}
              />
              {errors.phone && touched.phone ? (
                <span className={s.error}>{errors.phone}</span>
              ) : null}
            </p>
            <p>
              <label htmlFor="city">Город*</label>
              <Field id="city" name="city" />
              {errors.city && touched.city ? (
                <span className={s.error}>{errors.city}</span>
              ) : null}
            </p>
            <p>
              <label htmlFor="adress">Адрес*</label>
              <Field id="adress" name="adress" />
              {errors.adress && touched.adress ? (
                <span className={s.error}>{errors.adress}</span>
              ) : null}
            </p>
            <p>
              <label htmlFor="comment">Комментарии</label>
              <Field id="comment" name="comment" />
            </p>
            <div className={s.cartItems}>
              <Total />
            </div>
            <button
              type="submit"
              className="toCatalog"
              disabled={checkoutStatus === CheckoutStatus.PENDING}
            >
              {checkoutStatus === CheckoutStatus.PENDING
                ? 'Ожидайте пожалуйста...'
                : 'Заказать'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Checkout
