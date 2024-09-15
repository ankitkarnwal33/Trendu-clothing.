import styles from "./Details.module.scss";
import RatingReviews from "./RatingReviews";

interface DetailsProps {
  itemId: string;
}
export default async function Details({ itemId }: DetailsProps) {
  return (
    <div className={styles.container}>
      <RatingReviews itemId={itemId} />
    </div>
  );
}
