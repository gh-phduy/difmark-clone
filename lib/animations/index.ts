/**
 * Animations Module - Centralized Exports
 */

// Dropdown animations
export {
  animateDropdownOpen,
  animateDropdownClose,
  animateArrowRotation,
} from "./dropdown";

// Fade animations
export { animateFadeIn, animateFadeOut } from "./fade";

// Hover animations
export { animateHoverScale, animateHoverScaleReset } from "./hover";

// Slide animations
export { animateSlideIn } from "./slide";

// Stagger animations
export { animateStaggerItems } from "./stagger";

// Hooks
export {
  useDropdownAnimation,
  useArrowRotation,
  useClickOutside,
} from "./hooks";
