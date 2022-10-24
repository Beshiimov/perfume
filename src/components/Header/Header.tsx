import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'

import SearchAndShop from './SearchAndShop'
import s from './Header.module.scss'

const Header: FC = () => {
  const activeClassName = ({ isActive }: any) =>
    isActive ? s.active : undefined

  return (
    <header>
      <div className={s.headerRow}>
        <Link to="/home" className="logo">
          <p>
            Zamir'<span>s</span>
          </p>
          <p>Perfumery</p>
        </Link>
        <div className={s.nav}>
          <NavLink to="/home" className={activeClassName}>
            Главная
          </NavLink>
          {/*<NavLink to="/cart" className={isActiveClassName}>*/}
          {/*  Корзина*/}
          {/*</NavLink>*/}
          <NavLink to="/catalog" className={activeClassName}>
            Каталог
          </NavLink>
        </div>
        <div className={s.rightSideBtns}>
          <SearchAndShop />
        </div>
      </div>
    </header>
  )
}

export default Header
