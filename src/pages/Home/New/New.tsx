import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import PerfumeRowMapping from '../../../components/Common/PerfumeRowMapping/PerfumeRowMapping'
import MyLoader from '../../../components/Common/Skeleton'
import s from '../Home.module.scss'
import { fetchNewPerfumes } from '../../../redux/slices/perfumes/slice'
import { RootState, useAppDispatch } from '../../../redux/store'

const New: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchNewPerfumes())
  }, [])

  const perfumes = useSelector(
    (state: RootState) => state.perfumesSlice.perfumes,
  )
  const status = useSelector((state: RootState) => state.perfumesSlice.status)

  return (
    <div className={s.New}>
      <h2>Новинки</h2>
      {status === 'error' ? (
        <h2 className="error">
          Произошла ошибка при загрузке парфюма, повторите попытку позже
        </h2>
      ) : status === 'loading' ? (
        <MyLoader height={170} width={150} />
      ) : (
        <PerfumeRowMapping
          perfumes={perfumes}
          height={170}
          width={150}
          fit={'fit'}
        />
      )}
    </div>
  )
}

export default New
