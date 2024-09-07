import styles from "./SkeletonMain.module.scss";
export default function SkeletonMain({ width = 100, height = 10 }) {
  return (
    <div
      className={styles.skeleton}
      style={{
        width: `${width}%`,
        height: `${height}px`,
        background: "#202020",
      }}
    ></div>
  );
}
