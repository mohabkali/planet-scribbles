import Link from "next/link";

export default function SuccessPage() {
  return (
    <section className="mx-auto max-w-xl space-y-4 text-center">
      <h1 className="text-2xl font-semibold text-gray-950">Payment Successful 🎉</h1>
      <p className="text-gray-700">Thank you! Your order / booking is confirmed.</p>
      <Link
        href="/"
        className="inline-block rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
      >
        Back to Home
      </Link>
    </section>
  );
}