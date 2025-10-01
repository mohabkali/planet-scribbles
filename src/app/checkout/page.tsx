"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/store/cart";

export default function CheckoutPage() {
  const { items, remove, clear } = useCart();
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  // Example offer: 20% off if any item name contains "Sticker"
  const discountEligible = items.some((i) => i.name.toLowerCase().includes("sticker"));
  const discount = discountEligible ? Math.round(subtotal * 0.2) : 0;
  const total = Math.max(0, subtotal - discount);

  if (items.length === 0) {
    return (
      <section className="max-w-2xl mx-auto">
        <h2 className="mb-4 text-xl font-semibold">Checkout</h2>
        <div className="rounded-xl border bg-white p-4 text-gray-700">
          Your cart is empty.
          <Link href="/shop" className="ml-2 underline">
            Go to shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-2xl">
      <h2 className="mb-4 text-xl font-semibold">Checkout</h2>

      <ul className="space-y-3">
        {items.map((i) => (
          <li
            key={i.id}
            className="flex items-center justify-between rounded-xl border bg-white p-3"
          >
            <div>
              <div className="font-medium text-gray-950">{i.name}</div>
              <div className="text-sm text-gray-600">
                {i.kind} · QAR {i.price} × {i.qty}
              </div>
            </div>
            <button
              onClick={() => remove(i.id)}
              className="text-sm underline"
              aria-label={`Remove ${i.name}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-1 text-right">
        <div>
          Subtotal: <b>QAR {subtotal}</b>
        </div>
        {discount > 0 && (
          <div className="text-emerald-600">Offer: − QAR {discount}</div>
        )}
        <div className="text-lg">
          Total: <b>QAR {total}</b>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <PayDemoButton onPaid={clear} />
        {/* If you wire Stripe later, keep the demo button separate from any <form> */}
      </div>
    </section>
  );
}

/** Button that clears the cart then navigates to /success */
function PayDemoButton({ onPaid }: { onPaid: () => void }) {
  const router = useRouter();
  const handleClick = () => {
    onPaid();
    router.push("/success");
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
    >
      Pay (Demo)
    </button>
  );
}