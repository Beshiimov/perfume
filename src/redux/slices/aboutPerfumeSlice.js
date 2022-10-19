import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PerfumesRequests } from '../../requests/Request'

/*---Middleware-----------------*/
export const getPerfumeById = createAsyncThunk(
  'users/getPerfumeById',
  async (PerfumeId) => {
    const { data } = await PerfumesRequests.fetchPerfumeById(PerfumeId)
    return data
  },
)
/*---MiddlewareEnd------------------*/

const initialState = {
  aboutPerfume: null,
  status: 'loading', //loading | success | error
}

export const aboutPerfumeSlice = createSlice({
  name: 'aboutPerfume',
  initialState,
  extraReducers: {
    [getPerfumeById.pending]: (state) => {
      state.status = 'loading'
      state.aboutPerfume = null
    },
    [getPerfumeById.fulfilled]: (state, action) => {
      state.status = 'success'
      state.aboutPerfume = action.payload[0]
    },
    [getPerfumeById.rejected]: (state) => {
      state.status = 'error'
      state.aboutPerfume = null
    },
  },
})

export default aboutPerfumeSlice.reducer
