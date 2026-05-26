"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { navigateToTemplates, navigateToForm } from "../lib/navigationUtils";

export function SmartLink({ href, className, children, onClick, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    if (typeof href === "string" && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      navigateToForm(router, pathname, id);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
