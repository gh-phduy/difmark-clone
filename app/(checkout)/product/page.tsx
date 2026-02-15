"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
import { SiNintendoswitch } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { BsXbox } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { BsSortDown } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import Pagination from "@/app/components/shared/Pagination";
import LoadMoreButton from "@/app/components/shared/LoadMoreButton";
import { useQuery } from "@tanstack/react-query";
import {
  ProductFilterProvider,
  useProductFilter,
} from "@/app/contexts/ProductFilterContext";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  platform: string | string[];
}

const fetchListingProducts = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:5000/api/listing-products");
  if (!response.ok) throw new Error("Failed to fetch products");
  const data = await response.json();
  return data.products;
};

const CHOSEN_FILTERS = [{ id: 1, label: "Most popular" }];

const FILTERS_COLLAPSED_HEIGHT = 36; // ~1 row height in px

function ProductPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["listing-products"],
    queryFn: fetchListingProducts,
  });

  const { priceRange, selectedPlatforms } = useProductFilter();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const filtersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialSearch =
      searchParams.get("name") || searchParams.get("search") || "";
    setSearchTerm(initialSearch);
  }, [searchParams]);

  useEffect(() => {
    const trimmedSearchTerm = searchTerm.trim();
    const params = new URLSearchParams(searchParams.toString());

    if (trimmedSearchTerm) {
      params.set("name", trimmedSearchTerm);
    } else {
      params.delete("name");
    }
    params.delete("search");

    const nextUrl = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;
    router.replace(nextUrl, { scroll: false });
  }, [pathname, router, searchParams, searchTerm]);

  useEffect(() => {
    if (filtersRef.current) {
      setIsOverflowing(
        filtersRef.current.scrollHeight > FILTERS_COLLAPSED_HEIGHT + 4,
      );
    }
  }, [products]);

  // Filter products based on price range and platforms
  const filteredProducts = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      // Price filter
      const matchesPrice =
        product.price >= priceRange.min && product.price <= priceRange.max;

      // Platform filter
      const matchesPlatform =
        selectedPlatforms.length === 0 ||
        (Array.isArray(product.platform)
          ? product.platform.some((p) =>
              selectedPlatforms.includes(p.toLowerCase()),
            )
          : selectedPlatforms.includes(product.platform.toLowerCase()));

      const productTitle = product.title.toLowerCase();
      const productPlatform = Array.isArray(product.platform)
        ? product.platform.join(" ").toLowerCase()
        : product.platform.toLowerCase();
      const matchesSearch =
        normalizedSearchTerm.length === 0 ||
        productTitle.includes(normalizedSearchTerm) ||
        productPlatform.includes(normalizedSearchTerm);

      return matchesPrice && matchesPlatform && matchesSearch;
    });
  }, [products, priceRange, searchTerm, selectedPlatforms]);

  return (
    <div className="flex min-h-screen w-full justify-between bg-[#0d1117] font-sans text-white">
      {/* We assume NavBar is in layout, but based on screenshot there's a specific header look */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <ProductSidebar />
      </div>
      {/* Main Content Area */}
      <div className="w-full space-y-8 bg-midnight-850 px-4 py-6">
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
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 transition-colors hover:text-white"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
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
              {searchTerm.trim() && (
                <span className="inline-flex items-center gap-1 rounded-full bg-midnight-500 px-2 py-1 text-sm font-medium text-steel-300">
                  "{searchTerm.trim()}"
                  <IoCloseSharp
                    className="cursor-pointer hover:text-white"
                    onClick={() => setSearchTerm("")}
                  />
                </span>
              )}
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
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="flex items-center gap-1 whitespace-nowrap text-gray-400 hover:text-white"
            >
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
          {isLoading ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-[250px] animate-pulse rounded-lg bg-midnight-750"
                />
              ))}
            </div>
          ) : (
            <>
              <div className="mb-4 text-sm text-gray-400">
                Showing {filteredProducts.length} of {products.length} products
                (${priceRange.min.toFixed(2)} - ${priceRange.max.toFixed(2)})
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductGridItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    platform={product.platform}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <LoadMoreButton />
        <Pagination />
      </div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <ProductFilterProvider>
      <ProductPageContent />
    </ProductFilterProvider>
  );
}
