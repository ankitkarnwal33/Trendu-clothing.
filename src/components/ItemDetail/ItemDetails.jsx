"use client";
import { HiMinus } from "react-icons/hi2";
import Star from "../smallComponents/Star";
import { GoPlus } from "react-icons/go";
import styles from "./ItemDetails.module.scss";

import { useSearchParams, useRouter } from "next/navigation";
import { CiCircleCheck } from "react-icons/ci";

function ItemDetails({ item }) {
  const rating = +item?.rating.toFixed(0);
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeColor = searchParams.get("color");
  const activeSize = searchParams.get("size");
  function handleMinus(id) {}
  function handlePlus(id) {}

  function updateQueryParams(key, value) {
    const params = new URLSearchParams(searchParams.toString());
    if (params.has(key, value)) {
      return;
    } else if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <h3>{item.brand}</h3>
        <h4 className={styles.container__header__heading}>{item.title}</h4>
        <div className={styles.container__header__rating}>
          <p>
            <Star rating={rating} />
          </p>
          <span>{rating}/5</span>
        </div>
        <div className={styles.container__prices}>
          <p className={styles.container__prices__net}>
            ₹{(item.price - (item.price * item.discount) / 100).toFixed(0)}
          </p>
          <p className={styles.container__prices__total}>₹{item.price}</p>
          <span>-{item.discount}%</span>
        </div>
        <p className={styles.container__description}>{item.description}</p>
      </div>
      <div className={styles.container__colors}>
        <p className={styles.container__colors__heading}>Select Colors</p>
        <div className={styles.container__colors__all}>
          {item.colors.map((_, index) => (
            <span
              key={index}
              onClick={() => updateQueryParams("color", item.colors.at(index))}
              className={styles.container__colors__all__color}
              style={{ background: `${item.colors.at(index)}` }}
            >
              {activeColor === item.colors.at(index) && <CiCircleCheck />}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.container__sizes}>
        <p className={styles.container__sizes__heading}>Choose Size</p>
        <div className={styles.container__sizes__all}>
          {item.size.map((size, index) => (
            <span
              key={size}
              className={`${
                activeSize === item.size.at(index) ? styles.active : ""
              }`}
              onClick={() => updateQueryParams("size", item.size.at(index))}
            >
              {size}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.container__buttons}>
        <span className={styles.container__buttons__control}>
          <HiMinus onClick={() => handleMinus(item.id)} />
          <p>{item.quantity}</p>
          <GoPlus onClick={() => handlePlus(item.id)} />
        </span>
        <button className={styles.container__buttons__btn}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ItemDetails;
