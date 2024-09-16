import connectDB from "@/lib/connectDB";
import styles from "./ItemComp.module.scss";
import ItemDetails from "./ItemDetails";
import ItemImages from "./ItemImages";
import PlainObj from "@/lib/PlainObject";
import { CardObj } from "@/lib/filterCards";

export default async function ItemComp({ item }) {
  return (
    <div className={styles.container}>
      <ItemImages item={item} />
      <ItemDetails item={item} />
    </div>
  );
}
