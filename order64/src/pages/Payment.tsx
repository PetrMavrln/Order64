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
          <meta
            name="keywords"
            content="скульптор, дизайнер, архитектор, живопись, отделка, ремонт, реставрация, памятник, мастер, студия"
          />
          <meta name="description" content="Доставка, оплата" />
        </Helmet>
        <HeaderComponent />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <LeftPanelComponent />
            <main className={styles.content}>
              <ThematicBreakComponent />
              <div className={styles.main}>
                <h2 className={styles.header}>Доставка, оплата</h2>
                <ol>
                  <li>Доставка нашим транспортом и транспортными компаниями.</li>
                  <li>Оплата наличным и безналичным расчётом.</li>
                </ol>
                <address className={styles.address}>
                  <a href="tel:89085520985" className={styles.phone}>
                    По всем вопросам - Сергей: 89085520985
                  </a>
                </address>
              </div>
              <ThematicBreakComponent />
            </main>
            <RightPanelComponent />
          </div>
        </div>
        <FooterComponent />
      </HelmetProvider>
    </>
  );
};

export default Payment;
