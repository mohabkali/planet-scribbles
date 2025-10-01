import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Shop</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}