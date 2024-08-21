"use client";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import logo from "./../../../public/img/Logo.png";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { act, useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import List from "./smallComponents/List";
import SearchSmall from "./smallComponents/SearchSmall";
function Navbar() {
  const [active, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //Function start to fetch current width of viewport
  function useView_Port() {
    const [widthView, setWidthView] = useState(
      typeof window.innerWidth === "undefined" ? 0 : window.innerWidth
    );
    useLayoutEffect(() => {
      const handleResize = () => setWidthView(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return widthView;
  }
  //Function end to fetch current width of viewport

  const width = useView_Port();
  function handlesubmit(e) {
    e.preventDefault();
    setIsActive(false);
  }
  useEffect(() => {
    if (width > 620) {
      setIsActive(false);
    }
  }, [width, active]);

  function useSearchBar() {
    setIsActive(true);
  }

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className={styles.navbar}>
      <Image priority src={logo} alt="TrendU" quality={100} />
      {width >= 900 ? <List className={"styles.open"} /> : ""}
      {width > 620 && !active && (
        <form className={styles.search}>
          <IoSearch className={styles.search__icon} />
          <input
            type="text"
            placeholder="Search for products"
            className={styles.search__box}
          />
        </form>
      )}

      {!active && (
        <div className={styles.icons}>
          {width < 621 && !active ? (
            <IoSearch className={styles.search__icon} onClick={useSearchBar} />
          ) : (
            ""
          )}

          <IoMdCart className={styles.icons__cart} />
          <FaUserLarge className={styles.icons__user} />
          {width > 901 ? (
            ""
          ) : isOpen ? (
            <>
              <RxCross2
                className={styles.icons__bars}
                onClick={toggleSidebar}
              />
            </>
          ) : (
            <FaBars className={styles.icons__bars} onClick={toggleSidebar} />
          )}
        </div>
      )}
      {active && <SearchSmall onSubmit={handlesubmit} active={active} />}
      {isOpen && width < 901 && <List className={styles.sidebar} />}
    </nav>
  );
}

export default Navbar;
