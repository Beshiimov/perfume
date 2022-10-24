import {
  FC,
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
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

const SearchAndShop: FC = () => {
  const dispatch = useDispatch()

  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const searchPopupRef = useRef<HTMLDivElement>(null)

  const searchValue = useSelector<any>((state) => state.searchSlice.searchValue)
  const searchResults = useSelector<any>(
    (state) => state.searchSlice.searchResults,
  )
  const cartItemsCount = useSelector<any>((state) => state.cartSlice.totalCount)

  const updateQuery = () => {
    if (searchValue) {
      //@ts-ignore
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
    const clickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement
      if (
        target.closest('div') !== searchPopupRef.current &&
        target.closest('div') !== searchRef.current
      ) {
        setIsOpenSearch(false)
      }
    }

    document.body.addEventListener('mousedown', () => clickOutside)
    return () =>
      document.body.removeEventListener('mousedown', () => clickOutside)
  }, [])

  useEffect(() => {
    inputRef?.current?.focus()
  }, [isOpenSearch])

  return (
    //@ts-ignore
    <>
      <NavLink to="/cart" className={s.cart}>
        {/*@ts-ignore */}
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
                /*@ts-ignore */
                value={searchValue}
                placeholder="Поиск"
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
              />
              {searchResults &&
                /*@ts-ignore */
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
