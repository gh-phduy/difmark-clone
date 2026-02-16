"use client";

import { useCallback, useEffect, useState } from "react";
import { CarouselApi } from "@/components/ui/carousel";
import { HeroCategoryTiles } from "./hero-carousel/HeroCategoryTiles";
import { HeroSideBanners } from "./hero-carousel/HeroSideBanners";
import { HeroSlides } from "./hero-carousel/HeroSlides";
import { HeroTabs } from "./hero-carousel/HeroTabs";

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState<"digital" | "topup">("digital");

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full bg-gradient-to-b from-slate-900/0 to-slate-900/0 py-8">
      <div className="mx-auto w-full max-w-[1700px] px-4">
        <HeroTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mb-6 text-center">
          <h1 className="mb-3 text-3xl font-bold tracking-wide text-white uppercase md:text-4xl">
            Thousands of Digital Products
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-gray-300 md:text-base">
            Discover a vast selection of digital goods — PC games, console
            titles, software, gift cards, and more.
          </p>
        </div>

        <div className="mb-8">
          <div className="mx-auto max-w-[1630px] rounded-[32px] border border-white/5 bg-[#0a0a0b]/20 p-4 shadow-2xl backdrop-blur-sm">
            <div className="mb-4 grid h-[450px] grid-cols-1 gap-4 lg:grid-cols-[1050px_510px] lg:justify-center">
              <div className="h-full min-w-0">
                <HeroSlides
                  setApi={setApi}
                  current={current}
                  onIndicatorClick={scrollTo}
                />
              </div>
              <div className="hidden h-full lg:block">
                <HeroSideBanners />
              </div>
            </div>

            <HeroCategoryTiles />
          </div>
        </div>
      </div>
    </div>
  );
}
