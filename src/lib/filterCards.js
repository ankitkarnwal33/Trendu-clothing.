export default function FilterPrice(cards, filter) {
    let newCards = cards;
    if (typeof filter === "undefined") {
        return newCards;
    }
    if (filter === "Low to High") {
        newCards = newCards.sort((a, b) => +a.price - +b.price);
    } else {
        newCards = newCards.sort((a, b) => +b.price - +a.price);
    }
    return newCards;
}

export function filterByType(cards, filter) {
    console.log(filter)
    if (typeof filter === "undefined") return cards;
    return cards.filter((card) => card.type === filter);
}