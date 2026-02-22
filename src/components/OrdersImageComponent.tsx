import { useEffect, useState } from "react";
import { IImage } from "../models/IImage";
import modalStyles from "../scss/scss-modules/modal/modal.module.scss";
import styles from "../scss/scss-modules/ordersImage.module.scss";
import ModalComponent from "./modal/ModalComponent";

const OrdersImageComponent = ({ img }: { img: IImage }) => {
  const image = require(`../assets/orders/${img.img}`);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    showModal && (document.body.style.overflow = "hidden");
    !showModal && (document.body.style.overflow = "unset");
  }, [showModal]);

  return (
    <>
      <div className={styles.imageCont} onClick={() => setShowModal(true)}>
        <img src={image} className={styles.image} alt={img.alt} />
      </div>
      {showModal && (
        <ModalComponent
          shouldShow={showModal}
          onRequestClose={() => {
            setShowModal((prev) => !prev);
          }}
        >
          <img src={image} className={modalStyles.modalImg} alt="Рисунок изделия" />
        </ModalComponent>
      )}
    </>
  );
};

export default OrdersImageComponent;
