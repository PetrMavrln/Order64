import React from 'react';
import styles from '../scss/css-modules/modal.module.css';
import { RiCloseLine } from 'react-icons/ri';
import { IAssortmentItem } from '../models/IAssortmentItem';

const ModalComponent = ({ setIsOpen, card }: { setIsOpen: any; card: IAssortmentItem }) => {
  const image = require(`../assets/assortment/${card.img}`);

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.imgContainer}>
              <img src={image} className={styles.img} alt="Рисунок изделия" />
            </div>
            <div className={styles.cardHeader}>{card.title}</div>
            <div className={styles.cardPrice}>цена {card.price} р.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
