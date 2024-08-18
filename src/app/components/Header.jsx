import Link from "next/link";
import styles from "./Header.module.scss";
function Header() {
  const headerData = [
    {
      count: "200",
      title: "International Brands",
      className: "",
    },
    {
      count: "2,000",
      title: "High-Quality Products",
      className: "",
    },
    {
      count: "30,000",
      title: "Happy Customers",
      className: "3rdChild",
    },
  ];
  return (
    <header className={styles.container__header__content}>
      <h1>Find clothes that matches your style</h1>
      <p>
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <Link href={"/dashboard"}>Shop Now</Link>
      <div className={styles.stats}>
        {headerData.map((data) => (
          <div className={data.className}>
            {" "}
            <h3>{data.count}+</h3>
            <span>{data.title}</span>{" "}
          </div>
        ))}
      </div>
    </header>
  );
}

export default Header;
