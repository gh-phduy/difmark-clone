"use client"

import { Suspense, useCallback, useMemo, memo } from "react";
import dynamic from "next/dynamic";
import ProductGallery from "../components/product/ProductGallery";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import PurchaseCard from "../components/product/PurchaseCard";
import { PurchaseCardSkeleton } from "../components/product/PurchaseCardSkeleton";
import { ProductGallerySkeleton } from "../components/product/ProductGallerySkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { useProduct } from "@/app/hooks/useProduct";

// Dynamic imports for below-the-fold components (lazy loading)
const ProductDecription = dynamic(() => import("../components/product/ProductDecription"), {
    loading: () => <Skeleton className="h-[200px] w-full rounded-lg" />
});
const SellerList = dynamic(() => import("../components/product/SellerList"), {
    loading: () => <Skeleton className="h-[300px] w-full rounded-lg" />
});
const LoadMoreButton = dynamic(() => import("../components/shared/LoadMoreButton"));
const Pagination = dynamic(() => import("../components/shared/Pagination"));
const AboutProductSection = dynamic(() => import("../components/product/ProductContent"), {
    loading: () => <Skeleton className="h-[200px] w-full rounded-lg" />
});

// Skeleton components for loading states
const TitleSkeleton = memo(() => (
    <Skeleton className="h-10 w-[400px]" />
));
TitleSkeleton.displayName = "TitleSkeleton";

const ProductSectionSkeleton = memo(() => (
    <div className="flex w-full justify-between gap-8">
        {/* Gallery Skeleton - Detailed */}
        <ProductGallerySkeleton />
        {/* PurchaseCard Skeleton - Detailed */}
        <PurchaseCardSkeleton />
    </div>
));
ProductSectionSkeleton.displayName = "ProductSectionSkeleton";

// Memoized PurchaseCard wrapper
const MemoizedPurchaseCard = memo(PurchaseCard);

export default function BuyCheapPage() {
    // Fetch product data from API using TanStack Query
    const { data, isLoading, error } = useProduct('1');

    // Memoized event handlers to prevent re-renders
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

    // Memoized product name to prevent unnecessary re-renders
    const productName = useMemo(() => data?.data.name || "", [data?.data.name]);

    return (
        <main id="main-content" className="max-w-[1590px] w-full flex flex-col items-center gap-y-8 pt-40">
            <Breadcrumbs />

            {/* Product Header Section */}
            {isLoading ? (
                <>
                    <TitleSkeleton />
                    <ProductSectionSkeleton />
                </>
            ) : error ? (
                <div className="text-red-500 p-4 bg-red-500/10 rounded-lg">
                    Error loading product: {error.message}
                </div>
            ) : data ? (
                <>
                    <h1 className="text-[32px] font-semibold uppercase">{productName}</h1>
                    <div className="flex w-full justify-between">
                        <ProductGallery />
                        <MemoizedPurchaseCard
                            product={data.data}
                            seller={data.seller}
                            onAddToCart={handleAddToCart}
                            onCheckout={handleCheckout}
                            onChat={handleChat}
                        />
                    </div>
                </>
            ) : null}

            {/* Below-the-fold content with Suspense */}
            <Suspense fallback={<Skeleton className="h-[200px] w-full rounded-lg" />}>
                <ProductDecription />
            </Suspense>

            <Suspense fallback={<Skeleton className="h-[300px] w-full rounded-lg" />}>
                <SellerList />
            </Suspense>

            <LoadMoreButton />
            <Pagination />

            <Suspense fallback={<Skeleton className="h-[200px] w-full rounded-lg" />}>
                <AboutProductSection />
            </Suspense>
        </main>
    );
}