"use client";

import { useHomeAutoScroll } from "../lib/navigationUtils";

/**
 * Reads the sessionStorage scroll-trigger flags set by navigateToForm() and
 * performs the scroll. Must be mounted immediately (not inside a lazily
 * loaded section like BiodataForm) — otherwise the flags are never read
 * because the component that would read them hasn't mounted yet.
 */
export function AutoScrollTrigger() {
  useHomeAutoScroll();
  return null;
}
