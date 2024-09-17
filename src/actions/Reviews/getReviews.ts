import { Review as ReviewType } from "@/components/ItemDetail/Details";
import connectDB from "@/lib/connectDB";
import Review from "@/models/product/ratingAndReviews";

export async function getReviews(itemId: string): Promise<ReviewType[]> {
  await connectDB();
  const reviews: ReviewType[] = await Review.find({ item: itemId });
  return reviews;
}
