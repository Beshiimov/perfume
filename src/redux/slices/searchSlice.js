import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PerfumesRequests, SearchRequests } from '../../requests/Request'

/*---Middleware-----------------*/
export const fetchSearch = createAsyncThunk(
  'users/fetchSearch',
  async (searchValue) => {
    const { data } = await SearchRequests.search(searchValue)
    return data
  },
)
/*---MiddlewareEnd------------------*/

const initialState = {
  searchValue: '',
  searchResults: [],
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
    clearSearchResults: (state) => {
      state.searchResults = []
    },
  },
  extraReducers: {
    [fetchSearch.fulfilled]: (state, action) => {
      state.searchResults = action.payload
    },
  },
})

export const { setSearchValue, clearSearchResults } = searchSlice.actions

export default searchSlice.reducer
