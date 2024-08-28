import styles from "./Arrivals.module.scss";
import ArrivalAndBestSelling from "./smallComponents/ArrivalAndBestSelling";
function Arrivals() {
  // New products data here to be passed to the component.
  return (
    <section className={styles.arrivals}>
      <ArrivalAndBestSelling toPath={"/allArrivals"}>
        {" "}
        New Arrivals{" "}
      </ArrivalAndBestSelling>
    </section>
  );
}

export default Arrivals;
