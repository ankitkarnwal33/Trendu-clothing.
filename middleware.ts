import { updateSession } from "@/actions/auth-actions";
import { NextResponse } from "next/server";

export async function middleware(request: Request) {
  console.log("done");
  const response = await updateSession(request);
  return response || NextResponse.next();
}
