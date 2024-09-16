"use server";
import { ReviewType } from "@/components/ItemDetail/CreateReview";
import connectDB from "@/lib/connectDB";
import Review from "@/models/product/ratingAndReviews";

export default async function newReview(data: ReviewType): Promise<boolean> {
  try {
    await connectDB();
    console.log("data base is connected");
    await Review.create(data);
    return true;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return false;
  }
}
