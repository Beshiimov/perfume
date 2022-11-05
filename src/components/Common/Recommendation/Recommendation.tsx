import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import PerfumeRowMapping from '../PerfumeRowMapping/PerfumeRowMapping'
import { fetchByBrandPerfumes } from '../../../redux/slices/recommendations/slice'
import s from './Recommendation.module.scss'
import { useParams } from 'react-router-dom'
import { RootState, useAppDispatch } from '../../../redux/store'

type RecommendationProps = {
  brand: string
}

const Recommendation: FC<RecommendationProps> = ({ brand }) => {
  const { PerfumeId } = useParams<{ PerfumeId: string }>()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchByBrandPerfumes(brand))
  }, [])

  const perfumes = useSelector(
    (state: RootState) => state.recommendationsSlice.perfumes,
  )
  const status = useSelector(
    (state: RootState) => state.recommendationsSlice.status,
  )

  if (perfumes && perfumes.length > 1 && PerfumeId) {
    const filteredPerfumes = perfumes.filter((e) => e.id !== PerfumeId)
    return (
      <div className={s.Recommendation}>
        <div className={s.title}>Еще товары от этого производителя</div>
        <div className={s.row}>
          <PerfumeRowMapping
            perfumes={filteredPerfumes}
            height={200}
            width={150}
            fit={'fill'}
            status={status}
          />
        </div>
      </div>
    )
  } else return <></>
}

export default Recommendation
