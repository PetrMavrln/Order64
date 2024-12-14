import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { LeftPanel } from "../components/LeftPanel/LeftPanelComponent";
import { RightPanel } from "../components/RightPanel/RightPanel";
import { ThematicBreak } from "../components/ThematicBreak/ThematicBreak";
import styles from "../scss/scss-modules/stuccoPage.module.scss";

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
            <LeftPanel />
            <main className={styles.content}>
              <ThematicBreak />
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

export default Stucco;
