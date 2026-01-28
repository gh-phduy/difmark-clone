/**
 * Dropdown Animations
 */

import gsap from "gsap";

export function animateDropdownOpen(element: HTMLElement | null) {
  if (!element) return;

  gsap.set(element, { display: "block" });
  gsap.fromTo(
    element,
    { scaleY: 0, opacity: 0, transformOrigin: "top center" },
    { scaleY: 1, opacity: 1, duration: 0.35, ease: "back.out(1.7)" },
  );
}

export function animateDropdownClose(
  element: HTMLElement | null,
  onComplete?: () => void,
) {
  if (!element) return;

  gsap.to(element, {
    scaleY: 0,
    opacity: 0,
    duration: 0.2,
    ease: "power2.in",
    onComplete: () => {
      if (element) gsap.set(element, { display: "none" });
      onComplete?.();
    },
  });
}

export function animateArrowRotation(
  element: HTMLElement | null,
  isOpen: boolean,
) {
  if (!element) return;

  gsap.to(element, {
    rotate: isOpen ? 180 : 0,
    duration: 0.3,
    ease: "power2.out",
  });
}
