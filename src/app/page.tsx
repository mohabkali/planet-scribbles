export default function Home() {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-r from-amber-100 to-emerald-100 p-8">
        <h1 className="text-2xl md:text-3xl font-bold">Welcome to Planet Scribbles</h1>
        <p className="mt-2 text-gray-700">
          Printing & gifts trading. Shop products, book workshops, and catch meetups.
        </p>
        <div className="mt-4 flex gap-3">
          <a href="/shop" className="px-4 py-2 rounded-xl bg-black text-white">Shop now</a>
          <a href="/events" className="px-4 py-2 rounded-xl border">Events</a>
        </div>
      </div>

      <div className="rounded-2xl bg-white border p-4">
        <b>Offers:</b> 🎉 20% off “Sticker Pack” — auto-applied at checkout.
      </div>
    </section>
  );
}