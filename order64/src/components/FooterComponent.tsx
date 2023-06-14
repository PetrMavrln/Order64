import React from 'react';
import styles from '../scss/css-modules/footer.module.css';

const FooterComponent = () => {
  return (
    <>
      <div className={styles.copyright}>
        Copyright © 2001-2023
        <br />
        ORDER64
      </div>
      <div className={styles.author}>Сайт создан ...(автор и контакты)</div>
    </>
  );
};

export default FooterComponent;
