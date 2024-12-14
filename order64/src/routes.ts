import { lazy } from "react";
import { Main } from "./pages/Main/Main";
import {
  ASSORTMENT_ROUTE,
  COLONNADE_ROUTE,
  ENTABLATURE_ROUTE,
  MAIN_ROUTE,
  ORDERS_ROUTE,
  PAYMENT_ROUTE,
  SCULPTORSSERVICES,
  STUCCO_ROUTE,
} from "./utils/consts";

const LazyAssortment = lazy(() => import("./pages/Assortment"));
const LazyEntablature = lazy(() => import("./pages/Entablature"));
const LazyOrders = lazy(() => import("./pages/Orders"));
const LazyPayment = lazy(() => import("./pages/Payment"));
const LazyStucco = lazy(() => import("./pages/Stucco"));
const LazyColonnade = lazy(() => import("./pages/Colonnade/Colonnade"));
const LazySculptorsServices = lazy(() =>
  import("./pages/Services/Services").then((module) => ({
    default: module.Services,
  })),
);

export const publicRoutes = [
  { path: MAIN_ROUTE, Component: Main },
  { path: ASSORTMENT_ROUTE, Component: LazyAssortment },
  { path: ENTABLATURE_ROUTE, Component: LazyEntablature },
  { path: ORDERS_ROUTE, Component: LazyOrders },
  { path: PAYMENT_ROUTE, Component: LazyPayment },
  { path: STUCCO_ROUTE, Component: LazyStucco },
  { path: COLONNADE_ROUTE, Component: LazyColonnade },
  { path: SCULPTORSSERVICES, Component: LazySculptorsServices },
];
