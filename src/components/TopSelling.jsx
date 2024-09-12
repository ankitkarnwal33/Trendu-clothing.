import ArrivalAndBestSelling from "@/components/smallComponents/ArrivalAndBestSelling";
import styles from "./TopSelling.module.scss";
import connectDB from "@/lib/connectDB";
import { Item } from "@/models/product/item";

export default async function TopSelling() {
  await connectDB();
  const newArrivals = await Item.find({}).limit(4);
  const cards = JSON.parse(JSON.stringify(newArrivals));
  return (
    <section className={styles.topselling}>
      <ArrivalAndBestSelling toPath={"/topselling"} cards={cards}>
        Top Selling
      </ArrivalAndBestSelling>
    </section>
  );
}
