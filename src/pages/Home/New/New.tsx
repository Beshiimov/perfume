import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PerfumeRowMapping from '../../../components/Common/PerfumeRowMapping/PerfumeRowMapping'
import MyLoader from '../../../components/Common/Skeleton'
import s from '../Home.module.scss'
import { fetchNewPerfumes } from '../../../redux/slices/perfumesSlice'

const New: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchNewPerfumes())
  }, [])

  //@ts-ignore
  const perfumes = useSelector((state) => state.perfumesSlice.perfumes)
  //@ts-ignore
  const status = useSelector((state) => state.perfumesSlice.status)

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
