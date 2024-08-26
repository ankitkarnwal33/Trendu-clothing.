import styles from "./Brands.module.scss";
import Prada from "./../../../public/Vectors/Prada.png";
import Versace from "./../../../public/Vectors/Versace.png";
import Gucci from "./../../../public/Vectors/Gucci.png";
import Calvin from "./../../../public/Vectors/Calvin.png";
import Zara from "./../../../public/Vectors/Zara.png";
import Image from "next/image";

const brands = [
  {
    image: Calvin,
    alt: "Calvin Klein",
  },
  {
    image: Gucci,
    alt: "Gucci",
  },
  {
    image: Prada,
    alt: "Prada",
  },
  {
    image: Versace,
    alt: "Versace",
  },
  {
    image: Zara,
    alt: "Zara",
  },
];

function Brands() {
  return (
    <div className={styles.brands}>
      {brands.map((brand) => (
        <div key={brand.alt}>
          <Image src={brand.image} alt={brand.alt} quality={1} width={100} />
        </div>
      ))}
    </div>
  );
}

export default Brands;
