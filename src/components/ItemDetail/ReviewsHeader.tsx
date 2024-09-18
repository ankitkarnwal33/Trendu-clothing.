import styles from "./ReviewsHeader.module.scss";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import CreateReview from "./CreateReview";
import { useReviews } from "@/context/Reviews/reviewContex";
import ReviewHeaderSkeleton from "./skeleton/ReviewHeaderSkeleton";

function ReviewsHeader() {
  const [active, setActive] = useState<boolean>(false);
  const { reviews, loading, itemId } = useReviews();
  const totalReviews = reviews?.length;
  function handleCreateReview() {
    setActive(!active);
  }
  function handleCloseRating() {
    setActive(false);
  }
  return (
    <div className={styles.header}>
      {loading ? (
        <ReviewHeaderSkeleton />
      ) : (
        <>
          {active && (
            <CreateReview
              onClick={handleCreateReview}
              close={handleCloseRating}
              itemId={itemId}
            />
          )}
          <p className={styles.header__typo}>
            <span>All Reviews</span>
            <span id={styles.reviews}>({totalReviews})</span>
          </p>
          <p className={styles.header__buttons}>
            <span>
              <IoFilter />
            </span>
            <button id={styles.btn}>
              <span>Latest</span>
              <IoIosArrowDown />
            </button>
            <button onClick={handleCreateReview}>Write a Review</button>
          </p>
        </>
      )}
    </div>
  );
}

export default ReviewsHeader;
