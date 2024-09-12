import Index from "@/lib";
import styles from "./Arrivals.module.scss";
import ArrivalAndBestSelling from "./smallComponents/ArrivalAndBestSelling";
import connectDB from "@/lib/connectDB";
import { Item } from "@/models/product/item";
export default async function Arrivals() {
  await connectDB();
  const newArrivals = await Item.find({}).sort({ createdAt: -1 }).limit(4);
  const cards = JSON.parse(JSON.stringify(newArrivals));
  return (
    <section className={styles.arrivals}>
      <ArrivalAndBestSelling toPath={"/allArrivals"} cards={cards}>
        New Arrivals
      </ArrivalAndBestSelling>
    </section>
  );
}
