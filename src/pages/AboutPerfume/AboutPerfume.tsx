import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../redux/store'

import { getPerfumeById } from '../../redux/slices/aboutPerfumeSlice'
import PerfumeSkeleton from './PerfumeSkeleton'
import Perfume from './Perfume'
import { LoadingStatus } from '../../@types/Types'

const AboutPerfume = () => {
  const { PerfumeId } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (PerfumeId) {
      dispatch(getPerfumeById(+PerfumeId))
    }
    window.scrollTo(0, 0)
  }, [PerfumeId])

  const perfume = useSelector(
    (state: RootState) => state.aboutPerfumeSlice.aboutPerfume,
  )
  const status = useSelector(
    (state: RootState) => state.aboutPerfumeSlice.status,
  )

  return (
    <>
      {perfume && status === LoadingStatus.SUCCESS && <Perfume {...perfume} />}
      {status === LoadingStatus.LOADING && (
        <PerfumeSkeleton height={350} width={300} />
      )}
      {status === LoadingStatus.ERROR && (
        <h2 className="error">
          Произошла ошибка при загрузке парфюма, попытку позже
        </h2>
      )}
    </>
  )
}
export default AboutPerfume
