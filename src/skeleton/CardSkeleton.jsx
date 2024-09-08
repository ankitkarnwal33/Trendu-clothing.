import { FaImage } from "react-icons/fa6";
import styles from "./CardSkeleton.module.scss";
import SkeletonMain from "./SkeletonMain";
export default function CardSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <FaImage />
      </div>
      <SkeletonMain height={20} />
      <SkeletonMain width={"10rem"} height={15} />
      <SkeletonMain height={20} />
    </div>
  );
}
