import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import perfumesSlice from './slices/perfumes/slice'
import aboutPerfumeSlice from './slices/aboutPerfume/slice'
import recommendationsSlice from './slices/recommendations/slice'
import searchSlice from './slices/search/slice'
import cartSlice from './slices/cart/slice'
import checkoutSlice from './slices/checkout/slice'

export const store = configureStore({
  //Исправить reFetch при Переключении Полов в Каталоге
  reducer: {
    perfumesSlice,
    aboutPerfumeSlice,
    recommendationsSlice,
    searchSlice,
    cartSlice,
    checkoutSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
