import s from '../Home.module.scss'

const AboutUs = () => {
  return (
    <div className={s.AboutUs}>
      <h2>Для нас важно</h2>
      <div className={s.blocks}>
        <div className={s.block}>
          <div className={s.title}>Ваше время</div>
          <div className={s.about}>
            Мы принимаем заказы каждый день с 8:00 до 20:00. Доставка по Москве
            занимает 1-2 календарных дня.
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
            где можно купить косметику твоего любимого бренда.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
