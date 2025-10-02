import type { Metadata } from "next";
import Link from "next/link";
import "@/app/globals.css";
import CartButton from "@/components/CartButton";

export const metadata: Metadata = {
  title: "Planet Scribbles",
  description: "e-Shop & Events",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="mx-auto max-w-6xl px-4">
          <header className="flex items-center justify-between py-5">
            <Link href="/" className="text-xl font-bold">🟢 Planet Scribbles</Link>
            <nav className="flex gap-5">
              <Link href="/shop" className="hover:underline">Shop</Link>
              <Link href="/events" className="hover:underline">Events</Link>
              <Link href="/checkout" className="hover:underline">Checkout</Link>
            </nav>
            <CartButton />
          </header>
          <main className="py-8">{children}</main>
          <footer className="py-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Planet Scribbles · Printing & Packaging
          </footer>
        </div>
      </body>
    </html>
  );
}