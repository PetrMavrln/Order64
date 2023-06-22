import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import AssortmentCardsComponent from '../components/AssortmentCardsComponent';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import LeftPanelComponent from '../components/LeftPanelComponent';
import RightPanelComponent from '../components/RightPanelComponent';
import ThematicBreakComponent from '../components/ThematicBreakComponent';
import styles from '../scss/css-modules/assortmentPage.module.css';

const Assortment = () => {
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
          <title>Ассортимент колонн и цены</title>
          <meta name="description" content="Ассортимент колонн и цены" />
        </Helmet>
        <HeaderComponent />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <LeftPanelComponent />
            <div className={styles.content}>
              <ThematicBreakComponent />
              <div className={styles.header}>Ассортимент колонн и цены.</div>
              <AssortmentCardsComponent />
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

export default Assortment;
