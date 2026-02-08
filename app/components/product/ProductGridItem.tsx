"use client";

import Image from "next/image";
import { Monitor, Gamepad2 } from "lucide-react";
import { BiSolidKey } from "react-icons/bi";

/* ============================================
   TYPES
   ============================================ */

interface ProductGridItemProps {
  /** Product title */
  title: string;
  /** Product price as number */
  price?: number;
  /** Formatted price as string (optional fallback) */
  formattedPrice?: string;
  /** Image URL */
  image?: string;
  /** Platform identifier */
  platform?: "pc" | "xbox" | "playstation";
}

/* ============================================
   CONSTANTS
   ============================================ */

const DEFAULTS = {
  title: "Deliver At All Costs",
  price: 38.3,
  image: "/battlefield_6.jpg",
  platform: "pc" as const,
} as const;

/* ============================================
   MAIN COMPONENT
   ============================================ */

/**
 * ProductGridItem Component
 *
 * Simplified product card without video and complex animations
 */
export default function ProductGridItem({
  title = DEFAULTS.title,
  price,
  formattedPrice,
  image = DEFAULTS.image,
  platform = DEFAULTS.platform,
}: ProductGridItemProps) {
  const displayPrice =
    formattedPrice || (price ? `$${price.toFixed(2)}` : "$0.00");

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-[#30363d] bg-midnight-750 transition-all hover:border-dm-accent-yellow/50 hover:shadow-lg">
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-midnight-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Product Type/Key Badge */}
        <div className="absolute top-0 left-0 z-10 flex h-10 w-10 items-start justify-start bg-black/40 p-1.5 backdrop-blur-md [clip-path:polygon(0_0,100%_0,0_100%)]">
          <BiSolidKey className="text-gray-300" size={12} />
        </div>

        {/* Price Overlay on Image (Marketplace Style) */}
        <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/80 to-transparent p-3">
          <div className="flex items-center justify-between">
            <div className="text-dm-text-secondary">
              {platform === "pc" && <Monitor className="h-4 w-4" />}
              {platform === "xbox" && <Gamepad2 className="h-4 w-4" />}
              {platform === "playstation" && <Gamepad2 className="h-4 w-4" />}
            </div>
            <div className="text-right">
              <span className="block text-[10px] text-dm-text-tertiary">
                from
              </span>
              <span className="text-lg font-bold text-white">
                {displayPrice}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-midnight-750 p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-dm-text-primary transition-colors group-hover:text-dm-accent-yellow">
          {title}
        </h3>
        <p className="mt-1 text-xs text-dm-text-tertiary">{title} (PC)</p>
      </div>
    </div>
  );
}
