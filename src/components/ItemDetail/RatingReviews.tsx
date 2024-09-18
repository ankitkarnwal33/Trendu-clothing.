import Links from "./Links";
import ReviewsHeader from "./ReviewsHeader";
import Reviews from "./Reviews";
import FAQs from "./FAQs";
import Specifications from "./Specifications";
import { useSearchParams } from "next/navigation";
import { useReviews } from "@/context/Reviews/reviewContex";
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
  const [error, setError] = useState<string>("");
  unstable_noStore();
  const { setReviews, loading, setLoading, setItemId } = useReviews();
  setItemId(itemId);
  useEffect(() => {
    let isMounted = true;
    async function fetchReviews() {
      isMounted = true;
      setLoading(true);
      if (itemId !== null) {
        try {
          const res = await fetch(`/api/reviews/${itemId}`);
          if (!res.ok) {
            setLoading(false);
            return setError("Can't get reviews at this moment.");
          }
          if (isMounted) {
            const data = await res.json();
            setReviews(JSON.parse(JSON.stringify(data)));
            setLoading(false);
          }
        } catch (error) {
          if (isMounted) {
            if (error instanceof Error) {
              if (error.message) {
                setError(error.message);
              }
            }
          }
        }
      }
    }
    fetchReviews();
    return () => {
      isMounted = false;
    };
  }, [itemId, setReviews, setLoading]);
  const searchParams = useSearchParams();
  const activeLink: string | null = searchParams.get("page");

  return (
    <>
      <Links />
      {activeLink === "Rating & Reviews" && (
        <>
          {!loading && error.length > 0 && <h1>{error}</h1>}
          {error.length === 0 && (
            <>
              <ReviewsHeader />
              <Reviews />
            </>
          )}
        </>
      )}
      {activeLink === "Product Details" && <Specifications />}
      {activeLink === "FAQs" && <FAQs />}
    </>
  );
}

export default RatingReviews;
