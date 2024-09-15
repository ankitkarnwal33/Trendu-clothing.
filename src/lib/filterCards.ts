export default function FilterPrice(cards: Object[], filter: string): Object[] {
  let newCards: Object[] = cards;
  if (typeof filter === "undefined") {
    return newCards;
  }
  if (filter === "Low to High") {
    newCards = newCards.sort((a: any, b: any) => +a.price - +b.price);
  } else {
    newCards = newCards.sort((a: any, b: any) => +b.price - +a.price);
  }
  return newCards;
}

export function filterByType(cards: Object[], filter: string): Object[] {
  if (typeof filter === "undefined") return cards;
  return cards.filter((card: any) => card.type === filter);
}
