import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PerfumesRequests } from '../../../requests/Request'
import { PerfumeType } from '../../../@types/Types'
import { RecommendationsSliceType } from './types'

/*---Middleware-----------------*/
export const fetchManufacturerPerfumes = createAsyncThunk<
  PerfumeType[],
  string
>('users/fetchManufacturerPerfumes', async (manufacturer) => {
  const { data } = await PerfumesRequests.fetchManufacturerPerfumes(
    manufacturer,
  )
  return data
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
    builder.addCase(fetchManufacturerPerfumes.pending, (state) => {
      state.perfumes = []
    })
    builder.addCase(
      fetchManufacturerPerfumes.fulfilled,
      (state, action: PayloadAction<PerfumeType[]>) => {
        state.perfumes = action.payload
      },
    )
  },
})

export default recommendationsSlice.reducer
