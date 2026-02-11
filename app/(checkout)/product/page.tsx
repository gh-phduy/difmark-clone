"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  List,
  LayoutGrid,
  RotateCcw,
  X,
  ShoppingCart,
  Bell,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import ProductSidebar from "@/app/components/product/ProductSidebar";
import ProductGridItem from "@/app/components/product/ProductGridItem";
import { IoMdHome } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsSortDown } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

const products = [
  {
    id: 1,
    title: "Fallout 76",
    price: 0.59,
    image: "/battlefield_6.jpg",
    platform: "xbox" as const,
  },
  {
    id: 2,
    title: "Harold Halibut",
    price: 0.82,
    image: "/battlefield_6.jpg",
    platform: "pc" as const,
  },
  {
    id: 3,
    title: "Settlement Survival",
    price: 0.65,
    image: "/battlefield_6.jpg",
    platform: "pc" as const,
  },
  {
    id: 4,
    title: "Beholder Conductor",
    price: 0.65,
    image: "/battlefield_6.jpg",
    platform: "pc" as const,
  },
  {
    id: 5,
    title: "Nidhogg 2",
    price: 0.58,
    image: "/battlefield_6.jpg",
    platform: "pc" as const,
  },
  {
    id: 6,
    title: "Escape from Ever After",
    price: 9.16,
    image: "/battlefield_6.jpg",
    platform: "pc" as const,
  },
  {
    id: 7,
    title: "Caravan SandWitch",
    price: 1.0,
    image: "/battlefield_6.jpg",
    platform: "pc" as const,
  },
  {
    id: 8,
    title: "Batman Arkham Origins",
    price: 1.66,
    image: "/battlefield_6.jpg",
    platform: "pc" as const,
  },
];

const CHOSEN_FILTERS = [
  { id: 1, label: "Most popular" },
  { id: 2, label: "Game Keys" },
  { id: 3, label: "Steam" },
  { id: 4, label: "DLC" },
  { id: 5, label: "GOG" },
  { id: 6, label: "Electronic arts" },
  { id: 7, label: "Ubisoft" },
  { id: 8, label: "Upcoming" },
  { id: 9, label: "Epic Games" },
  { id: 10, label: "Rockstar" },
  { id: 11, label: "Microsoft" },
  { id: 12, label: "Battle.Net" },
  { id: 13, label: "Bethesda" },
  { id: 14, label: "Random Keys" },
  { id: 15, label: "Console Games" },
  { id: 16, label: "Xbox Live" },
  { id: 17, label: "Xbox Keys" },
  { id: 18, label: "Xbox One" },
  { id: 19, label: "Xbox Series X" },
  { id: 20, label: "Xbox Accounts" },
  { id: 21, label: "Action" },
  { id: 22, label: "Adventure" },
  { id: 23, label: "Simulator" },
  { id: 24, label: "Shooter" },
  { id: 25, label: "Strategy" },
  { id: 26, label: "Quest" },
  { id: 27, label: "RPG" },
  { id: 28, label: "Racing" },
  { id: 29, label: "Fighting" },
  { id: 30, label: "Sport" },
  { id: 31, label: "Survival" },
  { id: 32, label: "Platformer" },
  { id: 33, label: "Horror" },
  { id: 34, label: "Puzzle" },
];

const FILTERS_COLLAPSED_HEIGHT = 36; // ~1 row height in px

export default function ProductPage() {
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const filtersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (filtersRef.current) {
      setIsOverflowing(
        filtersRef.current.scrollHeight > FILTERS_COLLAPSED_HEIGHT + 4,
      );
    }
  }, []);
  return (
    <div className="flex min-h-screen w-full justify-between bg-[#0d1117] font-sans text-white">
      {/* We assume NavBar is in layout, but based on screenshot there's a specific header look */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar */}
        <ProductSidebar />
      </div>
      {/* Main Content Area */}
      <div className="w-full bg-midnight-850 px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-steel-500">
          <IoMdHome size={18} />
          <FaChevronRight size={12} />
          <span className="font-medium">Products</span>
        </div>

        <h1 className="mb-6 text-3xl font-bold">Products</h1>

        {/* Top Controls */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <IoSearch
              size={24}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"
            />
            <Input
              placeholder="Search by Product name"
              className="h-11 bg-midnight-750 pl-10 text-gray-300"
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="Most popular">
              <SelectTrigger
                className="h-11 w-[200px] bg-midnight-750 text-base text-white"
                size="default"
              >
                <BsSortDown size={18} />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent
                className="text-base text-red-500"
                alignItemWithTrigger={false}
              >
                <SelectGroup>
                  <SelectLabel>Sort by</SelectLabel>
                  <SelectItem value="Most popular">Most popular</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              className="h-11 border-[#30363d] bg-midnight-700 px-3 text-steel-300"
            >
              <List className="mr-2 h-6 w-6" /> List
            </Button>
          </div>
        </div>

        {/* Filters Tag List */}
        <div className="mb-6 flex gap-4 text-base">
          <div className="flex-1">
            <div
              ref={filtersRef}
              className={cn(
                "flex flex-wrap items-center gap-2 overflow-hidden transition-all duration-300",
              )}
              style={{
                maxHeight: showAllFilters
                  ? filtersRef.current?.scrollHeight
                  : FILTERS_COLLAPSED_HEIGHT,
              }}
            >
              <span className="whitespace-nowrap text-gray-400">
                Chosen filters :
              </span>
              {CHOSEN_FILTERS.map((filter) => (
                <span
                  key={filter.id}
                  className="inline-flex items-center gap-1 rounded-full bg-midnight-500 px-2 py-1 text-sm font-medium text-steel-300"
                >
                  {filter.label}
                  <IoCloseSharp className="cursor-pointer hover:text-white" />
                </span>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1">
            <button className="flex items-center gap-1 whitespace-nowrap text-gray-400 hover:text-white">
              Clear all <X className="h-4 w-4" />
            </button>
            {isOverflowing && (
              <button
                onClick={() => setShowAllFilters(!showAllFilters)}
                className="text-sm whitespace-nowrap text-forest-500 transition-colors hover:text-forest-100"
              >
                {showAllFilters ? "Show less ▲" : "Show more ▼"}
              </button>
            )}
          </div>
        </div>
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductGridItem
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                platform={product.platform}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
