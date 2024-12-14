import { OrderLinkItem } from "./OrderLinkItem/OrderLinkItem";
import styles from "./styles.module.scss";

export const OrderLinks = () => {
  const orderLinks = [
    { id: 0, title: "Архитектурные ордера и их различие", route: "/orders" },
    // { id: 1, title: 'Антаблемент', route: '/entablature' },
    { id: 1, title: "Ассортимент колонн и цены", route: "/assortment" },
    { id: 2, title: "Колоннады под заказ", route: "/colonnade" },
    { id: 3, title: "Лепнина интерьерная", route: "/stucco" },
    { id: 4, title: "Услуги скульпторов, художников и реставраторов", route: "/services" },
    { id: 5, title: "Доставка, оплата", route: "/payment" },
  ];

  return (
    <nav className={styles.orderLinks}>
      {orderLinks.map((link) => (
        <OrderLinkItem key={link.id} link={link} />
      ))}
    </nav>
  );
};
