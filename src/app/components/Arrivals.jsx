import styles from "./Arrivals.module.scss";
import ArrivalAndBestSelling from "./smallComponents/ArrivalAndBestSelling";
function Arrivals() {
  return (
    <section className={styles.arrivals}>
      <ArrivalAndBestSelling />
    </section>
  );
}

export default Arrivals;
