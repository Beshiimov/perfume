import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { PerfumesRequests } from '../../../requests/Request'
import { LoadingStatus, PerfumeType } from '../../../@types/Types'
import { AboutPerfumeSliceType } from './types'

export const getPerfumeById = createAsyncThunk<PerfumeType, number>(
  'users/getPerfumeById',
  async (PerfumeId) => {
    const { data } = await PerfumesRequests.fetchPerfumeById(PerfumeId)
    return data
  },
)

const initialState: AboutPerfumeSliceType = {
  aboutPerfume: null,
  status: LoadingStatus.LOADING, //loading | success | error
}

export const aboutPerfumeSlice = createSlice({
  name: 'aboutPerfume',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPerfumeById.pending, (state) => {
      state.status = LoadingStatus.LOADING
      state.aboutPerfume = null
    })
    builder.addCase(getPerfumeById.fulfilled, (state, action: any) => {
      const data: PerfumeType = action.payload[0]
      state.status = LoadingStatus.SUCCESS
      state.aboutPerfume = data
    })
    builder.addCase(getPerfumeById.rejected, (state) => {
      state.status = LoadingStatus.ERROR
      state.aboutPerfume = null
    })
  },
})

export default aboutPerfumeSlice.reducer
