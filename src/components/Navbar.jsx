"use client";

//Have to optimize more further.//
import Image from "next/image";
import styles from "./Navbar.module.scss";
import logo from "./../../public/img/Logo.png";
import { IoSearch } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import List from "@/components/smallComponents/List";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Navbar() {
  const path = usePathname();
  const [icons, setHideIcons] = useState(false);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  //Function start to fetch current width of viewport
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  function toggleIcons() {
    setHideIcons(true);
  }

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    setHideIcons(false);
  }
  return (
    <nav className={styles.navbar}>
      {icons ? (
        <form className={styles.navbar__inputFull} onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Search item here..." ref={inputRef} />
        </form>
      ) : (
        <>
          <div
            className={`${styles.navbar__logo} ${icons ? styles.hidden : ""}`}
          >
            <Link href={"/"}>
              <Image src={logo} alt="trendu" height={70} />
            </Link>
          </div>
          <div
            className={`${styles.navbar__list} ${
              isOpen ? styles.navbar__open : ""
            }`}
          >
            <ul className={`${styles.navbar__list__listItems} `}>
              <Link href={"/app/shop"}>
                <li
                  className={`${styles.navbar__listItems__item} ${
                    path === "/app/shop" ? styles.active : ""
                  }`}
                >
                  Shop
                </li>
              </Link>
              <Link href={"/app/sale"}>
                <li
                  className={`${styles.navbar__listItems__item} ${
                    path === "/app/sale" ? styles.active : ""
                  }`}
                >
                  On sale
                </li>
              </Link>
              <Link href={"/app/arrivals"}>
                <li
                  className={`${styles.navbar__listItems__item} ${
                    path === "/app/arrivals" ? styles.active : ""
                  }`}
                >
                  New Arrivals
                </li>
              </Link>
              <Link href={"/app/brands"}>
                <li
                  className={`${styles.navbar__listItems__item} ${
                    path === "/app/brands" ? styles.active : ""
                  }`}
                >
                  Brands
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.navbar__search}>
            <IoSearch id="searchIcon" />
            <input type="text" placeholder="Search item here..." />
          </div>
          <div
            className={`${styles.navbar__icons} ${icons ? styles.hidden : ""} `}
          >
            <IoSearch
              className={styles.navbar__icons__search}
              onClick={toggleIcons}
            />
            {!isOpen ? (
              <FaBars
                className={styles.navbar__icons__bars}
                onClick={toggleSidebar}
              />
            ) : (
              <RxCross2
                className={styles.navbar__icons__Cross}
                onClick={toggleSidebar}
              />
            )}
            <Link href={"/cart"}>
              <IoMdCart />
            </Link>
            <FaUserLarge />
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
