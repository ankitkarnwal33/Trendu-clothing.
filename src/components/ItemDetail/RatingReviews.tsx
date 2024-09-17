"use client";
import Links from "./Links";
import ReviewsHeader from "./ReviewsHeader";
import Reviews from "./Reviews";
import FAQs from "./FAQs";
import Specifications from "./Specifications";
import { useSearchParams } from "next/navigation";
import ReviewsContext from "@/context/Reviews/reviewContex";
import { useEffect, useState } from "react";
import { unstable_noStore } from "next/cache";

export interface Review {
  _id: string;
  item: string;
  rating: number;
  user: number;
  review: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

function RatingReviews({ itemId }: { itemId: string }) {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  unstable_noStore();
  useEffect(() => {
    let timerId: number | NodeJS.Timeout;
    async function fetchReviews() {
      setLoading(true);
      if (itemId !== null) {
        try {
          const res = await fetch(`/api/reviews/${itemId}`);
          if (!res.ok) {
            setLoading(false);
            return setError("Can't get reviews at this moment.");
          }
          const data = await res.json();
          setReviews(JSON.parse(JSON.stringify(data)));
          timerId = setTimeout(() => {
            setLoading(false);
          }, 3000);
        } catch (error) {
          if (error instanceof Error) {
            if (error.message) {
              setError(error.message);
            }
          }
        }
      }
    }
    fetchReviews();
    return () => {
      clearTimeout(timerId);
    };
  }, [itemId]);
  const searchParams = useSearchParams();
  const activeLink: string | null = searchParams.get("page");

  return (
    <>
      <Links />
      {activeLink === "Rating & Reviews" && (
        <ReviewsContext.Provider value={reviews || null}>
          {!loading && error.length > 0 && <h1>{error}</h1>}
          {error.length === 0 && (
            <>
              <ReviewsHeader itemId={itemId} />
              <Reviews loading={loading} />
            </>
          )}
        </ReviewsContext.Provider>
      )}
      {activeLink === "Product Details" && <Specifications />}
      {activeLink === "FAQs" && <FAQs />}
    </>
  );
}

export default RatingReviews;
