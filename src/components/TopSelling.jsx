import ArrivalAndBestSelling from "@/components/smallComponents/ArrivalAndBestSelling";
import styles from "./TopSelling.module.scss";
function TopSelling() {
  return (
    <section className={styles.topselling}>
      <ArrivalAndBestSelling toPath={"/topselling"}>
        Top Selling
      </ArrivalAndBestSelling>
    </section>
  );
}

export default TopSelling;
