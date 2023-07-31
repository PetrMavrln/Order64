import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../scss/css-modules/header.module.css';
import modalStyles from '../scss/css-modules/modal/modal.module.css';
import { MAIN_ROUTE } from '../utils/consts';

import { Suspense, lazy, useEffect, useState } from 'react';
import lion1 from '../assets/Lion1.png';
import lion2 from '../assets/Lion2.png';
import logo from '../assets/logo.svg';
// import CanvasComponent from './3d_model/CanvasComponent';
import ModalComponent from './modal/ModalComponent';
import LoadingComponent from './LoadingComponent';

const HeaderComponent = () => {
  const LazyCanvasComponent = lazy(() => import('./3d_model/CanvasComponent'));

  const navigate = useNavigate();
  const location = useLocation();

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  useEffect(() => {
    showModal1 && (document.body.style.overflow = 'hidden');
    !showModal1 && (document.body.style.overflow = 'unset');
  }, [showModal1]);

  useEffect(() => {
    showModal2 && (document.body.style.overflow = 'hidden');
    !showModal2 && (document.body.style.overflow = 'unset');
  }, [showModal2]);

  const lions = [
    {
      position: [0.013, 0.062, -0.002],
      rotation: [Math.PI / 2, 0, -2.2],
      scale: 0.045,
      name: 'lion1-sandstone-transformed',
    },
    {
      position: [-0.009, 0.068, 0.009],
      rotation: [Math.PI / 2, 0, -4.422],
      scale: 0.045,
      name: 'lion2-sandstone-transformed',
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
        {location.pathname === MAIN_ROUTE ? <h1>Архитектурные ордера</h1> : <h2> </h2>}
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
          }}>
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
          }}>
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
