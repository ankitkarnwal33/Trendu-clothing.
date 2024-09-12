/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import Star from "./Star";
import styles from "./card.module.scss";
import { useEffect, useState } from "react";

const Card = ({ card }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (card) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    return clearTimeout(() => {}, 3000);
  }, [card]);

  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/product/item?page=Rating+%26+Reviews&id=${id}`);
  };

  const rating = +card.rating.toFixed(0);
  return (
    <div
      className={styles.arrivals__slider__child__card}
      key={card.id}
      onClick={() => handleClick(card._id)}
    >
      <img
        src={card.image}
        alt={card.title}
        className={styles.arrivals__slider__child__card__img}
      />
      <h3>{card.title}</h3>
      <div className={styles.rating}>
        <div className={styles.rating__stars}>
          <Star rating={rating} />
        </div>
        <span>{card.rating}</span>
      </div>
      <div className={styles.price}>
        <p className={styles.price__net}>
          $
          {card.discount > 0
            ? card.price - ((card.price * card.discount) / 100).toFixed(0)
            : card.price}
        </p>
        {card.discount > 0 ? (
          <>
            <p className={styles.price__all}>${card.price}</p>
            <span>-{card.discount}%</span>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
