import FilterMain from "@/components/FilterMain";
import styles from "./page.module.scss";
import connectDB from "@/lib/connectDB";
import { Item } from "@/models/product/item";
import PlainObj from "@/lib/PlainObject";
import { CardObj } from "@/lib/filterCards";

export default async function Casual() {
  let products: CardObj[];
  let cards: CardObj[];
  try {
    await connectDB();
    products = await Item.find({});
    cards = PlainObj(products);
  } catch (error) {
    return <h1>This is the error</h1>;
  }
  return (
    <div className={styles.container}>
      <FilterMain cards={cards} />
    </div>
  );
}
