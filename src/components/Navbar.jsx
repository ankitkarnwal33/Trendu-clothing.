"use client";

//Have to optimize more further.//
import Image from "next/image";
import styles from "./Navbar.module.scss";
import logo from "./../../public/img/Logo.png";
import { IoSearch } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import List from "@/components/smallComponents/List";
import SearchSmall from "@/components/smallComponents/SearchSmall";
function Navbar() {
  const [active, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidthView] = useState(window.innerWidth);

  //Function start to fetch current width of viewport

  useEffect(() => {
    const handleResize = () => setWidthView(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Function end to fetch current width of viewport

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
      {active ? (
        <SearchSmall onSubmit={handlesubmit} active={active} />
      ) : (
        <>
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
                <IoSearch
                  className={styles.search__icon}
                  onClick={useSearchBar}
                />
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
                <FaBars
                  className={styles.icons__bars}
                  onClick={toggleSidebar}
                />
              )}
            </div>
          )}

          {isOpen && width < 901 && <List className={styles.sidebar} />}
        </>
      )}
    </nav>
  );
}

export default Navbar;
