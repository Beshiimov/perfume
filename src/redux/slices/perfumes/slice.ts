import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

import {PerfumesRequests} from '../../../requests/Request'
import {PerfumeSliceTypes} from './types'
import {LoadingStatus, PerfumeType} from '../../../@types/Types'

/*---Middleware-----------------*/
export const fetchNewPerfumes = createAsyncThunk<PerfumeType[]>(
  'users/fetchNewPerfumes',
  async () => {
    return await PerfumesRequests.fetchNewPerfumes()
  },
)

const initialState: PerfumeSliceTypes = {
  perfumes: [],
  status: LoadingStatus.LOADING,
}

export const perfumesSlice = createSlice({
  name: 'perfumes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewPerfumes.pending, (state) => {
      state.status = LoadingStatus.LOADING
      state.perfumes = []
    })
    builder.addCase(
      fetchNewPerfumes.fulfilled,
      (state, action: PayloadAction<PerfumeType[]>) => {
        state.status = LoadingStatus.SUCCESS
        state.perfumes = action.payload
      },
    )
    builder.addCase(fetchNewPerfumes.rejected, (state) => {
      state.status = LoadingStatus.ERROR
      state.perfumes = []
    })
  },
})

export default perfumesSlice.reducer
