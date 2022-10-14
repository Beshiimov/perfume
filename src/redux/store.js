import { configureStore } from '@reduxjs/toolkit'
import parfumsSlice from './slices/parfumsSlice'

export const store = configureStore({
  reducer: { parfumsSlice },
})
