import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("d1272b723e3dfdd5fcb2d1d0728f89bb", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
