import { NextResponse } from "next/server";
import { getReviews } from "@/actions/Reviews/getReviews";

export async function GET(
  request: Request,
  { params }: { params: { itemId: string } }
) {
  const { itemId } = params;

  if (!itemId) {
    return NextResponse.json({ error: "Item ID is required" }, { status: 400 });
  }

  try {
    const reviews = await getReviews(itemId);
    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
