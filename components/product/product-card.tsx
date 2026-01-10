'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import RatingStars from '@/components/shared/rating-stars';
import { useCart } from '@/components/cart/cart-summary';
import { useWishlist } from '@/components/wishlist/wishlist-context';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const liked = isInWishlist(product.id);

  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden border hover:shadow-lg transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE */}
      <Link
        href={`/shop/${product.id}`}
        className="relative block aspect-square overflow-hidden"
      >
        <Image
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* BADGES */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            New
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
            Sale
          </span>
        )}
      </Link>

      {/* QUICK ACTIONS */}
      <div
        className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        {/* WISHLIST */}
        <Button
          type="button"
          onClick={() => toggleWishlist(product)}
          className={`w-10 h-10 rounded-full p-0 flex items-center justify-center
            ${
              liked
                ? 'bg-pink-600 text-white'
                : 'bg-black text-white hover:bg-pink-600'
            }`}
        >
          <Heart className="w-5 h-5" />
        </Button>

        {/* VIEW */}
        <Link href={`/shop/${product.id}`}>
          <Button
            type="button"
            className="w-10 h-10 rounded-full p-0 bg-black text-white hover:bg-pink-600"
          >
            <Eye className="w-5 h-5" />
          </Button>
        </Link>

        {/* ADD TO CART */}
        <Button
          type="button"
          onClick={() => addToCart(product)}
          className="w-10 h-10 rounded-full p-0 bg-black text-white hover:bg-pink-600"
        >
          <ShoppingCart className="w-5 h-5" />
        </Button>
      </div>

      {/* INFO */}
      <div className="p-4">
        <Link href={`/shop/${product.id}`}>
          <h3 className="font-medium text-gray-900 hover:text-pink-600 transition mb-2">
            {product.name}
          </h3>
        </Link>

        {/* RATING */}
        <div className="mb-2">
          <RatingStars rating={product.rating} reviews={product.reviews} />
        </div>

        {/* PRICE */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
