import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const res = await fetch("/collections.json");

    if (!res.ok) {
      throw new Error("Failed to fetch collections data.");
    }

    const collections = await res.json();
    return NextResponse.json(collections, { status: 200 });
  } catch (err) {
    console.error("Error fetching data: ", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
