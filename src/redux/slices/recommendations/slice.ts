import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PerfumesRequests } from '../../../requests/Request'
import { PerfumeType } from '../../../@types/Types'
import { RecommendationsSliceType } from './types'
import { RootState } from '../../store'

/*---Middleware-----------------*/
export const fetchByBrandPerfumes = createAsyncThunk<
  PerfumeType[],
  string,
  { state: RootState }
>('users/fetchByBrandPerfumes', async (brand, { getState }) => {
  const gender = getState().perfumesSlice.gender
  return await PerfumesRequests.fetchByBrandPerfumes(brand, gender)
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
