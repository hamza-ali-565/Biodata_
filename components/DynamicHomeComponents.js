"use client";

import dynamic from "next/dynamic";

const sectionPlaceholder = (
  <div
    className="premium-card-static my-8 h-48 animate-pulse"
    aria-hidden="true"
  />
);

export const TemplateCarousel = dynamic(
  () => import("./TemplateCarousel").then((mod) => mod.TemplateCarousel),
  { loading: () => sectionPlaceholder, ssr: false }
);

export const BiodataForm = dynamic(
  () => import("./BiodataForm").then((mod) => mod.BiodataForm),
  { loading: () => sectionPlaceholder, ssr: false }
);

