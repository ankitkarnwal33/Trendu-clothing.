import styles from "./ReviewsHeader.module.scss";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import CreateReview from "./CreateReview";

function ReviewsHeader({ itemId }: { itemId: string }) {
  const [active, setActive] = useState<boolean>(false);
  function handleCreateReview() {
    setActive(!active);
  }
  function handleCloseRating() {
    setActive(false);
  }
  return (
    <div className={styles.header}>
      {active && (
        <CreateReview
          onClick={handleCreateReview}
          close={handleCloseRating}
          itemId={itemId}
        />
      )}
      <p className={styles.header__typo}>
        <span>All Reviews</span>
        <span id={styles.reviews}>(500)</span>
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
    </div>
  );
}

export default ReviewsHeader;
