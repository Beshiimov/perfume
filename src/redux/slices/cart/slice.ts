import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getCartItemsFromLS } from '../../../components/utils/getCartItemsFromLS'
import { cartSliceCalc } from '../../../components/utils/cartSliceCalc'
import { CartPerfumeType } from '../../../@types/Types'
import { CartSliceType } from './types'

const { items, totalCount, totalPrice, totalDiscountPrice } =
  getCartItemsFromLS()

const initialState: CartSliceType = {
  perfumes: items,
  totalPrice,
  totalCount,
  totalDiscountPrice,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPerfume: (state, action: PayloadAction<CartPerfumeType>) => {
      const findItem = state.perfumes.find(
        (obj) => obj.uniqueId === action.payload.uniqueId,
      )
      if (findItem) {
        findItem.count++
      } else {
        state.perfumes.push({ ...action.payload, count: 1 })
      }

      state.totalPrice = cartSliceCalc(state.perfumes).totalPrice
      state.totalCount = cartSliceCalc(state.perfumes).totalCount
      state.totalDiscountPrice = cartSliceCalc(
        state.perfumes,
      ).totalDiscountPrice
    },
    minus: (state, action: PayloadAction<CartPerfumeType>) => {
      const findItem = state.perfumes.find((e) => {
        return e.uniqueId === action.payload.uniqueId
      })

      if (findItem) {
        findItem.count--
        if (findItem.count === 0) {
          state.perfumes = state.perfumes.filter(
            (e) => e.uniqueId !== findItem.uniqueId,
          )
        }
      }

      state.totalPrice = cartSliceCalc(state.perfumes).totalPrice
      state.totalCount = cartSliceCalc(state.perfumes).totalCount
      state.totalDiscountPrice = cartSliceCalc(
        state.perfumes,
      ).totalDiscountPrice
    },
  },
})

export const { addPerfume, minus } = cartSlice.actions
export default cartSlice.reducer
