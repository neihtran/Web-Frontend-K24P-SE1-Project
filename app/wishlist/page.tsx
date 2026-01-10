'use client';

import Link from "next/link";
import { WishlistTable } from '@/components/wishlist/wishlist-table';
import { useWishlist } from '@/components/wishlist/wishlist-context';

export default function WishlistPage() {
  const { items } = useWishlist();

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <nav className="text-sm text-gray-500 mb-2">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span className="mx-2">—</span>
            <span className="text-gray-900">Wishlist</span>
          </nav>
          <h1 className="text-3xl font-bold">Wishlist</h1>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {items.length === 0 ? (
          <p className="text-gray-500">Your wishlist is empty.</p>
        ) : (
          <WishlistTable items={items} />
        )}
      </div>
    </>
  );
}
