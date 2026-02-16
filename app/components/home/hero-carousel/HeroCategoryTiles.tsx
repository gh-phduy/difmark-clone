import Image from "next/image";
import Link from "next/link";
import { Monitor, Package, CreditCard, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { HERO_CATEGORIES } from "@/lib/constants/hero";

const ICON_MAP = {
  monitor: Monitor,
  "gamepad-2": Gamepad2,
  "credit-card": CreditCard,
  package: Package,
};

export function HeroCategoryTiles() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {HERO_CATEGORIES.map((category) => {
        const IconComponent =
          ICON_MAP[category.icon as keyof typeof ICON_MAP] || Monitor;
        return (
          <Link
            key={category.id}
            href={category.link}
            className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
            style={{ width: 380, height: 130 }}
          >
            <div className="relative h-full w-full">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-r",
                  category.gradient,
                )}
              />
              <div className="absolute inset-0 flex items-center gap-3 px-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 ring-1 ring-white/30 backdrop-blur-md">
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xs font-bold tracking-wider text-white uppercase drop-shadow-lg sm:text-sm">
                  {category.title}
                </h3>
              </div>
              <div className="absolute inset-y-0 right-0 flex w-3/5 items-center justify-end pr-2">
                <div className="relative h-full w-[120%]">
                  {category.heroImages.map((heroImage, idx) => (
                    <div
                      key={`${category.id}-${idx}`}
                      className="absolute inset-y-0 right-0 transition-all duration-300 group-hover:scale-105"
                      style={{
                        width: `${100 / category.heroImages.length}%`,
                        right: `${idx * 12}%`,
                        zIndex: idx,
                      }}
                    >
                      <Image
                        src={heroImage}
                        alt={`${category.title} hero ${idx + 1}`}
                        fill
                        className="object-contain object-right"
                        sizes="(max-width: 768px) 40vw, 12vw"
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
