import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Perfume from './Perfume'
import { getPerfumeById } from '../../redux/slices/aboutPerfumeSlice'
import PerfumeSkeleton from './PerfumeSkeleton'

const AboutPerfume = () => {
  const { PerfumeId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPerfumeById(PerfumeId))
    window.scrollTo(0, 0)
  }, [PerfumeId])

  const perfume = useSelector((state) => state.aboutPerfumeSlice.aboutPerfume)
  const status = useSelector((state) => state.aboutPerfumeSlice.status)

  return (
    <>
      {status === 'error' ? (
        <h2 className="error">
          Произошла ошибка при загрузке парфюма, повторите попытку позже
        </h2>
      ) : status === 'loading' ? (
        <PerfumeSkeleton height={350} width={300} />
      ) : (
        <Perfume {...perfume} />
      )}
    </>
  )
}

export default AboutPerfume
