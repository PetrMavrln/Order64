// import axios from "axios";
import assortmentData from "../../data/assortment.json";
import orderSystemData from "../../data/orderSystem.json";
import { IAssortmentItem } from "../../models/IAssortmentItem";
import { IOrderSystem } from "../../pages/models/IOrderSystem";
import { AppDispatch } from "../store";
import { assortmentSlice } from "./AssortmentSlice";
import { orderSystemSlice } from "./OrderSystemSlice";

export const fetchAssortment = () => (dispatch: AppDispatch) => {
  dispatch(assortmentSlice.actions.assortmentFetching());
  dispatch(assortmentSlice.actions.assortmentFetchingSuccess(assortmentData as IAssortmentItem[]));
  // const url = "https://order164.ru/json/assortment.json";
  // try {
  //   dispatch(assortmentSlice.actions.assortmentFetching());
  //   const response = await axios.get<IAssortmentItem[]>(url);
  //   dispatch(assortmentSlice.actions.assortmentFetchingSuccess(response.data));
  // } catch (e: unknown) {
  //   const message = e instanceof Error ? e.message : String(e);
  //   dispatch(assortmentSlice.actions.assortmentFetchingError(message));
  // }
};

// export const fetchOrderPageImgs = () => (dispatch: AppDispatch) => {
//   dispatch(orderPageImgsSlice.actions.orderPageImgsFetching());
//   dispatch(orderPageImgsSlice.actions.orderPageImgsFetchingSuccess(orderPageImgsData));
//   const url = 'https://order164.ru/json/orderPageImgs.json';
//   try {
//     dispatch(orderPageImgsSlice.actions.orderPageImgsFetching());
//     const response = await axios.get<IOrderPageImgs[]>(url);
//     dispatch(orderPageImgsSlice.actions.orderPageImgsFetchingSuccess(response.data));
//   } catch (e: any) {
//     dispatch(orderPageImgsSlice.actions.orderPageImgsFetchingError(e.message));
//   }
// };

export const fetchOrderSystem = () => (dispatch: AppDispatch) => {
  dispatch(orderSystemSlice.actions.orderSystemFetching());
  dispatch(orderSystemSlice.actions.orderSystemFetchingSuccess(orderSystemData as IOrderSystem[]));
  // const url = "https://order164.ru/json/orderSystem.json";
  // try {
  //   dispatch(orderSystemSlice.actions.orderSystemFetching());
  //   const response = await axios.get<IOrderSystem[]>(url);
  //   dispatch(orderSystemSlice.actions.orderSystemFetchingSuccess(response.data));
  // } catch (e: unknown) {
  //   const message = e instanceof Error ? e.message : String(e);
  //   dispatch(orderSystemSlice.actions.orderSystemFetchingError(message));
  // }
};
