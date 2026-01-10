'use client';

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import ProductGrid from "@/components/product/product-grid";
import ShopToolbar from "./shop-toolbar";
import ShopFilter from "./shop-filter";
import { Checkbox } from "@/components/ui/checkbox";

type ViewMode = "grid" | "list";

export default function ShopContainer() {
  const [view, setView] = useState<ViewMode>("grid");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState<number[]>([0]);
  const [colors, setColors] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  const maxPrice = Math.max(...products.map(p => p.price));

  const categories = ["all", ...new Set(products.map(p => p.category))];
  const colorOptions = ["Black", "Blue", "Grey", "Green", "Red"];
  const brandOptions = ["Adidas", "Balenciaga", "Burberry", "Chloe"];

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      return (
        (category === "all" || p.category === category) &&
        p.price >= price[0] &&
        // (colors.length === 0 || colors.includes(p.color ?? "")) &&
        // (brands.length === 0 || brands.includes(p.brand ?? "")) &&
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    });

    if (sort === "newest") result.sort((a, b) => b.id - a.id);
    if (sort === "oldest") result.sort((a, b) => a.id - b.id);

    return result;
  }, [category, price, colors, brands, search, sort]);

  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const toggle = (v: string, list: string[], set: any) =>
    set(list.includes(v) ? list.filter(x => x !== v) : [...list, v]);

  const clearAll = () => {
    setCategory("all");
    setPrice([0]);
    setColors([]);
    setBrands([]);
    setSearch("");
    setSort("default");
    setPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <ShopToolbar
            total={filteredProducts.length}
            sort={sort}
            perPage={perPage}
            view={view}
            search={search}
            onSearchChange={(v) => {
                setSearch(v);
                setPage(1);
            }}
            onSortChange={(v) => {
                setSort(v);
                setPage(1);
            }}
            onPerPageChange={(v) => {
                setPerPage(v);
                setPage(1);
            }}
  onViewChange={setView}
/>


      <div className="flex gap-10">
        <div className="flex-1">
          <ProductGrid products={paginatedProducts} view={view} />

          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-10 h-10 border rounded ${
                  page === i + 1
                    ? "bg-pink-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        <aside className="w-72 space-y-10">
          <div className="flex justify-between">
            <h4 className="font-semibold">Filter</h4>
            <button onClick={clearAll} className="text-sm text-pink-600">
              Clear All
            </button>
          </div>

          <ShopFilter
            categories={categories}
            selectedCategory={category}
            colors={colorOptions}
            selectedColors={colors}
            price={price}
            maxPrice={maxPrice}
            onCategoryChange={(v) => {
              setCategory(v);
              setPage(1);
            }}
            onColorToggle={(c) => {
              toggle(c, colors, setColors);
              setPage(1);
            }}
            onPriceChange={(v) => {
              setPrice(v);
              setPage(1);
            }}
          />

          <div>
            <h4 className="font-semibold mb-4">Brand</h4>
            {brandOptions.map((b) => (
              <label key={b} className="flex gap-2 text-sm">
                <Checkbox
                  checked={brands.includes(b)}
                  onCheckedChange={() => {
                    toggle(b, brands, setBrands);
                    setPage(1);
                  }}
                />
                {b}
              </label>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
