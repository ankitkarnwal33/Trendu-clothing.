import ItemComp from "@/components/ItemDetail/ItemComp";
import styles from "./page.module.scss";
import Details from "@/components/ItemDetail/Details";
function Item() {
  return (
    <section className={styles.container}>
      <ItemComp />
      <Details />
    </section>
  );
}

export default Item;
