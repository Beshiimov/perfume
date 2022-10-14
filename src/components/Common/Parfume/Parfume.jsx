import s from './Parfume.module.scss'

const Parfume = (props) => {
  console.log(props)
  const decodingSexValue = ['unisex', 'male', 'female']
  const decodingConcentrationValue = [
    'Одеколон',
    'Туалетная Вода',
    'Парфюмерная Вода',
    'Парфюм',
    'Эликсир',
  ]

  const parfums = props.parfums.map((item) => {
    return (
      <div className={s.parfume} key={item.id}>
        <div className={s.image}>
          <img src={item.items[0].imgUrl} alt="Parfume" />
        </div>
        <div className={s.body}>
          <span className={s.manufacturer}>{item.manufacturer} </span>
          <span>{item.product}</span>
          <div className={s.concentration}>
            {decodingConcentrationValue[item.concentration]}
          </div>
        </div>
      </div>
    )
  })

  return <div className={s.parfums}>{parfums}</div>
}

export default Parfume
