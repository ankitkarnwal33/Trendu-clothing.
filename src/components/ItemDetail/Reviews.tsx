import { Review } from "./Details";
import ReviewComponent from "./ReviewComponent";
import styles from "./Reviews.module.scss";

export default function Reviews({ reviews }: { reviews: Review[] | null }) {
  return (
    <div className={styles.reviews}>
      {reviews !== null &&
        reviews.map((review: Review, index: number) => (
          <ReviewComponent review={review} key={index} />
        ))}
    </div>
  );
}
