import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { HOST_URL } from '../../../env'
import { decodingConcentrationValue } from '../../utils/PerfumeDecodingValues'
import { LoadingStatus, PerfumeRowMappingProps } from '../../../@types/Types'
import MyLoader from '../Skeleton'
import s from './Perfume.module.scss'

const PerfumeRowMapping: FC<PerfumeRowMappingProps> = ({
  perfumes,
  width,
  height,
  fit,
  status,
  text,
}) => {
  const myStyle = {
    gridTemplateColumns: `repeat(auto-${fit}, minmax(${width}px, 1fr)`,
    marginBottom: `80px`,
  }

  const perfumesRow = perfumes.map(({ id, attributes }) => {
    const { items, brand, product, concentration } = attributes

    return status === LoadingStatus.ERROR ? (
      <h2 className="error">
        Произошла ошибка при загрузке парфюма, повторите попытку позже
      </h2>
    ) : status === LoadingStatus.LOADING ? (
      <MyLoader height={170} width={150} />
    ) : (
      <NavLink to={'/PerfumeId/' + id} className={s.perfume} key={id}>
        <div className={s.image}>
          <img
            src={HOST_URL + items[0].image.data.attributes.url}
            alt="PerfumeRowMapping"
            style={{ height: height + 'px' }}
          />
        </div>
        <div className={s.body}>
          <span className={s.brand}>{brand} </span>
          <span>{product}</span>
          <div className={s.concentration}>
            {decodingConcentrationValue[concentration]}
          </div>
        </div>
      </NavLink>
    )
  })

  return (
    <>
      {perfumes.length > 0 && (
        <>
          <h2>{text}</h2>
          <div className={s.Parfumes} style={myStyle}>
            {perfumesRow}
          </div>
        </>
      )}
    </>
  )
}

export default PerfumeRowMapping
