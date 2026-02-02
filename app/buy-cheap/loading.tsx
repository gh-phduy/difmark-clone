/**
 * Loading UI for Buy Cheap Page
 * 
 * Automatically used by Next.js while the page is loading.
 */

import { Skeleton } from "@/components/ui/skeleton";
import { TitleSkeleton, ProductSectionSkeleton } from "../components/product/PageSkeletons";

export default function Loading() {
    return (
        <main className="max-w-[1590px] w-full flex flex-col items-center gap-y-8 pt-40">
            {/* Breadcrumbs Skeleton */}
            <div className="w-full flex gap-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-32" />
            </div>

            {/* Title Skeleton */}
            <TitleSkeleton />

            {/* Main Content: Gallery + PurchaseCard */}
            <ProductSectionSkeleton />

            {/* Description Section Skeleton */}
            <Skeleton className="w-full h-[200px] rounded-xl" />

            {/* Seller List Skeleton */}
            <Skeleton className="w-full h-[300px] rounded-xl" />
        </main>
    );
}
