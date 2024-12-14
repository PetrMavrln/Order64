import axios from "axios";
import { IAssortmentItem } from "../../models/IAssortmentItem";
import { IOrderSystem } from "../../pages/models/IOrderSystem";
import { AppDispatch } from "../store";
import { assortmentSlice } from "./AssortmentSlice";
import { orderSystemSlice } from "./OrderSystemSlice";

export const fetchAssortment = () => async (dispatch: AppDispatch) => {
  let url = "https://order164.ru/json/assortment.json";
  // let url = 'http://127.0.0.1:5500/json/assortment.json';
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
  let url = "https://order164.ru/json/orderSystem.json";
  try {
    dispatch(orderSystemSlice.actions.orderSystemFetching());
    const response = await axios.get<IOrderSystem[]>(url);
    dispatch(orderSystemSlice.actions.orderSystemFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(orderSystemSlice.actions.orderSystemFetchingError(e.message));
  }
};
