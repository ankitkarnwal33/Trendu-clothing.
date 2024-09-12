/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import styles from "./ItemImages.module.scss";
import { useSearchParams, useRouter } from "next/navigation";

function ItemImages({ item }) {
  const images = ["image1", "image2", "image3"];
  const searchParams = useSearchParams();
  const activeImage = searchParams.get("photo");
  const router = useRouter();
  function updateQueryParams(key, value) {
    const params = new URLSearchParams(searchParams.toString());
    if (params.has(key, value)) {
      return;
    } else {
      params.set(key, value);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className={styles.images}>
      {/* Images */}
      <div className={styles.images__all}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.images__all__img} ${
              images.at(index) === activeImage
                ? styles.active
                : index === 0 && !activeImage
                ? styles.active
                : ""
            } `}
            onClick={() => updateQueryParams("photo", images.at(index))}
          >
            <img src={`${item.image}`} alt="Image" />
          </div>
        ))}
      </div>
      <div className={styles.images__main}>
        <img
          src={`${activeImage ? item.image : item.image}`}
          alt="Image Main"
        />
      </div>
    </div>
  );
}

export default ItemImages;
