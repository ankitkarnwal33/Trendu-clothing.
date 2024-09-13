"use client";
import { HiMinus } from "react-icons/hi2";
import Star from "../smallComponents/Star";
import { GoPlus } from "react-icons/go";
import styles from "./ItemDetails.module.scss";
import { useSearchParams, useRouter, redirect } from "next/navigation";
import { CiCircleCheck } from "react-icons/ci";
import { useEffect, useState } from "react";
function ItemDetails({ item }) {
  const [loading, setLoading] = useState(true);
  const rating = +item?.rating.toFixed(0);
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeColor = searchParams.get("color");
  const activeSize = searchParams.get("size");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (item) {
      setLoading(false);
    }
  }, [item]);
  function handleMinus() {
    setQuantity((quantity) => (quantity > 1 ? quantity - 1 : quantity));
  }
  function handlePlus() {
    setQuantity((quantity) => (quantity < 10 ? quantity + 1 : quantity));
  }
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

  if (loading) {
    return <h1>Loading</h1>;
  }

  function handleSubmit() {
    let newErrors = {};
    if (activeColor === null) {
      newErrors.color = "Please choose a color.";
    }
    if (activeSize === null) {
      newErrors.size = "Please choose a size.";
    }
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }
    setError({});
    const cartItem = {
      id: item._id,
      title: item.title,
      quantity: quantity,
      discount: item.discount,
      image: item.image,
      color: activeColor,
      size: activeSize,
      price: (item.price - (item.price * item.discount) / 100).toFixed(0),
    };
    const existingCart = localStorage.getItem("cart");
    const itemsArray = existingCart ? JSON.parse(existingCart) : [];

    const index = itemsArray.findIndex((i) => i.id === cartItem.id);
    if (index !== -1) {
      itemsArray[index] = cartItem;
    } else {
      itemsArray.push(cartItem);
    }
    localStorage.setItem("cart", JSON.stringify(itemsArray));
    router.push("/cart");
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
          <span>{rating}/</span>
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
          {item.sizes.map((size, index) => (
            <span
              key={size}
              className={`${
                activeSize === item.sizes.at(index) ? styles.active : ""
              }`}
              onClick={() => updateQueryParams("size", item.sizes.at(index))}
            >
              {size}
            </span>
          ))}
        </div>
      </div>
      {error !== null && Object.keys(error).length > 0 && (
        <span className={styles.error}>
          {Object.keys(error).map((err, index) => (
            <p key={err}>{error[err]}</p>
          ))}
        </span>
      )}
      <div className={styles.container__buttons}>
        <span className={styles.container__buttons__control}>
          <HiMinus onClick={() => handleMinus(item.id)} />
          <p>{quantity}</p>
          <GoPlus onClick={() => handlePlus(item.id)} />
        </span>
        <button
          className={styles.container__buttons__btn}
          onClick={handleSubmit}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
export default ItemDetails;
