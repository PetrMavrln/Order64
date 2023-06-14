import React from 'react';
import logo from '../assets/logo.svg';
import styles from '../scss/css-modules/header.module.css';

const HeaderComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={logo} alt="ORDER" />
        <h1>Архитектурные ордера</h1>
        <div className={styles.contacts}>
          Саратов, 1-ый Проезд строителей 12. <br /> Тел: 89085520984 <br /> Почта: order64@mail.ru
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
