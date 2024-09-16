import styles from "./SkeletonMain.module.scss";
interface Main {
  width?: string;
  height?: number;
  radius?: number;
}
export default function SkeletonMain({
  width = "100%",
  height = 10,
  radius = 10,
}: Main) {
  return (
    <div
      className={styles.skeleton}
      style={{
        width: `${width}`,
        height: `${height}px`,
        borderRadius: `${radius}rem`,
      }}
    ></div>
  );
}
