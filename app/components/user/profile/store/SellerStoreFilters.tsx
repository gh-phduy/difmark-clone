"use client";

import { Grid3X3, ListFilter, Search, Shapes } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface SellerStoreFiltersProps {
  searchTerm: string;
  onChangeSearchTerm: (value: string) => void;
  category: string;
  onChangeCategory: (value: string) => void;
  categoryOptions: string[];
  sortBy: string;
  onChangeSortBy: (value: string) => void;
}

export default function SellerStoreFilters({
  searchTerm,
  onChangeSearchTerm,
  category,
  onChangeCategory,
  categoryOptions,
  sortBy,
  onChangeSortBy,
}: SellerStoreFiltersProps) {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_220px_220px_90px]">
      <div className="relative">
        <Search
          size={18}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-steel-500"
        />
        <Input
          value={searchTerm}
          onChange={(event) => onChangeSearchTerm(event.target.value)}
          placeholder="Search by Product name"
          className="h-11 border-midnight-700 bg-midnight-800 pl-10"
        />
      </div>

      <Select
        value={category}
        onValueChange={(value) => {
          if (!value) {
            return;
          }
          onChangeCategory(value);
        }}
      >
        <SelectTrigger className="h-11 border-midnight-700 bg-midnight-800">
          <Shapes size={15} className="mr-2 text-steel-500" />
          <SelectValue placeholder="All categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All categories</SelectItem>
          {categoryOptions.map((option) => (
            <SelectItem key={option} value={option.toLowerCase()}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={sortBy}
        onValueChange={(value) => {
          if (!value) {
            return;
          }
          onChangeSortBy(value);
        }}
      >
        <SelectTrigger className="h-11 border-midnight-700 bg-midnight-800">
          <ListFilter size={15} className="mr-2 text-steel-500" />
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="popular">Sort by popularity</SelectItem>
          <SelectItem value="price-asc">Price: Low to High</SelectItem>
          <SelectItem value="price-desc">Price: High to Low</SelectItem>
          <SelectItem value="title">A-Z</SelectItem>
        </SelectContent>
      </Select>

      <Button
        type="button"
        variant="outline"
        className="h-11 border-midnight-700 bg-midnight-800 text-steel-500"
      >
        <Grid3X3 size={16} className="mr-2" /> Grid
      </Button>
    </div>
  );
}
