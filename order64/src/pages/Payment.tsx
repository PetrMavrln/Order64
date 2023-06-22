import React, { useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import styles from '../scss/css-modules/paymentPage.module.css';
import { useLocation } from 'react-router-dom';
import LeftPanelComponent from '../components/LeftPanelComponent';
import ThematicBreakComponent from '../components/ThematicBreakComponent';
import RightPanelComponent from '../components/RightPanelComponent';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Payment = () => {
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
      <HelmetProvider>
        <Helmet>
          <title>Доставка, оплата</title>
          <meta name="description" content="Доставка, оплата" />
        </Helmet>
        <HeaderComponent />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <LeftPanelComponent />
            <div className={styles.content}>
              <ThematicBreakComponent />
              Доставка, оплата
              <ThematicBreakComponent />
            </div>
            <RightPanelComponent />
          </div>
        </div>
        <FooterComponent />
      </HelmetProvider>
    </>
  );
};

export default Payment;
