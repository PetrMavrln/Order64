import { IServiceLinkItem } from "../../models/IServiceLinkItem";
import styles from "./styles.module.scss";

export const ServiceLinkItem = ({ service }: { service: IServiceLinkItem }) => {
  return <div className={styles.link}>{service.title}</div>;
};
