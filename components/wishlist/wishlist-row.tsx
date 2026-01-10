'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-summary";
import { useWishlist } from "@/components/wishlist/wishlist-context";
import { Input } from "../ui/input";

export function WishlistRow({ item }: { item: any }) {
  const { addToCart } = useCart();
  const { toggleWishlist } = useWishlist();

  return (
    <tr className="border-b last:border-0">
      <td className="p-4">
        <Image
          src={item.image}
          alt={item.name}
          width={70}
          height={70}
          className="rounded-md"
        />
      </td>

      <td className="p-4 font-medium">{item.name}</td>

      <td className="p-4">${item.price}</td>

      <td className="p-4">
        <Input
          type="number"
          value={1}
          disabled
          className="w-16 h-10 border rounded-md text-center bg-gray-50"
        />
      </td>

      <td className="p-4 font-medium">${item.price}</td>

      <td className="p-4">
        <Button
          onClick={() => addToCart(item)}
          className="bg-pink-600 hover:bg-pink-700"
        >
          Add To Cart
        </Button>
      </td>

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
