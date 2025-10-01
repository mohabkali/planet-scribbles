"use client";

import { useCart } from "@/store/cart";

export default function CartButton() {
  const items = useCart((s) => s.items);
  const count = items.reduce((n, i) => n + i.qty, 0);
  return (
    <a href="/checkout" className="px-3 py-2 rounded-xl bg-black text-white text-sm">
      Cart ({count})
    </a>
  );
}