import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrderPageImgs } from '../../models/IOrderPageImgs';

interface OrderPageImgsState {
  orderPageImgs: IOrderPageImgs[];
  isLoading: boolean;
  error: string;
}

const initialState: OrderPageImgsState = {
  orderPageImgs: [],
  isLoading: false,
  error: '',
};

export const orderPageImgsSlice = createSlice({
  name: 'orderPageImgs',
  initialState,
  reducers: {
    orderPageImgsFetching(state) {
      state.isLoading = true;
    },
    orderPageImgsFetchingSuccess(state, action: PayloadAction<IOrderPageImgs[]>) {
      state.isLoading = false;
      state.error = '';
      state.orderPageImgs = action.payload;
    },
    orderPageImgsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default orderPageImgsSlice.reducer;
