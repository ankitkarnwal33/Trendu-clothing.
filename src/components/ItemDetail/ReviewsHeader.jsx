import styles from "./ReviewsHeader.module.scss";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function ReviewsHeader() {
  return (
    <div className={styles.header}>
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
        <button>Write a Review</button>
      </p>
    </div>
  );
}

export default ReviewsHeader;
