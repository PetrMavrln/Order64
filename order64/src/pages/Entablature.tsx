import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { LeftPanel } from "../components/LeftPanel/LeftPanelComponent";
import { RightPanel } from "../components/RightPanel/RightPanel";
import { ThematicBreak } from "../components/ThematicBreak/ThematicBreak";
import styles from "../scss/scss-modules/entablaturePage.module.scss";

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
          <LeftPanel />
          <div className={styles.content}>
            <ThematicBreak />
            Антаблемент
            <ThematicBreak />
          </div>
          <RightPanel />
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Entablature;
