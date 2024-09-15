"use client";
import Links from "./Links";
import ReviewsHeader from "./ReviewsHeader";
import Reviews from "./Reviews";
import FAQs from "./FAQs";
import Specifications from "./Specifications";
import { useSearchParams } from "next/navigation";

interface RatingReviewsProps {
  itemId: string;
}
function RatingReviews({ itemId }: RatingReviewsProps) {
  const searchParams = useSearchParams();
  const activeLink: string = searchParams.get("page");
  return (
    <>
      <Links />
      {activeLink === "Rating & Reviews" && (
        <>
          <ReviewsHeader />
          <Reviews />
        </>
      )}
      {activeLink === "Product Details" && <Specifications />}
      {activeLink === "FAQs" && <FAQs />}
    </>
  );
}

export default RatingReviews;
