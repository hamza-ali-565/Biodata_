"use client";

import { useState, useEffect, useRef } from "react";

export function IntersectionObserverWrapper({ 
  children, 
  fallback = null, 
  rootMargin = "200px", 
  triggerOnce = true,
  id,
  className
}) {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          setIntersecting(false);
        }
      },
      { rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [rootMargin, triggerOnce]);

  return (
    <div ref={ref} id={id} className={className}>
      {isIntersecting ? children : fallback}
    </div>
  );
}
