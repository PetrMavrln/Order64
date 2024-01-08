import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrderSystem } from '../../models/IOrderSystem';

interface OrderSystemState {
  orderSystem: IOrderSystem[];
  isLoading: boolean;
  error: string;
}

const initialState: OrderSystemState = {
  orderSystem: [],
  isLoading: false,
  error: '',
};

export const orderSystemSlice = createSlice({
  name: 'orderSystem',
  initialState,
  reducers: {
    orderSystemFetching(state) {
      state.isLoading = true;
    },
    orderSystemFetchingSuccess(state, action: PayloadAction<IOrderSystem[]>) {
      state.isLoading = false;
      state.error = '';
      state.orderSystem = action.payload;
    },
    orderSystemFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default orderSystemSlice.reducer;
