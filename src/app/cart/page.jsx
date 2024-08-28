import Cart from "@/components/Cart";
import styles from "./page.module.scss";

function page() {
  return (
    <div className={styles.container}>
      <Cart />
    </div>
  );
}

export default page;
