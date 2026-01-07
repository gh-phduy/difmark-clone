"use client";

import { useState, useEffect } from "react";

/**
 * Hook để theo dõi scroll position
 * Sử dụng cho NavBar và các component cần scroll effects
 *
 * @param threshold - Ngưỡng scroll để trigger (default: 100px)
 * @returns Object chứa scrollY và isScrolled
 *
 * @example
 * const { isScrolled, scrollY } = useScrollPosition(100);
 * // isScrolled = true khi user scroll qua 100px
 */
export function useScrollPosition(threshold: number = 100) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
    };

    // Set initial value
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return { scrollY, isScrolled };
}

export default useScrollPosition;
