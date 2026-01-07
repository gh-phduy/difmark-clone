"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { PiShoppingCartBold, PiSignInBold } from "react-icons/pi";

import { useScrollPosition } from "@/app/lib/hooks";
import NavCategories from "./NavCategories";
import { ROUTES } from "@/app/lib/constants";

/* ============================================
   CONSTANTS
   ============================================ */

/** Scroll threshold để trigger navbar background change */
const SCROLL_THRESHOLD = 100;

/* ============================================
   SUB-COMPONENTS
   ============================================ */

/**
 * Vertical divider component
 */
function NavDivider() {
  return (
    <div
      className="770:block hidden h-7 w-[0.5px] bg-dm-border-subtle"
      aria-hidden="true"
    />
  );
}

/**
 * Search input component
 */
interface NavSearchProps {
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

function NavSearch({ value, onChange, onFocus, onBlur }: NavSearchProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative text-dm-text-secondary flex-1">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="bg-surface-overlay px-4 py-2 caret-white text-dm-text-primary cursor-text focus:outline-none focus-visible:ring-2 focus-visible:ring-state-focus w-full"
        aria-label="Search products"
        placeholder=""
      />
      {!value && (
        <div
          className="absolute left-4 top-1/2 -translate-y-1/2 flex gap-x-1 items-center pointer-events-none"
          aria-hidden="true"
        >
          Search by
          <span className="font-bold">Product</span>
        </div>
      )}
    </div>
  );
}

/**
 * Categories dropdown button
 */
interface CategoriesDropdownProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

function CategoriesDropdown({ isOpen, onOpenChange }: CategoriesDropdownProps) {
  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <button
          className="bg-brand-light text-dm-text-secondary hover:text-dm-text-primary transition-all duration-500 flex gap-x-2 items-center text-[16px] px-4 py-1 rounded-lg flex-shrink-0"
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-label="Open categories menu"
        >
          <span className="1000:inline hidden">All Categories</span>
          <AiOutlineAppstore
            size={24}
            className="1000:hidden inline"
            aria-hidden="true"
          />
          <BiSolidDownArrow
            size={12}
            className="transition-transform duration-500"
            style={{
              transform: isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
              transformStyle: "preserve-3d",
            }}
            aria-hidden="true"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="bg-surface-elevated/90 w-auto p-0 backdrop-blur-sm rounded-lg border-none"
        align="start"
        sideOffset={20}
        alignOffset={-4}
        side="bottom"
      >
        <NavCategories />
      </PopoverContent>
    </Popover>
  );
}

/**
 * Search button icon
 */
function SearchButton() {
  return (
    <button
      className="py-1 px-5 flex items-center font-bold rounded-lg bg-brand-light text-dm-text-tertiary flex-shrink-0 hover:text-dm-text-secondary transition-colors"
      aria-label="Search"
    >
      <IoSearch size={20} aria-hidden="true" />
    </button>
  );
}

/**
 * Cart button
 */
function CartButton() {
  return (
    <button
      className="text-dm-text-secondary hover:text-dm-text-primary transition-all duration-300 relative"
      aria-label="Shopping cart"
    >
      <PiShoppingCartBold size={24} aria-hidden="true" />
      {/* TODO: Add cart item count badge */}
    </button>
  );
}

/**
 * Sign in button
 */
function SignInButton() {
  return (
    <Link href={ROUTES.SIGNUP} className="focus-visible:outline-none" aria-label="Sign in to your account">
      <button className="flex hover:text-dm-text-primary transition-colors duration-500 items-center py-4 px-2 gap-x-2 text-dm-text-secondary">
        <PiSignInBold size={24} aria-hidden="true" />
        <span className="770:block hidden">SIGN IN</span>
      </button>
    </Link>
  );
}

/* ============================================
   MAIN COMPONENT
   ============================================ */

/**
 * NavBar Component
 *
 * Main navigation bar with:
 * - Responsive design
 * - Scroll-based background change
 * - Categories dropdown
 * - Search input
 * - Cart and sign-in actions
 *
 * @example
 * <NavBar />
 */
export default function NavBar() {
  // State
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Custom hook for scroll detection
  const { isScrolled } = useScrollPosition(SCROLL_THRESHOLD);

  // Event handlers
  const handleCategoriesOpenChange = (open: boolean) => {
    setIsCategoriesOpen(open);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-1000 flex justify-center w-full"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Main Container */}
      <div
        className={`flex justify-center gap-x-3 transition-all duration-700 ease-out ${isScrolled
          ? "translate-y-0 w-full bg-brand/80 backdrop-blur-xl"
          : "990:translate-y-5 990:rounded-lg w-full 990:w-[972px] 1200:w-[1172px] 1640:w-[1342px] 1920:w-[1622px] bg-brand"
          }`}
      >
        <div className="py-10 px-8 800:px-4 h-10 w-full flex items-center justify-between 770:justify-center responsive-nav">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex-shrink-0">
            <Image
              src="/Difmark-logo.png"
              alt="Difmark - Digital Game Marketplace"
              width={130}
              height={30}
              priority
              className="w-[130px] h-[30px]"
            />
          </Link>

          <NavDivider />

          {/* Center Navigation - Search Bar */}
          <div className="770:flex flex-1 hidden items-center mx-6">
            <div className="bg-surface-overlay flex rounded-lg p-[2px] w-full">
              {/* Categories Dropdown */}
              <CategoriesDropdown
                isOpen={isCategoriesOpen}
                onOpenChange={handleCategoriesOpenChange}
              />

              {/* Search Input */}
              <NavSearch
                value={searchValue}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />

              {/* Search Button */}
              <SearchButton />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <NavDivider />
            <CartButton />
            <NavDivider />
            <SignInButton />
          </div>
        </div>
      </div>
    </nav>
  );
}