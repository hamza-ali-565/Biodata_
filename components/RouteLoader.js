"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function RouteLoaderInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timers = useRef([]);
  const growTimer = useRef(null);
  const isFirstRender = useRef(true);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (growTimer.current) clearInterval(growTimer.current);
  };

  const start = () => {
    clearTimers();
    setVisible(true);
    setProgress(10);
    growTimer.current = setInterval(() => {
      setProgress((p) => (p >= 90 ? p : p + Math.max(1, (90 - p) / 10)));
    }, 200);
  };

  const finish = () => {
    clearTimers();
    setProgress(100);
    timers.current.push(
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 250)
    );
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    finish();
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (url.pathname + url.search === window.location.pathname + window.location.search) return;
      } catch {
        return;
      }

      start();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => clearTimers, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full pointer-events-none"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 200ms ease" }}
    >
      <div
        className="h-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"
        style={{
          width: `${progress}%`,
          transition: "width 200ms ease",
        }}
      />
    </div>
  );
}

export default function RouteLoader() {
  return (
    <Suspense fallback={null}>
      <RouteLoaderInner />
    </Suspense>
  );
}
