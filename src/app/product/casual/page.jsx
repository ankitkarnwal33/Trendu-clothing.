import FilterMain from "@/components/FilterMain";
import styles from "./page.module.scss";
import connectDB from "@/lib/connectDB";
import { Item } from "@/models/product/item";
import PlainObj from "@/lib/PlainObject";

// const cards = [
//   {
//     id: 1,
//     title: "T-shirt with Tape details",
//     image: "/img/Arrivals/image7.png",
//     type: "t-shirts",
//     rating: 3.3,
//     toatalRating: 5,
//     price: 220,
//     discount: 0,
//   },
//   {
//     id: 2,
//     title: "Skinny Fit Jeans",
//     image: "/img/Arrivals/image8.png",
//     type: "jeans",
//     rating: 3.3,
//     toatalRating: 5,
//     price: 330,
//     discount: 20,
//   },
//   {
//     id: 3,
//     title: "Checkered Shirt",
//     image: "/img/Arrivals/image9.png",
//     type: "shirts",
//     rating: 3.3,
//     toatalRating: 5,
//     price: 420,
//     discount: 0,
//   },
//   {
//     id: 4,
//     title: "Sleeve Striped T-shirt",
//     image: "/img/Arrivals/image10.png",
//     type: "t-shirts",
//     rating: 4.3,
//     toatalRating: 5,
//     price: 320,
//     discount: 15,
//   },
//   {
//     id: 5,
//     title: "Vertical striped shirt",
//     image: "/img/Best_Selling/image7.png",
//     type: "shirts",
//     rating: 2.3,
//     toatalRating: 5,
//     price: 820,
//     discount: 50,
//   },
//   {
//     id: 6,
//     title: "Courage Graphic T-shirt",
//     image: "/img/Best_Selling/image8.png",
//     type: "t-shirts",

//     rating: 2.3,
//     toatalRating: 5,
//     price: 333,
//     discount: 11,
//   },
//   {
//     id: 7,
//     title: "Loose Fit Bermuda Shorts",
//     image: "/img/Best_Selling/image9.png",
//     type: "shorts",
//     rating: 5,
//     toatalRating: 5,
//     price: 280,
//     discount: 4,
//   },
//   {
//     id: 8,
//     title: "Faded Skinny Jeans",
//     image: "/img/Best_Selling/image10.png",
//     type: "jeans",
//     rating: 4.9,
//     toatalRating: 5,
//     price: 440,
//     discount: 19,
//   },
//   {
//     id: 9,
//     title: "Faded Skinny Jeans",
//     image: "/img/Best_Selling/image10.png",
//     type: "jeans",
//     rating: 4.9,
//     toatalRating: 5,
//     price: 960,
//     discount: 19,
//   },
// ];

export default async function Casual() {
  let products;
  let cards;
  try {
    await connectDB();
    products = await Item.find({});
    cards = PlainObj(products);
  } catch (error) {
    return <h1>{JSON.stringify(error.message)}</h1>;
  }
  return (
    <div className={styles.container}>
      <FilterMain cards={cards} />
    </div>
  );
}
