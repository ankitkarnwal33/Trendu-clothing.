import { Review as ReviewType } from "@/components/ItemDetail/RatingReviews";
import connectDB from "@/lib/connectDB";
import Review from "@/models/product/ratingAndReviews";

export async function getReviews(itemId: string): Promise<ReviewType[]> {
  await connectDB();
  //Get all reviews attatched to the current item .
  const reviews: ReviewType[] = await Review.find({ item: itemId });
  return reviews;
}
