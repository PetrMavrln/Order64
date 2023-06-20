import React from 'react';
import { IOrderContacts } from '../models/IOrderContacts';
import styles from '../scss/css-modules/orderContacts.module.css';

const OrderContactsComponent = () => {
  const orderContacts = [
    { id: 0, title: 'Тел. Архитектор: ', number: 89085520984 },
    { id: 1, title: 'Тел. Дизайнер: ', number: 89085520984 },
    { id: 2, title: 'Тел. Художник: ', number: 89085520984 },
    { id: 3, title: 'Тел. Цех: ', number: 89085520984 },
  ];

  return (
    <div>
      <div className={styles.orderContactsHeader}>Проф. контакты</div>
      {orderContacts.map((contact: IOrderContacts) => (
        <div className={styles.contactNumber} key={contact.id}>
          {contact.title}
          {contact.number}
        </div>
      ))}
    </div>
  );
};

export default OrderContactsComponent;
