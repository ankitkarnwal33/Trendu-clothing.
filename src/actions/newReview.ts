"use server";
import { ReviewType } from "@/components/ItemDetail/CreateReview";
import connectDB from "@/lib/connectDB";
import Review from "@/models/product/ratingAndReviews";

export default async function newReview(data: ReviewType): Promise<boolean> {
  try {
    await connectDB();
    await Review.create(data);
    return true;
  } catch (error: unknown) {
    return false;
  }
}
