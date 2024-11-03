import React, { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import styles from "../scss/scss-modules/colonnadePage.module.scss";
import { useLocation } from "react-router-dom";
import LeftPanelComponent from "../components/LeftPanelComponent";
import ThematicBreakComponent from "../components/ThematicBreakComponent";
import RightPanelComponent from "../components/RightPanelComponent";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import img1 from "../assets/colonnade/1.jpg";
import img2 from "../assets/colonnade/2.jpg";
import img3 from "../assets/colonnade/3.jpg";
import img4 from "../assets/colonnade/4.jpg";
import img5 from "../assets/colonnade/5.jpg";
import img6 from "../assets/colonnade/6.jpg";
import img7 from "../assets/colonnade/7.jpg";
import img9 from "../assets/colonnade/9.jpg";
import img10 from "../assets/colonnade/10.jpg";
import img11 from "../assets/colonnade/11.jpg";
import img12 from "../assets/colonnade/12.jpg";
import img13 from "../assets/colonnade/13.jpg";

const Colonnade = () => {
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
            <LeftPanelComponent />
            <main className={styles.content}>
              <ThematicBreakComponent />
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
              <ThematicBreakComponent />
              <div className={styles.carousel}>
                <h2 className={styles.header}>
                  Примеры работ и лучшие аналоги мировой архитектуры
                </h2>
                <Swiper
                  cssMode={true}
                  navigation={true}
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  className={styles.mySwiper}
                >
                  <SwiperSlide className={styles.swiperSlide}>
                    <img
                      className={styles.exmplImg}
                      src={img1}
                      alt="колоннада №1"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <img
                      className={styles.exmplImg}
                      src={img2}
                      alt="колоннада №2"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <img
                      className={styles.exmplImg}
                      src={img3}
                      alt="колоннада №3"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <img
                      className={styles.exmplImg}
                      src={img4}
                      alt="колоннада №4"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <img
                      className={styles.exmplImg}
                      src={img5}
                      alt="колоннада №5"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <img
                      className={styles.exmplImg}
                      src={img6}
                      alt="колоннада №6"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <img
                      className={styles.exmplImg}
                      src={img7}
                      alt="колоннада №7"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <img
                      className={styles.exmplImg}
                      src={img9}
                      alt="колоннада №9"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <img
                      className={styles.exmplImg}
                      src={img10}
                      alt="колоннада №10"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <img
                      className={styles.exmplImg}
                      src={img11}
                      alt="колоннада №11"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <img
                      className={styles.exmplImg}
                      src={img12}
                      alt="колоннада №12"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <img
                      className={styles.exmplImg}
                      src={img13}
                      alt="колоннада №13"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                </Swiper>
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

export default Colonnade;
