"use client";
import { FaFilter } from "react-icons/fa6";
import Filter from "./Filter";
import Products from "./Products";
import { Suspense, useState } from "react";
import styles from "@/app/product/casual/page.module.scss";

function FilterMain({ cards }) {
  const [active, setActive] = useState<boolean>(false);

  function handleActive(): void {
    setActive(!active);
  }
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Filter active={active} handleActive={handleActive} />
      <div className={styles.products}>
        <div className={styles.products__typo}>
          <h3 className={styles.products__typo__heading}>Casual</h3>
          <div className={styles.products__typo__sub}>
            <div className={styles.products__typo__sub__para}>
              <p>Showing 1-10 of 100 products</p>
              <p>
                Sort by: <span>Most Popular</span>
              </p>
            </div>
            {!active && (
              <FaFilter className={styles.filterIcon} onClick={handleActive} />
            )}
          </div>
        </div>
        <div className={styles.products__items}>
          <Products cards={cards} />
        </div>
      </div>
    </Suspense>
  );
}

export default FilterMain;
