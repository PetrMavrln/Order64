import React, { useEffect } from 'react';
import PComponent from './PComponent';
import styles from '../scss/css-modules/orderSystemThesis.module.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchOrderSystem } from '../store/reducers/ActionCreators';

const OrderSystemThesisBlockComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrderSystem());
  }, []);

  const { orderSystem, isLoading } = useAppSelector((state) => state.orderSystemReducer);

  return (
    <div>
      <h2 className={styles.header}>Ордерная система - главное наследие античности</h2>
      <PComponent order={orderSystem[0]} />
      <div className={styles.paragraph}>
        Давайте посмотрим, как ордер помогает нам воспринимать здание.
      </div>
      <PComponent order={orderSystem[1]} />
      <PComponent order={orderSystem[2]} />
      <PComponent order={orderSystem[3]} />
      <div className={styles.paragraph}>
        ст. Дмитрий Беззубцев <br />
        Историк архитектуры.
      </div>
    </div>
  );
};

export default OrderSystemThesisBlockComponent;
