import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../../redux/store'

import PerfumeRowMapping from '../../../components/Common/PerfumeRowMapping/PerfumeRowMapping'
import { fetchNewPerfumes } from '../../../redux/slices/perfumes/slice'
import s from '../Home.module.scss'

const New: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchNewPerfumes())
  }, [])

  const perfumes = useSelector(
    (state: RootState) => state.perfumesSlice.perfumes.new,
  )
  const status = useSelector(
    (state: RootState) => state.perfumesSlice.status.newStatus,
  )

  return (
    <div className={s.New}>
      <PerfumeRowMapping
        perfumes={perfumes}
        height={170}
        width={150}
        fit={'fit'}
        status={status}
        text={'Новинки'}
      />
    </div>
  )
}

export default New
