import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("d01483c4f4654f9989456d08e32170d3", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
