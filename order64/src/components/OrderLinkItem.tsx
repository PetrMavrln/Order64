import React from 'react';
import { IOrderLink } from '../models/IOrderLink';
import styles from '../scss/css-modules/orderLink.module.css';

const OrderLinkItem = ({ link }: { link: IOrderLink }) => {
  return <div className={styles.link}>{link.title}</div>;
};

export default OrderLinkItem;
