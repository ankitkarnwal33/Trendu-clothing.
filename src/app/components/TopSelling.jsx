import ArrivalAndBestSelling from "./smallComponents/ArrivalAndBestSelling";
import styles from "./TopSelling.module.scss";
function TopSelling() {
  return (
    <section className={styles.topselling}>
      <ArrivalAndBestSelling>Top Selling</ArrivalAndBestSelling>
    </section>
  );
}

export default TopSelling;
