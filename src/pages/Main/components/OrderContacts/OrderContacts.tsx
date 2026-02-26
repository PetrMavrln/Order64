import { IOrderContacts } from "../../../../models/IOrderContacts";
import styles from "./styles.module.scss";

export const OrderContacts = () => {
  const orderContacts = [
    {
      id: 0,
      title: "Тел. Архитектор: ",
      number: "89085520985",
      name: " - Сергей",
    },
    {
      id: 1,
      title: "Тел. Дизайнер: ",
      number: "89626225577",
      name: " - Ольга",
    },
    {
      id: 2,
      title: "Тел. Художник: ",
      number: "89873343415",
      name: " - Андрей",
    },
    { id: 3, title: "Тел. Цех: ", number: "89085520985", name: " - Сергей" },
  ];

  return (
    <div className={styles.orderContainer}>
      <h2 className={styles.orderContactsHeader}>Проф. контакты</h2>
      <address className={styles.address}>
        {orderContacts.map((contact: IOrderContacts) => (
          <a
            href={`tel: ${contact.number}`}
            className={styles.contactNumber}
            key={contact.id}
          >
            {contact.title}
            {contact.number}
            {contact.name}
          </a>
        ))}
      </address>
    </div>
  );
};
