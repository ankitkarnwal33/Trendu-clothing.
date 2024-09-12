import styles from "./Details.module.scss";
import RatingReviews from "./RatingReviews";

export default async function Details() {
  return (
    <div className={styles.container}>
      <RatingReviews />
    </div>
  );
}
