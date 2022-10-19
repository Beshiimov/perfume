import s from './Perfume.module.scss'
import { NavLink } from 'react-router-dom'
import { decodingConcentrationValue } from '../PerfumeDecodingValues'

const PerfumeRowMapping = ({ perfumes, width, height }) => {
  const myStyle = {
    gridTemplateColumns: `repeat(auto-fill, minmax(${width}px, 1fr))`,
  }

  const perfumesRow = perfumes.map(
    ({ concentration, id, items, manufacturer, product }) => {
      return (
        <NavLink
          to={'/PerfumeId/' + id}
          // style={{ width: width + 'px' }}
          className={s.perfume}
          key={id}
        >
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
