import { FaImage } from "react-icons/fa6";
import styles from "./CardSkeletonArr.module.scss";
import SkeletonMain from "./SkeletonMain";
export default function CardSkeletonArr() {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <FaImage />
      </div>
      <SkeletonMain width={"20rem"} height={20} />
      <SkeletonMain width={"10rem"} height={15} />
      <SkeletonMain height={20} />
    </div>
  );
}
