import { configureStore } from '@reduxjs/toolkit'
import perfumesSlice from './slices/perfumesSlice'
import aboutPerfumeSlice from './slices/aboutPerfumeSlice'
import recommendationsSlice from './slices/recommendationsSlice'
import searchSlice from './slices/searchSlice'

export const store = configureStore({
  reducer: {
    perfumesSlice,
    aboutPerfumeSlice,
    recommendationsSlice,
    searchSlice,
  },
})
