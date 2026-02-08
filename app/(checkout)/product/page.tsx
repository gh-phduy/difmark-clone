"use client";

import React from "react";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductSidebar from "@/app/components/product/ProductSidebar";
import ProductGridItem from "@/app/components/product/ProductGridItem";

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

export default function ProductPage() {
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
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <span>🏠</span>
          <span>›</span>
          <span className="text-gray-300">Products</span>
        </div>

        <h1 className="mb-6 text-3xl font-bold">Products</h1>

        {/* Top Controls */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search by Product name"
              className="h-10 border-[#30363d] bg-[#161b22] pl-10 text-gray-300 focus-visible:ring-[#238636]"
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="popular">
              <SelectTrigger className="w-[180px] border-[#30363d] bg-[#161b22]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="border-[#30363d] bg-[#161b22]">
                <SelectItem value="popular">Most popular</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              className="border-[#30363d] bg-[#161b22] px-3"
            >
              <List className="mr-2 h-4 w-4" /> List
            </Button>
          </div>
        </div>

        {/* Filters Tag List */}
        <div className="mb-6 flex items-center justify-between text-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-400">Chosen filters :</span>
            <span className="inline-flex items-center gap-1 rounded border border-[#30363d] bg-[#232936] px-2 py-1 text-gray-300">
              $0.00 - $15.00{" "}
              <X className="h-3 w-3 cursor-pointer hover:text-white" />
            </span>
            <span className="inline-flex items-center gap-1 rounded border border-[#30363d] bg-[#232936] px-2 py-1 text-gray-300">
              Most popular{" "}
              <X className="h-3 w-3 cursor-pointer hover:text-white" />
            </span>
            <span className="inline-flex items-center gap-1 rounded border border-[#30363d] bg-[#232936] px-2 py-1 text-gray-300">
              Offers Under €10{" "}
              <X className="h-3 w-3 cursor-pointer hover:text-white" />
            </span>
          </div>
          <button className="flex items-center gap-1 text-gray-400 hover:text-white">
            Clear all <X className="h-4 w-4" />
          </button>
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
