
/**
 * Loading UI for Buy Cheap Page
 * 
 * File này tự động được Next.js sử dụng để hiển thị 
 * trong khi page.tsx đang load. Không cần import hay config gì cả!
 * 
 * Next.js sẽ tự động bọc page.tsx trong <Suspense fallback={<Loading />}>
 */

import { Skeleton } from "@/components/ui/skeleton";


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
            <Skeleton className="h-10 w-[450px]" />

            {/* Main Content: Gallery + PurchaseCard */}
            <div className="flex w-full justify-between gap-8">
                {/* Product Gallery Skeleton */}
                <div className="w-[780px] flex flex-col gap-4">
                    {/* Main Image */}
                    <Skeleton className="h-[450px] w-full rounded-xl" />
                </div>

                {/* Purchase Card Skeleton */}
                <div className="w-[780px] bg-[#2a3441]/80 rounded-lg p-6 flex flex-col gap-6">
                    {/* Seller Info */}
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-5 w-32" />
                            <Skeleton className="h-4 w-24" />
                        </div>
                    </div>

                    {/* Product Details Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex justify-between">
                                <Skeleton className="h-4 w-20" />
                                <Skeleton className="h-4 w-24" />
                            </div>
                        ))}
                    </div>

                    {/* Price Section */}
                    <div className="flex items-center gap-4 py-4">
                        <div className="flex-1 h-[1px] bg-gray-600" />
                        <Skeleton className="h-5 w-12" />
                        <div className="flex-1 h-[1px] bg-gray-600" />
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <Skeleton className="h-10 w-24" />
                        <Skeleton className="h-6 w-16" />
                    </div>

                    {/* Payment Methods */}
                    <div className="flex gap-2 justify-center">
                        {[...Array(2)].map((_, i) => (
                            <Skeleton key={i} className="h-8 w-16 rounded-full" />
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <Skeleton className="flex-1 h-12" />
                        <Skeleton className="flex-1 h-12" />
                    </div>
                </div>
            </div>

            {/* Description Section Skeleton */}
            <Skeleton className="w-full h-[200px] rounded-xl" />

            {/* Seller List Skeleton */}
            <Skeleton className="w-full h-[300px] rounded-xl" />

            {/* Pagination Skeleton */}
            {/* <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-10 w-10" />
                ))}
            </div> */}
        </main>
    );
}
