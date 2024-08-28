import React from "react";
import styles from "./ArrivalAndBestSelling.module.scss";
import Image from "next/image";
import Star from "./Star";
import Button from "./Button";

function ArrivalAndBestSelling({ children, toPath, cards }) {
  
  return (
    <div className={styles.arrivals__container}>
      <div className={styles.heading}>
        <h1>{children}</h1>
      </div>
      <div className={styles.arrivals__slider}>
        <div className={styles.arrivals__slider__child}>
          {cards.map((card) => (
            <div className={styles.arrivals__slider__child__card} key={card.id}>
              <Image
                src={card.image}
                width={264}
                height={264}
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
                    ? card.price -
                      ((card.price * card.discount) / 100).toFixed(0)
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
          ))}
        </div>
      </div>
      <Button toPath={toPath} />
    </div>
  );
}

export default ArrivalAndBestSelling;
