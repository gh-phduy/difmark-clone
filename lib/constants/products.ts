/**
 * Product Constants
 * Mock data cho development
 */

import type { Product, Seller } from "@/app/_types";

/**
 * Mock products cho development
 */
export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Grand Theft Auto V",
    slug: "gta-v",
    platform: "steam",
    coverImage: "/product1.png",
    hoverImage: "/ps5-hover.webp",
    pricing: {
      currentPrice: 29.99,
      originalPrice: 59.99,
      discount: 50,
      currency: "USD",
    },
    rating: {
      score: 4.8,
      reviewCount: 12543,
    },
    badge: "sale",
    inStock: true,
    sellerName: "GameStore",
  },
  {
    id: "2",
    name: "Red Dead Redemption 2",
    slug: "rdr2",
    platform: "steam",
    coverImage: "/product2.jpg",
    pricing: {
      currentPrice: 39.99,
      originalPrice: 59.99,
      discount: 33,
      currency: "USD",
    },
    rating: {
      score: 4.9,
      reviewCount: 8932,
    },
    badge: "bestseller",
    inStock: true,
    sellerName: "GameStore",
  },
];

/**
 * Mock sellers
 */
export const MOCK_SELLERS: Seller[] = [
  {
    id: "1",
    name: "GameStore",
    avatar: "/avt1.png",
    rating: 4.9,
    totalSales: 15234,
    verified: true,
  },
  {
    id: "2",
    name: "KeyMaster",
    rating: 4.7,
    totalSales: 8921,
    verified: true,
  },
];

/**
 * Product badges
 */
export const PRODUCT_BADGES = {
  new: {
    label: "New",
    className: "bg-dm-accent-green text-white",
  },
  sale: {
    label: "Sale",
    className: "bg-dm-accent-red text-white",
  },
  hot: {
    label: "Hot",
    className: "bg-dm-accent-orange text-white",
  },
  bestseller: {
    label: "Bestseller",
    className: "bg-dm-accent-yellow text-black",
  },
  preorder: {
    label: "Pre-order",
    className: "bg-dm-accent-blue text-white",
  },
} as const;

/**
 * Sort options
 */
export const SORT_OPTIONS = [
  { field: "price", direction: "asc", label: "Price: Low to High" },
  { field: "price", direction: "desc", label: "Price: High to Low" },
  { field: "rating", direction: "desc", label: "Highest Rated" },
  { field: "releaseDate", direction: "desc", label: "Newest First" },
  { field: "name", direction: "asc", label: "Name: A-Z" },
] as const;
