import Image from "next/image";
import styles from "./Navbar.module.scss";
import logo from "./../../../public/img/Logo.png";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image priority width={160} src={logo} alt="TrendU" quality={90} />
      <ul>
        <li>
          <Link href={"#"}>Shop</Link>
        </li>
        <li>
          <Link href={"#"}>On Sale</Link>
        </li>
        <li>
          <Link href={"#"}>New Arrivals</Link>
        </li>
        <li>
          <Link href={"#"}>Brands</Link>
        </li>
      </ul>
      <div className={styles.search}>
        <IoSearch className={styles.search__icon} />
        <input
          type="text"
          placeholder="Search for products"
          className={styles.search__box}
        />
      </div>
      <div className={styles.icons}>
        <IoMdCart className={styles.icons__cart} />
        <FaUserLarge className={styles.icons__user} />
      </div>
    </nav>
  );
}

export default Navbar;
