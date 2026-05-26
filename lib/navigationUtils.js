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

export const navigateToForm = (router, pathname, targetId = "biodata-form") => {
  if (pathname === "/") {
    // Already on home, just scroll
    scrollToElementWithOffset(targetId);
  } else {
    // Store trigger and navigate
    sessionStorage.setItem("scrollToForm", "true");
    sessionStorage.setItem("scrollToId", targetId);
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
        const targetId = sessionStorage.getItem("scrollToId") || "biodata-form";
        
        sessionStorage.removeItem("scrollToForm");
        sessionStorage.removeItem("scrollToId");
        
        const timerId = setTimeout(() => {
          scrollToElementWithOffset(targetId);
        }, 300);

        return () => clearTimeout(timerId);
      }
    }
  }, []);
}
