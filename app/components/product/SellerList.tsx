"use client";

import SellerFilterBar from "./SellerFilterBar";
import SellerRow, { SellerOffer } from "./SellerRow";
import { useProducts } from "@/app/hooks/useProduct";
import { Skeleton } from "@/components/ui/skeleton";

export default function SellerList() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="flex flex-col w-full gap-y-2">
        <SellerFilterBar />
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-[100px] w-full bg-gray-700/50 rounded-sm" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col w-full gap-y-2">
        <SellerFilterBar />
        <div className="bg-red-500/10 text-red-500 p-4 rounded-lg">
          Failed to load sellers: {error.message}
        </div>
      </div>
    );
  }

  const products = data?.products || [];

  return (
    <div className="flex flex-col w-full gap-y-2">
      <SellerFilterBar />
      {products.map((offer: SellerOffer) => (
        <SellerRow key={offer.data.id} offer={offer} />
      ))}
    </div>
  );
}
