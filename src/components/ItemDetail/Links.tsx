"use client";
import Link from "next/link";
import styles from "./Link.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
function Links() {
  type listTuple = [string, string, string];
  const list: listTuple = ["Product Details", "Rating & Reviews", "FAQs"];
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeLink: string = searchParams.get("page");

  function updateQueryParams(key: string, value: string): void {
    const params = new URLSearchParams(searchParams.toString());
    if (params.has(key, value)) {
      return;
    } else if (value) {
      params.set(key, value);
    }
    router.push(`?${params.toString()}`, {
      scroll: false,
    });
  }
  return (
    <ul className={styles.list}>
      {list.map((_, index) => (
        <li
          key={index}
          className={list.at(index) === activeLink ? styles.active : ""}
        >
          <Link
            href={"#"}
            onClick={(e) => {
              e.preventDefault();
              return updateQueryParams("page", list.at(index));
            }}
          >
            {list.at(index)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Links;
