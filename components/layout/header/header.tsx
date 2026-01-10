'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  ChevronDown,
} from 'lucide-react';

import { useCart } from '@/components/cart/cart-summary';
import { useWishlist } from '@/components/wishlist/wishlist-context';
import CartSidebar from '@/components/cart/mini-cart';
import LogoutButton from '@/components/auth/logout-button';
import { useAuth } from '@/lib/use-auth';
import { Input } from '@/components/ui/input';


export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { isLoggedIn, user } = useAuth(); 

  return (
    <>
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 gap-6">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/img/logo/logo.png"
                alt="VTC Academy"
                width={180}
                height={60}
                className="object-contain"
              />
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
              {/* Language */}
              <button className="hidden lg:flex items-center gap-2 hover:text-pink-600">
                <Image
                  src="/assets/img/icon/lang-flag.png"
                  alt="EN"
                  width={28}
                  height={20}
                />
                <span className="font-medium">English</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Currency */}
              <button className="hidden lg:flex items-center gap-1 font-medium hover:text-pink-600">
                <span>USD</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative hover:text-pink-600"
              >
                <ShoppingCart className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* USER */}
              <Link href="/auth" className="hover:text-pink-600">
                <User className="w-6 h-6" />
              </Link>

              {/* Wishlist */}
              <Link href="/wishlist" className="relative hover:text-pink-600">
                <Heart className="w-6 h-6" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}
