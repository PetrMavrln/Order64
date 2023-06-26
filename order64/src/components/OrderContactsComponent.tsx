import React from 'react';
import { IOrderContacts } from '../models/IOrderContacts';
import styles from '../scss/css-modules/orderContacts.module.css';

const OrderContactsComponent = () => {
  const orderContacts = [
    { id: 0, title: 'Тел. Архитектор: ', number: '111' },
    { id: 1, title: 'Тел. Дизайнер: ', number: '111' },
    { id: 2, title: 'Тел. Художник: ', number: '89873343415' },
    { id: 3, title: 'Тел. Цех: ', number: '89878033963' },
  ];

  return (
    <div className={styles.orderContainer}>
      <div className={styles.orderContactsHeader}>Проф. контакты</div>
      {orderContacts.map((contact: IOrderContacts) => (
        <a href={`tel: ${contact.number}`} className={styles.contactNumber} key={contact.id}>
          {contact.title}
          {contact.number}
        </a>
      ))}
    </div>
  );
};
export default OrderContactsComponent;
