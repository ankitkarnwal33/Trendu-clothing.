import Link from "next/link";
import styles from "./button.module.scss";

function Button({ toPath, content = "View All" }) {
  return (
    <Link href={toPath} id={styles.link}>
      <button className={styles.button}>{content}</button>
    </Link>
  );
}

export default Button;
