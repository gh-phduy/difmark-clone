/**
 * Slide Animations
 */

import gsap from "gsap";

type SlideDirection = "up" | "down" | "left" | "right";

export function animateSlideIn(
  element: HTMLElement | null,
  direction: SlideDirection = "up",
  distance: number = 20,
) {
  if (!element) return;

  const from: gsap.TweenVars = { opacity: 0 };

  switch (direction) {
    case "up":
      from.y = distance;
      break;
    case "down":
      from.y = -distance;
      break;
    case "left":
      from.x = distance;
      break;
    case "right":
      from.x = -distance;
      break;
  }

  gsap.fromTo(element, from, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.4,
    ease: "power2.out",
  });
}
