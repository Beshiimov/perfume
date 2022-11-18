import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CheckoutRequest } from '../../../requests/Request'
import { CheckoutRequestType, CheckoutStatus } from '../../../@types/Types'
import { CheckoutType } from './types'
/*---Middleware-----------------*/

export const fetchCheckoutToServer = createAsyncThunk<any, CheckoutRequestType>(
  'users/fetchCheckoutToServer',
  async (data) => {
    return await CheckoutRequest.checkout(data)
  },
)
/*---MiddlewareEnd------------------*/

const initialState: CheckoutType = {
  status: CheckoutStatus.NULL,
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCheckoutToServer.pending, (state) => {
      state.status = CheckoutStatus.PENDING
    })
    builder.addCase(fetchCheckoutToServer.fulfilled, (state) => {
      state.status = CheckoutStatus.SUCCESS
    })
    builder.addCase(fetchCheckoutToServer.rejected, (state) => {
      state.status = CheckoutStatus.ERROR
    })
  },
})

export default checkoutSlice.reducer
