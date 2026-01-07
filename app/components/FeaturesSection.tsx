/**
 * AboutSection1 Component
 *
 * Section hiển thị 3 tính năng chính: Buyer Protection, Payment, Support
 * Có hover effect với background images
 */

import Image from "next/image";
import { HiShieldCheck } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

/* ============================================
   CONSTANTS
   ============================================ */

/** Mask gradient style for fade effect */
const MASK_STYLE = {
  maskImage: `linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)`,
};

/** Feature items data */
const FEATURES = [
  {
    id: "buyer-protection",
    icon: HiShieldCheck,
    iconSize: 30,
    title: "Buyer Protection",
    description: "Secure transactions and personal data",
    hoverImage: "/hover-ab-1.webp",
  },
  {
    id: "secure-payment",
    icon: FaCreditCard,
    iconSize: 28,
    title: "Secure Payment",
    description: "Secure transactions and personal data",
    hoverImage: "/hover-ab-3.webp",
  },
  {
    id: "customer-support",
    icon: IoPerson,
    iconSize: 28,
    title: "24/7 Support",
    description: "Secure transactions and personal data",
    hoverImage: "/hover-ab-2.webp",
  },
] as const;

/* ============================================
   SUB-COMPONENTS
   ============================================ */

interface FeatureCardProps {
  icon: React.ElementType;
  iconSize: number;
  title: string;
  description: string;
  hoverImage: string;
}

/**
 * Individual feature card with hover effect
 */
function FeatureCard({
  icon: Icon,
  iconSize,
  title,
  description,
  hoverImage,
}: FeatureCardProps) {
  return (
    <div
      style={MASK_STYLE}
      className="relative w-1/3 h-full group"
    >
      {/* Hover background image */}
      <Image
        src={hoverImage}
        alt=""
        fill
        className="z-10 opacity-0 group-hover:opacity-100 transition-all origin-center duration-1000 ease-out object-cover"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative w-full h-full z-20 justify-center items-center flex flex-col">
        {/* Icon container */}
        <div className="h-[56px] mb-3 text-dm-text-muted shadow-custom rounded-lg w-[56px] flex justify-center items-center">
          <Icon size={iconSize} aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="text-[18px] text-dm-text-primary font-semibold">
          {title}
        </h3>

        {/* Description */}
        <span className="text-[14px] text-dm-text-muted">
          {description}
        </span>
      </div>
    </div>
  );
}

/* ============================================
   MAIN COMPONENT
   ============================================ */

/**
 * AboutSection1 Component
 *
 * Displays three key features with interactive hover effects
 */
export default function AboutSection1() {
  return (
    <section
      className="h-[156px] flex items-center justify-center text-center z-50 relative w-full"
      aria-label="Key Features"
    >
      {/* Background image */}
      <Image
        src="/about-us-1.webp"
        alt=""
        fill
        className="z-10 object-cover"
        aria-hidden="true"
        priority={false}
      />

      {/* Features container */}
      <div className="relative w-full max-w-[940px] 1200:max-w-[1140px] 1640:max-w-[1310px] 1920:max-w-[1590px] h-full flex z-20">
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            iconSize={feature.iconSize}
            title={feature.title}
            description={feature.description}
            hoverImage={feature.hoverImage}
          />
        ))}
      </div>
    </section>
  );
}
