"use client";

import SellerFilterBar from "./SellerFilterBar";
import SellerRow from "./SellerRow";

export default function SellerList() {
  return (
    <div className="flex flex-col w-full gap-y-2">
      <SellerFilterBar />
      <SellerRow />
      <SellerRow />
      <SellerRow />
      <SellerRow />
      <SellerRow />
      <SellerRow />
      <SellerRow />
      <SellerRow />
      <SellerRow />
      <SellerRow />
    </div>
  );
}
