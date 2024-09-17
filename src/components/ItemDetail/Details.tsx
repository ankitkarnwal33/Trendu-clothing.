import { getReviews } from "@/actions/Reviews/getReviews";
import styles from "./Details.module.scss";
import RatingReviews from "./RatingReviews";

export interface Review {
  _id: string;
  item: string;
  rating: number;
  user: number;
  review: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default async function Details({
  itemId,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemId: string;
}) {
  let reviews: Review[] | null = null;
  let plainReviews: Review[] | null = null;
  if (itemId !== null) {
    reviews = await getReviews(itemId);
    plainReviews = JSON.parse(JSON.stringify(reviews));
  }

  return (
    <div className={styles.container}>
      <RatingReviews itemId={itemId} reviews={plainReviews} />
    </div>
  );
}
