"use client";

import Image from "next/image";
import Link from "next/link";
import { KeyRound, Monitor, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SellerOfferItem } from "../../seller-profile.data";

interface SellerStoreOfferRowProps {
  offer: SellerOfferItem;
}

export default function SellerStoreOfferRow({
  offer,
}: SellerStoreOfferRowProps) {
  return (
    <div className="grid min-h-[88px] grid-cols-[180px_1fr_170px_56px] items-center gap-4 border border-midnight-700 bg-midnight-800 px-3 py-2">
      <Link
        href={`/buy-cheap?id=${offer.data.id}`}
        className="relative h-[72px] w-[180px] overflow-hidden rounded"
      >
        <Image
          src={offer.data.images?.[0] || "/cyberpunk_2077.jpg"}
          alt={offer.data.name}
          fill
          className="object-cover"
        />
      </Link>

      <div className="min-w-0">
        <Link
          href={`/buy-cheap?id=${offer.data.id}`}
          className="hover:text-forest-300 line-clamp-1 text-[24px] leading-tight font-semibold"
        >
          {offer.data.name}
        </Link>
        <div className="mt-2 flex items-center gap-3 text-steel-500">
          <KeyRound size={14} />
          <Monitor size={14} />
          <span className="text-xs">{offer.data.platform}</span>
        </div>
      </div>

      <div className="border-l border-midnight-700 pl-4 text-right">
        <p className="text-xs text-steel-500">Price:</p>
        <p className="text-4xl leading-tight font-bold">
          {offer.data.currency}
          {offer.data.price.toFixed(2)}
        </p>
      </div>

      <Button
        variant="ghost"
        className="h-full w-full rounded-none border-l border-midnight-700 bg-midnight-700 hover:bg-midnight-600"
        aria-label={`Add ${offer.data.name} to cart`}
      >
        <ShoppingCart size={18} />
      </Button>
    </div>
  );
}
