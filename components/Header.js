"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/templates", label: "Templates" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleCreateBiodata = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (pathname === "/") {
      document.getElementById("biodata-form")?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToForm", "true");
      router.push("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 mb-8 bg-slate-950/60 backdrop-blur">
      <nav
        className="flex items-center justify-between gap-4 border-b border-white/5 pb-3 pt-3"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 p-2"
          aria-label="Go to Homepage"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src="/images/Logo-of-marriage-biodata-hub.webp"
            alt="Marriage Biodata Hub Logo"
            width={320}
            height={100}
            className="h-16 sm:h-20 w-auto object-contain drop-shadow-md"
            priority
          />
        </Link>

        {/* Desktop Header Content - Kept Exactly the Same! */}
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-5 text-xs font-medium text-slate-200/80 lg:flex sm:text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={handleCreateBiodata}
            aria-label="Create Biodata Form"
            className="hidden lg:flex rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-rose-500 px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:text-sm min-h-[44px] items-center justify-center"
          >
            Create Biodata
          </button>

          {/* Mobile Hamburger Toggle (Tablet & Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="flex lg:hidden relative p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            {isMobileMenuOpen ? (
              <div>
                <X className="w-7 h-7" />
              </div>
            ) : (
              <div>
                <Menu className="w-7 h-7" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-t border-white/10 lg:hidden overflow-hidden flex flex-col h-[calc(100vh-80px)] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="flex-1 overflow-y-auto px-6 py-12 flex flex-col gap-8">
            <ul className="flex flex-col gap-6 text-center">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <li
                    key={item.href}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-xl font-medium p-3 outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl transition-all ${isActive
                        ? "text-brand-400 bg-brand-500/10 border border-brand-500/20 shadow-inner"
                        : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div
              className="mt-6 pt-10 border-t border-white/10 flex justify-center"
            >
              <button
                onClick={handleCreateBiodata}
                aria-label="Create Biodata Form"
                className="w-full max-w-sm rounded-xl bg-gradient-to-r from-brand-400 via-brand-500 to-rose-500 px-6 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(244,63,94,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
              >
                Create Biodata
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
