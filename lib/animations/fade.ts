/**
 * Fade Animations
 */

import gsap from "gsap";

export function animateFadeIn(
  element: HTMLElement | null,
  duration: number = 0.3,
) {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0 },
    { opacity: 1, duration, ease: "power2.out" },
  );
}

export function animateFadeOut(
  element: HTMLElement | null,
  duration: number = 0.3,
  onComplete?: () => void,
) {
  if (!element) return;

  gsap.to(element, {
    opacity: 0,
    duration,
    ease: "power2.in",
    onComplete,
  });
}
