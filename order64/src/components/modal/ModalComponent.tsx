import styles from '../../scss/css-modules/modal/modal.module.css';

const ModalComponent = ({
  shouldShow,
  onRequestClose,
  children,
}: {
  shouldShow: Boolean;
  onRequestClose: any;
  children: any;
}) => {
  return shouldShow ? (
    <>
      <div className={styles.darkBG} onClick={onRequestClose} />
      <div className={styles.centered}>
        <div
          className={styles.modal}
          onClick={(e) => {
            e.stopPropagation();
          }}>
          <button className={styles.closeBtn} onClick={onRequestClose}></button>
          <div className={styles.modalContent}>{children}</div>
        </div>
      </div>
    </>
  ) : null;
};

export default ModalComponent;
