import type { Metadata } from "next";
import "@/app/globals.css";
import CartButton from "@/components/CartButton";  // <-- add this

export const metadata: Metadata = {
  title: "Planet Scribbles",
  description: "e-Shop & Events",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body  className="min-h-screen bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-4">
          <header className="py-5 flex items-center justify-between">
            <a href="/" className="font-bold text-xl">🟢 Planet Scribbles</a>
            <nav className="flex gap-5">
              <a href="/shop" className="hover:underline">Shop</a>
              <a href="/events" className="hover:underline">Events</a>
              <a href="/checkout" className="hover:underline">Checkout</a>
            </nav>
            <CartButton /> {/* now defined */}
          </header>
          <main className="py-8">{children}</main>
          <footer className="py-8 text-sm text-center text-gray-500">
            © {new Date().getFullYear()} Planet Scribbles · Printing & Packaging
          </footer>
        </div>
      </body>
    </html>
  );
}