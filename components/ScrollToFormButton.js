"use client";

import { usePathname, useRouter } from "next/navigation";
import { navigateToForm } from "../lib/navigationUtils";

export function ScrollToFormButton({ children, className, onClick }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (e) => {
    if (onClick) onClick(e);
    navigateToForm(router, pathname);
  };

  return (
    <button type="button" onClick={handleScroll} className={className}>
      {children}
    </button>
  );
}
