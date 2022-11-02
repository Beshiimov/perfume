import React, {FC, useEffect, useRef} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {RootState, useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";

import s from './Catalog.module.scss'
import MyLoader from "../../components/Common/Skeleton";
import PerfumeRowMapping from "../../components/Common/PerfumeRowMapping/PerfumeRowMapping";
import {fetchNewPerfumes} from "../../redux/slices/perfumes/slice";


const Catalog: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const lastNav = useRef('/catalog/unisex') //в редакс переносить

  const activeClassName = ({ isActive }: any) =>
    isActive ? `${s.active} toCatalog` : 'toCatalog'

  useEffect(() => {
    navigate(lastNav.current)
    dispatch(fetchNewPerfumes())
  }, [])

  const perfumes = useSelector(
    (state: RootState) => state.perfumesSlice.perfumes,
  )
  const status = useSelector((state: RootState) => state.perfumesSlice.status)


  return (
    <div className="container">
      <div className={s.Catalog}>
        <div className={s.header}>
          <NavLink
            to="/catalog/unisex"
            className={activeClassName}
            onClick={() => lastNav.current = '/catalog/unisex'}
          >
            Унисекс
          </NavLink>
          <NavLink to="/catalog/man"
                   className={activeClassName}
                   onClick={() => lastNav.current = '/catalog/man'}
          >
            для Него
          </NavLink>
          <NavLink to="/catalog/woman"
                   className={activeClassName}
                   onClick={() => lastNav.current = '/catalog/woman'}
          >
            для Неё
          </NavLink>
        </div>

        <section className={s.perfumes}>
          <div className={s.perfumesRow}>
            <h2>Акции</h2>
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
          <div className={s.perfumesRow}>
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
          <div className={s.perfumesRow}>
            <h2>Сезонные</h2>
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
          <div className={s.perfumesRow}>
            <h2>Все Парфюмы</h2>
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
          <h2>*Не нашли желаемый парфюм? У нас есть Поиск в верхнем угле</h2>
        </section>






      </div>
    </div>
  )
}

export default Catalog
