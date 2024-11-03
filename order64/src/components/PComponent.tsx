import React from "react";
import styles from "../scss/scss-modules/p.module.scss";
import { IOrderSystem } from "../models/IOrderSystem";

const PComponent = ({ order }: { order: IOrderSystem }) => {
  return (
    <div className={styles.paragraph}>
      <div className={styles.bold}>{order?.title}</div>
      {order?.text}
    </div>
  );
};

export default PComponent;
