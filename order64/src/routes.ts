import { lazy } from 'react';

// import Assortment from './pages/Assortment';
// import Entablature from './pages/Entablature';
// import Main from './pages/Main';
// import Orders from './pages/Orders';
// import Payment from './pages/Payment';
// import Stucco from './pages/Stucco';
import Main from './pages/Main';
import {
  ASSORTMENT_ROUTE,
  ENTABLATURE_ROUTE,
  MAIN_ROUTE,
  ORDERS_ROUTE,
  PAYMENT_ROUTE,
  STUCCO_ROUTE,
  COLONNADE_ROUTE,
} from './utils/consts';

const LazyAssortment = lazy(() => import('./pages/Assortment'));
const LazyEntablature = lazy(() => import('./pages/Entablature'));
const LazyOrders = lazy(() => import('./pages/Orders'));
const LazyPayment = lazy(() => import('./pages/Payment'));
const LazyStucco = lazy(() => import('./pages/Stucco'));
const LazyColonnade = lazy(() => import('./pages/Colonnade'));

// export const publicRoutes = [
//   { path: MAIN_ROUTE, Component: Main },
//   { path: ASSORTMENT_ROUTE, Component: Assortment },
//   { path: ENTABLATURE_ROUTE, Component: Entablature },
//   { path: ORDERS_ROUTE, Component: Orders },
//   { path: PAYMENT_ROUTE, Component: Payment },
//   { path: STUCCO_ROUTE, Component: Stucco },
// ];

export const publicRoutes = [
  { path: MAIN_ROUTE, Component: Main },
  { path: ASSORTMENT_ROUTE, Component: LazyAssortment },
  { path: ENTABLATURE_ROUTE, Component: LazyEntablature },
  { path: ORDERS_ROUTE, Component: LazyOrders },
  { path: PAYMENT_ROUTE, Component: LazyPayment },
  { path: STUCCO_ROUTE, Component: LazyStucco },
  { path: COLONNADE_ROUTE, Component: LazyColonnade },
];
