import { Review } from "./RatingReviews";
import ReviewComponent from "./ReviewComponent";
import styles from "./Reviews.module.scss";
import { useReviews } from "@/context/Reviews/reviewContex";
import ReviewSkeleton from "./skeleton/ReviewSkeleton";

export default function Reviews() {
  const { reviews, loading } = useReviews();
  return (
    <div className={styles.reviews}>
      {(loading && (
        <>
          {Array.from({ length: 6 }, (_, i) => (
            <ReviewSkeleton key={i} />
          ))}
        </>
      )) ||
        (reviews !== null &&
          reviews.map((review: Review, index: number) => (
            <ReviewComponent review={review} key={index} />
          )))}
    </div>
  );
}
