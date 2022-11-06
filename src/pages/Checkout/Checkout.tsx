import { FC } from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import s from './Chekout.module.scss'
import Total from '../Cart/CartItems/Total/Total'

interface Values {
  name: string
  phone: number
  city: string
  adress: string
  comment: string
  date?: number
}

const Checkout: FC = () => {
  return (
    <div className="container">
      <h2>Оформление Заказа</h2>
      <Formik
        initialValues={{
          name: '',
          phone: +7,
          city: '',
          adress: '',
          comment: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>,
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 500)
        }}
      >
        <Form className={s.Form}>
          <p>
            <label htmlFor="firstName">Как к Вам обращаться*</label>
            <Field id="name" name="name" placeholder="ФИО" required />
          </p>
          <p>
            <label htmlFor="phone">Номер Телефона*</label>
            <Field id="phone" name="phone" required />
          </p>
          <p>
            <label htmlFor="lastName">Город*</label>
            <Field id="lastName" name="lastName" required />
          </p>
          <p>
            <label htmlFor="adress">Адрес*</label>
            <Field id="adress" name="adress" required />
          </p>
          <p>
            <label htmlFor="comment">Коментарии</label>
            <Field id="comment" name="comment" />
          </p>
          <div className={s.cartItems}>
            <Total />
          </div>
          <button type="submit" className="toCatalog">
            Заказать
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default Checkout
