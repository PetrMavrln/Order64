import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import LeftPanelComponent from "../components/LeftPanelComponent";
import ThematicBreakComponent from "../components/ThematicBreakComponent";
import RightPanelComponent from "../components/RightPanelComponent";
import FooterComponent from "../components/FooterComponent";
import styles from "../scss/scss-modules/stuccoPage.module.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Stucco = () => {
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
          <title>Лепнина интерьерная</title>
          <meta name="description" content="Лепнина интерьерная" />
        </Helmet>
        <HeaderComponent />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <LeftPanelComponent />
            <main className={styles.content}>
              <ThematicBreakComponent />
              <div className={styles.main}>
                <h2 className={styles.header}>Лепнина интерьерная</h2>
                <ol>
                  <li>
                    Пройдя по ссылке ниже Вы можете ознакомиться с подборкой лепнины уже в
                    завершенных интерьерах (портфолио). Мы создали комплекты для оформления
                    помещений во всех основных стилях.
                  </li>
                  <li>
                    Так же увидите разнообразие потолочных розеток, карнизов и молдингов. По запросу
                    предоставим множество зеркал, авторских светильников и стеновых панно.
                  </li>
                </ol>
                <div className={styles.linkDiv}>
                  Подробнее по
                  <a
                    className={styles.link}
                    href="https://order64.ru/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ссылке
                  </a>
                </div>
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

export default Stucco;
