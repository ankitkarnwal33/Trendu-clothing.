"use client";
import styles from "./page.module.scss";
import Filter from "@/components/Filter";
import { Suspense, useState } from "react";
import Products from "@/components/Products";
import { FaCross, FaFilter } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const cards = [
  {
    id: 1,
    title: "T-shirt with Tape details",
    image: "/img/Arrivals/image7.png",
    type: "t-shirts",
    rating: 3.3,
    toatalRating: 5,
    price: 220,
    discount: 0,
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    image: "/img/Arrivals/image8.png",
    type: "jeans",
    rating: 3.3,
    toatalRating: 5,
    price: 330,
    discount: 20,
  },
  {
    id: 3,
    title: "Checkered Shirt",
    image: "/img/Arrivals/image9.png",
    type: "shirts",
    rating: 3.3,
    toatalRating: 5,
    price: 420,
    discount: 0,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    image: "/img/Arrivals/image10.png",
    type: "t-shirts",
    rating: 4.3,
    toatalRating: 5,
    price: 320,
    discount: 15,
  },
  {
    id: 5,
    title: "Vertical striped shirt",
    image: "/img/Best_Selling/image7.png",
    type: "shirts",
    rating: 2.3,
    toatalRating: 5,
    price: 820,
    discount: 50,
  },
  {
    id: 6,
    title: "Courage Graphic T-shirt",
    image: "/img/Best_Selling/image8.png",
    type: "t-shirts",

    rating: 2.3,
    toatalRating: 5,
    price: 333,
    discount: 11,
  },
  {
    id: 7,
    title: "Loose Fit Bermuda Shorts",
    image: "/img/Best_Selling/image9.png",
    type: "shorts",
    rating: 5,
    toatalRating: 5,
    price: 280,
    discount: 4,
  },
  {
    id: 8,
    title: "Faded Skinny Jeans",
    image: "/img/Best_Selling/image10.png",
    type: "jeans",
    rating: 4.9,
    toatalRating: 5,
    price: 440,
    discount: 19,
  },
  {
    id: 9,
    title: "Faded Skinny Jeans",
    image: "/img/Best_Selling/image10.png",
    type: "jeans",
    rating: 4.9,
    toatalRating: 5,
    price: 960,
    discount: 19,
  },
];

export default function Casual() {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active);
  }
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div className={styles.container}>
        <Filter active={active} handleActive={handleActive} />
        <div className={styles.products}>
          <div className={styles.products__typo}>
            <h3 className={styles.products__typo__heading}>Casual</h3>
            <div className={styles.products__typo__sub}>
              <div className={styles.products__typo__sub__para}>
                <p>Showing 1-10 of 100 products</p>
                <p>
                  Sort by: <span>Most Popular</span>
                </p>
              </div>
              {!active && (
                <FaFilter
                  className={styles.filterIcon}
                  onClick={handleActive}
                />
              )}
            </div>
          </div>
          <div className={styles.products__items}>
            <Products cards={cards} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
