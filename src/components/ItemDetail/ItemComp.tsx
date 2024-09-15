import connectDB from "@/lib/connectDB";
import styles from "./ItemComp.module.scss";
import ItemDetails from "./ItemDetails";
import ItemImages from "./ItemImages";
import { Item } from "@/models/product/item";
import PlainObj from "@/lib/PlainObject";
import { CardObj } from "@/lib/filterCards";

interface ItemCompProps {
  itemId: string;
}

export default async function ItemComp({ itemId }: ItemCompProps) {
  let Product: CardObj;
  let item: CardObj;
  try {
    await connectDB();
    Product = await Item.findById(itemId);
    item = JSON.parse(JSON.stringify(Product));
  } catch (error) {
    return <h1>{JSON.stringify(error.message)}</h1>;
  }
  return (
    <div className={styles.container}>
      <ItemImages item={item} />
      <ItemDetails item={item} />
    </div>
  );
}
