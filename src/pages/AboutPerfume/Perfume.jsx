import { useState } from 'react'
import {
  decodingConcentrationValue,
  decodingSexValue,
} from '../../components/Common/PerfumeDecodingValues'
import s from './AboutPerfume.module.scss'
import Recommendation from '../../components/Common/Recommendation/Recommendation'
import { useDispatch } from 'react-redux'

const Perfume = ({ perfume }) => {
  let [item, setItem] = useState(0)
  const activeClassName = (index) => (item === index ? s.active : undefined)

  const perfumeImgValues = perfume.items.map((i, index) => (
    <img
      className={activeClassName(index)}
      src={i.imgUrl}
      alt="Perfume Values"
      key={index}
      onClick={() => setItem(index)}
    />
  ))

  const perfumeVolumes = perfume.items.map((i, index) => (
    <div
      onClick={() => setItem(index)}
      key={index}
      className={activeClassName(index)}
    >
      <p>{i.volume} ml</p>
      <p>{i.price.price} ₽</p>
    </div>
  ))

  return (
    <div>
      <div className="container">
        <div className={s.AboutPerfume}>
          <div className={s.images}>
            <div className={s.activeImg}>
              <img src={perfume.items[item].imgUrl} alt="Perfume" />
            </div>
            <div className={s.perfumeImgValues}>{perfumeImgValues}</div>
          </div>

          <div className={s.about}>
            <h2>{perfume.manufacturer} </h2>
            <h3>{perfume.product}</h3>
            <h4>{decodingConcentrationValue[perfume.concentration]}</h4>
            <h4>{decodingSexValue[perfume.sex]}</h4>

            {perfume.description && (
              <div className={s.descriptionTitle}>Описание</div>
            )}
            <div className={s.description}>{perfume.description}</div>
            <div className={s.perfumeValues}>{perfumeVolumes}</div>
            <div className={s.price}>{perfume.items[item].price.price} ₽</div>
            <button>Добавить в корзину</button>
            <Recommendation manufacturer={perfume.manufacturer} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfume
