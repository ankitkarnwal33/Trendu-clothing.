import ItemComp from "@/components/ItemDetail/ItemComp";
import styles from "./page.module.scss";
import Details from "@/components/ItemDetail/Details";
function Item({ searchParams }) {
  const itemId: string = searchParams.id;
  return (
    <section className={styles.container}>
      <ItemComp itemId={itemId} />
      <Details itemId={itemId} />
    </section>
  );
}

export default Item;
