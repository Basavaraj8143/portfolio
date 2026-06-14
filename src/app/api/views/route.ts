import { NextRequest, NextResponse } from "next/server";

const COUNT_API_BASE = "https://api.countapi.xyz";
const DEFAULT_NAMESPACE = "basavaraj-ningasani";
const DEFAULT_KEY = "portfolio";

const noStoreHeaders = {
  "Cache-Control": "no-store, max-age=0",
};

export async function GET(request: NextRequest) {
  const mode = request.nextUrl.searchParams.get("mode") === "peek" ? "get" : "hit";
  const namespace = encodeURIComponent(
    process.env.COUNTAPI_NAMESPACE ?? DEFAULT_NAMESPACE,
  );
  const key = encodeURIComponent(process.env.COUNTAPI_KEY ?? DEFAULT_KEY);

  try {
    const response = await fetch(`${COUNT_API_BASE}/${mode}/${namespace}/${key}`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Count API returned ${response.status}`);
    }

    const payload = (await response.json()) as { value?: number };

    return NextResponse.json(
      {
        value: typeof payload.value === "number" ? payload.value : null,
      },
      { headers: noStoreHeaders },
    );
  } catch {
    return NextResponse.json({ value: null }, { headers: noStoreHeaders });
  }
}
