import { Helmet, HelmetProvider } from "react-helmet-async";
import img1 from "../../assets/services/1.png";
import img2 from "../../assets/services/2.png";
import img3 from "../../assets/services/3.png";
import img4 from "../../assets/services/4.png";
import img5 from "../../assets/services/5.png";
import img6 from "../../assets/services/6.png";
import { Carousel } from "../../components/Carousel/Carousel";
import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { LeftPanel } from "../../components/LeftPanel/LeftPanelComponent";
import { RightPanel } from "../../components/RightPanel/RightPanel";
import { ThematicBreak } from "../../components/ThematicBreak/ThematicBreak";
import { ServiceLinkItem } from "./ServiceLinkItem/ServiceLinkItem";
import styles from "./styles.module.scss";

export const Services = () => {
  const examplesImgs = [
    { src: img1, alt: "Пример работы №1" },
    { src: img2, alt: "Пример работы №2" },
    { src: img3, alt: "Пример работы №3" },
    { src: img4, alt: "Пример работы №4" },
    { src: img5, alt: "Пример работы №5" },
    { src: img6, alt: "Пример работы №6" },
  ];

  const services = [
    { id: 0, title: "Скульптура" },
    { id: 1, title: "Бюст" },
    { id: 2, title: "Рельеф, барельеф" },
    { id: 3, title: "Камины" },
    { id: 4, title: "Декоративные покрытия" },
    { id: 5, title: "Тонировка, серебрение и золочение лепного декора" },
    { id: 6, title: "Лепное панно" },
    { id: 7, title: "Имитация камня" },
    { id: 8, title: "3D панели под заказ " },
  ];

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Услуги скульпторов, художников и реставраторов</title>
          <meta
            name="keywords"
            content="ордер, скульптор,художник, реставратор, услуги, скульптура, заказ, услуга, реставрация"
          />
          <meta name="description" content="Услуги скульпторов, художников и реставраторов" />
        </Helmet>
        <HeaderComponent />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <LeftPanel />
            <main className={styles.content}>
              <ThematicBreak />
              <nav className={styles.servicesLinks}>
                {services.map((service) => (
                  <ServiceLinkItem service={service} key={service.id} />
                ))}
              </nav>
              <ThematicBreak />
              <Carousel title="Примеры работ" imgs={examplesImgs} />
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
