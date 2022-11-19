import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RootState, useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'

import {
  clearOtherPerfumes,
  fetchAllPerfumes,
  fetchDiscountPerfumes,
  fetchNewPerfumes,
  fetchSeasonPerfumes,
} from '../../redux/slices/perfumes/slice'
import { decodingGenderValue } from '../../components/utils/PerfumeDecodingValues'
import PerfumeRowMapping from '../../components/Common/PerfumeRowMapping/PerfumeRowMapping'
import CatalogHeader from './CatalogHeader'
import s from './Catalog.module.scss'
import { LoadingStatus } from '../../@types/Types'
import InfiniteScroll from 'react-infinite-scroll-component'

const Catalog: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const gender = useSelector((state: RootState) => state.perfumesSlice.gender)
  const page = useSelector((state: RootState) => state.perfumesSlice.page)
  const perfumes = useSelector(
    (state: RootState) => state.perfumesSlice.perfumes,
  )
  const status = useSelector((state: RootState) => state.perfumesSlice.status)

  useEffect(() => {
    navigate('/catalog/' + decodingGenderValue[gender])
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    dispatch(clearOtherPerfumes())
    dispatch(fetchNewPerfumes())
    dispatch(fetchDiscountPerfumes())
    dispatch(fetchSeasonPerfumes())
  }, [gender])

  if (status.otherStatus === LoadingStatus.ERROR) {
    return (
      <h2 className="error">
        Произошла ошибка при загрузке, повторите попытку позже
      </h2>
    )
  }

  const nextPageLoad = () => {
    if (page !== 99) {
      dispatch(fetchAllPerfumes())
    }
  }

  return (
    <div className="container">
      <div className={s.Catalog}>
        <CatalogHeader />
        <section className={s.perfumes}>
          <InfiniteScroll
            next={nextPageLoad}
            hasMore={page !== 99}
            loader={<h2 style={{ textAlign: 'center' }}>Загрузка...</h2>}
            endMessage={
              <h2>
                *Не нашли желаемый парфюм? У нас есть Поиск в верхнем угле
              </h2>
            }
            dataLength={perfumes.all.length}
          >
            <div className={s.perfumesRow}>
              <PerfumeRowMapping
                perfumes={perfumes.discount}
                height={170}
                width={180}
                fit={'fit'}
                status={status.discountStatus}
                text={'Акции'}
              />
            </div>
            <div className={s.perfumesRow}>
              <PerfumeRowMapping
                perfumes={perfumes.new}
                height={170}
                width={180}
                fit={'fit'}
                status={status.newStatus}
                text={'Новинки'}
              />
            </div>
            <div className={s.perfumesRow}>
              <PerfumeRowMapping
                perfumes={perfumes.season}
                height={170}
                width={180}
                fit={'fit'}
                status={status.seasonStatus}
                text={'Сезонные'}
              />
            </div>
            <div className={s.perfumesRow}>
              <PerfumeRowMapping
                perfumes={perfumes.all}
                height={170}
                width={180}
                fit={'fit'}
                status={status.otherStatus}
                text={'Еще парфюмы'}
              />
            </div>
          </InfiniteScroll>
        </section>
      </div>
    </div>
  )
}

export default Catalog
