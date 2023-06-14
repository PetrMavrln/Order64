import React from 'react';
import styles from '../scss/css-modules/mainContent.module.css';
import leftPanelImg from '../assets/leftPanel.png';
import rightPanelImg from '../assets/rightPanel.png';
import ThematicBreakComponent from './ThematicBreakComponent';
import PComponent from './PComponent';
import OrderLinkItem from './OrderLinkItem';
import { IOrderContacts } from '../models/IOrderContacts';

const MainContent = () => {
  const orderSystem = [
    {
      title: 'Ордерная система',
      text: ' - это набор законов, которые помогают упорядочить здание, сделать его более внятным. Эти законы впервые сформулировали именно греки. В предыдущие эпохи у зданий были гуляющие пропорции, разные капители и входы произвольного размера. Греки же строго рассчитали все параметры зания, вплоть до числа каннелюр (бороздочек) на колоннах.',
    },
    {
      title: 'Ордер задаёт границы',
      text: ' - низ и верх. Низ зданию задают такие элементы как постамент, пьедестал или стилобат. Верх - карниз по всему периметру, который отмечает, где заканчивается здание. Так, благодаря ордерным элементам у здания появляется рамка.',
    },
    {
      title: 'Ордер делит здание на части.',
      text: ' В Греции для этого использовали только вертикальный ритм колонн, в Риме добавили ещё и горизонтальное членение - чаще чередуя ярусы с карнизами. Как книга разбивается на главы, так и здание разбивается на части - так его проще воспринимать.',
    },
    {
      title: 'Ордер помагает понять габариты.',
      text: ' А точнее, колонна. Сравнить всёздание с человеком невозможно, а колонну с человеком - пожалуйста. Колонна выступает как счетно-измерительная сеточка. Для определения идеальных пропорций колонны греки придумали, что надо делать колонны с соотношение ширины и высоты как у человека - от 1 к 5,5 до 1 к 10.',
    },
  ];

  const orderLinks = [
    { id: 0, title: 'Архитектурные ордера и их различие' },
    { id: 1, title: 'Антаблемент' },
    { id: 2, title: 'Ассортимент колонн и цены.' },
    { id: 3, title: 'Доставка, оплата.' },
  ];

  const orderContacts = [
    { id: 0, title: 'Тел. Архитектор: ', number: 89085520984 },
    { id: 1, title: 'Тел. Дизайнер: ', number: 89085520984 },
    { id: 2, title: 'Тел. Художник: ', number: 89085520984 },
    { id: 3, title: 'Тел. Цех: ', number: 89085520984 },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={leftPanelImg} className={styles.leftPanel} alt=""></img>
        <div className={styles.content}>
          <ThematicBreakComponent />
          <div className={styles.textBlock1}>
            <div className={styles.header}>Ордерная система - главное наследие античности</div>
            <PComponent order={orderSystem[0]} />
            <br />
            <p>Давайте посмотрим, как ордер помогает нам воспринимать здание.</p>
            <br />
            <PComponent order={orderSystem[1]} />
            <br />
            <PComponent order={orderSystem[2]} />
            <br />
            <PComponent order={orderSystem[3]} />
            <br />
            <p>
              ст. Дмитрий Беззубцев <br />
              Историк архитектуры.
            </p>
          </div>
          <ThematicBreakComponent />
          <div className={styles.orderLinks}>
            {orderLinks.map((link) => (
              <OrderLinkItem key={link.id} link={link} />
            ))}
          </div>
          <ThematicBreakComponent />
          <div className={styles.orderContacts}>
            <div className={styles.orderContactsHeader}>Проф. контакты</div>
            {orderContacts.map((contact: IOrderContacts) => (
              <div className={styles.contactNumber}>
                {contact.title}
                {contact.number}
              </div>
            ))}
          </div>
        </div>
        <img src={rightPanelImg} className={styles.rightPanel} alt=""></img>
      </div>
    </div>
  );
};

export default MainContent;
