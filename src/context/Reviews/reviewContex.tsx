import { Review } from "@/components/ItemDetail/RatingReviews";
import { createContext } from "react";

const ReviewsContext = createContext<Review[] | null>([]);

export default ReviewsContext;
