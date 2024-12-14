import { IOrderSystem } from "../../../../models/IOrderSystem";
import styles from "./styles.module.scss";

export const PComponent = ({ order }: { order: IOrderSystem }) => {
  return (
    <div className={styles.paragraph}>
      <div className={styles.bold}>{order?.title}</div>
      {order?.text}
    </div>
  );
};
