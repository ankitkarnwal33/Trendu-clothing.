import React from "react";
import styles from "./ArrivalAndBestSelling.module.scss";
import Image from "next/image";
import Star from "./Star";
import Button from "./Button";

function ArrivalAndBestSelling() {
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
  return (
    <div className={styles.arrivals__container}>
      <div className={styles.heading}>
        <h1>New Arrivals</h1>
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
      <Button />
    </div>
  );
}

export default ArrivalAndBestSelling;
