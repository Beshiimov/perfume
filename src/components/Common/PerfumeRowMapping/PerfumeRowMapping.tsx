import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { decodingConcentrationValue } from '../../utils/PerfumeDecodingValues'
import s from './Perfume.module.scss'
import { PerfumeRowMappingProps } from '../../../@types/Types'
import {HOST_URL} from "../../../env";

const PerfumeRowMapping: FC<PerfumeRowMappingProps> = ({
  perfumes,
  width,
  height,
  fit,
}) => {
  const myStyle = {
    gridTemplateColumns: `repeat(auto-${fit}, minmax(${width}px, 1fr)`,
  }

  const perfumesRow = perfumes.map(
    ({ id, attributes}) => {
      const {items, brand, product, concentration } = attributes
      return (
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
    },
  )

  return (
    <div className={s.Parfumes} style={myStyle}>
      {perfumesRow}
    </div>
  )
}

export default PerfumeRowMapping
