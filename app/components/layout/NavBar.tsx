"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { Settings } from "lucide-react";

import { useScrollPosition } from "@/lib/hooks";
import { useAuth } from "@/app/context/AuthContext";
import NavCategories from "./NavCategories";
import SignIn from "@/app/components/auth/SignIn";
import UserMenu from "@/app/components/auth/UserMenu";
import { ROUTES } from "@/lib/constants";

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
      className="hidden h-7 w-[0.5px] bg-dm-border-subtle 770:block"
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
    <div className="relative flex-1 text-dm-text-secondary">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full cursor-text bg-surface-overlay px-4 py-2 text-dm-text-primary caret-white focus:outline-hidden focus-visible:ring-2 focus-visible:ring-state-focus"
        aria-label="Search products"
        placeholder=""
      />
      {!value && (
        <div
          className="pointer-events-none absolute top-1/2 left-4 flex -translate-y-1/2 items-center gap-x-1"
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
    <Popover modal={true} open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger
        className="flex shrink-0 items-center gap-x-2 rounded-lg bg-brand-light px-4 py-1 text-[16px] text-dm-text-secondary transition-all duration-500 hover:text-dm-text-primary"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Open categories menu"
      >
        <span className="hidden 1000:inline">All Categories</span>
        <AiOutlineAppstore
          size={24}
          className="inline 1000:hidden"
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
      </PopoverTrigger>
      <PopoverContent
        className="w-auto rounded-lg border-none bg-surface-elevated/90 p-0 backdrop-blur-xs"
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
      className="flex shrink-0 items-center rounded-lg bg-brand-light px-5 py-1 font-bold text-dm-text-tertiary transition-colors hover:text-dm-text-secondary"
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
      className="relative text-dm-text-secondary transition-all duration-300 hover:text-dm-text-primary"
      aria-label="Shopping cart"
    >
      <PiShoppingCartBold size={24} aria-hidden="true" />
      {/* TODO: Add cart item count badge */}
    </button>
  );
}

/**
 * Sign in button or User Menu
 */
function SignInButton() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null; // or a loading skeleton
  }

  if (user) {
    return <UserMenu user={user} />;
  }

  return <SignIn />;
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
  const pathname = usePathname();
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

  const isCheckoutPage = pathname?.startsWith("/checkout");

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50 flex w-full justify-center transition-all duration-1000"
      role="navigation"
      aria-label={isCheckoutPage ? "Checkout navigation" : "Main navigation"}
    >
      {/* Main Container */}
      <div
        className={`flex justify-center gap-x-3 transition-all duration-700 ease-out ${
          isCheckoutPage
            ? "w-full translate-y-0 border-b border-[#30363d] bg-[#161b22]"
            : isScrolled
              ? "w-full translate-y-0 bg-brand/80 backdrop-blur-xl"
              : "w-full bg-brand 990:w-[972px] 990:translate-y-5 990:rounded-lg 1200:w-[1172px] 1640:w-[1342px] 1920:w-[1622px]"
        }`}
      >
        <div
          className={`flex h-10 w-full responsive-nav items-center justify-between px-8 770:justify-center 800:px-4 ${
            isCheckoutPage ? "py-5" : "py-10"
          }`}
        >
          {/* Logo - Always visible */}
          <Link href={ROUTES.HOME} className="shrink-0">
            <Image
              src="/Difmark-logo.png"
              alt="Difmark - Digital Game Marketplace"
              width={130}
              height={30}
              priority
              className="h-[30px] w-[130px]"
            />
          </Link>

          {isCheckoutPage ? (
            <>
              {/* Checkout Stepper */}
              <div className="hidden flex-1 items-center justify-center gap-4 text-sm font-medium md:flex">
                {/* Step 1: Shopping Cart (Completed) */}
                <div className="flex items-center gap-2 text-[#46ca43]">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#46ca43] text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                  </div>
                  <span>Shopping Cart</span>
                </div>

                {/* Connector */}
                <div className="h-[2px] w-24 bg-[#46ca43]"></div>

                {/* Step 2: Checkout (Active) */}
                <div className="flex items-center gap-2 text-white">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#58a6ff] bg-[#374050] text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <span>Checkout</span>
                </div>

                {/* Connector */}
                <div className="h-[2px] w-24 bg-[#2d3544]"></div>

                {/* Step 3: Processing (Pending) */}
                <div className="flex items-center gap-2 text-[#8b949e]">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#21262d]">
                    <div className="h-2 w-2 rounded-full bg-[#8b949e]"></div>
                  </div>
                  <span>Processing</span>
                </div>
              </div>

              {/* Checkout Right Actions */}
              <div className="flex items-center gap-4 text-sm text-[#8b949e]">
                <div className="flex cursor-pointer items-center gap-1 hover:text-white">
                  <Settings size={16} />
                  <span>Processing</span>
                </div>
                <div className="h-4 w-[1px] bg-[#30363d]"></div>
                <div className="flex items-center gap-4">
                  <span className="cursor-pointer hover:text-white">USD</span>
                  <span className="cursor-pointer hover:text-white">LNG</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <NavDivider />

              {/* Center Navigation - Search Bar */}
              <div className="mx-6 hidden flex-1 items-center 770:flex">
                <div className="flex w-full rounded-lg bg-surface-overlay p-[2px]">
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
