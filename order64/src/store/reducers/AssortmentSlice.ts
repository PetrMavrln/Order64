import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAssortmentItem } from '../../models/IAssortmentItem';

interface AssortmentState {
  assortment: IAssortmentItem[];
  isLoading: boolean;
  error: string;
}

const initialState: AssortmentState = {
  assortment: [],
  isLoading: false,
  error: '',
};

export const assortmentSlice = createSlice({
  name: 'assortment',
  initialState,
  reducers: {
    assortmentFetching(state) {
      state.isLoading = true;
    },
    assortmentFetchingSuccess(state, action: PayloadAction<IAssortmentItem[]>) {
      state.isLoading = false;
      state.error = '';
      state.assortment = action.payload;
    },
    assortmentFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default assortmentSlice.reducer;
