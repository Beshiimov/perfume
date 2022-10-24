import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { getPerfumeById } from '../../redux/slices/aboutPerfumeSlice'
import PerfumeSkeleton from './PerfumeSkeleton'
import Perfume from './Perfume'

const AboutPerfume = () => {
  const { PerfumeId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    //@ts-ignore
    dispatch(getPerfumeById(PerfumeId))
    window.scrollTo(0, 0)
  }, [PerfumeId])

  //@ts-ignore
  const perfume = useSelector((state) => state.aboutPerfumeSlice.aboutPerfume)
  //@ts-ignore
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
