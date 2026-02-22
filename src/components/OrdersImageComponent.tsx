import { useEffect, useState } from "react";
import { IImage } from "../models/IImage";
import modalStyles from "../scss/scss-modules/modal/modal.module.scss";
import styles from "../scss/scss-modules/ordersImage.module.scss";
import ModalComponent from "./modal/ModalComponent";

const orderImages = import.meta.glob<{ default: string }>("../assets/orders/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const getOrderImageUrl = (filename: string) => {
  const key = Object.keys(orderImages).find((k) => k.endsWith(filename));
  return key ? (orderImages[key] as string) : "";
};

const OrdersImageComponent = ({ img }: { img: IImage }) => {
  const image = getOrderImageUrl(img.img);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
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
