import { IAssortmentItem } from '../models/IAssortmentItem';
import styles from '../scss/css-modules/modal.module.css';

const ModalComponent = ({
  setIsOpen,
  card,
  index,
}: {
  setIsOpen: any;
  card: IAssortmentItem;
  index: number;
}) => {
  const image = require(`../assets/assortment/${card.img}`);

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}></button>
          <div className={styles.modalContent}>
            <div className={styles.imgContainer}>
              <img src={image} className={styles.img} alt="Рисунок изделия" />
            </div>
            <div className={styles.cardHeader}>
              {card.title} ({index + 1})
            </div>
            <div className={styles.cardPrice}>цена {card.price} р.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
