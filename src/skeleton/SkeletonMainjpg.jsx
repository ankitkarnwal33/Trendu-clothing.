import { FaImage } from "react-icons/fa6";
import styles from "@/components/Header.module.scss";

function SkeletonMainjpg() {
  return (
    <div className={styles.container__header__picture}>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          border: "1px solid #000",
          boxShadow: "0 10px 10px #000",
        }}
      >
        <FaImage
          style={{
            width: "20%",
            height: "20%",
            margin: "0 auto",
            objectFit: "cover",
            background: "#f0f0f0",
          }}
        />
      </div>
    </div>
  );
}

export default SkeletonMainjpg;
