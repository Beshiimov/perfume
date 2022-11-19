import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CatalogRequests } from '../../../requests/Request'
import { PerfumeSliceTypes } from './types'
import {
  LoadingStatus,
  OtherPerfumeType,
  PerfumeType,
} from '../../../@types/Types'
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
>('users/fetchDiscountPerfumes', async (_, { getState }) => {
  return await CatalogRequests.fetchDiscountPerfumes(
    getState().perfumesSlice.gender,
  )
})

export const fetchSeasonPerfumes = createAsyncThunk<
  PerfumeType[],
  void,
  { state: RootState }
>('users/fetchSeasonPerfumes', async (_, { getState }) => {
  return await CatalogRequests.fetchSeasonPerfumes(
    getState().perfumesSlice.gender,
    season,
  )
})

export const fetchAllPerfumes = createAsyncThunk<
  OtherPerfumeType,
  void,
  { state: RootState }
>('users/fetchAllPerfumes', async (_, { getState }): Promise<any> => {
  if (getState().perfumesSlice.totalPageSize !== 99) {
    return await CatalogRequests.fetchAllPerfumes(
      getState().perfumesSlice.gender,
      getState().perfumesSlice.page,
    )
  }
})

const initialState: PerfumeSliceTypes = {
  gender: 0,
  page: 1,
  totalPageSize: 0,
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
    clearOtherPerfumes: (state) => ({ ...initialState, gender: state.gender }),
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
      state.status.otherStatus =
        state.perfumes.all.length > 0
          ? LoadingStatus.SUCCESS
          : LoadingStatus.SUCCESS
    })
    builder.addCase(
      fetchAllPerfumes.fulfilled,
      (state, action: PayloadAction<OtherPerfumeType>) => {
        state.status.otherStatus = LoadingStatus.SUCCESS
        state.totalPageSize = action.payload.pageCount
        state.page =
          action.payload.pageCount === state.page ? 99 : state.page + 1
        state.perfumes.all = [...state.perfumes.all, ...action.payload.data]
      },
    )
    builder.addCase(fetchAllPerfumes.rejected, (state) => {
      state.status.otherStatus = LoadingStatus.ERROR
      state.perfumes.all = []
    })
  },
})

export const { genderChange, clearOtherPerfumes } = perfumesSlice.actions
export default perfumesSlice.reducer
