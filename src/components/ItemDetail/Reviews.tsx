import { useContext } from "react";
import { Review } from "./RatingReviews";
import ReviewComponent from "./ReviewComponent";
import styles from "./Reviews.module.scss";
import ReviewsContext from "@/context/Reviews/reviewContex";

export default function Reviews() {
  const reviews = useContext(ReviewsContext);
  return (
    <div className={styles.reviews}>
      {reviews !== null &&
        reviews.map((review: Review, index: number) => (
          <ReviewComponent review={review} key={index} />
        ))}
    </div>
  );
}
