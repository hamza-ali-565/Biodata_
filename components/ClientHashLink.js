"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { navigateToForm, FORM_TARGET_ID, FORM_ANCHOR_ID } from "../lib/navigationUtils";

const FORM_HASH_IDS = new Set(["biodata-form-wrapper", "biodata-form"]);

export function ClientHashLink({ href, className, children, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      if (FORM_HASH_IDS.has(id)) {
        navigateToForm(router, pathname, FORM_TARGET_ID, FORM_ANCHOR_ID);
      } else {
        navigateToForm(router, pathname, id);
      }
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
