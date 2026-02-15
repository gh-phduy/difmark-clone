"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Pagination from "@/app/components/shared/Pagination";

interface SellerStoreFooterProps {
  totalProducts: number;
  averagePrice: number;
  currency: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  onChangePageSize: (value: number) => void;
}

export default function SellerStoreFooter({
  totalProducts,
  averagePrice,
  currency,
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
  onChangePageSize,
}: SellerStoreFooterProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
      <p className="text-sm text-steel-500">
        {totalProducts} products • avg {currency}
        {averagePrice.toFixed(2)}
      </p>

      <Pagination
        currentPage={Math.min(currentPage, totalPages)}
        totalPages={totalPages}
        onPageChange={onPageChange}
        previousLabel="Back"
        nextLabel="Next"
      />

      <Select
        value={String(pageSize)}
        onValueChange={(value) => {
          if (!value) {
            return;
          }
          onChangePageSize(Number(value));
        }}
      >
        <SelectTrigger className="h-11 w-[92px] border-midnight-700 bg-midnight-800">
          <SelectValue placeholder="12" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="8">8</SelectItem>
          <SelectItem value="12">12</SelectItem>
          <SelectItem value="24">24</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
