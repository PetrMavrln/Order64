import React from 'react';
import styles from '../scss/css-modules/orderLinks.module.css';
import OrderLinkItemComponent from './OrderLinkItemComponent';

const OrderLinksComponent = () => {
  const orderLinks = [
    { id: 0, title: 'Архитектурные ордера и их различие', route: '/orders' },
    // { id: 1, title: 'Антаблемент', route: '/entablature' },
    { id: 1, title: 'Ассортимент колонн и цены', route: '/assortment' },
    { id: 2, title: 'Колоннады под заказ', route: '/colonnade' },
    { id: 3, title: 'Лепнина интерьерная', route: '/stucco' },
    { id: 4, title: 'Доставка, оплата', route: '/payment' },
  ];

  return (
    <nav className={styles.orderLinks}>
      {orderLinks.map((link) => (
        <OrderLinkItemComponent key={link.id} link={link} />
      ))}
    </nav>
  );
};

export default OrderLinksComponent;
