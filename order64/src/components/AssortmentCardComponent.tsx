import { Suspense, lazy, useEffect, useState } from 'react';
import { IAssortmentItem } from '../models/IAssortmentItem';
import styles from '../scss/css-modules/assortmentCard.module.css';
import modalStyles from '../scss/css-modules/modal/modal.module.css';
import LoadingComponent from './LoadingComponent';
import ModalComponent from './modal/ModalComponent';

const AssortmentCardComponent = ({ card, index }: { card: IAssortmentItem; index: number }) => {
  // 3sd columns ----------------------------------------------------------------
  const LazyCanvasComponent = lazy(() => import('./3d_model/CanvasColumnComponent'));

  const [showModalColumn, setShowModalColumn] = useState(false);

  useEffect(() => {
    showModalColumn && (document.body.style.overflow = 'hidden');
    !showModalColumn && (document.body.style.overflow = 'unset');
  }, [showModalColumn]);

  function stopProp(e: any) {
    e.stopPropagation();
  }
  function show3dMod() {
    setShowModalColumn(true);
  }
  //------------------------------------------------------------------------------

  const image = require(`../assets/assortment/${card.img}`);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    showModal && (document.body.style.overflow = 'hidden');
    !showModal && (document.body.style.overflow = 'unset');
  }, [showModal]);

  return (
    <>
      <div className={styles.cardItem} onClick={() => setShowModal(true)}>
        <h2 className={styles.cardHeader}>{card.title}</h2>
        <div className={styles.imgContainer}>
          <img src={image} className={styles.img} alt="Рисунок изделия" />
          {/* условная отрисовка кнопки "3д модель" если задано имя модели в json*/}
          {typeof card.ModelName === 'string' && card.ModelName.length === 0 ? (
            <></>
          ) : (
            <div
              className={styles.card3dModel}
              onClick={(e) => {
                stopProp(e);
                show3dMod();
              }}
            >
              3д модель
            </div>
          )}
        </div>
        <div className={styles.cardBottomContainer}>
          <div className={styles.cardNumber}>{index + 1}</div>
          <div className={styles.cardPrice}>цена {card.price} р.</div>
        </div>
      </div>
      {showModal && (
        <ModalComponent
          shouldShow={showModal}
          onRequestClose={() => {
            setShowModal((prev) => !prev);
          }}
        >
          <div className={modalStyles.modalWrap}>
            <img src={image} className={modalStyles.modalImg} alt="Рисунок изделия" />
            <h2 className={modalStyles.modalHeader}>{card.title}</h2>
            <div className={modalStyles.modalNumber}>{index + 1}</div>
            <div className={modalStyles.modalPrice}>цена {card.price} р.</div>
            {typeof card.ModelName === 'string' && card.ModelName.length === 0 ? (
              <></>
            ) : (
              <div className={modalStyles.card3dModel} onClick={() => setShowModalColumn(true)}>
                3д модель
              </div>
            )}
          </div>
        </ModalComponent>
      )}
      {/* 3d columns ------------------------------------------------------------------------ */}
      {showModalColumn && (
        <ModalComponent
          shouldShow={showModalColumn}
          onRequestClose={() => {
            setShowModalColumn((prev) => !prev);
          }}
        >
          <Suspense fallback={<LoadingComponent />}>
            <div className={modalStyles.modalBgFix}>
              <LazyCanvasComponent
                position={card.position}
                rotation={card.rotation}
                scale={card.scale}
                name={card.ModelName}
              />
            </div>
          </Suspense>
        </ModalComponent>
      )}
      {/* ------------------------------------------------------------------------------------- */}
    </>
  );
};

export default AssortmentCardComponent;
