"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

/* ============================================
   TYPES
   ============================================ */

interface PriceRange {
  min: number;
  max: number;
}

interface ProductFilterContextType {
  priceRange: PriceRange;
  setPriceRange: (range: PriceRange) => void;
  selectedPlatforms: string[];
  setSelectedPlatforms: (platforms: string[]) => void;
}

/* ============================================
   CONTEXT
   ============================================ */

const ProductFilterContext = createContext<
  ProductFilterContextType | undefined
>(undefined);

/* ============================================
   PROVIDER
   ============================================ */

interface ProductFilterProviderProps {
  children: ReactNode;
}

export function ProductFilterProvider({
  children,
}: ProductFilterProviderProps) {
  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: 0,
    max: 1450,
  });
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  return (
    <ProductFilterContext.Provider
      value={{
        priceRange,
        setPriceRange,
        selectedPlatforms,
        setSelectedPlatforms,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
}

/* ============================================
   HOOK
   ============================================ */

export function useProductFilter() {
  const context = useContext(ProductFilterContext);
  if (!context) {
    throw new Error(
      "useProductFilter must be used within ProductFilterProvider",
    );
  }
  return context;
}
