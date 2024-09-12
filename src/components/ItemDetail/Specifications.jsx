import styles from "./Specifications.module.scss";
function Specifications() {
  const specs = {
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
  };
  const titles = [
    "Material",
    "Available Sizes",
    "Colors",
    "Gender",
    "Fit",
    "Neck Type",
    "Sleeves Type",
    "Weight",
    "Fabric Gsm",
    "Pattern",
    "Suitable for",
    "Made In",
    "Care Instructions",
  ];
  return (
    <div className={styles.container}>
      {Object.values(specs).map((value, index) => (
        <div key={value}>
          <h3>{titles.at(index)}</h3>
          <p>{value.toString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Specifications;
