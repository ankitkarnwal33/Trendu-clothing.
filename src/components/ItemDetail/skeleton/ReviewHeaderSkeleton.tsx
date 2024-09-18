import styles from "./ReviewHeaderSkeleton.module.scss";

export default function ReviewHeaderSkeleton() {
  return (
    <div className={styles.header}>
      <p className={styles.header__typo}>
        <span className={styles.reviews_1}></span>
        <span className={styles.reviews_2}></span>
      </p>
      <p className={styles.header__buttons}>
        <span className={styles.header__buttons_1}></span>
        <span className={styles.header__buttons_2}></span>
        <span className={styles.header__buttons_3}></span>
      </p>
    </div>
  );
}
