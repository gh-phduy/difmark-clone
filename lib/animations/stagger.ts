/**
 * Stagger Animations
 */

import gsap from "gsap";

export function animateStaggerItems(
  elements: HTMLElement[] | NodeListOf<Element> | null,
  staggerDelay: number = 0.05,
) {
  if (!elements || elements.length === 0) return;

  gsap.fromTo(
    elements,
    { opacity: 0, y: 10 },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: staggerDelay,
      ease: "power2.out",
    },
  );
}
