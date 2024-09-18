import styles from "./../app/product/item/loading.module.scss";
export default function ItemDetailsSkeleton() {
  return (
    <div className={styles.parent_1_price}>
      <p className={styles.parent_1_price_1}></p>
      <p className={styles.parent_1_price_2}></p>
      <p className={styles.parent_1_price_3}></p>
      <p className={styles.parent_1_price_4}></p>
      <p className={styles.parent_1_price_5}>
        <span></span>
        <span className={styles.parent_1_price_5_1}></span>
      </p>
      <p className={styles.parent_1_price_6}>
        {" "}
        <span className={styles.parent_1_price_6_1}></span>
        <span className={styles.parent_1_price_6_2}></span>
      </p>
      <p className={styles.parent_1_price_7}>
        {" "}
        <span className={styles.parent_1_price_7_1}></span>
        <span className={styles.parent_1_price_7_2}></span>
      </p>
      <p className={styles.parent_1_price_8}>
        {" "}
        <span className={styles.parent_1_price_8_1}></span>
        <span className={styles.parent_1_price_8_2}></span>
      </p>
    </div>
  );
}
