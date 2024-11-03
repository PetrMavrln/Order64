import { useNavigate } from "react-router-dom";
import styles from "../scss/scss-modules/header.module.scss";
import modalStyles from "../scss/scss-modules/modal/modal.module.scss";
import { MAIN_ROUTE } from "../utils/consts";

import { Suspense, lazy, useEffect, useState } from "react";
import lion1 from "../assets/Lion1.png";
import lion2 from "../assets/Lion2.png";
import logo from "../assets/logo.svg";

import LoadingComponent from "./LoadingComponent";
import ModalComponent from "./modal/ModalComponent";

const HeaderComponent = () => {
  const LazyCanvasComponent = lazy(() => import("./3d_model/CanvasComponent"));

  const navigate = useNavigate();

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  useEffect(() => {
    showModal1 && (document.body.style.overflow = "hidden");
    !showModal1 && (document.body.style.overflow = "unset");
  }, [showModal1]);

  useEffect(() => {
    showModal2 && (document.body.style.overflow = "hidden");
    !showModal2 && (document.body.style.overflow = "unset");
  }, [showModal2]);

  const lions = [
    {
      position: [0.013, 0.062, -0.002],
      rotation: [Math.PI / 2, 0, -2.2],
      scale: 0.045,
      name: "lion1-sandstone-transformed",
    },
    {
      position: [-0.009, 0.068, 0.009],
      rotation: [Math.PI / 2, 0, -4.422],
      scale: 0.045,
      name: "lion2-sandstone-transformed",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src={logo}
          className={styles.logo}
          alt="ORDER"
          onClick={() => {
            navigate(MAIN_ROUTE);
          }}
        />
        <img src={lion1} className={styles.lion1} alt="Lion" onClick={() => setShowModal1(true)} />
        <img src={lion2} className={styles.lion2} alt="Lion" onClick={() => setShowModal2(true)} />
        <address className={styles.contacts}>
          Саратов, 1-ый Проезд строителей 12
          <a href="tel:89085520984" className={styles.phone}>
            Тел: 89085520985
          </a>
          <a href="mailto:order64@mail.ru" className={styles.mail}>
            Почта: order64@mail.ru
          </a>
        </address>
      </div>
      {showModal2 && (
        <ModalComponent
          shouldShow={showModal2}
          onRequestClose={() => {
            setShowModal2((prev) => !prev);
          }}
        >
          <Suspense fallback={<LoadingComponent />}>
            <div className={modalStyles.modalBgFix}>
              <LazyCanvasComponent
                position={lions[1].position}
                rotation={lions[1].rotation}
                scale={lions[1].scale}
                name={lions[1].name}
              />
            </div>
          </Suspense>
        </ModalComponent>
      )}
      {showModal1 && (
        <ModalComponent
          shouldShow={showModal1}
          onRequestClose={() => {
            setShowModal1((prev) => !prev);
          }}
        >
          <Suspense fallback={<LoadingComponent />}>
            <div className={modalStyles.modalBgFix}>
              <LazyCanvasComponent
                position={lions[0].position}
                rotation={lions[0].rotation}
                scale={lions[0].scale}
                name={lions[0].name}
              />
            </div>
          </Suspense>
        </ModalComponent>
      )}
    </div>
  );
};

export default HeaderComponent;
