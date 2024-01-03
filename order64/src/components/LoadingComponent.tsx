import styles from '../scss/css-modules/loading.module.css';

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
