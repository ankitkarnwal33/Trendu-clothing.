import styles from "./ReviewSkeleton.module.scss";
export default function ReviewSkeleton() {
  return (
    <div className={styles.review}>
      <div className={styles.review__rating}>
        <p className={styles.review__rating_1}></p>
        <p className={styles.review__rating_2}></p>
      </div>
      <div className={styles.review__user}>
        <p className={styles.review__user_1}></p>
        <p className={styles.review__user_2}></p>
      </div>
      <p className={styles.review__content}>
        <span className={styles.review__content_1}></span>
        <span className={styles.review__content_2}></span>
        <span className={styles.review__content_3}></span>
      </p>
      <span className={styles.review__date}></span>
    </div>
  );
}
