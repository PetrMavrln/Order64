import React from "react";
import leftPanelImg from "../assets/leftPanel.png";
import styles from "../scss/scss-modules/leftPanel.module.scss";

const LeftPanelComponent = () => {
  return <img src={leftPanelImg} className={styles.leftPanel} alt=""></img>;
};

export default LeftPanelComponent;
