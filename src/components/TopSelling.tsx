import ArrivalAndBestSelling from "@/components/smallComponents/ArrivalAndBestSelling";
import styles from "./TopSelling.module.scss";
import connectDB from "@/lib/connectDB";
import { Item } from "@/models/product/item";
import { CardObj } from "@/lib/filterCards";

export default async function TopSelling() {
  await connectDB();
  const newArrivals: CardObj[] = await Item.find({}).limit(4);
  const cards: CardObj[] = JSON.parse(JSON.stringify(newArrivals));
  return (
    <section className={styles.topselling}>
      <ArrivalAndBestSelling toPath={"/topselling"} cards={cards}>
        Top Selling
      </ArrivalAndBestSelling>
    </section>
  );
}
