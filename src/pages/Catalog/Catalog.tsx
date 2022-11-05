import React, { FC, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { RootState, useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'

import {
  fetchAllPerfumes,
  fetchDiscountPerfumes,
  fetchNewPerfumes,
  fetchSeasonPerfumes,
  genderChange,
} from '../../redux/slices/perfumes/slice'
import { decodingGenderValue } from '../../components/utils/PerfumeDecodingValues'
import PerfumeRowMapping from '../../components/Common/PerfumeRowMapping/PerfumeRowMapping'
import s from './Catalog.module.scss'

const Catalog: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const gender = useSelector((state: RootState) => state.perfumesSlice.gender)
  const perfumes = useSelector(
    (state: RootState) => state.perfumesSlice.perfumes,
  )
  const status = useSelector((state: RootState) => state.perfumesSlice.status)

  const activeClassName = ({ isActive }: any) =>
    isActive ? `${s.active} toCatalog` : 'toCatalog'

  useEffect(() => {
    navigate('/catalog/' + decodingGenderValue[gender])
    dispatch(fetchNewPerfumes())
    dispatch(fetchDiscountPerfumes())
    dispatch(fetchSeasonPerfumes())
    dispatch(fetchAllPerfumes())
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [gender])

  const changeGenderValue = (gender: number) => {
    dispatch(genderChange(gender))
  }

  return (
    <div className="container">
      <div className={s.Catalog}>
        <div className={s.header}>
          <NavLink
            to={'/catalog/unisex'}
            className={activeClassName}
            onClick={() => changeGenderValue(0)}
          >
            Унисекс
          </NavLink>
          <NavLink
            to={'/catalog/man'}
            className={activeClassName}
            onClick={() => changeGenderValue(1)}
          >
            Для Него
          </NavLink>
          <NavLink
            to={'/catalog/woman'}
            className={activeClassName}
            onClick={() => changeGenderValue(2)}
          >
            Для Неё
          </NavLink>
        </div>

        <section className={s.perfumes}>
          <div className={s.perfumesRow}>
            <PerfumeRowMapping
              perfumes={perfumes.discount}
              height={170}
              width={150}
              fit={'fit'}
              status={status.discountStatus}
              text={'Акции'}
            />
          </div>
          <div className={s.perfumesRow}>
            <PerfumeRowMapping
              perfumes={perfumes.new}
              height={170}
              width={150}
              fit={'fit'}
              status={status.newStatus}
              text={'Новинки'}
            />
          </div>
          <div className={s.perfumesRow}>
            <PerfumeRowMapping
              perfumes={perfumes.season}
              height={170}
              width={150}
              fit={'fit'}
              status={status.seasonStatus}
              text={'Сезонные'}
            />
          </div>
          <div className={s.perfumesRow}>
            <PerfumeRowMapping
              perfumes={perfumes.all}
              height={170}
              width={150}
              fit={'fit'}
              status={status.otherStatus}
              text={'Еще парфюмы'}
            />
          </div>

          <h2>*Не нашли желаемый парфюм? У нас есть Поиск в верхнем угле</h2>
        </section>
      </div>
    </div>
  )
}

export default Catalog
