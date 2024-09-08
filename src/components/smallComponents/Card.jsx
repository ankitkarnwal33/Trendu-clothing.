/* eslint-disable @next/next/no-img-element */
"use client";
import Star from "./Star";
import styles from "./card.module.scss";

const Card = ({ card }) => {
  const handleClick = (card) => {
    console.log(card);
  };
  const rating = +card.rating.toFixed(0);
  return (
    <div
      className={styles.arrivals__slider__child__card}
      key={card.id}
      onClick={() => handleClick(card)}
    >
      <img
        src={card.image}
        alt={card.title}
        className={styles.arrivals__slider__child__card__img}
      />
      <h3>{card.title}</h3>
      <div className={styles.rating}>
        <div className={styles.rating__stars}>
          {Array.from({ length: rating }, (_, index) => (
            <Star key={index} />
          ))}
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
            <span>-{card.discount}%</span>{" "}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
