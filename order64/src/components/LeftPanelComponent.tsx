import React from 'react';
import leftPanelImg from '../assets/leftPanel.png';
import styles from '../scss/css-modules/leftPanel.module.css';

const LeftPanelComponent = () => {
  return <img src={leftPanelImg} className={styles.leftPanel} alt=""></img>;
};

export default LeftPanelComponent;
