import Link from 'next/link';
import { Menu, Flame, Gift, Droplet, Crown, Gem } from 'lucide-react';

export default function CategorySidebar() {
  const categories = [
    { name: 'Candles', icon: Flame },
    { name: 'Handmade', icon: Gift },
    { name: 'Gift Sets', icon: Gift },
    { name: 'Plastic Gifts', icon: Gem },
    { name: 'Handy Cream', icon: Droplet },
    { name: 'Cosmetics', icon: Crown },
    { name: 'Silk Accessories', icon: Gem },
  ];

  return (
    <div className="w-[280px] bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="bg-red-600 text-white px-6 py-4 flex items-center gap-3">
        <Menu className="w-5 h-5" />
        <span className="font-semibold text-lg">Categories</span>
      </div>

      <div className="py-2">
        {categories.map((cat, index) => (
          <Link
            key={index}
            href={`/shop?category=${cat.name.toLowerCase()}`}
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 hover:text-pink-600 transition-colors group"
          >
            <cat.icon className="w-5 h-5 text-pink-600" />
            <span>{cat.name}</span>
          </Link>
        ))}
      </div>

      <div className="border-t py-2">
        <Link href="/shop" className="block px-6 py-3 hover:bg-gray-50 hover:text-pink-600 font-medium">
          Value of the Day
        </Link>
        <Link href="/shop" className="block px-6 py-3 hover:bg-gray-50 hover:text-pink-600 font-medium">
          Top 100 Offers
        </Link>
        <Link href="/shop" className="block px-6 py-3 hover:bg-gray-50 hover:text-pink-600 font-medium">
          New Arrivals
        </Link>
      </div>
    </div>
  );
}