import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CatalogRequests } from '../../../requests/Request'
import { PerfumeSliceTypes } from './types'
import { LoadingStatus, PerfumeType } from '../../../@types/Types'
import { RootState } from '../../store'
import { season } from '../../../env'

/*---Middleware-----------------*/
export const fetchNewPerfumes = createAsyncThunk<
  PerfumeType[],
  void,
  { state: RootState }
>('users/fetchNewPerfumes', async (_, { getState }) => {
  return await CatalogRequests.fetchNewPerfumes(getState().perfumesSlice.gender)
})

export const fetchDiscountPerfumes = createAsyncThunk<
  PerfumeType[],
  void,
  { state: RootState }
>('users/fetchSeasonPerfumes', async (_, { getState }) => {
  return await CatalogRequests.fetchSeasonPerfumes(
    getState().perfumesSlice.gender,
    season,
  )
})

export const fetchSeasonPerfumes = createAsyncThunk<
  PerfumeType[],
  void,
  { state: RootState }
>('users/fetchDiscountPerfumes', async (_, { getState }) => {
  return await CatalogRequests.fetchDiscountPerfumes(
    getState().perfumesSlice.gender,
  )
})

export const fetchAllPerfumes = createAsyncThunk<
  PerfumeType[],
  void,
  { state: RootState }
>('users/fetchAllPerfumes', async (_, { getState }) => {
  return await CatalogRequests.fetchAllPerfumes(getState().perfumesSlice.gender)
})

const initialState: PerfumeSliceTypes = {
  gender: 0,
  perfumes: {
    new: [],
    discount: [],
    season: [],
    all: [],
  },
  status: {
    newStatus: LoadingStatus.LOADING,
    discountStatus: LoadingStatus.LOADING,
    seasonStatus: LoadingStatus.LOADING,
    otherStatus: LoadingStatus.LOADING,
  },
}

export const perfumesSlice = createSlice({
  name: 'perfumes',
  initialState,
  reducers: {
    genderChange: (state, action: PayloadAction<number>) => {
      state.gender = action.payload
    },
  },
  extraReducers: (builder) => {
    /*---New------------------------------------------------*/
    builder.addCase(fetchNewPerfumes.pending, (state) => {
      state.status.newStatus = LoadingStatus.LOADING
      state.perfumes.new = []
    })
    builder.addCase(
      fetchNewPerfumes.fulfilled,
      (state, action: PayloadAction<PerfumeType[]>) => {
        state.status.newStatus = LoadingStatus.SUCCESS
        state.perfumes.new = action.payload
      },
    )
    builder.addCase(fetchNewPerfumes.rejected, (state) => {
      state.status.newStatus = LoadingStatus.ERROR
      state.perfumes.new = []
    })

    /*---Discount------------------------------------------------*/
    builder.addCase(fetchDiscountPerfumes.pending, (state) => {
      state.status.discountStatus = LoadingStatus.LOADING
      state.perfumes.discount = []
    })
    builder.addCase(
      fetchDiscountPerfumes.fulfilled,
      (state, action: PayloadAction<PerfumeType[]>) => {
        state.status.discountStatus = LoadingStatus.SUCCESS
        state.perfumes.discount = action.payload
      },
    )
    builder.addCase(fetchDiscountPerfumes.rejected, (state) => {
      state.status.discountStatus = LoadingStatus.ERROR
      state.perfumes.discount = []
    })

    /*---Season------------------------------------------------*/
    builder.addCase(fetchSeasonPerfumes.pending, (state) => {
      state.status.seasonStatus = LoadingStatus.LOADING
      state.perfumes.season = []
    })
    builder.addCase(
      fetchSeasonPerfumes.fulfilled,
      (state, action: PayloadAction<PerfumeType[]>) => {
        state.status.seasonStatus = LoadingStatus.SUCCESS
        state.perfumes.season = action.payload
      },
    )
    builder.addCase(fetchSeasonPerfumes.rejected, (state) => {
      state.status.seasonStatus = LoadingStatus.ERROR
      state.perfumes.season = []
    })

    /*---All------------------------------------------------*/
    builder.addCase(fetchAllPerfumes.pending, (state) => {
      state.status.otherStatus = LoadingStatus.LOADING
      state.perfumes.all = []
    })
    builder.addCase(
      fetchAllPerfumes.fulfilled,
      (state, action: PayloadAction<PerfumeType[]>) => {
        state.status.otherStatus = LoadingStatus.SUCCESS
        state.perfumes.all = action.payload
      },
    )
    builder.addCase(fetchAllPerfumes.rejected, (state) => {
      state.status.otherStatus = LoadingStatus.ERROR
      state.perfumes.all = []
    })
  },
})

export const { genderChange } = perfumesSlice.actions
export default perfumesSlice.reducer
