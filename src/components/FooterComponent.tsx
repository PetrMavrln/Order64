import React from "react";
import styles from "../scss/scss-modules/footer.module.scss";

export const FooterComponent = () => {
  return (
    <>
      <div className={styles.copyright}>ORDER64 © 2001-{new Date().getFullYear()}</div>
    </>
  );
};
