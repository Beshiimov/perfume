import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PerfumeType } from '../../../@types/Types'
import { SearchRequests } from '../../../requests/Request'
import { searchSliceTypes } from './types'

/*---Middleware-----------------*/
export const fetchSearch = createAsyncThunk<PerfumeType[], string>(
  'users/fetchSearch',
  async (searchValue) => {
    const { data } = await SearchRequests.search(searchValue)
    return data
  },
)
/*---MiddlewareEnd------------------*/

const initialState: searchSliceTypes = {
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
  extraReducers: (builder) => {
    builder.addCase(
      fetchSearch.fulfilled,
      (state, action: PayloadAction<PerfumeType[]>) => {
        state.searchResults = action.payload
      },
    )
  },
})

export const { setSearchValue, clearSearchResults } = searchSlice.actions

export default searchSlice.reducer
