import ItemComp from "@/components/ItemDetail/ItemComp";
import styles from "./page.module.scss";
import Details from "@/components/ItemDetail/Details";
import { CardObj } from "@/lib/filterCards";
import connectDB from "@/lib/connectDB";
import { Item } from "@/models/product/item";
export default async function Product({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const itemId = searchParams.id;
  let Product: CardObj | null;
  let item: CardObj | null = null;
  try {
    await connectDB();
    Product = await Item.findById(itemId);
    item = JSON.parse(JSON.stringify(Product));
  } catch (error) {}
  return (
    <section className={styles.container}>
      {!item ? (
        <h1>Item is not available at this moment please thy later.</h1>
      ) : (
        <>
          <ItemComp item={item} />
          <Details itemId={itemId} />
        </>
      )}
    </section>
  );
}
