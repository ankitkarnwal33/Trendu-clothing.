import { CardObj } from "@/lib/filterCards";
import styles from "./Arrivals.module.scss";
import ArrivalAndBestSelling from "./smallComponents/ArrivalAndBestSelling";
import connectDB from "@/lib/connectDB";
import { Item } from "@/models/product/item";
export default async function Arrivals() {
  await connectDB();
  const newArrivals: CardObj[] = await Item.find({})
    .sort({ createdAt: -1 })
    .limit(4);
  const cards: CardObj[] = JSON.parse(JSON.stringify(newArrivals));
  return (
    <section className={styles.arrivals}>
      <ArrivalAndBestSelling toPath={"/allArrivals"} cards={cards}>
        New Arrivals
      </ArrivalAndBestSelling>
    </section>
  );
}
