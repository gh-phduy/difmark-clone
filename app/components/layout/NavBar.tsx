"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useScrollPosition } from "@/lib/hooks";
import { ROUTES } from "@/lib/constants";
import CheckoutNavSection from "./nav/CheckoutNavSection";
import MainNavSection from "./nav/MainNavSection";

/* ============================================
   CONSTANTS
   ============================================ */

/** Scroll threshold to trigger navbar background change */
const SCROLL_THRESHOLD = 100;

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
  const pathname = usePathname();
  const { isScrolled } = useScrollPosition(SCROLL_THRESHOLD);
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

          {isCheckoutPage ? <CheckoutNavSection /> : <MainNavSection />}
        </div>
      </div>
    </nav>
  );
}
