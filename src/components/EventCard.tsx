"use client";

import { Event } from "@/data/events";
import { useCart } from "@/store/cart";

export default function EventCard({ e }: { e: Event }) {
  const add = useCart((s) => s.add);
  const date = new Date(e.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Date / Spots */}
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-gray-700">{date}</span>
        <span className="text-gray-500">Spots: {e.spots}</span>
      </div>

      {/* Title (high contrast) */}
      <h3 className="text-lg font-semibold text-gray-950">{e.title}</h3>

      {/* Price / CTA */}
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          {e.price === 0 ? (
            <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-emerald-700">Free</span>
          ) : (
            <>QAR {e.price}</>
          )}
        </div>

        <button
          onClick={() =>
            add({ id: `ev-${e.id}`, name: e.title, price: e.price, kind: "event" })
          }
          className="rounded-xl bg-black px-3 py-2 text-sm font-medium text-white hover:opacity-90"
          aria-label={`Book ${e.title}`}
        >
          {e.price === 0 ? "Reserve" : "Book"}
        </button>
      </div>
    </div>
  );
}