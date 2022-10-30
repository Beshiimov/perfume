import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../redux/store'
import { NavLink, Link, useLocation } from 'react-router-dom'
import debounce from 'lodash.debounce'

import {
  clearSearchResults,
  fetchSearch,
  setSearchValue,
} from '../../redux/slices/search/slice'
import { decodingConcentrationValue } from '../utils/PerfumeDecodingValues'
import cart from '../../assets/img/icons/cart.svg'
import search from '../../assets/img/icons/search.svg'
import s from './Header.module.scss'

const SearchAndShop: FC = () => {
  const dispatch = useAppDispatch()
  const isMounted = useRef(false)
  const { pathname } = useLocation()

  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const searchPopupRef = useRef<HTMLDivElement>(null)

  const searchValue = useSelector(
    (state: RootState) => state.searchSlice.searchValue,
  )
  const searchResults = useSelector(
    (state: RootState) => state.searchSlice.searchResults,
  )
  const cartItemsCount = useSelector(
    (state: RootState) => state.cartSlice.totalCount,
  )
  const perfumes = useSelector((state: RootState) => state.cartSlice.perfumes)

  const updateQuery = () => {
    if (searchValue) {
      dispatch(fetchSearch(searchValue))
    }
  }

  const delayedQuery = useCallback(debounce(updateQuery, 1000), [searchValue])

  const clearState = () => {
    setIsOpenSearch(false)
    dispatch(setSearchValue(''))
  }

  useEffect(() => {
    if (isMounted.current) {
      const data = JSON.stringify(perfumes)
      localStorage.setItem('cart', data)
    }
    isMounted.current = true
  }, [perfumes])

  useEffect(() => {
    if (!searchValue) dispatch(clearSearchResults())
    delayedQuery()
    return delayedQuery.cancel
  }, [search, delayedQuery])

  useEffect(() => {
    const clickOutside = (event: Event) => {
      const target = event.target as HTMLElement
      if (
        target.closest('div') !== searchPopupRef.current &&
        target.closest('div') !== searchRef.current
      ) {
        setIsOpenSearch(false)
      }
    }

    document.body.addEventListener('mousedown', clickOutside)
    return () => document.body.removeEventListener('mousedown', clickOutside)
  }, [])

  useEffect(() => {
    inputRef?.current?.focus()
  }, [isOpenSearch])

  return (
    <>
      {pathname !== '/cart' && (
        <Link to="/cart" className={s.cart}>
          {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
          <img src={cart} alt="cart" />
        </Link>
      )}
      <div className={s.search} ref={searchRef}>
        <img
          src={search}
          alt="search"
          onClick={() => setIsOpenSearch(!isOpenSearch)}
        />
        <div className={s.searchRequests} ref={searchPopupRef}>
          {isOpenSearch && (
            <>
              <input
                type="text"
                ref={inputRef}
                value={searchValue}
                placeholder="Поиск"
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
              />
              {searchResults &&
                searchResults.map((e) => (
                  <NavLink
                    to={'/PerfumeId/' + e.id}
                    key={e.id}
                    onClick={clearState}
                  >
                    <b>{e.attributes.brand} </b>
                    <span>{e.attributes.product} </span>
                    <i>{decodingConcentrationValue[e.attributes.concentration]} </i>
                  </NavLink>
                ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default SearchAndShop
