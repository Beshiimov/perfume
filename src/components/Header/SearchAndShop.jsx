import { NavLink } from 'react-router-dom'

import cart from '../../assets/img/icons/cart.svg'
import search from '../../assets/img/icons/search.svg'
import s from './Header.module.scss'
import { useEffect, useRef, useState } from 'react'

const SearchAndShop = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const searchRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    const clickOutside = (e) => {
      if (e.target !== searchRef.current && e.target !== inputRef.current) {
        setIsOpenSearch(false)
      }
      if (e.target === searchRef.current) {
        setIsOpenSearch((state) => !state)
      }
    }
    document.body.addEventListener('click', clickOutside)
    return () => document.body.removeEventListener('click', clickOutside)
  }, [])

  return (
    <>
      <NavLink to="/cart" className={s.cart}>
        <img src={cart} alt="cart" />
      </NavLink>
      <div className={s.search}>
        <img src={search} alt="search" ref={searchRef} />
        {isOpenSearch && (
          <input
            type="text"
            ref={inputRef}
            value={searchInput}
            placeholder="Поиск"
            onChange={(e) => setSearchInput(e.target.value)}
            autoFocus
          />
        )}
      </div>
    </>
  )
}

export default SearchAndShop
