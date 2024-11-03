import styles from "../scss/scss-modules/loading.module.scss";

const LoadingComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loaderBlock}>
        <div className={styles.loader}></div>
        <div className={styles.text}>Идет загрузка, подождите...</div>
      </div>
    </div>
  );
};

export default LoadingComponent;
