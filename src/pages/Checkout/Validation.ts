import * as Yup from 'yup'

export const phoneRegExp =
  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/

export const checkoutSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Минимум 3 буквы')
    .max(20, 'Вы указали очень много символов')
    .required('Вы неверно указали'),
  phone: Yup.string()
    .min(11, 'Заполните пожалуйста поле')
    .required('Укажите пожалуйста')
    .matches(phoneRegExp, 'Неправильно указан номер телефона'),
  city: Yup.string()
    .min(3, 'Как минимум 3 буквы')
    .max(30, 'Вы указали очень много символов')
    .required('Вы неверно указали город.'),
  adress: Yup.string()
    .min(3, 'Как минимум 3 буквы')
    .max(30, 'Вы указали очень много символов')
    .required('Вы неверно указали адрес'),
})

export const phoneNumberMask = [
  '+',
  '7',
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
]
