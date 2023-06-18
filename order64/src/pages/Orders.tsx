import React, { useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import styles from '../scss/css-modules/ordersPage.module.css';
import FooterComponent from '../components/FooterComponent';
import LeftPanelComponent from '../components/LeftPanelComponent';
import RightPanelComponent from '../components/RightPanelComponent';
import { useLocation } from 'react-router-dom';
import ThematicBreakComponent from '../components/ThematicBreakComponent';

const Orders = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <>
      <HeaderComponent />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <LeftPanelComponent />
          <div className={styles.content}>
            <ThematicBreakComponent />
            Архитектурные ордера и их различие
            <ThematicBreakComponent />
          </div>
          <RightPanelComponent />
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Orders;
