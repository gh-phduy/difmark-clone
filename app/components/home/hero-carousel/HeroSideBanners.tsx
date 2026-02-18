import Image from "next/image";
import Link from "next/link";
import { HERO_SIDE_BANNERS } from "@/lib/constants/hero";

interface HeroSideBannersProps {
  activeTab: "digital" | "topup";
}

export function HeroSideBanners({ activeTab }: HeroSideBannersProps) {
  const bannerIndex = activeTab === "topup" ? 1 : 0;
  const banner = HERO_SIDE_BANNERS[bannerIndex];

  if (!banner) return null;

  return (
    <div className="h-full w-full">
      <Link
        href={banner.link}
        className="relative block h-full w-full overflow-hidden rounded-3xl shadow-lg transition-all hover:shadow-2xl"
      >
        <Image
          src={banner.image}
          alt={banner.alt}
          fill
          className="object-cover"
          priority
        />
      </Link>
    </div>
  );
}
