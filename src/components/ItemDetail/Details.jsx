import styles from "./Details.module.scss";
import RatingReviews from "./RatingReviews";

export default async function Details() {
  return (
    <div className={styles.container}>
      <RatingReviews />
      <h1>More content here for ratings or faqs or details of the product</h1>
    </div>
  );
}
