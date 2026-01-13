'use client';

import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";

interface ShopFilterProps {
  categories: string[];
  selectedCategory: string;
  colors: string[];
  selectedColors: string[];
  price: number[];
  maxPrice: number;
  onCategoryChange: (v: string) => void;
  onColorToggle: (v: string) => void;
  onPriceChange: (v: number[]) => void;
}

export default function ShopFilter({
  categories,
  selectedCategory,
  colors,
  selectedColors,
  price,
  maxPrice,
  onCategoryChange,
  onColorToggle,
  onPriceChange,
}: ShopFilterProps) {
  return (
    <aside className="space-y-10">
      {/* CATEGORY */}
      <div>
        <h4 className="font-semibold mb-4">Category</h4>
        <ul className="space-y-2 text-sm">
          {categories.map((c) => (
            <li key={c}>
              <Button
                variant="ghost"
                type="button"
                onClick={() => onCategoryChange(c)}
                className={`hover:text-pink-600 ${
                  selectedCategory === c
                    ? "text-pink-600 font-medium"
                    : "text-gray-700"
                }`}
              >
                {c}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* PRICE */}
      <div>
        <h4 className="font-semibold mb-4">Filter by price</h4>
        <Slider
          value={price}
          min={0}
          max={maxPrice}
          step={1}
          onValueChange={onPriceChange}
        />
        <p className="text-sm mt-2">
          Price: <span className="font-medium">${price[0]}</span>
        </p>
      </div>

      {/* COLOR */}
      <div>
        <h4 className="font-semibold mb-4">Color</h4>
        <ul className="space-y-2 text-sm">
          {colors.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <Checkbox
                checked={selectedColors.includes(c)}
                onCheckedChange={() => onColorToggle(c)}
              />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
