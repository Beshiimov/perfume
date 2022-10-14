import s from './Header.module.scss'
import search from '../../assets/img/icons/search.svg'
import cart from '../../assets/img/icons/cart.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className={s.headerRow}>
        <Link className="logo">Parfums</Link>
        <div className={s.nav}>
          <Link to="/">Главная</Link>
          <Link to="cart">Доставка</Link>
        </div>
        <div className={s.rightSideBtns}>
          <Link to="/cart" className={s.cart}>
            <img src={cart} alt="cart" />
          </Link>
          <div className={s.search}>
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
