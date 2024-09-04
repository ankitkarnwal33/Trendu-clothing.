import styles from "./page.module.scss";
import Card from "@/components/smallComponents/Card";
import Filter from "@/components/Filter";
import { Suspense } from "react";
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
  {
    id: 5,
    title: "Vertical striped  shirt",
    image: "/img/Best_Selling/image7.png",
    rating: 2.3,
    toatalRating: 5,
    price: 820,
    discount: 50,
  },
  {
    id: 6,
    title: "Courage Graphic T-shirt",
    image: "/img/Best_Selling/image8.png",
    rating: 2.3,
    toatalRating: 5,
    price: 333,
    discount: 11,
  },
  {
    id: 7,
    title: "Loose Fit Bermuda Shorts",
    image: "/img/Best_Selling/image9.png",
    rating: 5,
    toatalRating: 5,
    price: 280,
    discount: 4,
  },
  {
    id: 8,
    title: "Faded Skinny Jeans",
    image: "/img/Best_Selling/image10.png",
    rating: 4.9,
    toatalRating: 5,
    price: 440,
    discount: 19,
  },
  {
    id: 9,
    title: "Faded Skinny Jeans",
    image: "/img/Best_Selling/image10.png",
    rating: 4.9,
    toatalRating: 5,
    price: 440,
    discount: 19,
  },
];
export default function Casual() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div className={styles.container}>
        <Filter />
        <div className={styles.products}>
          <div className={styles.products__typo}>
            <h3 className={styles.products__typo__heading}>Casual</h3>
            <div className={styles.products__typo__sub}>
              <p>Showing 1-10 of 100 products</p>
              <p>
                Sort by: <span>Most Popular</span>
              </p>
            </div>
          </div>
          <div className={styles.products__items}>
            {cards.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
