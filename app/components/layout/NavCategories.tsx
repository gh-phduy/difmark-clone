/**
 * NavCategories Component
 *
 * Categories dropdown menu for the navigation bar
 * Shows categorized product types with icons
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoKey } from "react-icons/io5";
import { IconType } from "react-icons";

/* ============================================
   TYPES
   ============================================ */

interface CategoryItem {
  id: number;
  name: string;
  icon: IconType;
  href: string;
}

interface Category {
  id: number;
  title: string;
  items: CategoryItem[];
}

/* ============================================
   CONSTANTS
   ============================================ */

const CATEGORIES_DATA: Category[] = [
  {
    id: 1,
    title: "Video games",
    items: [
      { id: 1, name: "Game keys", icon: IoKey, href: "/games/keys" },
      { id: 2, name: "DLC Packs", icon: IoIosArrowForward, href: "/games/dlc" },
      { id: 3, name: "Steam Cards", icon: IoIosArrowForward, href: "/games/steam" },
      { id: 10, name: "Xbox Games", icon: IoIosArrowForward, href: "/games/xbox" },
    ],
  },
  {
    id: 2,
    title: "Software",
    items: [
      { id: 4, name: "Windows Keys", icon: IoIosArrowForward, href: "/software/windows" },
      { id: 5, name: "Office 365", icon: IoIosArrowForward, href: "/software/office" },
      { id: 6, name: "Antivirus", icon: IoIosArrowForward, href: "/software/antivirus" },
      { id: 11, name: "VPN", icon: IoIosArrowForward, href: "/software/vpn" },
    ],
  },
  {
    id: 3,
    title: "Digital Services",
    items: [
      { id: 7, name: "VPN Access", icon: IoIosArrowForward, href: "/services/vpn" },
      { id: 8, name: "Streaming", icon: IoIosArrowForward, href: "/services/streaming" },
      { id: 9, name: "Cloud Storage", icon: IoIosArrowForward, href: "/services/cloud" },
    ],
  },
] as const;

/* ============================================
   SUB-COMPONENTS
   ============================================ */

interface CategoryHeaderProps {
  title: string;
}

/**
 * Category section header with gradient mask
 */
function CategoryHeader({ title }: CategoryHeaderProps) {
  return (
    <div
      style={{
        maskImage: "linear-gradient(to right, black 8%, black 60%, transparent 100%)",
      }}
      className="bg-surface-overlay w-fit text-[14px] 990:text-[16px] text-dm-text-muted rounded-sm pl-3 pr-16"
    >
      {title}
    </div>
  );
}

interface ItemCardProps {
  item: CategoryItem;
}

/**
 * Individual category item card
 */
function ItemCard({ item }: ItemCardProps) {
  const IconComponent = item.icon;

  return (
    <Link
      href={item.href}
      className="w-[100px] 990:w-[130px] 1200:w-[170px] relative group text-dm-text-muted duration-1000 origin-center ease-out overflow-hidden h-[65px] 990:h-[75px] 1200:h-[92px] bg-surface-overlay rounded-lg flex flex-col gap-y-1 990:gap-y-2 justify-center items-center hover:bg-state-hover transition-colors cursor-pointer"
    >
      {/* Hover background */}
      <Image
        src="/nav-cate-hover1.webp"
        alt=""
        fill
        className="object-cover origin-center z-10 group-hover:opacity-95 ease-out opacity-0 transition-all duration-1000"
        aria-hidden="true"
      />

      {/* Icon container */}
      <div className="bg-state-active group-hover:bg-state-active/10 transition-colors ease-out duration-1000 shadow-nav-cate relative z-20 h-[32px] w-[32px] 990:h-[38px] 990:w-[38px] 1200:h-[44px] 1200:w-[44px] rounded-lg flex justify-center items-center">
        <IconComponent
          className="group-hover:scale-110 scale-100 transition-transform ease-out duration-1000"
          size={16}
          aria-hidden="true"
        />
      </div>

      {/* Item name */}
      <span className="text-[10px] 990:text-xs 1200:text-sm relative z-20">
        {item.name}
      </span>
    </Link>
  );
}

interface CategorySectionProps {
  category: Category;
  showTopMargin?: boolean;
}

/**
 * Category section with header and items
 */
function CategorySection({ category, showTopMargin = false }: CategorySectionProps) {
  return (
    <div className={showTopMargin ? "mt-2 990:mt-3" : ""}>
      <CategoryHeader title={category.title} />
      <div
        className="flex gap-x-2 990:gap-x-3 1200:gap-x-4 items-center justify-center mt-2 990:mt-3"
        role="list"
      >
        {category.items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ============================================
   MAIN COMPONENT
   ============================================ */

/**
 * NavCategories Component
 *
 * Dropdown menu showing all product categories
 */
export default function NavCategories() {
  return (
    <nav
      className="max-w-[440px] 990:max-w-[580px] 1200:max-w-[760px]"
      aria-label="Product categories"
    >
      {/* Categories content */}
      <div className="flex flex-col items-start p-3 990:p-4 gap-y-2 990:gap-y-3">
        {CATEGORIES_DATA.map((category, index) => (
          <CategorySection
            key={category.id}
            category={category}
            showTopMargin={index > 0}
          />
        ))}
      </div>

      {/* Footer link */}
      <Link
        href="/categories"
        className="flex text-dm-text-muted p-2 bg-brand-light justify-center items-center gap-x-2 hover:text-dm-text-primary transition-colors cursor-pointer"
      >
        <span className="text-[14px] 990:text-[16px] 1200:text-[18px]">
          See all categories
        </span>
        <IoIosArrowForward size={18} aria-hidden="true" />
      </Link>
    </nav>
  );
}