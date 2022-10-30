import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PerfumesRequests } from '../../../requests/Request'
import { PerfumeType } from '../../../@types/Types'
import { RecommendationsSliceType } from './types'

/*---Middleware-----------------*/
export const fetchByBrandPerfumes = createAsyncThunk<
  PerfumeType[],
  string
>('users/fetchByBrandPerfumes', async (brand) => {
  return await PerfumesRequests.fetchByBrandPerfumes(brand)
})
/*---MiddlewareEnd------------------*/

const initialState: RecommendationsSliceType = {
  perfumes: [],
}

export const recommendationsSlice = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchByBrandPerfumes.pending, (state) => {
      state.perfumes = []
    })
    builder.addCase(
      fetchByBrandPerfumes.fulfilled,
      (state, action: PayloadAction<PerfumeType[]>) => {
        state.perfumes = action.payload
      },
    )
  },
})

export default recommendationsSlice.reducer
