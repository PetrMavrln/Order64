import React, { useEffect, useState } from 'react';
import styles from '../scss/css-modules/assortmentCard.module.css';
import { IAssortmentItem } from '../models/IAssortmentItem';
import ModalComponent from './ModalComponent';

const AssortmentCardComponent = ({ card, index }: { card: IAssortmentItem; index: number }) => {
  const image = require(`../assets/assortment/${card.img}`);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen && (document.body.style.overflow = 'hidden');
    !isOpen && (document.body.style.overflow = 'unset');
  }, [isOpen]);

  return (
    <>
      <div className={styles.cardItem} onClick={() => setIsOpen(true)}>
        <div className={styles.cardHeader}>{card.title}</div>
        <div className={styles.imgContainer}>
          <img src={image} className={styles.img} alt="Рисунок изделия" />
        </div>
        <div className={styles.cardBottomContainer}>
          <div className={styles.cardNumber}>{index + 1}</div>
          <div className={styles.cardPrice}>цена {card.price} р.</div>
        </div>
      </div>
      {isOpen && <ModalComponent setIsOpen={setIsOpen} card={card} index={index} />}
    </>
  );
};

export default AssortmentCardComponent;
