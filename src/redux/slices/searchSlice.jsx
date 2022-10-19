import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PerfumesRequests } from '../../requests/Request'

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

export const searchSlice = createSlice({
  name: 'search',
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

export default searchSlice.reducer
