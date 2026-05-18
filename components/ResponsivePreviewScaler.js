"use client";

import { useEffect, useRef, useState } from "react";

const LG_BREAKPOINT = 1024;

function getMaxScale(viewportWidth) {
  if (viewportWidth >= LG_BREAKPOINT) return 1;
  if (viewportWidth >= 768) return 0.75;
  return 0.65;
}

/**
 * Visually scales fixed-width biodata templates on viewports below lg.
 * Desktop (lg+) renders children unchanged — no transform, no clipping.
 */
export function ResponsivePreviewScaler({ children }) {
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`);
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setLayout(null);
      return;
    }

    const container = containerRef.current;
    const measureEl = measureRef.current;
    if (!container || !measureEl) return;

    const update = () => {
      const horizontalPadding = 32;
      const availableWidth = Math.max(container.clientWidth - horizontalPadding, 200);
      const naturalWidth = measureEl.scrollWidth || measureEl.offsetWidth;
      const naturalHeight = measureEl.scrollHeight || measureEl.offsetHeight;

      if (!naturalWidth || !naturalHeight) return;

      const maxScale = getMaxScale(window.innerWidth);
      const fitScale = availableWidth / naturalWidth;
      const scale = Math.min(fitScale, maxScale);
      const clampedScale = Math.max(scale, 0.35);

      setLayout({
        scale: clampedScale,
        width: Math.ceil(naturalWidth * clampedScale),
        height: Math.ceil(naturalHeight * clampedScale),
      });
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(container);
    ro.observe(measureEl);

    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [isDesktop, children]);

  if (isDesktop) {
    return <div className="flex w-full justify-center">{children}</div>;
  }

  return (
    <div
      ref={containerRef}
      className="flex w-full justify-center px-3 py-4 sm:px-5 md:px-6"
    >
      <div
        className="relative mx-auto shrink-0 min-h-[280px] w-full"
        style={
          layout
            ? { width: layout.width, height: layout.height, maxWidth: "100%" }
            : undefined
        }
      >
        <div
          ref={measureRef}
          className="absolute left-1/2 top-0 w-max max-w-none origin-top"
          style={{
            transform: `translateX(-50%) scale(${layout?.scale ?? 0.65})`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
