import styles from "./Details.module.scss";
import RatingReviews from "./RatingReviews";

export default async function Details({
  itemId,
}: {
  itemId: string | undefined;
}) {
  return (
    <div className={styles.container}>
      <RatingReviews itemId={itemId} />
    </div>
  );
}
