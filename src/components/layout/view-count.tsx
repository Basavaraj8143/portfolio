"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

const SESSION_STORAGE_KEY = "portfolio-view-counted";

export function ViewCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function loadCount() {
      const hasCounted =
        typeof window !== "undefined" &&
        window.sessionStorage.getItem(SESSION_STORAGE_KEY) === "1";

      const endpoint = hasCounted ? "/api/views?mode=peek" : "/api/views";

      try {
        const response = await fetch(endpoint, { cache: "no-store" });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { value?: number | null };
        if (typeof data.value !== "number" || isCancelled) {
          return;
        }

        if (!hasCounted) {
          window.sessionStorage.setItem(SESSION_STORAGE_KEY, "1");
        }

        setCount(data.value);
      } catch {
        // Ignore counter failures to keep the footer quiet.
      }
    }

    loadCount();

    return () => {
      isCancelled = true;
    };
  }, []);

  if (count === null) {
    return null;
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-500 shadow-sm">
      <Eye className="h-3.5 w-3.5" />
      <span>Portfolio views</span>
      <span className="font-semibold tabular-nums text-gray-700">
        {count.toLocaleString("en-US")}
      </span>
    </div>
  );
}
