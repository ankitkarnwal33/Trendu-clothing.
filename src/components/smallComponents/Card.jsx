"use client";
import Image from "next/image";
import Star from "./Star";
import styles from "./card.module.scss";
import NextImage from "./Image";

const Card = ({ card }) => {
  const handleClick = (card) => {
    console.log(card);
  };
  return (
    <div
      className={styles.arrivals__slider__child__card}
      key={card.id}
      onClick={() => handleClick(card)}
    >
      <NextImage
        src={card.image}
        height={264}
        width={264}
        alt={card.title}
        quality={90}
        className={styles.arrivals__slider__child__card__img}
      />
      <h3>{card.title}</h3>
      <div className={styles.rating}>
        <div className={styles.rating__stars}>
          <Star rating={card.toatalRating} />
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
