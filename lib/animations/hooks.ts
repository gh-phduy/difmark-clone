/**
 * Animation Hooks
 */

import { useEffect, useRef, RefObject } from "react";
import {
  animateDropdownOpen,
  animateDropdownClose,
  animateArrowRotation,
} from "./dropdown";

export function useDropdownAnimation(
  isOpen: boolean,
): RefObject<HTMLDivElement | null> {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      animateDropdownOpen(contentRef.current);
    } else {
      animateDropdownClose(contentRef.current);
    }
  }, [isOpen]);

  return contentRef;
}

export function useArrowRotation(
  isOpen: boolean,
): RefObject<HTMLDivElement | null> {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateArrowRotation(arrowRef.current, isOpen);
  }, [isOpen]);

  return arrowRef;
}

export function useClickOutside(
  refs: RefObject<HTMLElement | null>[],
  callback: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target as Node),
      );
      if (isOutside) callback();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [refs, callback]);
}
