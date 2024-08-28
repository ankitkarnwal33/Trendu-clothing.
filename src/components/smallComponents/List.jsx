import Link from "next/link";

function List() {
  return (
    <ul>
      <li key={1}>
        <Link href={"#"}>Shop</Link>
      </li>
      <li key={2}>
        <Link href={"#"}>On Sale</Link>
      </li>
      <li key={3}>
        <Link href={"#"}>New Arrivals</Link>
      </li>
      <li key={4}>
        <Link href={"#"}>Brands</Link>
      </li>
    </ul>
  );
}

export default List;
