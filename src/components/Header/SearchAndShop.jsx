import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import debounce from 'lodash.debounce'

import {
  clearSearchResults,
  fetchSearch,
  setSearchValue,
} from '../../redux/slices/searchSlice'
import { decodingConcentrationValue } from '../Common/PerfumeDecodingValues'
import cart from '../../assets/img/icons/cart.svg'
import search from '../../assets/img/icons/search.svg'
import s from './Header.module.scss'

const SearchAndShop = () => {
  const dispatch = useDispatch()
  const searchValue = useSelector((state) => state.searchSlice.searchValue)
  const searchResults = useSelector((state) => state.searchSlice.searchResults)
  const cartItemsCount = useSelector((state) => state.cartSlice.totalCount)

  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const searchRef = useRef()
  const inputRef = useRef()
  const searchPopupRef = useRef()

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
    if (!searchValue) dispatch(clearSearchResults())
    delayedQuery()
    return delayedQuery.cancel
  }, [search, delayedQuery])

  useEffect(() => {
    const clickOutside = (e) => {
      if (
        e.target.closest('div') !== searchPopupRef.current &&
        e.target.closest('div') !== searchRef.current
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
      <NavLink to="/cart" className={s.cart}>
        {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
        <img src={cart} alt="cart" />
      </NavLink>
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
                    <b>{e.manufacturer} </b>
                    <span>{e.product} </span>
                    <i>{decodingConcentrationValue[e.concentration]} </i>
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
