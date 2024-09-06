"use client";
import { RxCaretRight, RxCaretUp } from "react-icons/rx";
import Button from "./smallComponents/Button";
import { FaFilter } from "react-icons/fa";
import styles from "./Filter.module.scss";
import { CiCircleCheck } from "react-icons/ci";
import { useSearchParams, useRouter } from "next/navigation";
import { act, useState } from "react";

const prices = ["Low to High", "High to Low"];
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
const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
const listItems = ["t-shirts", "shorts", "shirts", "hoodie", "jeans"];

export default function Filter({ active }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  console.log(active);
  // Get active filter values from the URL
  const activePrice = searchParams.get("price");
  const activeColor = searchParams.get("color");
  const activeSize = searchParams.get("size");
  const activeType = searchParams.get("type");

  const [priceFilterBar, setPriceFilterBar] = useState(false);
  const [activeColorBar, setActiveColorsBar] = useState(false);
  const [activeSizeBar, setActiveSizeBar] = useState(false);

  function updateQueryParam(key, value) {
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
      <div className={`${styles.filter} ${active ? styles.open : ""}`}>
        <div className={styles.filter__heading}>
          <h4>Filter</h4>
          <FaFilter />
        </div>
        <ul className={styles.filter__list}>
          {listItems.map((item, index) => (
            <li
              key={index}
              onClick={() => updateQueryParam("type", item)}
              className={`${activeType === item ? styles.active : ""}`}
            >
              <p>{item.at(0).toUpperCase() + item.slice(1)}</p>
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

        {<Button toPath={"/"} content="Apply" />}
      </div>
    </>
  );
}
