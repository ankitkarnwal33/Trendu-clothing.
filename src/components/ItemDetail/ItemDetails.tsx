"use client";
import { HiMinus } from "react-icons/hi2";
import Star from "../smallComponents/Star";
import { GoPlus } from "react-icons/go";
import styles from "./ItemDetails.module.scss";
import { useSearchParams, useRouter } from "next/navigation";
import { CiCircleCheck } from "react-icons/ci";
import { useEffect, useState } from "react";
import { CardObj } from "@/lib/filterCards";
import ItemDetailsSkeleton from "@/skeleton/ItemDetailsSkeleton";
export interface CartItem {
  id: string;
  title: string | undefined;
  quantity: number;
  discount: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  color: string | null;
  size: string | null;
  price: number;
}

interface ItemDetaisProps {
  item: CardObj;
}

function ItemDetails({ item }: ItemDetaisProps) {
  const rating: number = parseFloat(item?.rating.toFixed(0) || "");
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState<null | string>(null);
  const activeColor: string = searchParams.get("color")?.toString() || "";
  const activeSize: string = searchParams.get("size")?.toString() || "";
  useEffect(() => {
    if (item) {
      setLoading(false);
    }
  }, [item]);
  function handleMinus(): void {
    setQuantity((quantity): number => (quantity > 1 ? quantity - 1 : quantity));
  }
  function handlePlus(): void {
    setQuantity((quantity): number =>
      quantity < 10 ? quantity + 1 : quantity
    );
  }
  function updateQueryParams(key: string, value: string) {
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

  function handleSubmit() {
    if (activeColor === null) {
      setError("Please choose a color.");
      return;
    }
    if (activeSize === null) {
      setError("Please choose a size.");
      return;
    }

    setError(null);
    const cartItem: CartItem = {
      id: item?._id,
      title: item?.title,
      quantity: quantity,
      discount: item?.discount,
      image: item.image,
      color: activeColor,
      size: activeSize,
      price:
        item && +(item?.price - (item?.price * item.discount) / 100).toFixed(0),
    };

    const existingCart: string = localStorage.getItem("cart") || "";
    const itemsArray: CartItem[] = existingCart ? JSON.parse(existingCart) : [];

    const index: number = itemsArray.findIndex((i) => i.id === cartItem.id);
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
      {(loading && <ItemDetailsSkeleton />) || (
        <>
          <div className={styles.container__header}>
            <h3>{item?.brand}</h3>
            <h4 className={styles.container__header__heading}>{item?.title}</h4>
            <div className={styles.container__header__rating}>
              <p>
                <Star rating={rating} />
              </p>
              <span>{rating}/</span>
            </div>
            <div className={styles.container__prices}>
              <p className={styles.container__prices__net}>
                ₹
                {item &&
                  (item.price - (item.price * item.discount) / 100).toFixed(0)}
              </p>
              <p className={styles.container__prices__total}>₹{item?.price}</p>
              <span>-{item?.discount}%</span>
            </div>
            <p className={styles.container__description}>{item?.description}</p>
          </div>
          <div className={styles.container__colors}>
            <p className={styles.container__colors__heading}>Select Colors</p>
            <div className={styles.container__colors__all}>
              {item?.colors.map((_, index) => (
                <span
                  key={index}
                  onClick={() => {
                    const colorText = item?.colors.at(index) || "";
                    updateQueryParams("color", colorText);
                  }}
                  className={styles.container__colors__all__color}
                  style={{ background: `${item?.colors.at(index)}` }}
                >
                  {activeColor === item?.colors.at(index) && <CiCircleCheck />}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.container__sizes}>
            <p className={styles.container__sizes__heading}>Choose Size</p>
            <div className={styles.container__sizes__all}>
              {item?.sizes.map((size: string, index: number) => (
                <span
                  key={size}
                  className={`${
                    activeSize === item?.sizes.at(index) ? styles.active : ""
                  }`}
                  onClick={() => {
                    const sizeText: string = item?.sizes.at(index) || "";
                    updateQueryParams("size", sizeText);
                  }}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          {error !== null && Object.keys(error).length > 0 && (
            <span className={styles.error}>
              {error !== null && <p>{error}</p>}
            </span>
          )}
          <div className={styles.container__buttons}>
            <span className={styles.container__buttons__control}>
              <HiMinus onClick={() => handleMinus()} />
              <p>{quantity}</p>
              <GoPlus onClick={() => handlePlus()} />
            </span>
            <button
              className={styles.container__buttons__btn}
              onClick={handleSubmit}
            >
              Add To Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default ItemDetails;
