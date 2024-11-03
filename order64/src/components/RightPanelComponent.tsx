import React from "react";
import rightPanelImg from "../assets/rightPanel.png";
import styles from "../scss/scss-modules/rightPanel.module.scss";

const RightPanelComponent = () => {
  return <img src={rightPanelImg} className={styles.rightPanel} alt=""></img>;
};

export default RightPanelComponent;
