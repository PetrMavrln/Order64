import { IImage } from '../models/IImage';
import styles from '../scss/css-modules/ordersImage.module.css';

const OrdersImageComponent = ({ img }: { img: IImage }) => {
  const image = require(`../assets/orders/${img.img}`);

  return (
    <div className={styles.imageCont}>
      <img src={image} className={styles.image} alt={img.alt} />
    </div>
  );
};

export default OrdersImageComponent;
