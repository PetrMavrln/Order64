import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import LeftPanelComponent from '../components/LeftPanelComponent';
import ThematicBreakComponent from '../components/ThematicBreakComponent';
import RightPanelComponent from '../components/RightPanelComponent';
import FooterComponent from '../components/FooterComponent';
import styles from '../scss/css-modules/stuccoPage.module.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Stucco = () => {
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
          <title>Лепнина интерьерная</title>
          <meta name="description" content="Лепнина интерьерная" />
        </Helmet>
        <HeaderComponent />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <LeftPanelComponent />
            <div className={styles.content}>
              <ThematicBreakComponent />
              <div className={styles.header}>Лепнина интерьерная</div>
              <div className={styles.linkDiv}>
                Подробнее по
                <a
                  className={styles.link}
                  href="https://order64.ru/"
                  target="_blank"
                  rel="noreferrer">
                  ссылке
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

export default Stucco;
