import styles from "./Details.module.scss";
import RatingReviews from "./RatingReviews";

export default function Details({ itemId }: { itemId: string }) {
  return (
    <div className={styles.container}>
      <RatingReviews itemId={itemId} />
    </div>
  );
}
