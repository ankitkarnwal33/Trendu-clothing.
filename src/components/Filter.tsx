"use client";
import { RxCaretRight, RxCaretUp, RxCross2 } from "react-icons/rx";

import { FaFilter } from "react-icons/fa";
import styles from "./Filter.module.scss";
import { CiCircleCheck } from "react-icons/ci";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

type PriceTuple = [string, string];

const prices: PriceTuple = ["Low to High", "High to Low"];
const colors = [
  "green",
  "yellow",
  "pink",
  "white",
  "blue",
  "skyblue",
  "orangered",
  "black",
  "violet",
  "orange",
];
const sizes: string[] = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
const listItems: string[] = ["t-shirts", "shorts", "shirts", "hoodie", "jeans"];

interface FilterProps {
  active: boolean;
  handleActive(active: boolean): void;
}

export default function Filter({ active, handleActive }: FilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  // Get active filter values from the URL
  const activePrice: string = searchParams.get("price")?.toString() || "";
  const activeColor: string = searchParams.get("color")?.toString() || "";
  const activeSize: string = searchParams.get("size")?.toString() || "";
  const activeType: string = searchParams.get("type")?.toString() || "";

  const [priceFilterBar, setPriceFilterBar] = useState<boolean>(false);
  const [activeColorBar, setActiveColorsBar] = useState<boolean>(false);
  const [activeSizeBar, setActiveSizeBar] = useState<boolean>(false);

  function updateQueryParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (params.has(key, value)) {
      params.delete(key, value);
    } else if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <>
      <div
        className={`${styles.filter} ${active ? styles.open : styles.close} `}
      >
        <div className={styles.filter__heading}>
          <h4>Filter</h4>
          {active ? (
            <RxCross2
              className={styles.filterIcon}
              onClick={() => handleActive(active)}
            />
          ) : (
            <FaFilter />
          )}
        </div>
        <ul className={styles.filter__list}>
          {listItems.map((item: string, index) => (
            <li
              key={index}
              onClick={() => updateQueryParam("type", item)}
              className={`${activeType === item ? styles.active : ""}`}
            >
              <p>{item.at(0)?.toUpperCase() + item.slice(1)}</p>
              <RxCaretRight />
            </li>
          ))}
        </ul>
        <div className={styles.filter__price}>
          <div
            className={styles.filter__price__item}
            onClick={() => setPriceFilterBar(!priceFilterBar)}
          >
            <h4>Price</h4>
            {!priceFilterBar ? <RxCaretRight /> : <RxCaretUp />}
          </div>
          {priceFilterBar && (
            <div className={styles.filter__price__filters}>
              {prices.map((price, index) => (
                <p
                  key={index}
                  onClick={() => updateQueryParam("price", price)}
                  className={`${activePrice === price ? styles.active : ""}`}
                >
                  {price}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className={styles.filter__colors}>
          <div onClick={() => setActiveColorsBar(!activeColorBar)}>
            <h4>Colors</h4>
            {!activeColorBar ? <RxCaretRight /> : <RxCaretUp />}
          </div>
          {activeColorBar && (
            <div className={styles.filter__colors__colors}>
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{ background: color, cursor: "pointer" }}
                  onClick={() => updateQueryParam("color", color)}
                >
                  {activeColor === color ? <CiCircleCheck /> : ""}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.filter__size}>
          <div onClick={() => setActiveSizeBar(!activeSizeBar)}>
            <h4>Size</h4>
            {!activeSizeBar ? <RxCaretRight /> : <RxCaretUp />}
          </div>
          {activeSizeBar && (
            <div className={styles.filter__size__size}>
              {sizes.map((size, index) => (
                <p
                  key={index}
                  onClick={() => updateQueryParam("size", size)}
                  className={`${activeSize === size ? styles.active : ""}`}
                >
                  {size}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
