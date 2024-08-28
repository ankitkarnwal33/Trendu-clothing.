import ArrivalAndBestSelling from "@/components/smallComponents/ArrivalAndBestSelling";
import styles from "./TopSelling.module.scss";
const cards = [
  {
    id: 1,
    title: "Vertical striped  shirt",
    image: "/img/Best_Selling/image7.png",
    rating: 2.3,
    toatalRating: 5,
    price: 820,
    discount: 50,
  },
  {
    id: 2,
    title: "Courage Graphic T-shirt",
    image: "/img/Best_Selling/image8.png",
    rating: 2.3,
    toatalRating: 5,
    price: 333,
    discount: 11,
  },
  {
    id: 3,
    title: "Loose Fit Bermuda Shorts",
    image: "/img/Best_Selling/image9.png",
    rating: 5,
    toatalRating: 5,
    price: 280,
    discount: 4,
  },
  {
    id: 4,
    title: "Faded Skinny Jeans",
    image: "/img/Best_Selling/image10.png",
    rating: 4.9,
    toatalRating: 5,
    price: 440,
    discount: 19,
  },
];
function TopSelling() {
  return (
    <section className={styles.topselling}>
      <ArrivalAndBestSelling toPath={"/topselling"} cards={cards}>
        Top Selling
      </ArrivalAndBestSelling>
    </section>
  );
}

export default TopSelling;
