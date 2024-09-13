import connectDB from "@/lib/connectDB";
import styles from "./ItemComp.module.scss";
import ItemDetails from "./ItemDetails";
import ItemImages from "./ItemImages";
import { Item } from "@/models/product/item";
import PlainObj from "@/lib/PlainObject";

export default async function ItemComp({ itemId }) {
  let Product;
  let item;
  try {
    await connectDB();
    Product = await Item.findById(itemId);
    item = PlainObj(Product);
    console.log(item);
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
