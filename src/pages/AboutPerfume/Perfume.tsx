import { FC, useState } from 'react'

import {
  decodingConcentrationValue,
  decodingGenderValue,
  genderArray,
} from '../../components/utils/PerfumeDecodingValues'
import s from './AboutPerfume.module.scss'
import Recommendation from '../../components/Common/Recommendation/Recommendation'
import { addPerfume } from '../../redux/slices/cart/slice'
import { uniqueId } from '../../components/utils/uniqueIdentifier'
import { PerfumeType } from '../../@types/Types'
import { useAppDispatch } from '../../redux/store'
import { HOST_URL } from '../../env'

const Perfume: FC<PerfumeType> = ({
  id,
  attributes: { brand, product, gender, description, concentration, items },
}) => {
  const dispatch = useAppDispatch()

  let [item, setItem] = useState(0)
  const activeClassName = (index: number) =>
    item === index ? s.active : undefined

  const perfumeImgValues = items.map((i, index) => (
    <img
      className={activeClassName(index)}
      src={HOST_URL + items[index].image.data.attributes.url}
      alt="Perfume Values"
      key={index}
      onClick={() => setItem(index)}
    />
  ))

  const perfumeVolumes = items.map((e, index) => (
    <div
      onClick={() => setItem(index)}
      key={index}
      className={activeClassName(index)}
    >
      <p>{e.volume} ml</p>
      <p className={e.discountPrice ? 'discount' : ''}>{e.price} ₽</p>
      {e.discountPrice && <p>{e.discountPrice} ₽</p>}
    </div>
  ))

  const addPerfumeToCart = () => {
    const perfume = {
      id,
      uniqueId: uniqueId(id, items[item].volume),
      brand,
      product,
      gender: decodingGenderValue[gender],
      concentration: decodingConcentrationValue[concentration],
      volume: items[item].volume,
      price: items[item].price,
      discountPrice: items[item].discountPrice || null,
      image: items[item].image.data.attributes.url,
      count: 0,
    }
    dispatch(addPerfume(perfume))
  }

  return (
    <div>
      <div className="container">
        <div className={s.AboutPerfume}>
          <div className={s.images}>
            <div className={s.activeImg}>
              <img
                src={HOST_URL + items[item].image.data.attributes.url}
                alt="Perfume"
              />
            </div>
            <div className={s.perfumeImgValues}>{perfumeImgValues}</div>
          </div>

          <div className={s.about}>
            <h2>{brand} </h2>
            <h3>{product}</h3>
            <h4>{decodingConcentrationValue[concentration]}</h4>
            <h4>{genderArray[gender]}</h4>

            {description && <div className={s.descriptionTitle}>Описание</div>}
            <div className={s.description}>{description}</div>
            <div className={s.descriptionTitle}>Объёмы ML</div>
            <div className={s.perfumeValues}>{perfumeVolumes}</div>
            <div className={s.buy}>
              {items[item].discountPrice ? (
                <>
                  <div className={`${s.price} + discount`}>
                    {items[item].price} ₽
                  </div>
                  <div className={s.price}>{items[item].discountPrice} ₽</div>
                </>
              ) : (
                <div className={s.price}>{items[item].price} ₽</div>
              )}
              <button className="toCatalog" onClick={addPerfumeToCart}>
                Добавить в корзину
              </button>
            </div>
            <Recommendation brand={brand} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfume
