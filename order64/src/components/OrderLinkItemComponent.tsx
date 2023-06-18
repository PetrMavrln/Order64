import React from 'react';
import { IOrderLink } from '../models/IOrderLink';
import styles from '../scss/css-modules/orderLink.module.css';
import { useNavigate } from 'react-router-dom';

const OrderLinkItemComponent = ({ link }: { link: IOrderLink }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.link}
      onClick={() => {
        navigate(link.route);
      }}>
      {link.title}
    </div>
  );
};

export default OrderLinkItemComponent;
