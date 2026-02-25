import { NextResponse } from "next/server";

// counterapi.dev v1 — free, no auth required
// Increments on every visit and returns the new count
const NAMESPACE = "zuhaibrashid-portfolio";
const KEY = "visitors";

export async function GET() {
  try {
    const res = await fetch(
      `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`,
      { next: { revalidate: 0 } } // always fresh
    );

    if (!res.ok) {
      throw new Error(`counterapi responded with ${res.status}`);
    }

    const data = await res.json();
    // counterapi v1 returns { count: number }
    return NextResponse.json({ count: data.count ?? data.value ?? 0 });
  } catch (err) {
    console.error("[visitor-count] fetch failed:", err);
    // Fallback so the UI never breaks
    return NextResponse.json({ count: null });
  }
}
