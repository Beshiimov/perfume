import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PerfumesRequests } from '../../requests/Request'

/*---Middleware-----------------*/
export const fetchNewPerfumes = createAsyncThunk(
  'users/fetchNewPerfumes',
  async () => {
    const { data } = await PerfumesRequests.fetchNewPerfumes()
    return data
  },
)
/*---MiddlewareEnd------------------*/

const initialState = {
  perfumes: null,
  status: 'loading', //loading | success | error
}

export const perfumesSlice = createSlice({
  name: 'perfumes',
  initialState,
  // reducers: {
  //   clearState: (state) => {
  //     state.perfumes = null
  //   },
  // },
  extraReducers: {
    [fetchNewPerfumes.pending]: (state) => {
      state.status = 'loading'
      state.perfumes = null
    },
    [fetchNewPerfumes.fulfilled]: (state, action) => {
      state.perfumes = action.payload
      state.status = 'success'
    },
    [fetchNewPerfumes.rejected]: (state) => {
      state.status = 'error'
      state.perfumes = null
    },
  },
})

// export const {} = perfumesSlice.actions
export default perfumesSlice.reducer
