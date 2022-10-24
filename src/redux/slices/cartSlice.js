import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  perfumes: [],
  totalPrice: 0,
  totalCount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPerfume: (state, action) => {
      const findItem = state.perfumes.find(
        (obj) => obj.uniqueId === action.payload.uniqueId,
      )
      if (findItem) {
        findItem.count++
      } else {
        state.perfumes.push({ ...action.payload, count: 1 })
      }

      state.totalPrice = state.perfumes.reduce(
        (acc, curr) => acc + curr.price * curr.count,
        0,
      )
      state.totalCount = state.perfumes.reduce(
        (acc, curr) => acc + curr.count,
        0,
      )
    },
    minus: (state, action) => {
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

      state.totalPrice = state.perfumes.reduce(
        (acc, curr) => acc + curr.price * curr.count,
        0,
      )
      state.totalCount = state.perfumes.reduce(
        (acc, curr) => acc + curr.count,
        0,
      )
    },
  },
})

export const { addPerfume, minus } = cartSlice.actions
export default cartSlice.reducer
