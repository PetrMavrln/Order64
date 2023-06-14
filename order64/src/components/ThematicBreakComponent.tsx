import React from 'react';
import thematicBreak from '../assets/ThematicBreak.svg';
import styles from '../scss/css-modules/thematicBreak.module.css';

const ThematicBreakComponent = () => {
  return <img src={thematicBreak} className={styles.thematicBreak} alt=""></img>;
};

export default ThematicBreakComponent;
