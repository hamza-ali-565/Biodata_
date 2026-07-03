"use client";

import { useEffect } from "react";

// The offset accounts for the sticky header (approx 80px) + some breathing room
const HEADER_OFFSET = 100;

export const scrollToElementWithOffset = (id, offset = HEADER_OFFSET) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const navigateToTemplates = (router, pathname) => {
  if (pathname === "/templates") {
    // Already on templates page, just scroll
    scrollToElementWithOffset("templates-grid");
  } else {
    // Store trigger and navigate
    sessionStorage.setItem("scrollToTemplates", "true");
    router.push("/templates");
  }
};

// If targetId lives inside a lazy-mounted section (e.g. IntersectionObserverWrapper),
// it won't exist in the DOM until that section scrolls near the viewport. `anchorId`
// should be the always-present wrapper — we scroll there first to trigger the mount,
// then poll briefly for targetId to appear and fine-tune the scroll to it.
function scrollToLazyElement(targetId, anchorId) {
  scrollToElementWithOffset(anchorId || targetId);

  if (!anchorId || anchorId === targetId) return;

  let attempts = 0;
  const poll = setInterval(() => {
    attempts += 1;
    const el = document.getElementById(targetId);
    if (el) {
      clearInterval(poll);
      scrollToElementWithOffset(targetId);
    } else if (attempts > 20) {
      clearInterval(poll);
    }
  }, 150);
}

// Every "Create Biodata" entry point across the site should land in the same
// place: the Personal Details section of the form. FORM_TARGET_ID lives inside
// the lazily-mounted BiodataForm; FORM_ANCHOR_ID is the always-present wrapper
// that must be scrolled toward first to trigger that lazy mount.
export const FORM_TARGET_ID = "personal-details-section";
export const FORM_ANCHOR_ID = "biodata-form-wrapper";

export const navigateToForm = (
  router,
  pathname,
  targetId = FORM_TARGET_ID,
  anchorId = FORM_ANCHOR_ID
) => {
  if (pathname === "/") {
    // Already on home, just scroll
    scrollToLazyElement(targetId, anchorId);
  } else {
    // Store trigger and navigate
    sessionStorage.setItem("scrollToForm", "true");
    sessionStorage.setItem("scrollToId", targetId);
    if (anchorId) sessionStorage.setItem("scrollToAnchor", anchorId);
    router.push("/");
  }
};

export function useTemplateAutoScroll() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const shouldScroll = sessionStorage.getItem("scrollToTemplates");
      if (shouldScroll === "true") {
        // Remove the trigger immediately to prevent re-triggering
        sessionStorage.removeItem("scrollToTemplates");
        
        // Wait for DOM to paint/hydrate fully before scrolling
        // React 18 / Next.js can be tricky with timings
        const timerId = setTimeout(() => {
          scrollToElementWithOffset("templates-grid");
        }, 300);

        return () => clearTimeout(timerId);
      }
    }
  }, []);
}

export function useHomeAutoScroll() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const shouldScroll = sessionStorage.getItem("scrollToForm");
      if (shouldScroll === "true") {
        const targetId = sessionStorage.getItem("scrollToId") || FORM_TARGET_ID;
        const anchorId = sessionStorage.getItem("scrollToAnchor") || FORM_ANCHOR_ID;

        sessionStorage.removeItem("scrollToForm");
        sessionStorage.removeItem("scrollToId");
        sessionStorage.removeItem("scrollToAnchor");

        const timerId = setTimeout(() => {
          scrollToLazyElement(targetId, anchorId);
        }, 300);

        return () => clearTimeout(timerId);
      }
    }
  }, []);
}
