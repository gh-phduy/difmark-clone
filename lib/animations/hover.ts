/**
 * Hover Animations
 */

import gsap from "gsap";

export function animateHoverScale(
  element: HTMLElement | null,
  scale: number = 1.05,
) {
  if (!element) return;

  gsap.to(element, {
    scale,
    duration: 0.2,
    ease: "power2.out",
  });
}

export function animateHoverScaleReset(element: HTMLElement | null) {
  if (!element) return;

  gsap.to(element, {
    scale: 1,
    duration: 0.2,
    ease: "power2.out",
  });
}
