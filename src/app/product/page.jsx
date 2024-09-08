import styles from "./page.module.scss";
export const metadata = {
  title: "Products",
};
export default function Products() {
  return (
    <div className={styles.products}>
      This is the product page here all products will be dispay there.
    </div>
  );
}
