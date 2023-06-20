import React, { useState } from 'react';
import styles from '../scss/css-modules/assortmentCard.module.css';
import { IAssortmentItem } from '../models/IAssortmentItem';
import ModalComponent from './ModalComponent';

const AssortmentCardComponent = ({ card }: { card: IAssortmentItem }) => {
  const image = require(`../assets/assortment/${card.img}`);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.cardItem} onClick={() => setIsOpen(true)}>
        <div className={styles.cardHeader}>{card.title}</div>
        <div className={styles.imgContainer}>
          <img src={image} className={styles.img} alt="Рисунок изделия" />
        </div>
        <div className={styles.cardPrice}>цена {card.price} р.</div>
      </div>
      {isOpen && <ModalComponent setIsOpen={setIsOpen} card={card} />}
    </>
  );
};

export default AssortmentCardComponent;
