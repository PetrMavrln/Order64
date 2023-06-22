import React from 'react';
import logo from '../assets/logo.svg';
import styles from '../scss/css-modules/header.module.css';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';

const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src={logo}
          className={styles.logo}
          alt="ORDER"
          onClick={() => {
            navigate(MAIN_ROUTE);
          }}
        />
        <h1>Архитектурные ордера</h1>
        <div className={styles.contacts}>
          Саратов, 1-ый Проезд строителей 12
          <a href="tel:89085520984" className={styles.phone}>
            Тел: 89085520984
          </a>
          <a href="mailto:order64@mail.ru" className={styles.mail}>
            Почта: order64@mail.ru
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
