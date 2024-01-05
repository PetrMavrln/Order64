import axios from 'axios';
import { IAssortmentItem } from '../../models/IAssortmentItem';
import { AppDispatch } from '../store';
import { assortmentSlice } from './AssortmentSlice';

export const fetchAssortment = () => async (dispatch: AppDispatch) => {
  // http://127.0.0.1:5500/json/assortment.json
  // https://order164.ru/json/assortment.json
  let url = 'https://order164.ru/json/assortment.json';
  try {
    dispatch(assortmentSlice.actions.assortmentFetching());
    const response = await axios.get<IAssortmentItem[]>(url);
    dispatch(assortmentSlice.actions.assortmentFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(assortmentSlice.actions.assortmentFetchingError(e.message));
  }
};
