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
          <meta
            name="keywords"
            content="искусство, гипсовые, панно, бюст, рельеф, барельеф, композиция, проект, дизайн, камин"
          />
          <meta name="description" content="Ассортимент колонн и цены" />
        </Helmet>
        <HeaderComponent />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <LeftPanelComponent />
            <main className={styles.content}>
              <ThematicBreakComponent />
              <h2 className={styles.header}>Ассортимент колонн и цены.</h2>
              <div className={styles.description}>
                Для Ваших интерьеров мы изготавливаем колонны исключительно из экологически чистого,
                безопасного и особо крепкого гипса (марки г16). В производстве не используются
                синтетические материалы, которые выделяют вредные вещества, наносящие вред здоровью
                человека. Для экстерьеров предлагаем изделия из материалов, устойчивым к агрессвным
                средам: литьевой камень, стеклофибробетон, полимеры.
                <div className={styles.underline}>Возможна коррекция габаритов.</div>
                <ol>
                  <li>
                    <b>Архитектурный Энтазис</b> аутентичен, красив и оживляет колонны. Прямой ствол
                    в свою очередь обедняет и приводит к не привлекательному виду.
                  </li>
                </ol>
                <div className={styles.par}>
                  Энта́зис (энтасис, от др.-греч. ἔντασις — напряжение) — плавное изменение диаметра
                  сечения колонны, небольшое утолщение на одной трети высоты снизу, примерно на
                  уровне роста человека. Разновидность курватуры. Применялся главным образом в
                  дорическом ордере классической архитектуры для создания зрительного эффекта
                  напряжённости и устранения иллюзии вогнутости ствола колонны (фуста). Издали
                  энтазис придает колонне более пластичный вид и выражает как бы сопротивление
                  тяжести антаблемента. Энтазис имеет только зрительное, пластическое значение. На
                  самом деле он не несёт конструктивного смысла, поскольку с точки зрения
                  сопротивления тяжести оптимальной является вогнутая форма колонны. Энтазис помимо
                  функции зрительной коррекции восприятия является одним из основных художественных
                  тропов, зримых метафор, используемых в классической ордерной архитектуре.
                </div>
                <div className={styles.par}>
                  Курвату́ра (от лат. curvatura — кривизна) — собирательное обозначение различных
                  приёмов архитектурной композиции, заключающихся в намеренном отступлении от
                  строгой симметрии, геометрических форм, прямых линий и плоскостей
                </div>
              </div>
              <AssortmentCardsComponent />
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

export default Assortment;
