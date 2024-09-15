"use client";
import styles from "./Header.module.scss";
import MainImage from "@/../../public/img/MainImg.png";
import SkeletonImg from "@/skeleton/SkeletonImg";
import Image from "next/image";
import { useEffect, useState } from "react";

function HeaderImg() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return clearTimeout(id);
  }, [setLoading]);
  return (
    <div className={styles.container__header__picture}>
      {loading ? (
        <SkeletonImg />
      ) : (
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
      )}
    </div>
  );
}

export default HeaderImg;
