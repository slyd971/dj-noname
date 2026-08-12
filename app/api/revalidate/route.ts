import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import {
  getAirtableRevalidateSlugFromRequestBody,
  isAirtableConfigured,
} from "@/lib/airtable";

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET ?? "";

function getSecretFromRequest(request: Request) {
  return (
    request.headers.get("x-revalidate-secret") ??
    new URL(request.url).searchParams.get("secret") ??
    ""
  );
}

export async function POST(request: Request) {
  if (!REVALIDATE_SECRET) {
    return NextResponse.json(
      { ok: false, error: "REVALIDATE_SECRET is not configured." },
      { status: 500 }
    );
  }

  if (getSecretFromRequest(request) !== REVALIDATE_SECRET) {
    return NextResponse.json(
      { ok: false, error: "Invalid revalidation secret." },
      { status: 401 }
    );
  }

  let body: unknown = null;

  try {
    body = await request.json();
  } catch {
    body = null;
  }

  const slug = getAirtableRevalidateSlugFromRequestBody(body);

  revalidateTag("airtable", "max");
  revalidateTag("airtable:clients", "max");

  if (slug) {
    revalidateTag(`airtable:client:${slug}`, "max");
  }

  return NextResponse.json({
    ok: true,
    configured: isAirtableConfigured(),
    revalidated: slug ? [`airtable:client:${slug}`] : ["airtable", "airtable:clients"],
  });
}
