"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CarouselApi } from "@/components/ui/carousel";
import { HeroCategoryTiles } from "./hero-carousel/HeroCategoryTiles";
import { HeroSideBanners } from "./hero-carousel/HeroSideBanners";
import { HeroSlides } from "./hero-carousel/HeroSlides";
import { HeroTabs } from "./hero-carousel/HeroTabs";

const TAB_CONTENT = {
  digital: {
    title: "THOUSANDS OF DIGITAL PRODUCTS",
    description:
      "Discover a vast selection of digital goods for every need — from the latest PC and console games to gift cards, software, subscriptions, and more.",
  },
  topup: {
    title: "TOP UP GAMES AND SERVICES INSTANTLY",
    description:
      "Instantly top up your favorite games and digital services — from in-game currencies to account balances. Fast, secure, and code-free.",
  },
};

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

  const tabContent = TAB_CONTENT[activeTab];

  return (
    <div
      className="relative w-full py-8"
      style={{
        backgroundImage: "url(/bg-hero-carousel.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-[1700px] px-4">
          <HeroTabs activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="mb-6 text-center">
            <motion.h1
              key={`title-${activeTab}`}
              className="mb-3 text-3xl font-bold tracking-wide text-white uppercase md:text-4xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {tabContent.title}
            </motion.h1>
            <motion.p
              key={`desc-${activeTab}`}
              className="mx-auto max-w-3xl text-sm text-gray-300 md:text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {tabContent.description}
            </motion.p>
          </div>

          <div className="mb-8">
            <div className="mx-auto max-w-[1630px] rounded-[32px] border border-white/5 bg-[#0a0a0b]/20 p-4 shadow-2xl backdrop-blur-sm">
              <motion.div
                className="mb-4 grid grid-cols-1 gap-4 overflow-hidden lg:grid-cols-[1050px_510px] lg:justify-center"
                initial={{ height: 451 }}
                animate={{ height: activeTab === "digital" ? 451 : 274 }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
              >
                <div className="h-full min-w-0">
                  <HeroSlides
                    setApi={setApi}
                    current={current}
                    onIndicatorClick={scrollTo}
                    activeTab={activeTab}
                  />
                </div>
                <div className="hidden h-full lg:block">
                  <HeroSideBanners activeTab={activeTab} />
                </div>
              </motion.div>

              <HeroCategoryTiles activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
