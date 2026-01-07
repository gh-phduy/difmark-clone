/**
 * Search Schemas
 * Zod validation schemas cho search functionality
 */

import { z } from "zod";

/**
 * Search query schema
 */
export const searchQuerySchema = z.object({
  query: z
    .string()
    .min(2, "Search query must be at least 2 characters")
    .max(100, "Search query is too long")
    .trim()
    .transform((val) => val.replace(/[<>]/g, "")), // Basic XSS prevention
  category: z.string().optional(),
  platform: z
    .enum(["steam", "xbox", "playstation", "nintendo", "epic", "gog"])
    .optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  sortBy: z
    .enum(["relevance", "price_asc", "price_desc", "rating", "newest"])
    .optional()
    .default("relevance"),
  page: z.number().int().min(1).optional().default(1),
  limit: z.number().int().min(1).max(100).optional().default(20),
});

export type SearchQueryData = z.infer<typeof searchQuerySchema>;

/**
 * Filter schema
 */
export const filterSchema = z.object({
  categories: z.array(z.string()).optional(),
  platforms: z
    .array(z.enum(["steam", "xbox", "playstation", "nintendo", "epic", "gog"]))
    .optional(),
  priceRange: z
    .object({
      min: z.number().min(0),
      max: z.number().min(0),
    })
    .optional()
    .refine((data) => !data || data.min <= data.max, {
      message: "Minimum price cannot be greater than maximum price",
    }),
  rating: z.number().min(0).max(5).optional(),
  inStock: z.boolean().optional(),
  onSale: z.boolean().optional(),
});

export type FilterData = z.infer<typeof filterSchema>;
