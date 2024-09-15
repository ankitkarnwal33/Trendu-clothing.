import { Key, ReactNode } from "react";
import styles from "./ArrivalAndBestSelling.module.scss";
import Button from "./Button";
import Card from "./Card";
import { CardObj } from "@/lib/filterCards";
interface ArrivalAndBestSellingType {
  children: ReactNode;
  toPath: string;
  cards: CardObj[];
}

async function ArrivalAndBestSelling({
  children,
  toPath,
  cards,
}: ArrivalAndBestSellingType) {
  return (
    <div className={styles.arrivals__container}>
      <div className={styles.heading}>
        <h1>{children}</h1>
      </div>
      <div className={styles.arrivals__slider}>
        <div className={styles.arrivals__slider__child}>
          {cards.map((card: CardObj) => (
            <Card card={card} key={card._id} />
          ))}
        </div>
      </div>
      <Button toPath={toPath} />
    </div>
  );
}

export default ArrivalAndBestSelling;
