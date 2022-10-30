import { useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import s from './Catalog.module.scss'

const Catalog = () => {
  const navigate = useNavigate()
  let lastNav = useRef('/catalog/unigender')
  const activeClassName = ({ isActive }: any) =>
    isActive ? `${s.active} toCatalog` : 'toCatalog'

  useEffect(() => {
    navigate(lastNav.current)
  }, [])

  const saveUrlParams = () => {
    lastNav.current = '/hh'
  }

  return (
    <div className="container">
      <div className={s.Catalog}>
        <div className={s.header}>
          <NavLink
            to="/catalog/unigender"
            className={activeClassName}
            onClick={saveUrlParams}
          >
            Унисекс
          </NavLink>
          <NavLink to="/catalog/man" className={activeClassName}>
            для Мужчин
          </NavLink>
          <NavLink to="/catalog/woman" className={activeClassName}>
            для Женщин
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Catalog
