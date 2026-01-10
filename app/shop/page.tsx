import Link from "next/link";
import ShopContainer from "@/components/shop/shop-container";

export default function ShopPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <nav className="text-sm text-gray-500 mb-2">
            <Link href="/">Home</Link>
            <span className="mx-2">—</span>
            <span className="text-gray-900">Shop</span>
          </nav>
          <h1 className="text-3xl font-bold">Shop</h1>
        </div>
      </section>

      {/* SHOP LOGIC */}
      <ShopContainer />
    </>
  );
}
