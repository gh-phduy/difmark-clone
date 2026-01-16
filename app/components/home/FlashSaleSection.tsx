/**
 * SaleTime Component
 *
 * Countdown timer section with diagonal game images
 * Displays flash sale with time remaining
 */

import Image from "next/image";
import CountdownTimer from "../shared/CountdownTimer";

/* ============================================
   CONSTANTS
   ============================================ */

/** Clip path styles for diagonal images */
const CLIP_PATHS = {
  leftImage: "polygon(0 0, 50% 0, 100% 100%, 50% 100%)",
  leftOverlay: "polygon(47% 0, 100% 0, 100% 100%, 97% 100%)",
  rightImage: "polygon(50% 0, 100% 0, 50% 100%, 0% 100%)",
  rightOverlay: "polygon(0% 0, 53% 0, 3% 100%, 0% 100%)",
} as const;

/* ============================================
   SUB-COMPONENTS
   ============================================ */

interface DiagonalImageProps {
  src: string;
  alt: string;
  position: "left-near" | "left-far" | "right-near" | "right-far";
  hasHoverEffect?: boolean;
}

/**
 * Diagonal image with clip-path and hover effect
 */
function DiagonalImage({
  src,
  alt,
  position,
  hasHoverEffect = false,
}: DiagonalImageProps) {
  const isLeft = position.startsWith("left");
  const isFar = position.endsWith("far");

  // Position classes based on position prop
  const positionClasses = {
    "left-near":
      "-translate-x-[100px] 1000:-translate-x-[140px] 1300:-translate-x-[110px] 1440:-translate-x-[80px] left-0",
    "left-far":
      "-translate-x-[220px] 1000:-translate-x-[310px] 1300:-translate-x-[350px] left-0",
    "right-near":
      "translate-x-[100px] 1000:translate-x-[140px] 1300:translate-x-[110px] right-0",
    "right-far":
      "translate-x-[220px] 1000:translate-x-[310px] 1300:translate-x-[350px] right-0",
  };

  const clipPath = isLeft ? CLIP_PATHS.leftImage : CLIP_PATHS.rightImage;
  const overlayClipPath = isLeft
    ? CLIP_PATHS.leftOverlay
    : CLIP_PATHS.rightOverlay;

  return (
    <div
      className={`absolute 800:block hidden w-[250px] 1000:w-[320px] 1300:w-[450px] 1440:w-[520px] h-full ${positionClasses[position]} top-0 bottom-0`}
    >
      <div
        className={`w-full relative h-full ${hasHoverEffect ? "z-50" : ""}`}
        style={{ clipPath }}
      >
        {/* Game Image */}
        <div
          className={`relative w-full h-full ${hasHoverEffect
            ? "hover:scale-110 ease-linear transition-transform duration-1000"
            : ""
            }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1000px) 250px, (max-width: 1300px) 320px, 450px"
          />
        </div>

        {/* Overlay border */}
        <div
          className="w-full absolute inset-0 bg-brand-light h-full"
          style={{ clipPath: overlayClipPath }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/* ============================================
   MAIN COMPONENT
   ============================================ */

/**
 * SaleTime Component
 *
 * Flash sale countdown section with diagonal game images
 */
export default function SaleTime() {
  return (
    <section
      className="w-full 800:px-36 px-0 1000:px-16"
      aria-label="Flash Sale Countdown"
    >
      <div className="h-[222px] 1000:h-[280px] 1300:h-[380px] 1440:h-[455px] w-full flex items-center justify-center relative bg-surface-base overflow-hidden">
        {/* Background */}
        <Image
          src="/bg-time-sale.webp"
          alt=""
          fill
          className="object-cover z-0"
          aria-hidden="true"
          priority={false}
        />

        {/* Left Images */}
        <DiagonalImage
          src="/sale1.webp"
          alt="Sale game 1"
          position="left-near"
          hasHoverEffect
        />
        <DiagonalImage
          src="/sale1.webp"
          alt="Sale game 2"
          position="left-far"
        />

        {/* Countdown Timer */}
        <div className="text-dm-text-primary h-full flex items-center z-20">
          <CountdownTimer />
        </div>

        {/* Right Images */}
        <DiagonalImage
          src="/sale1.webp"
          alt="Sale game 3"
          position="right-near"
        />
        <DiagonalImage
          src="/sale1.webp"
          alt="Sale game 4"
          position="right-far"
        />
      </div>
    </section>
  );
}