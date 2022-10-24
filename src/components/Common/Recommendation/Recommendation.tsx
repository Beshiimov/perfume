import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import PerfumeRowMapping from '../PerfumeRowMapping/PerfumeRowMapping'
import { fetchManufacturerPerfumes } from '../../../redux/slices/recommendationsSlice'
import s from './Recommendation.module.scss'
import { useParams } from 'react-router-dom'
import { RootState, useAppDispatch } from '../../../redux/store'

type RecommendationProps = {
  manufacturer: string
}

const Recommendation: FC<RecommendationProps> = ({ manufacturer }) => {
  const { PerfumeId } = useParams<{ PerfumeId: string }>()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchManufacturerPerfumes(manufacturer))
  }, [])

  const perfumes = useSelector(
    (state: RootState) => state.recommendationsSlice.perfumes,
  )
  if (perfumes && perfumes.length > 1 && PerfumeId) {
    const filteredPerfumes = perfumes.filter((e) => e.id !== +PerfumeId)
    return (
      <div className={s.Recommendation}>
        <div className={s.title}>Еще товары от этого производителя</div>
        <div className={s.row}>
          <PerfumeRowMapping
            perfumes={filteredPerfumes}
            height={200}
            width={150}
            fit={'fill'}
          />
        </div>
      </div>
    )
  } else return <div className={s.title}>Загрузка</div>
}

export default Recommendation
