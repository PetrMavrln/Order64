import React, { useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import styles from '../scss/css-modules/colonnadePage.module.css';
import { useLocation } from 'react-router-dom';
import LeftPanelComponent from '../components/LeftPanelComponent';
import ThematicBreakComponent from '../components/ThematicBreakComponent';
import RightPanelComponent from '../components/RightPanelComponent';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Colonnade = () => {
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
