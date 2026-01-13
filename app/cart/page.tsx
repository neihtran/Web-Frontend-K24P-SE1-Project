'use client';

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/components/cart/cart-summary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
  } = useCart();

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
            <span className="text-gray-900">Cart</span>
          </nav>
          <h1 className="text-3xl font-bold">Cart</h1>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-6">
              Your cart is currently empty.
            </p>
            <Button asChild>
              <Link href="/shop">Return to Shop</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* CART TABLE */}
            <div className="lg:col-span-2 overflow-x-auto">
              <table className="w-full border text-sm">
                <thead className="bg-gray-50">
                  <tr className="border-b">
                    <th className="p-4 text-left">Images</th>
                    <th className="p-4 text-left">Courses</th>
                    <th className="p-4 text-left">Unit Price</th>
                    <th className="p-4 text-left">Quantity</th>
                    <th className="p-4 text-left">Total</th>
                    <th className="p-4 text-center">Remove</th>
                  </tr>
                </thead>

                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-b">
                      {/* IMAGE */}
                      <td className="p-4">
                        <div className="relative w-20 h-20">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                      </td>

                      {/* NAME */}
                      <td className="p-4">
                        <Link
                          href="/shop-details"
                          className="hover:text-pink-600"
                        >
                          {item.name}
                        </Link>
                      </td>

                      {/* PRICE */}
                      <td className="p-4">
                        ${item.price.toFixed(2)}
                      </td>

                      {/* QUANTITY */}
                      <td className="p-4">
                        <Input
                          type="number"
                          min={1}
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(
                              item.id,
                              Number(e.target.value)
                            )
                          }
                          className="w-20"
                        />
                      </td>

                      {/* TOTAL */}
                      <td className="p-4 font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>

                      {/* REMOVE */}
                      <td className="p-4 text-center">
                        <Button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* COUPON */}
              <div className="flex flex-wrap gap-4 mt-6">
                <Input
                  placeholder="Coupon code"
                  className="w-48"
                />
                <Button className="bg-pink-600 hover:bg-pink-700">
                  Apply Coupon
                </Button>

                <div className="flex-1" />

                <Button variant="outline">
                  Update cart
                </Button>
              </div>
            </div>

            {/* CART TOTALS */}
            <div>
              <div className="border p-6">
                <h2 className="text-lg font-semibold mb-6">
                  Cart Totals
                </h2>

                <div className="flex justify-between border-b pb-3 mb-3">
                  <span>Subtotal</span>
                  <span>
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between font-semibold mb-6">
                  <span>Total</span>
                  <span>
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>

                <Button
                  className="w-full bg-pink-600 hover:bg-pink-700"
                  asChild
                >
                  <Link href="/checkout">
                    Proceed to Checkout
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
