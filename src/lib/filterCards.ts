export interface CardObj {
  __v: number;
  _id: string;
  brand: string;
  colors: string[];
  createdAt: Date;
  description: string;
  discount: number;
  image: string;
  price: number;
  rating: number;
  sizes: string[];
  title: string;
  type: string;
  updatedAt: string;
}

export default function FilterPrice(
  cards: CardObj[],
  filter: string
): CardObj[] {
  let newCards: CardObj[] = cards;
  if (typeof filter === "undefined") {
    return cards;
  }
  if (filter === "Low to High") {
    newCards = newCards.sort((a: any, b: any) => +a.price - +b.price);
  } else {
    newCards = newCards.sort((a: any, b: any) => +b.price - +a.price);
  }
  return newCards;
}

export function filterByType(cards: CardObj[], filter: string): CardObj[] {
  if (typeof filter === "undefined") return cards;
  return cards.filter((card: any) => card.type === filter);
}
