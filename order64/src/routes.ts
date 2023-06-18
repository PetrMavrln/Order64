import Assortment from './pages/Assortment';
import Entablature from './pages/Entablature';
import Main from './pages/Main';
import Orders from './pages/Orders';
import Payment from './pages/Payment';
import {
  ASSORTMENT_ROUTE,
  ENTABLATURE_ROUTE,
  MAIN_ROUTE,
  ORDERS_ROUTE,
  PAYMENT_ROUTE,
} from './utils/consts';

export const publicRoutes = [
  { path: MAIN_ROUTE, Component: Main },
  { path: ASSORTMENT_ROUTE, Component: Assortment },
  { path: ENTABLATURE_ROUTE, Component: Entablature },
  { path: ORDERS_ROUTE, Component: Orders },
  { path: PAYMENT_ROUTE, Component: Payment },
];
