import React from 'react';
import styles from '../scss/css-modules/orderLinks.module.css';
import OrderLinkItemComponent from './OrderLinkItemComponent';

const OrderLinksComponent = () => {
  const orderLinks = [
    { id: 0, title: 'Архитектурные ордера и их различие', route: '/orders' },
    { id: 1, title: 'Антаблемент', route: '/entablature' },
    { id: 2, title: 'Ассортимент колонн и цены.', route: '/assortment' },
    { id: 3, title: 'Доставка, оплата.', route: '/payment' },
  ];

  return (
    <div className={styles.orderLinks}>
      {orderLinks.map((link) => (
        <OrderLinkItemComponent key={link.id} link={link} />
      ))}
    </div>
  );
};

export default OrderLinksComponent;
