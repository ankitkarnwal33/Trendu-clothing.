import Link from "next/link";
import styles from "./button.module.scss";

function Button({ toPath }) {
  return (
    <Link href={toPath}>
      <button className={styles.button}>View All</button>
    </Link>
  );
}

export default Button;
