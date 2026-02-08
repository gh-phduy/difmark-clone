"use client";

import Image from "next/image";
import { Monitor, Gamepad2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductProps {
  title: string;
  price: number;
  image: string;
  platform: "pc" | "xbox" | "ps";
}

export default function ProductGridItem({
  title,
  price,
  image,
  platform,
}: ProductProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-[#30363d] bg-midnight-750 transition-all hover:border-gray-500">
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Pin Icon / Wishlist */}
        <div className="absolute top-2 left-2">
          <div className="rounded bg-black/50 p-1 text-gray-400 backdrop-blur-sm">
            📌
          </div>
        </div>

        {/* Hover Action Overlay (Optional based on screenshot usually implied) */}
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Platform Icons */}
        <div className="mb-2 flex items-center gap-2 text-gray-400">
          {platform === "pc" && <Monitor className="h-4 w-4" />}
          {platform === "xbox" && <Gamepad2 className="h-4 w-4" />}
          {platform === "ps" && <Gamepad2 className="h-4 w-4" />}{" "}
          {/* Placeholder for PS */}
        </div>

        {/* Title */}
        <h3 className="mb-1 truncate text-base font-medium text-white transition-colors group-hover:text-[#58a6ff]">
          {title}
        </h3>

        {/* Footer: Platform Name & Price */}
        <div className="mt-3 flex items-center justify-between border-t border-[#30363d] pt-3 text-xs sm:text-sm">
          <span className="text-gray-500">{title} (PC)</span>
          <div className="text-right">
            <span className="block text-[10px] text-gray-500">from</span>
            <span className="font-bold text-white">${price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
