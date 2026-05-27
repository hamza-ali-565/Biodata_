"use client";

import { usePathname, useRouter } from "next/navigation";

export function ScrollToFormButton({ children, className, onClick }) {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToForm = () => {
    const section = document.getElementById("biodata-form-wrapper") || document.getElementById("biodata-form");

    if (section) {
      const navbarOffset = 100;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = sectionPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (e) => {
    if (onClick) onClick(e);

    if (pathname === "/") {
      scrollToForm();
    } else {
      sessionStorage.setItem("scrollToForm", "true");
      router.push("/");
    }
  };

  return (
    <button type="button" onClick={handleScroll} className={className}>
      {children}
    </button>
  );
}
