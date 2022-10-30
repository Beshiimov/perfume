import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

import {PerfumesRequests} from '../../../requests/Request'
import {LoadingStatus, PerfumeType} from '../../../@types/Types'
import {AboutPerfumeSliceType} from './types'

export const getPerfumeById = createAsyncThunk<PerfumeType, string>(
  'users/getPerfumeById',
  async (PerfumeId) => {
    return await PerfumesRequests.fetchPerfumeById(PerfumeId)
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
    builder.addCase(getPerfumeById.fulfilled, (state, action: PayloadAction<PerfumeType>) => {
      state.status = LoadingStatus.SUCCESS
      state.aboutPerfume = action.payload
    })
    builder.addCase(getPerfumeById.rejected, (state) => {
      state.status = LoadingStatus.ERROR
      state.aboutPerfume = null
    })
  },
})

export default aboutPerfumeSlice.reducer
