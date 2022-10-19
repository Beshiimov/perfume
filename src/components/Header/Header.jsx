import { NavLink } from 'react-router-dom'

import SearchAndShop from './SearchAndShop'
import s from './Header.module.scss'

const Header = () => {
  const isActiveClassName = ({ isActive }) => (isActive ? s.active : undefined)

  return (
    <header>
      <div className={s.headerRow}>
        <NavLink to="/home" className="logo">
          <p>
            Zamir'<span>s</span>
          </p>
          <p>Perfumery</p>
        </NavLink>
        <div className={s.nav}>
          <NavLink to="/home" className={isActiveClassName}>
            Главная
          </NavLink>
          {/*<NavLink to="/cart" className={isActiveClassName}>*/}
          {/*  Корзина*/}
          {/*</NavLink>*/}
          <NavLink to="/catalog" className={isActiveClassName}>
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
