import { FC } from 'react'

import s from '../Home.module.scss'

const AboutUs: FC = () => {
  return (
    <div className={s.AboutUs}>
      <h2>Для нас важно</h2>
      <div className={s.blocks}>
        <div className={s.block}>
          <div className={s.title}>Ваше время</div>
          <div className={s.about}>
            Мы принимаем заказы каждый день. Доставка по Москве занимает 1-2
            календарных дня. Доставка в любую точку РФ.
          </div>
        </div>
        <div className={s.block}>
          <div className={s.title}>Доступность</div>
          <div className={s.about}>
            Радуем регулярными скидками и акциями. Для наших постоянных клиентов
            предусмотрена дисконтная программа.
          </div>
        </div>
        <div className={s.block}>
          <div className={s.title}>Разнообразие</div>
          <div className={s.about}>
            Регулярно добавляем новые категории и актуальные позиции. Мы первые,
            где можно купить парфюм твоего любимого бренда.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
