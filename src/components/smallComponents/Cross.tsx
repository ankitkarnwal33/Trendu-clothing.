import { RxCross2 } from "react-icons/rx";
import styles from "../smallComponents/Cross.module.scss";
interface Click {
  onClick(): void;
}
export default function Cross({ onClick }: Click) {
  return <RxCross2 className={styles.cross} onClick={onClick} />;
}
