import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PerfumeRowMapping from '../PerfumeRowMapping/PerfumeRowMapping'
import { fetchManufacturerPerfumes } from '../../../redux/slices/recommendationsSlice'
import s from './Recommendation.module.scss'
import { useParams } from 'react-router-dom'

type RecommendationProps = {
  manufacturer: string
}

const Recommendation: FC<RecommendationProps> = ({ manufacturer }) => {
  const { PerfumeId } = useParams<{ PerfumeId: string }>()
  const dispatch = useDispatch()
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchManufacturerPerfumes(manufacturer))
  }, [])

  //@ts-ignore
  const perfumes = useSelector((state) => state.recommendationsSlice.perfumes)
  if (perfumes && perfumes.length > 1 && PerfumeId) {
    //@ts-ignore
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
