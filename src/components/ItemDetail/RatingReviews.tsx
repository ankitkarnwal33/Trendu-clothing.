"use client";
import Links from "./Links";
import ReviewsHeader from "./ReviewsHeader";
import Reviews from "./Reviews";
import FAQs from "./FAQs";
import Specifications from "./Specifications";
import { useSearchParams } from "next/navigation";

function RatingReviews({ itemId }: { itemId: string }) {
  //Rating and reviews should be fetched for current item initially. Implement it later.

  const searchParams = useSearchParams();
  const activeLink: string | null = searchParams.get("page");
  return (
    <>
      <Links />
      {activeLink === "Rating & Reviews" && (
        <>
          <ReviewsHeader itemId={itemId} />
          <Reviews />
        </>
      )}
      {activeLink === "Product Details" && <Specifications />}
      {activeLink === "FAQs" && <FAQs />}
    </>
  );
}

export default RatingReviews;
