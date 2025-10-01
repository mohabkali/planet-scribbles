"use client";

import { Product } from "@/data/products";
import { useCart } from "@/store/cart";

export default function ProductCard({ p }: { p: Product }) {
  const add = useCart((s) => s.add);

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Image placeholder */}
      <div className="mb-3 flex h-28 items-center justify-center rounded-xl bg-gray-100">
        <span className="text-xs text-gray-500">image</span>
      </div>

      {/* Title (high contrast) + optional tag */}
      <div className="mb-1 flex items-center gap-2">
        <h3 className="text-base font-semibold text-gray-950">{p.name}</h3>
        {p.tag && (
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
            {p.tag}
          </span>
        )}
      </div>

      {/* Price (secondary tone) */}
      <div className="text-sm text-gray-600">QAR {p.price}</div>

      {/* Actions */}
      <div className="mt-3">
        <button
          onClick={() => add({ id: p.id, name: p.name, price: p.price, kind: "product" })}
          className="w-full rounded-xl bg-black px-3 py-2 text-sm font-medium text-white hover:opacity-90"
          aria-label={`Add ${p.name} to cart`}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}