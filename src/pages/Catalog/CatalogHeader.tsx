import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch } from '../../redux/store'

import s from './Catalog.module.scss'
import { genderChange } from '../../redux/slices/perfumes/slice'

const CatalogHeader = () => {
  const dispatch = useAppDispatch()

  const activeClassName = ({ isActive }: any) =>
    isActive ? `${s.active} toCatalog` : 'toCatalog'

  const changeGenderValue = (gender: number) => {
    dispatch(genderChange(gender))
  }

  return (
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
  )
}

export default CatalogHeader
