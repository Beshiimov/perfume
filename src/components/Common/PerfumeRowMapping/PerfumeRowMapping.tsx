import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { decodingConcentrationValue } from '../PerfumeDecodingValues'
import s from './Perfume.module.scss'
import { PerfumeRowMappingProps } from '../../../@types/Types'

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
    ({ concentration, id, items, manufacturer, product }) => {
      return (
        <NavLink to={'/PerfumeId/' + id} className={s.perfume} key={id}>
          <div className={s.image}>
            <img
              src={items[0].imgUrl}
              alt="PerfumeRowMapping"
              style={{ height: height + 'px' }}
            />
          </div>
          <div className={s.body}>
            <span className={s.manufacturer}>{manufacturer} </span>
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
