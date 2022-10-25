import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import perfumesSlice from './slices/perfumes/slice'
import aboutPerfumeSlice from './slices/aboutPerfume/slice'
import recommendationsSlice from './slices/recommendations/slice'
import searchSlice from './slices/search/slice'
import cartSlice from './slices/cart/slice'

export const store = configureStore({
  reducer: {
    perfumesSlice,
    aboutPerfumeSlice,
    recommendationsSlice,
    searchSlice,
    cartSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
