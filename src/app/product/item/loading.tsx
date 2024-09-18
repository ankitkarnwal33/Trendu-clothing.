import ItemDetailsSkeleton from "@/skeleton/ItemDetailsSkeleton";
import styles from "./loading.module.scss";
import ItemImageSkeleton from "@/skeleton/ItemImageSkeleton";
import ReviewSkeleton from "@/components/ItemDetail/skeleton/ReviewSkeleton";
export default async function Loading() {
  return (
    <section className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.parent_1}>
          <ItemImageSkeleton />
          <ItemDetailsSkeleton />
        </div>
      </div>
      <div className={styles.second}>
        {Array.from({ length: 6 }, (_, index) => (
          <ReviewSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
