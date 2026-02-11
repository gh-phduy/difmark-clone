"use client";

import { useCallback } from "react";
import ProductGallery from "./ProductGallery";
import PurchaseCard from "./PurchaseCard";
import { ProductApiResponse } from "@/app/types/product";

interface ProductOverviewProps {
  data: ProductApiResponse;
}

export default function ProductOverview({ data }: ProductOverviewProps) {
  const handleAddToCart = useCallback(() => {
    if (data?.data.id) {
      console.log("Add to cart:", data.data.id);
    }
  }, [data?.data.id]);

  const handleCheckout = useCallback(() => {
    if (data?.data.id) {
      console.log("Checkout:", data.data.id);
    }
  }, [data?.data.id]);

  const handleChat = useCallback(() => {
    if (data?.seller.name) {
      console.log("Chat with seller:", data.seller.name);
    }
  }, [data?.seller.name]);

  return (
    <div className="flex w-full justify-between">
      <ProductGallery
        images={data.data.images}
        name={data.data.name}
        platform={data.data.platform}
      />
      <PurchaseCard
        product={data.data}
        seller={data.seller}
        onAddToCart={handleAddToCart}
        onCheckout={handleCheckout}
        onChat={handleChat}
      />
    </div>
  );
}
