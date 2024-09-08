"use client";
import { useSearchParams } from "next/navigation";
import filterCards, { filterByType } from "@/lib/filterCards";
import CardProduct from "./smallComponents/CardProduct";
import { useEffect, useState } from "react";
import CardSkeleton from "@/skeleton/CardSkeleton";

export default function Products({ cards }) {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  let activePrice;
  let activeColor;
  let activeSize;
  let activeType;
  let filterdCards = cards;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [setLoading]);
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
      {loading
        ? Array.from({ length: 6 }, (_, index) => <CardSkeleton key={index} />)
        : filterdCards.map((card) => <CardProduct card={card} key={card.id} />)}
    </>
  );
}
