"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { ImStarFull } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useCallback, useEffect, useState } from "react";
import { CanvasTextImage } from "./TextImageCanvas";

// Types
interface SellerItemProps {
  avatar: string;
  name: string;
  rating: string;
  verified?: boolean;
  badge?: string;
}

// Seller Item Component
function SellerItem({
  avatar,
  name,
  rating,
  verified = true,
  badge = "Legendary",
}: SellerItemProps) {
  return (
    <div className="w-[252px] overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:brightness-125 hover:shadow-lg hover:shadow-white/10">
      <div className="w-full h-[90px] bg-[#212937] px-4 flex items-center">
        <div className="relative">
          <Avatar className="">
            <AvatarImage
              className="h-[50px] w-[50px] object-cover"
              src={avatar}
              alt={`${name} profile picture`}
            />
          </Avatar>
          {verified && (
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center" aria-label="Verified seller">
              <svg
                className="w-2 h-2 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="pl-3">
          <span className="text-[16px] text-white font-medium">{name}</span>
          <div className="flex items-center gap-x-2" role="group" aria-label={`Rating: ${rating} out of 5 stars`}>
            <span className="text-[#888A8D] text-[14px]">{rating}/5</span>
            {[...Array(5)].map((_, i) => (
              <ImStarFull key={i} className="text-yellow-300 text-xs" aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[44px] bg-[#2b3545] flex items-center justify-between px-4">
        <div className="text-white text-[14px] flex items-center gap-2">
          <span className="text-cyan-400">⛲</span>
          {badge}
        </div>
        <button className="flex text-[#C0C3C9] items-center gap-x-2 hover:text-white transition-colors" aria-label={`View ${name} profile`}>
          <span className="text-[16px]">View</span>
          <IoIosArrowForward size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default function PopularSellers() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const sellers: SellerItemProps[] = [
    {
      avatar: "/avt1.png",
      name: "Gaming_sto...",
      rating: "4.8",
      badge: "Legendary",
    },
    {
      avatar: "/avt1.png",
      name: "Easy-key",
      rating: "5",
      badge: "Legendary",
    },
    {
      avatar: "/avt1.png",
      name: "Just_Digital_Gurus",
      rating: "5",
      badge: "Legendary",
    },
    {
      avatar: "/avt1.png",
      name: "FowGame",
      rating: "5",
      badge: "Legendary",
    },
    {
      avatar: "/avt1.png",
      name: "BitStore",
      rating: "4.9",
      badge: "Legendary",
    },
    {
      avatar: "/avt1.png",
      name: "BitStore",
      rating: "4.9",
      badge: "Legendary",
    },
    {
      avatar: "/avt1.png",
      name: "BitStore",
      rating: "4.9",
      badge: "Legendary",
    },
    {
      avatar: "/avt1.png",
      name: "BitStore",
      rating: "4.9",
      badge: "Legendary",
    },
  ];

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateSelection = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateSelection();
    api.on("select", updateSelection);
    api.on("reInit", updateSelection);

    return () => {
      api.off("select", updateSelection);
      api.off("reInit", updateSelection);
    };
  }, [api]);

  return (
    <section className="w-full 800:px-0 px-8  max-w-[720px] 990:max-w-[940px] 1200:max-w-[1140px] 1640:max-w-[1310px] 1920:max-w-[1590px] rounded-lg" aria-labelledby="popular-sellers-heading">
      <div className="flex items-center justify-between mb-6">
        <h2 id="popular-sellers-heading" className="sr-only">Popular Sellers</h2>
        <CanvasTextImage
          className="-translate-x-[22px]"
          text="POPULAR SELLERS"
          imageUrl="/text-img.svg"
          size="24px"
          aria-hidden="true"
        />
        <button className="text-[#C0C3C9] flex items-center justify-center gap-x-3 hover:text-white transition-colors" aria-label="View all popular sellers">
          <span className="mr-2">View All</span>
          <IoIosArrowForward aria-hidden="true" />
        </button>
      </div>

      {/* Container với fade effect */}
      <div className="relative ">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Fade effect sử dụng CSS mask - áp dụng cho CarouselContent */}
          <div
            className="carousel-content-wrapper"
            style={{
              maskImage: `linear-gradient(
                to right,
                transparent 0%,
                black 12%,
                black 88%,
                transparent 100%
              )`,
              WebkitMaskImage: `linear-gradient(
                to right,
                transparent 0%,
                black 8%,
                black 92%,
                transparent 100%
              )`,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {sellers.map((seller, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-auto">
                  <SellerItem {...seller} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>

        {/* Custom Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className={`absolute rounded-full -left-16 top-1/2 800:flex hidden items-center -translate-y-1/2 bg-slate-700/90 border-slate-600 text-white hover:bg-slate-600 hover:scale-110 transition-all duration-200 shadow-lg backdrop-blur-sm z-20 h-10 w-10 ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
            }`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Previous sellers"
        >
          <MdArrowBackIos className="translate-x-1 h-4 w-4" aria-hidden="true" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className={`absolute -right-16 top-1/2 rounded-full 800:flex hidden items-center -translate-y-1/2 bg-slate-700/90 border-slate-600 text-white hover:bg-slate-600 hover:scale-110 transition-all duration-200 shadow-lg backdrop-blur-sm z-20 h-10 w-10 ${!canScrollNext ? "opacity-50 cursor-not-allowed" : ""
            }`}
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Next sellers"
        >
          <MdArrowForwardIos className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
