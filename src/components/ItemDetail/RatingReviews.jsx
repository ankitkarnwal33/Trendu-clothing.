"use client";
import Link from "next/link";
import styles from "./RatingReviews.module.scss";
import { useState } from "react";

function RatingReviews() {
  const list = ["Product Details", "Rating & Reviews", "FAQs"];
  const [activeIndex, setActiveIndex] = useState(null);
  function handleClick(index) {
    setActiveIndex(index);
  }
  return (
    <ul className={styles.list}>
      {list.map((_, index) => (
        <li key={index} className={index === activeIndex ? styles.active : ""}>
          <Link href={"#"} onClick={() => handleClick(index)}>
            {list.at(index)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default RatingReviews;
