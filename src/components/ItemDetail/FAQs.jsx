import styles from "./FAQs.module.scss";
const faqs = [
  {
    question: "What material is this T-shirt made of?",
    answer:
      "This T-shirt is made of 100% cotton for maximum comfort and breathability.",
  },
  {
    question: "How should I wash this T-shirt?",
    answer:
      "Machine wash cold with similar colors. Tumble dry low or hang dry to avoid shrinking.",
  },
  {
    question: "What sizes are available?",
    answer: "Our T-shirts are available in sizes XS, S, M, L, XL, and XXL.",
  },
  {
    question: "Can I return or exchange the T-shirt?",
    answer:
      "Yes, we offer returns and exchanges within 30 days of purchase. Please ensure the T-shirt is in its original condition.",
  },
  {
    question: "How do I know which size to choose?",
    answer:
      "Please refer to our size chart available on the product page for detailed measurements.",
  },
  {
    question: "Is this T-shirt pre-shrunk?",
    answer:
      "Yes, this T-shirt is pre-shrunk to minimize any further shrinking after washing.",
  },
  {
    question: "What is the fit of this T-shirt?",
    answer: "This T-shirt has a classic fit with a comfortable, relaxed cut.",
  },
  {
    question: "Are there any special care instructions for this T-shirt?",
    answer:
      "Avoid using bleach and iron on low heat if needed. For best results, turn the T-shirt inside out before washing.",
  },
  {
    question: "Can I machine dry this T-shirt?",
    answer:
      "Yes, but we recommend tumble drying on low heat to prevent any potential shrinkage.",
  },
  {
    question: "Where is this T-shirt manufactured?",
    answer: "This T-shirt is manufactured in India.",
  },
  {
    question: "What colors are available?",
    answer:
      "We offer this T-shirt in various colors, including black, white, navy, red, and grey.",
  },
  {
    question: "Does this T-shirt have any special features?",
    answer:
      "This T-shirt features a reinforced collar and double-stitched hems for added durability.",
  },
  {
    question: "Is this T-shirt suitable for screen printing or embroidery?",
    answer: "Yes, this T-shirt is suitable for screen printing and embroidery.",
  },
  {
    question: "What is the return policy for sale items?",
    answer:
      "Sale items can be returned within 30 days of purchase. However, final sale items are non-returnable.",
  },
  {
    question: "Can I order this T-shirt in custom colors?",
    answer: "Custom color orders are not available at this time.",
  },
  {
    question: "What is the price of the T-shirt?",
    answer:
      "The price of the T-shirt is listed on the product page and may vary depending on size and design.",
  },
  {
    question: "Is this T-shirt available for wholesale purchase?",
    answer:
      "Yes, we offer wholesale options. Please contact our sales team for more information.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at karnwalankit89@gmail.com .",
  },
  {
    question: "Are there any discounts available?",
    answer:
      "We occasionally offer promotions and discounts. Please sign up for our newsletter to stay informed.",
  },
  {
    question: "What should I do if I received a damaged T-shirt?",
    answer:
      "Please contact our customer support team with your order number and a photo of the damage, and we will assist you with a replacement or refund.",
  },
];
function FAQs() {
  return (
    <div className={styles.faqs}>
      <ul className={styles.faqs__list}>
        {faqs.map((faq, index) => (
          <li key={faq + index}>
            <h5>{faq.question}</h5>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQs;
