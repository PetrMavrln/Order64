import React from 'react';
import styles from '../scss/css-modules/p.module.css';
import { IOrder } from '../models/IOrder';

const PComponent = ({ order }: { order: IOrder }) => {
  return (
    <div className={styles.paragraph}>
      <div className={styles.bold}>{order.title}</div>
      {order.text}
    </div>
  );
};

export default PComponent;
