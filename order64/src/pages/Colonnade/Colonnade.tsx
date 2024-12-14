import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../assets/colonnade/1.jpg";
import img10 from "../../assets/colonnade/10.jpg";
import img11 from "../../assets/colonnade/11.jpg";
import img12 from "../../assets/colonnade/12.jpg";
import img13 from "../../assets/colonnade/13.jpg";
import img2 from "../../assets/colonnade/2.jpg";
import img3 from "../../assets/colonnade/3.jpg";
import img4 from "../../assets/colonnade/4.jpg";
import img5 from "../../assets/colonnade/5.jpg";
import img6 from "../../assets/colonnade/6.jpg";
import img7 from "../../assets/colonnade/7.jpg";
import img9 from "../../assets/colonnade/9.jpg";
import exampleModel1 from "../../assets/colonnade/models/1.jpg";
import exampleModel2 from "../../assets/colonnade/models/2.jpg";
import exampleModel3 from "../../assets/colonnade/models/3.jpg";
import { Carousel } from "../../components/Carousel/Carousel";
import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { LeftPanel } from "../../components/LeftPanel/LeftPanelComponent";
import { RightPanel } from "../../components/RightPanel/RightPanel";
import { ThematicBreak } from "../../components/ThematicBreak/ThematicBreak";
import styles from "./styles.module.scss";

const Colonnade = () => {
  const { pathname } = useLocation();

  const examplesImgs = [
    { src: img1, alt: "колоннада №1" },
    { src: img2, alt: "колоннада №2" },
    { src: img3, alt: "колоннада №3" },
    { src: img4, alt: "колоннада №4" },
    { src: img5, alt: "колоннада №5" },
    { src: img6, alt: "колоннада №6" },
    { src: img7, alt: "колоннада №7" },
    { src: img9, alt: "колоннада №9" },
    { src: img10, alt: "колоннада №10" },
    { src: img11, alt: "колоннада №11" },
    { src: img12, alt: "колоннада №12" },
    { src: img13, alt: "колоннада №13" },
  ];

  const modelsImgs = [
    { src: exampleModel1, alt: "колоннада №1" },
    { src: exampleModel2, alt: "колоннада №1" },
    { src: exampleModel3, alt: "колоннада №1" },
  ];

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
          <title>Колоннады под заказ</title>
          <meta
            name="keywords"
            content="колоннада, колоннады, скульптор, дизайнер, архитектор, живопись, отделка, ремонт, реставрация, памятник, мастер, студия"
          />
          <meta name="description" content="Колоннады под заказ" />
        </Helmet>
        <HeaderComponent />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <LeftPanel />
            <main className={styles.content}>
              <ThematicBreak />
              <div className={styles.main}>
                <h2 className={styles.header}>Колоннады под заказ</h2>
                <ol>
                  <li>
                    Создание колоннад и архитектурных ансамблей под заказ. Ручная работа от мастеров
                    своего дела
                  </li>
                  <li>
                    Коррекция габаритов и соблюдение пропорций по проекту от Вашего архитектора.
                  </li>
                  <li>Изготовление, упаковка и отправка.</li>
                </ol>
                <p className={styles.p}>В наличии колоннада коринфского ордера из сфб.</p>
                <p className={styles.p}>
                  Габариты:
                  <br /> Высота без ваз: 5000 мм. (с вазами по краям антаблемента: 5900 мм.)
                  <br />
                  Количество колонн: 19 шт. <br />
                  Радиус по центральной оси: 11100 мм. <br /> Общая длинна колоннады по центральной
                  оси: 25080 мм. Пьедестал: ширина: 1200 мм. высота: 420 мм. <br />
                  Антаблемент: 900 мм.высота, ширина по верхней части 900 мм.
                </p>
                <p className={styles.p}>
                  Цена: Под покраску <b className={styles.b}>9600000 р</b>. <br />
                  Натуральный эффект <b className={styles.b}>12000000 р</b>.
                </p>
              </div>
              <ThematicBreak />
              <Carousel title="Модели колоннад" imgs={modelsImgs} />
              <ThematicBreak />
              <Carousel
                title="Примеры работ и лучшие аналоги мировой архитектуры"
                imgs={examplesImgs}
              />
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

export default Colonnade;
