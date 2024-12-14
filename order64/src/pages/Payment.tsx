import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { LeftPanel } from "../components/LeftPanel/LeftPanelComponent";
import { RightPanel } from "../components/RightPanel/RightPanel";
import { ThematicBreak } from "../components/ThematicBreak/ThematicBreak";
import styles from "../scss/scss-modules/paymentPage.module.scss";

const Payment = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
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
            <LeftPanel />
            <main className={styles.content}>
              <ThematicBreak />
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
              <ThematicBreak />
            </main>
            <RightPanel />
          </div>
        </div>
        <FooterComponent />
      </HelmetProvider>
    </>
  );
};

export default Payment;
