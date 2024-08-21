import Link from "next/link";

function List() {
  return (
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
  );
}

export default List;
