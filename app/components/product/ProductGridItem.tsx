import Link from "next/link";
import Image from "next/image";
import { BiSolidKey } from "react-icons/bi";
import { HiComputerDesktop } from "react-icons/hi2";
import { SiNintendoswitch } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { BsXbox } from "react-icons/bs";

/* ============================================
   TYPES
   ============================================ */

interface ProductGridItemProps {
  /** Product ID for navigation */
  id?: number | string;
  /** Product title */
  title: string;
  /** Product price as number */
  price?: number;
  /** Formatted price as string (optional fallback) */
  formattedPrice?: string;
  /** Image URL */
  image?: string;
  /** Platform identifier or list of platforms */
  platform?: string | string[];
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
  id,
  title = DEFAULTS.title,
  price,
  formattedPrice,
  image = DEFAULTS.image,
  platform = DEFAULTS.platform,
}: ProductGridItemProps) {
  const displayPrice =
    formattedPrice || (price ? `$${price.toFixed(2)}` : "$0.00");

  return (
    <Link
      href={`/buy-cheap?id=${id || 1}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-[#30363d] bg-midnight-750 transition-all hover:border-dm-accent-yellow/50 hover:shadow-lg"
    >
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
        <div className="absolute right-0 bottom-0 left-0 flex items-center justify-between bg-black/50 p-2">
          <div className="flex items-center gap-1.5 text-gray-300">
            {Array.isArray(platform) ? (
              platform.map((p) => <PlatformIcon key={p} platform={p} />)
            ) : (
              <PlatformIcon platform={platform} />
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-steel-500">from</span>
            <span className="font-bold tracking-tight text-white">
              {displayPrice}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-midnight-750 p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-dm-text-primary text-steel-500 transition-colors group-hover:text-dm-accent-yellow">
          {title}
        </h3>
      </div>
    </Link>
  );
}

const PlatformIcon = ({ platform }: { platform?: string }) => {
  switch (platform?.toLowerCase()) {
    case "pc":
      return <HiComputerDesktop size={16} />;
    case "xbox":
      return <BsXbox size={14} />;
    case "playstation":
      return <FaPlaystation size={16} />;
    case "nintendo":
      return <SiNintendoswitch size={14} />;
    default:
      return null;
  }
};
