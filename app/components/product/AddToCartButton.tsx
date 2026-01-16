/**
 * AddToCartCard Component
 *
 * Product card with add to cart functionality
 * Features video preview on hover
 */

"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { BsPersonFillCheck, BsBasket3Fill } from "react-icons/bs";

/* ============================================
   TYPES
   ============================================ */

interface AddToCartCardProps {
  /** Game title */
  title?: string;
  /** Game price */
  price?: string;
  /** Cover image path */
  coverImage?: string;
  /** Preview video path */
  previewVideo?: string;
  /** Seller name */
  sellerName?: string;
  /** Seller avatar */
  sellerAvatar?: string;
  /** Seller rank */
  sellerRank?: string;
  /** On add to cart callback */
  onAddToCart?: () => void;
}

/* ============================================
   CONSTANTS
   ============================================ */

const DEFAULTS = {
  title: "Deliver At All Costs",
  price: "$38.30",
  coverImage: "/product1.png",
  previewVideo: "/video/product1.webm",
  sellerName: "Easy-key",
  sellerAvatar: "/avt1.png",
  sellerRank: "🦄 Legendary",
} as const;

/* ============================================
   MAIN COMPONENT
   ============================================ */

/**
 * AddToCartCard Component
 */
export default function AddToCartCard({
  title = DEFAULTS.title,
  price = DEFAULTS.price,
  coverImage = DEFAULTS.coverImage,
  previewVideo = DEFAULTS.previewVideo,
  sellerName = DEFAULTS.sellerName,
  sellerAvatar = DEFAULTS.sellerAvatar,
  sellerRank = DEFAULTS.sellerRank,
  onAddToCart,
}: AddToCartCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    videoRef.current?.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const handleAddToCart = useCallback(() => {
    onAddToCart?.();
  }, [onAddToCart]);

  return (
    <article className="relative w-[360px] h-[300px]">
      <div
        className="w-full cursor-pointer absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hover:h-[300px] group transition-all duration-700 h-[275px] rounded-lg overflow-hidden bg-surface-base flex flex-col"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        tabIndex={0}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        aria-label={`${title} - ${price}`}
      >
        {/* Media Container */}
        <div className="relative flex-1">
          {/* Cover Image */}
          <div
            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"
              }`}
          >
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
              sizes="360px"
            />
          </div>

          {/* Preview Video */}
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
              }`}
            src={previewVideo}
            muted
            loop
            playsInline
            aria-hidden="true"
          />

          {/* Seller Info Overlay */}
          <div className="absolute bottom-0 w-full">
            <div className="w-full relative gap-x-2 backdrop-blur-sm bg-surface-card/30 h-[65px] flex items-center px-4">
              {/* Seller Avatar */}
              <Image
                src={sellerAvatar}
                alt={`${sellerName} avatar`}
                width={30}
                height={30}
                className="rounded-full"
              />

              {/* Seller Details */}
              <div className="flex flex-col">
                <div className="flex text-dm-text-primary gap-x-1 items-center">
                  <span className="text-[12px]">{sellerName}</span>
                  <BsPersonFillCheck size={15} aria-label="Verified seller" />
                </div>
                <span className="text-dm-text-muted text-[10px]">
                  Rank: {sellerRank}
                </span>
              </div>

              {/* Add to Cart Button (slides in on hover) */}
              <div className="absolute inset-0 -translate-x-full w-[200px] duration-1000 transition group-hover:translate-x-0">
                <button
                  onClick={handleAddToCart}
                  className="w-full h-full bg-dm-accent-green hover:bg-dm-accent-green-hover transition-colors flex items-center justify-center gap-x-3 px-5"
                  aria-label={`Add ${title} to cart`}
                >
                  <BsBasket3Fill
                    className="text-dm-text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-dm-text-primary text-[14px] font-bold">
                    ADD TO CART
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full h-[57px] bg-surface-card flex px-2 justify-between items-center">
          <h3 className="text-dm-text-primary text-xl font-semibold truncate">
            {title}
          </h3>
          <span className="text-dm-text-primary text-xl font-semibold">
            {price}
          </span>
        </div>
      </div>
    </article>
  );
}
