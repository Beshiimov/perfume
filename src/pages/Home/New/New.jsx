import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PerfumeRowMapping from '../../../components/Common/PerfumeRowMapping/PerfumeRowMapping'
import MyLoader from '../../../components/Common/Skeleton'
import { fetchNewPerfumes } from '../../../redux/slices/perfumesSlice'
import s from '../Home.module.scss'

const New = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNewPerfumes())
  }, [])

  const perfumes = useSelector((state) => state.perfumesSlice.perfumes)
  const status = useSelector((state) => state.perfumesSlice.status)

  return (
    <div className={s.New}>
      <h2>Новинки</h2>
      {status === 'error' ? (
        <h2 className="error">
          Произошла ошибка при загрузке парфюма, повторите попытку позже
        </h2>
      ) : status === 'loading' ? (
        <MyLoader height={350} width={300} />
      ) : (
        <PerfumeRowMapping perfumes={perfumes} height={350} width={300} />
      )}
    </div>
  )
}

export default New
