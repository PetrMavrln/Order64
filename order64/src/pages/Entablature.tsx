import React, { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import styles from "../scss/scss-modules/entablaturePage.module.scss";
import LeftPanelComponent from "../components/LeftPanelComponent";
import ThematicBreakComponent from "../components/ThematicBreakComponent";
import RightPanelComponent from "../components/RightPanelComponent";
import { useLocation } from "react-router-dom";

const Entablature = () => {
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
      <HeaderComponent />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <LeftPanelComponent />
          <div className={styles.content}>
            <ThematicBreakComponent />
            Антаблемент
            <ThematicBreakComponent />
          </div>
          <RightPanelComponent />
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Entablature;
