import styles from "./Header.module.scss";
import MainImage from "./../../../public/img/MainImg.png";
import Image from "next/image";
function HeaderImg() {
  return (
    <div className={styles.container__header__picture}>
      <div>
        <Image
          src={MainImage}
          placeholder="blur"
          priority={true}
          alt="Boy With Girl"
          quality={1}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default HeaderImg;
