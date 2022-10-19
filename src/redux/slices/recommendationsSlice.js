import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PerfumesRequests } from '../../requests/Request'
import { aboutPerfumeSlice } from './aboutPerfumeSlice'

/*---Middleware-----------------*/
export const fetchManufacturerPerfumes = createAsyncThunk(
  'users/fetchManufacturerPerfumes',
  async (manufacturer) => {
    const { data } = await PerfumesRequests.fetchManufacturerPerfumes(
      manufacturer,
    )
    return data
  },
)
/*---MiddlewareEnd------------------*/

const initialState = {
  perfumes: null,
}

export const recommendationsSlice = createSlice({
  name: 'recommendations',
  initialState,
  extraReducers: {
    [fetchManufacturerPerfumes.pending]: (state) => {
      state.perfumes = null
    },
    [fetchManufacturerPerfumes.fulfilled]: (state, action) => {
      state.perfumes = action.payload
    },
    [fetchManufacturerPerfumes.rejected]: (state) => {
      state.perfumes = null
    },
  },
})

export default recommendationsSlice.reducer
