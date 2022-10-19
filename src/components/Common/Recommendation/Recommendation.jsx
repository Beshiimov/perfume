import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PerfumeRowMapping from '../PerfumeRowMapping/PerfumeRowMapping'
import { fetchManufacturerPerfumes } from '../../../redux/slices/recommendationsSlice'
import s from './Recommendation.module.scss'
import { useParams } from 'react-router-dom'

const Recommendation = ({ manufacturer }) => {
  const { PerfumeId } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchManufacturerPerfumes(manufacturer))
  }, [])

  const perfumes = useSelector((state) => state.recommendationsSlice.perfumes)

  if (perfumes && perfumes.length > 1) {
    const filteredPerfumes = perfumes.filter((e) => e.id !== +PerfumeId)
    return (
      <div className={s.Recommendation}>
        <div className={s.title}>Еще товары от этого производителя</div>
        <div className={s.row}>
          <PerfumeRowMapping
            perfumes={filteredPerfumes}
            height={200}
            width={150}
          />
        </div>
      </div>
    )
  }
}

export default Recommendation
