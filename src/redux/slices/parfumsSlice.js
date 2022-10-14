import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  parfums: null,
  isLoading: true,
}

export const parfumsSlice = createSlice({
  name: 'parfums',
  initialState,
  reducers: {
    updateParfums: (state, action) => {
      state.parfums = action.payload
    },
    toggleLoadingStatus: (state, action) => {
      state.isLoading = action.payload
    },
  },
})
export const { updateParfums, toggleLoadingStatus } = parfumsSlice.actions
export default parfumsSlice.reducer
