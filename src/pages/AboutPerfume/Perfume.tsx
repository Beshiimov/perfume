import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  decodingConcentrationValue,
  decodingSexValue,
} from '../../components/Common/PerfumeDecodingValues'
import s from './AboutPerfume.module.scss'
import Recommendation from '../../components/Common/Recommendation/Recommendation'
import { addPerfume } from '../../redux/slices/cartSlice'
import { uniqueId } from '../../components/Common/uniqueIdentifier'
import { PerfumeType } from '../../@types/Types'

const Perfume: FC<PerfumeType> = ({
  id,
  manufacturer,
  product,
  sex,
  description,
  concentration,
  items,
}) => {
  const dispatch = useDispatch()

  let [item, setItem] = useState(0)
  const activeClassName = (index: number) =>
    item === index ? s.active : undefined

  const perfumeImgValues = items.map((i, index) => (
    <img
      className={activeClassName(index)}
      src={i.imgUrl}
      alt="Perfume Values"
      key={index}
      onClick={() => setItem(index)}
    />
  ))

  const perfumeVolumes = items.map((i, index) => (
    <div
      onClick={() => setItem(index)}
      key={index}
      className={activeClassName(index)}
    >
      <p>{i.volume} ml</p>
      <p>{i.price.price} ₽</p>
    </div>
  ))

  const addPerfumeToCart = () => {
    const perfume = {
      id,
      uniqueId: uniqueId(id, items[item].volume),
      manufacturer,
      product,
      sex: decodingSexValue[sex],
      concentration: decodingConcentrationValue[concentration],
      volume: items[item].volume,
      price: items[item].price.price,
      imgUrl: items[item].imgUrl,
    }
    dispatch(addPerfume(perfume))
  }

  return (
    <div>
      <div className="container">
        <div className={s.AboutPerfume}>
          <div className={s.images}>
            <div className={s.activeImg}>
              <img src={items[item].imgUrl} alt="Perfume" />
            </div>
            <div className={s.perfumeImgValues}>{perfumeImgValues}</div>
          </div>

          <div className={s.about}>
            <h2>{manufacturer} </h2>
            <h3>{product}</h3>
            <h4>{decodingConcentrationValue[concentration]}</h4>
            <h4>{decodingSexValue[sex]}</h4>

            {description && <div className={s.descriptionTitle}>Описание</div>}
            <div className={s.description}>{description}</div>
            <div className={s.descriptionTitle}>Объёмы ML</div>
            <div className={s.perfumeValues}>{perfumeVolumes}</div>
            <div className={s.buy}>
              <div className={s.price}>{items[item].price.price} ₽</div>
              <button className="toCatalog" onClick={addPerfumeToCart}>
                Добавить в корзину
              </button>
            </div>
            <Recommendation manufacturer={manufacturer} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfume
