import styles from "./SkeletonMain.module.scss";
export default function SkeletonMain({
  width = "100%",
  height = 10,
  radius = 10,
}) {
  return (
    <div
      className={styles.skeleton}
      style={{
        width: `${width}`,
        height: `${height}px`,
        borderRadius: `${radius}rem`,
        background: "#202020",
      }}
    ></div>
  );
}
