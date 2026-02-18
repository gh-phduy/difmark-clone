import Image from "next/image";
import Link from "next/link";
import { Monitor, Package, CreditCard, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { HERO_CATEGORIES, TOPUP_CATEGORIES } from "@/lib/constants/hero";

const ICON_MAP = {
  monitor: Monitor,
  "gamepad-2": Gamepad2,
  "credit-card": CreditCard,
  package: Package,
};

interface HeroCategoryTilesProps {
  activeTab: "digital" | "topup";
}

export function HeroCategoryTiles({ activeTab }: HeroCategoryTilesProps) {
  const isTopup = activeTab === "topup";
  const categories = isTopup ? TOPUP_CATEGORIES : HERO_CATEGORIES;

  if (isTopup) {
    return (
      <div className="flex justify-center gap-4">
        {categories.map((category) => {
          const IconComponent =
            ICON_MAP[category.icon as keyof typeof ICON_MAP] || Monitor;
          return (
            <Link
              key={category.id}
              href={category.link}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-lg backdrop-blur-sm transition-transform hover:scale-[1.01]"
              style={{ width: "520px", height: "134px", flexShrink: 0 }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                  sizes="520px"
                />
                <div className="absolute inset-0 bg-black/15" />

                <div className="absolute inset-y-0 left-0 z-20 flex flex-col justify-center gap-2 px-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/20 ring-1 ring-white/30 backdrop-blur-md">
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="max-w-[62%] text-xs leading-tight font-bold tracking-wide text-white uppercase drop-shadow-lg">
                    {category.title}
                  </h3>
                </div>

                <div className="absolute inset-y-0 right-0 z-10 flex w-[58%] items-end justify-end pr-1">
                  <div className="relative h-full w-[124%]">
                    {category.heroImages.map((heroImage, idx) => (
                      <div
                        key={`${category.id}-${idx}`}
                        className="absolute inset-y-0 right-0 transition-all duration-300 group-hover:scale-105"
                        style={{
                          width: `${100 / category.heroImages.length}%`,
                          right: `${idx * 10}%`,
                          zIndex: idx,
                        }}
                      >
                        <Image
                          src={heroImage}
                          alt={`${category.title} hero ${idx + 1}`}
                          fill
                          className="object-contain object-right"
                          sizes="300px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {categories.map((category) => {
        const IconComponent =
          ICON_MAP[category.icon as keyof typeof ICON_MAP] || Monitor;
        return (
          <Link
            key={category.id}
            href={category.link}
            className="group relative h-[108px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-lg backdrop-blur-sm transition-transform hover:scale-[1.01] md:h-[120px]"
          >
            <div className="relative h-full w-full">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/15" />

              <div className="absolute inset-y-0 left-0 z-20 flex flex-col justify-center gap-2 px-3 md:px-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/20 ring-1 ring-white/30 backdrop-blur-md md:h-8 md:w-8">
                  <IconComponent className="h-4 w-4 text-white" />
                </div>
                <h3 className="max-w-[62%] text-[11px] leading-tight font-bold tracking-wide text-white uppercase drop-shadow-lg md:text-xs">
                  {category.title}
                </h3>
              </div>

              <div className="absolute inset-y-0 right-0 z-10 flex w-[58%] items-end justify-end pr-1">
                <div className="relative h-full w-[124%]">
                  {category.heroImages.map((heroImage, idx) => (
                    <div
                      key={`${category.id}-${idx}`}
                      className="absolute inset-y-0 right-0 transition-all duration-300 group-hover:scale-105"
                      style={{
                        width: `${100 / category.heroImages.length}%`,
                        right: `${idx * 10}%`,
                        zIndex: idx,
                      }}
                    >
                      <Image
                        src={heroImage}
                        alt={`${category.title} hero ${idx + 1}`}
                        fill
                        className="object-contain object-right"
                        sizes="(max-width: 1024px) 26vw, 14vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
