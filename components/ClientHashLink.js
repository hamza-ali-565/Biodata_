"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export function ClientHashLink({ href, className, children, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      if (pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        sessionStorage.setItem("scrollToForm", "true"); // for backward compatibility in page.js
        sessionStorage.setItem("scrollToId", id);
        router.push("/");
      }
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
