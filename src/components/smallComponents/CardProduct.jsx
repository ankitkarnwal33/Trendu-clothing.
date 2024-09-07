"use client";
import Star from "./Star";
import styles from "./CardProduct.module.scss";

export default function CardProduct({ card }) {
  const handleClick = (card) => {
    console.log(card);
  };
  const rating = +card.rating.toFixed(0);
  return (
    <div
      className={styles.container}
      key={card.id}
      onClick={() => handleClick(card)}
    >
      <div className={styles.container__image}>
        <img
          src={card.image}
          alt={card.title}
          className={styles.container__image__img}
        />
      </div>

      <h3>{card.title}</h3>
      <div className={styles.container__rating}>
        <div className={styles.container__rating__stars}>
          {Array.from({ length: rating }, (_, index) => (
            <Star key={index} />
          ))}
        </div>
        <span>{card.rating}</span>
      </div>
      <div className={styles.container__price}>
        <p className={styles.container__price__net}>
          $
          {card.discount > 0
            ? card.price - ((card.price * card.discount) / 100).toFixed(0)
            : card.price}
        </p>
        {card.discount > 0 ? (
          <>
            <p className={styles.container__price__all}>${card.price}</p>
            <span>-{card.discount}%</span>{" "}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
