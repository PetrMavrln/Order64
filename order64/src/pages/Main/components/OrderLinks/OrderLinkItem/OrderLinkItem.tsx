import { useNavigate } from "react-router-dom";
import { IOrderLink } from "../../../../models/IOrderLink";
import styles from "./styles.module.scss";

export const OrderLinkItem = ({ link }: { link: IOrderLink }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.link}
      onClick={() => {
        navigate(link.route);
      }}
    >
      {link.title}
    </div>
  );
};
