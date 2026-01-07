'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import RatingStars from '@/components/shared/rating-stars';
import { useCart } from '@/components/cart/cart-summary';
import { useWishlist } from '@/components/wishlist/wishlist-context';

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
      className="group relative bg-white rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Link href={`/shop-details`} className="relative block aspect-square overflow-hidden">
        <Image
          src={isHovered ? product.hoverImage : product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badges */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">
            New
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Sale
          </span>
        )}
      </Link>

      {/* Quick Actions */}
      <div
        className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* ❤️ Wishlist */}
        <button
          onClick={() => toggleWishlist(product)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
            ${
              liked
                ? 'bg-pink-600 text-white'
                : 'bg-white hover:bg-gray-900 hover:text-white'
            }`}
        >
          <Heart className="w-5 h-5" />
        </button>

        {/* 👁 View */}
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors">
          <Eye className="w-5 h-5" />
        </button>

        {/* 🛒 Add to Cart */}
        <button 
          onClick={() => addToCart(product)}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/shop-details`}>
          <h3 className="font-medium text-gray-900 hover:text-blue-600 transition-colors mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mb-2">
          <RatingStars rating={product.rating} reviews={product.reviews} />
        </div>

        {/* Price */}
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
