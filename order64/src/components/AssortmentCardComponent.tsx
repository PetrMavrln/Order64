import { useEffect, useState } from 'react';
import { IAssortmentItem } from '../models/IAssortmentItem';
import styles from '../scss/css-modules/assortmentCard.module.css';
import modalStyles from '../scss/css-modules/modal/modal.module.css';
import ModalComponent from './modal/ModalComponent';

const AssortmentCardComponent = ({ card, index }: { card: IAssortmentItem; index: number }) => {
  const image = require(`../assets/assortment/${card.img}`);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    showModal && (document.body.style.overflow = 'hidden');
    !showModal && (document.body.style.overflow = 'unset');
  }, [showModal]);

  return (
    <>
      <div className={styles.cardItem} onClick={() => setShowModal(true)}>
        <div className={styles.cardHeader}>{card.title}</div>
        <div className={styles.imgContainer}>
          <img src={image} className={styles.img} alt="Рисунок изделия" />
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
          }}>
          <div className={modalStyles.modalWrap}>
            <img src={image} className={modalStyles.modalImg} alt="Рисунок изделия" />
            <div className={modalStyles.modalHeader}>{card.title}</div>
            <div className={modalStyles.modalNumber}>{index + 1}</div>
            <div className={modalStyles.modalPrice}>цена {card.price} р.</div>
          </div>
        </ModalComponent>
      )}
    </>
  );
};

export default AssortmentCardComponent;
