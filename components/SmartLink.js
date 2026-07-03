"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { navigateToTemplates, navigateToForm, FORM_TARGET_ID, FORM_ANCHOR_ID } from "../lib/navigationUtils";

// Any hash link that points at the biodata form (however it's spelled) should
// land in the same place — Personal Details — not wherever its literal id sits.
const FORM_HASH_IDS = new Set(["biodata-form-wrapper", "biodata-form"]);

export function SmartLink({ href, className, children, onClick, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    if (typeof href === "string" && href.startsWith("/#")) {
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
