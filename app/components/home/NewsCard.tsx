/**
 * NewItem Component
 *
 * News article card for the Latest News section
 */

import Image from "next/image";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";

/* ============================================
   TYPES
   ============================================ */

interface NewsItemProps {
  /** News article image */
  image?: string;
  /** Time ago text */
  timeAgo?: string;
  /** Article title */
  title?: string;
  /** Article excerpt */
  excerpt?: string;
  /** View count */
  views?: number;
  /** Link to full article */
  href?: string;
}

/* ============================================
   CONSTANTS
   ============================================ */

const DEFAULTS = {
  image: "/bg-hero1.webp",
  timeAgo: "8 days ago",
  title:
    "The Witcher 4 Unveiled: First Look Confirms Kovir Setting, Manticore Hunt, and 60 FPS Target on Consoles",
  excerpt:
    "CD Projekt Red returned to Epic Games' annual State of Unreal showcase with a spellbinding tech demo for The Witcher 4, revealing the series' next chapter will send players north to the mineral-rich k",
  views: 2398,
} as const;

/* ============================================
   MAIN COMPONENT
   ============================================ */

/**
 * NewsItem Component
 *
 * Card displaying a news article with image, title, excerpt, and view count
 */
export default function NewsItem({
  image = DEFAULTS.image,
  timeAgo = DEFAULTS.timeAgo,
  title = DEFAULTS.title,
  excerpt = DEFAULTS.excerpt,
  views = DEFAULTS.views,
  href,
}: NewsItemProps) {
  const CardWrapper = href ? "a" : "article";

  return (
    <CardWrapper
      {...(href ? { href } : {})}
      className="bg-surface-card gap-y-2 flex flex-col w-fit rounded-sm p-5 transition-colors hover:bg-state-hover cursor-pointer"
    >
      {/* Article Image */}
      <div className="relative w-[305px] 970:w-[253px] 1200:w-[320px] 1920:w-[335px] 1640:w-[376px] h-[174px] rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 970px) 305px, (max-width: 1200px) 253px, (max-width: 1640px) 320px, 376px"
        />
      </div>

      {/* Time Ago */}
      <div className="flex gap-x-1 items-center text-dm-text-disabled text-[12px]">
        <LuClock3 size={16} aria-hidden="true" />
        <time>{timeAgo}</time>
      </div>

      {/* Title */}
      <h3 className="text-[16px] max-w-[305px] 970:max-w-[253px] 1920:max-w-[335px] 1640:max-w-[376px] 1200:max-w-[320px] text-dm-text-primary font-medium line-clamp-2">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="text-dm-text-muted text-[14px] max-w-[305px] 970:max-w-[253px] 1920:max-w-[335px] 1640:max-w-[376px] 1200:max-w-[320px] line-clamp-3">
        {excerpt}
      </p>

      {/* View Count */}
      <div className="flex text-dm-text-secondary mt-2 text-[16px] items-center gap-x-1">
        <MdOutlineRemoveRedEye size={24} aria-hidden="true" />
        <span aria-label={`${views.toLocaleString()} views`}>
          {views.toLocaleString()}
        </span>
      </div>
    </CardWrapper>
  );
}
