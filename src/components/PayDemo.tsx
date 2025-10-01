"use client";

import { useCart } from "@/store/cart";
import { useRouter } from "next/navigation";

export default function PayDemo() {
  const { clear } = useCart();
  const router = useRouter();

  const handlePay = () => {
    clear();
    router.push("/success"); // navigate to /success
  };

  return (
    <button
      type="button"
      onClick={handlePay}
      className="px-4 py-2 rounded-xl bg-black text-white"
    >
      Pay (Demo)
    </button>
  );
}