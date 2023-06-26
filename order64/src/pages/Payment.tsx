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
              <div className={styles.main}>
                <div className={styles.header}>Доставка, оплата</div>
                <ol>
                  <li>Доставка нашим транспортом и транспортными компаниями.</li>
                  <li>Оплата наличным и безналичным расчётом.</li>
                </ol>
                <a href="tel:89085520985" className={styles.phone}>
                  Сергей: 89085520985
                </a>
              </div>
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
