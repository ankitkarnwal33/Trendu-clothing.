import { FaImage } from "react-icons/fa6";
import styles from "./SkeletonImg.module.scss";
export default function SkeletonImg() {
  return (
    <div className={styles.skeleton}>
      <FaImage />
    </div>
  );
}
