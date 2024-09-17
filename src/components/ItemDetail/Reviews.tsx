import { useContext } from "react";
import { Review } from "./RatingReviews";
import ReviewComponent from "./ReviewComponent";
import styles from "./Reviews.module.scss";
import ReviewsContext from "@/context/Reviews/reviewContex";
import ReviewSkeleton from "./skeleton/ReviewSkeleton";

export default function Reviews({ loading }: { loading: boolean }) {
  const reviews = useContext(ReviewsContext);
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
