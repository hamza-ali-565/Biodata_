import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/templates", label: "Templates" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 mb-8 bg-slate-950/60 backdrop-blur">
      <nav
        className="flex items-center justify-between gap-4 border-b border-white/5 pb-3 pt-3"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-full bg-gradient-to-tr from-brand-400 via-brand-500 to-rose-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-soft">
            Biodata
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-50 sm:text-base">
            Biodata for Marriage
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-5 text-xs font-medium text-slate-200/80 sm:flex sm:text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#biodata-form"
            className="rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-rose-500 px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:text-sm"
          >
            Create Biodata
          </Link>
        </div>
      </nav>
    </header>
  );
}

