"use client";
import { useSearchParams } from "next/navigation";
import filterCards, { filterByType } from "@/lib/filterCards";
import CardProduct from "./smallComponents/CardProduct";

export default function Products({ cards }) {
  const searchParams = useSearchParams();
  let activePrice;
  let activeColor;
  let activeSize;
  let activeType;
  let filterdCards = cards;
  if (searchParams.has("price")) {
    activePrice = searchParams.get("price").toString();
    filterdCards = filterCards(cards, activePrice);
  }
  if (searchParams.has("color")) {
    activeColor = searchParams.get("color").toString();
  }
  if (searchParams.has("size")) {
    activeSize = searchParams.get("size").toString();
  }
  if (searchParams.has("type")) {
    activeType = searchParams.get("type").toString();
    filterdCards = filterByType(filterdCards, activeType);
  }
  return (
    <>
      {filterdCards.map((card) => (
        <CardProduct card={card} key={card.id} />
      ))}
    </>
  );
}
