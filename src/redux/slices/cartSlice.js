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
        (obj) =>
          obj.id + obj.volume === action.payload.id + action.payload.volume,
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
  },
})

export const { addPerfume } = cartSlice.actions
export default cartSlice.reducer
