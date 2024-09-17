import Link from "next/link";
import styles from "./button.module.scss";
interface PropsTypes {
  toPath: string;
  content?: string;
}
function Button({ toPath, content = "View All" }: PropsTypes) {
  return (
    <>
      {toPath ? (
        <Link href={toPath} id={styles.link}>
          <button className={styles.button}>{content}</button>
        </Link>
      ) : (
        <button className={styles.button}>{content}</button>
      )}
    </>
  );
}

export default Button;
