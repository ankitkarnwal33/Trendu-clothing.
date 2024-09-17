"use client";
import Links from "./Links";
import ReviewsHeader from "./ReviewsHeader";
import Reviews from "./Reviews";
import FAQs from "./FAQs";
import Specifications from "./Specifications";
import { useSearchParams } from "next/navigation";
import { Review } from "./Details";

function RatingReviews({
  itemId,
  reviews,
}: {
  itemId: string;
  reviews: Review[] | null;
}) {
  //Rating and reviews should be fetched for current item initially. Implement it later.
  const totalReviews: number | undefined = reviews?.length;
  const searchParams = useSearchParams();
  const activeLink: string | null = searchParams.get("page");

  return (
    <>
      <Links />
      {activeLink === "Rating & Reviews" && (
        <>
          <ReviewsHeader itemId={itemId} totalReviews={totalReviews} />
          <Reviews reviews={reviews} />
        </>
      )}
      {activeLink === "Product Details" && <Specifications />}
      {activeLink === "FAQs" && <FAQs />}
    </>
  );
}

export default RatingReviews;
