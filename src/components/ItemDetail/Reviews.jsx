import styles from "./Reviews.module.scss";
import Review from "./Review";

function Reviews() {
  return (
    <div className={styles.reviews}>
      <Review />
      <Review />
    </div>
  );
}

export default Reviews;
