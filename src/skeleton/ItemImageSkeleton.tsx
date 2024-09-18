import { IoMdPhotos } from "react-icons/io";
import styles from "./../app/product/item/loading.module.scss";
function ItemImageSkeleton() {
  return (
    <div className={styles.parent_1_image}>
      <div className={styles.parent_1_image_sm}>
        <span className={styles.parent_1_image_sm_1}>
          <IoMdPhotos />
        </span>
        <span className={styles.parent_1_image_sm_2}>
          <IoMdPhotos />
        </span>
        <span className={styles.parent_1_image_sm_3}>
          <IoMdPhotos />
        </span>
      </div>
      <span className={styles.parent_1_image_big}>
        <IoMdPhotos />
      </span>
    </div>
  );
}

export default ItemImageSkeleton;
