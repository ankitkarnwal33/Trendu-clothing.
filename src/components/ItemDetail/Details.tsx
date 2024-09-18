"use client";
import styles from "./Details.module.scss";
import RatingReviews from "./RatingReviews";
import { ReviewProvider } from "@/context/Reviews/reviewContex";
export default function Details({ itemId }: { itemId: string }) {
  return (
    <div className={styles.container}>
      <ReviewProvider>
        <RatingReviews itemId={itemId} />
      </ReviewProvider>
    </div>
  );
}
