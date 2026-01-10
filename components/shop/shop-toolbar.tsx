'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ViewMode = "grid" | "list";

interface ShopToolbarProps {
  total: number;
  sort: string;
  perPage: number;
  view: ViewMode;
  search: string;
  onSearchChange: (v: string) => void;
  onSortChange: (v: string) => void;
  onPerPageChange: (v: number) => void;
  onViewChange: (v: ViewMode) => void;
}

export default function ShopToolbar({
  total,
  sort,
  perPage,
  view,
  search,
  onSearchChange,
  onSortChange,
  onPerPageChange,
  onViewChange,
}: ShopToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between mb-6 border-b pb-4 gap-4">
      <p className="text-sm text-gray-500">
        {total} Item On List
      </p>

      <div className="flex items-center gap-4 flex-wrap">
        {/* SEARCH */}
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-56"
        />

        {/* SORT */}
        <Select value={sort} onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by (default)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Sort by (default)</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </SelectContent>
        </Select>

        {/* PER PAGE */}
        <Select
          value={String(perPage)}
          onValueChange={(v) => onPerPageChange(Number(v))}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="12">12 per page</SelectItem>
            <SelectItem value="20">20 per page</SelectItem>
            <SelectItem value="30">30 per page</SelectItem>
          </SelectContent>
        </Select>

        {/* VIEW MODE */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => onViewChange("list")}
          className={view === "list" ? "border-pink-600 text-pink-600" : ""}
        >
          ☰
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => onViewChange("grid")}
          className={view === "grid" ? "border-pink-600 text-pink-600" : ""}
        >
          ▦
        </Button>
      </div>
    </div>
  );
}
