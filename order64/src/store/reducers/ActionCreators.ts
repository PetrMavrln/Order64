import axios from 'axios';
import { IAssortmentItem } from '../../models/IAssortmentItem';
import { AppDispatch } from '../store';
import { assortmentSlice } from './AssortmentSlice';
import { orderPageImgsSlice } from './OrderPageImgsSlice';
import { IOrderPageImgs } from '../../models/IOrderPageImgs';
import { orderSystemSlice } from './OrderSystemSlice';
import { IOrderSystem } from '../../models/IOrderSystem';

export const fetchAssortment = () => async (dispatch: AppDispatch) => {
  let url = 'https://order164.ru/json/assortment.json';
  try {
    dispatch(assortmentSlice.actions.assortmentFetching());
    const response = await axios.get<IAssortmentItem[]>(url);
    dispatch(assortmentSlice.actions.assortmentFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(assortmentSlice.actions.assortmentFetchingError(e.message));
  }
};

// export const fetchOrderPageImgs = () => async (dispatch: AppDispatch) => {
//   let url = 'https://order164.ru/json/orderPageImgs.json';
//   try {
//     dispatch(orderPageImgsSlice.actions.orderPageImgsFetching());
//     const response = await axios.get<IOrderPageImgs[]>(url);
//     dispatch(orderPageImgsSlice.actions.orderPageImgsFetchingSuccess(response.data));
//   } catch (e: any) {
//     dispatch(orderPageImgsSlice.actions.orderPageImgsFetchingError(e.message));
//   }
// };

export const fetchOrderSystem = () => async (dispatch: AppDispatch) => {
  let url = 'https://order164.ru/json/orderSystem.json';
  try {
    dispatch(orderSystemSlice.actions.orderSystemFetching());
    const response = await axios.get<IOrderSystem[]>(url);
    dispatch(orderSystemSlice.actions.orderSystemFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(orderSystemSlice.actions.orderSystemFetchingError(e.message));
  }
};
