/* eslint-disable @next/next/no-img-element */
import styles from "./ItemComp.module.scss";
import ItemDetails from "./ItemDetails";
import ItemImages from "./ItemImages";
const item = {
  title: "One life graphic t-shirt",
  price: 300,
  discount: 10,
  rating: 4,
  description:
    "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  colors: ["olive", "green", "darkblue", "Black", "White", "Red"],
  size: ["S", "M", "L", "XL"],
  quantity: 1,
  specifications: {
    name: "Half Sleeve Cotton T-Shirt",
    material: "100% Cotton",
    sleeveType: "Half Sleeve",
    neckType: "Round Neck",
    fitType: "Regular Fit",
    fabricGSM: 180,
    pattern: "Solid",
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    availableColors: ["Black", "White", "Navy Blue", "Grey", "Red"],
    careInstructions: "Machine Wash Cold, Do Not Bleach, Tumble Dry Low",
    suitableFor: "Casual Wear, Daily Wear",
    gender: "Unisex",
    weight: "150g",
    countryOfOrigin: "India",
    brand: "[Your Brand Name]",
  },
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
