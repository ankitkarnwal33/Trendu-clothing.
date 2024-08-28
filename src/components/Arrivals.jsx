import styles from "./Arrivals.module.scss";
import ArrivalAndBestSelling from "./smallComponents/ArrivalAndBestSelling";
const cards = [
  {
    id: 1,
    title: "T-shirt with Tape details",
    image: "/img/Arrivals/image7.png",
    rating: 3.3,
    toatalRating: 5,
    price: 220,
    discount: 0,
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    image: "/img/Arrivals/image8.png",
    rating: 3.3,
    toatalRating: 5,
    price: 220,
    discount: 20,
  },
  {
    id: 3,
    title: "Checkered Shirt",
    image: "/img/Arrivals/image9.png",
    rating: 3.3,
    toatalRating: 5,
    price: 220,
    discount: 0,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    image: "/img/Arrivals/image10.png",
    rating: 4.3,
    toatalRating: 5,
    price: 320,
    discount: 15,
  },
];
function Arrivals() {
  // New products data here to be passed to the component.
  return (
    <section className={styles.arrivals}>
      <ArrivalAndBestSelling toPath={"/allArrivals"} cards={cards}>
        New Arrivals
      </ArrivalAndBestSelling>
    </section>
  );
}

export default Arrivals;
