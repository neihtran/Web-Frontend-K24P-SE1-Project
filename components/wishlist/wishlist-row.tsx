'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-summary";
import { useWishlist } from "@/components/wishlist/wishlist-context";
import { Input } from "@/components/ui/input";

export function WishlistRow({ item }: { item: any }) {
  const { addToCart } = useCart();
  const { toggleWishlist } = useWishlist();

  return (
    <tr className="border-b last:border-0">
      {/* IMAGE */}
      <td className="p-4">
        <div className="w-20 h-20 relative">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded-md"
          />
        </div>
      </td>

      {/* NAME */}
      <td className="p-4 font-medium">
        {item.name}
      </td>

      {/* PRICE */}
      <td className="p-4">
        ${item.price}
      </td>

      {/* QUANTITY */}
      <td className="p-4">
        <Input
          type="number"
          value={1}
          disabled
          className="w-16 h-10 text-center bg-gray-50"
        />
      </td>

      {/* TOTAL */}
      <td className="p-4 font-medium">
        ${item.price}
      </td>

      {/* ADD TO CART */}
      <td className="p-4">
        <Button
          onClick={() => addToCart(item)}
          className="bg-pink-600 hover:bg-pink-700"
        >
          Add To Cart
        </Button>
      </td>

      {/* REMOVE */}
      <td className="p-4">
        <button
          onClick={() => toggleWishlist(item)}
          className="text-gray-500 hover:text-pink-600 transition"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
