import { CardObj } from "@/lib/filterCards";
import styles from "./ItemComp.module.scss";
import ItemDetails from "./ItemDetails";
import ItemImages from "./ItemImages";

export default async function ItemComp({ item }: { item: CardObj }) {
  return (
    <div className={styles.container}>
      <ItemImages item={item} />
      <ItemDetails item={item} />
    </div>
  );
}
