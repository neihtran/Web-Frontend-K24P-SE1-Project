'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/product-card';

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'popular', label: 'Popular' },
    { id: 'sale', label: 'On Sale' },
    { id: 'rated', label: 'Best Rated' }
  ];

  const displayProducts = products.slice(0, 12);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
       <h2 className="text-3xl font-extrabold text-left mb-12">
            <span className="text-gray-900">Popular </span>
             <span className="text-red-600 font-serif">Products</span>
        </h2>
        
    
        <div className="flex justify-end gap-6 mb-12 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg font-medium pb-2 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-red-500 text-red-500'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}