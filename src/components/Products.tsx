"use client";
import { useSearchParams } from "next/navigation";
import filterCards, { CardObj, filterByType } from "@/lib/filterCards";
import CardProduct from "./smallComponents/CardProduct";
import { useEffect, useState } from "react";
import CardSkeleton from "@/skeleton/CardSkeleton";

export default function Products({ cards }: { cards: CardObj[] }) {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState<boolean>(true);
  let activePrice: string;
  let activeColor: string;
  let activeSize: string;
  let activeType: string;
  let filterdCards: CardObj[] = cards;
  useEffect(() => {
    if (cards) setLoading(false);
  }, [cards]);
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
        : filterdCards.map((card) => (
            <CardProduct card={card} key={card._id} />
          ))}
    </>
  );
}
