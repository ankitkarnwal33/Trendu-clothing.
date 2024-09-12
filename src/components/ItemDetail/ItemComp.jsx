/* eslint-disable @next/next/no-img-element */
import styles from "./ItemComp.module.scss";
import ItemDetails from "./ItemDetails";
import ItemImages from "./ItemImages";
const item = {
  title: "One life graphic t-shirt",
  price: 300,
  discount: 10,
  brand: "ZARA",
  rating: 4,
  description:
    "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  colors: ["olive", "green", "darkblue", "Black", "White", "Red"],
  size: ["S", "M", "L", "XL"],
  quantity: 1,
};

function ItemComp() {
  return (
    <div className={styles.container}>
      <ItemImages />
      <ItemDetails item={item} />
    </div>
  );
}

export default ItemComp;
