import { Key } from "react";
import styles from "./ArrivalAndBestSelling.module.scss";
import Button from "./Button";
import Card from "./Card";
async function ArrivalAndBestSelling({ children, toPath, cards }) {
  return (
    <div className={styles.arrivals__container}>
      <div className={styles.heading}>
        <h1>{children}</h1>
      </div>
      <div className={styles.arrivals__slider}>
        <div className={styles.arrivals__slider__child}>
          {cards.map((card) => (
            <Card card={card} key={card._id} />
          ))}
        </div>
      </div>
      <Button toPath={toPath} />
    </div>
  );
}

export default ArrivalAndBestSelling;
