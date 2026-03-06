import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 pt-8 text-sm text-slate-300/80">
      <div className="grid gap-8 md:grid-cols-4">
        <div className="space-y-2 md:col-span-2">
          <p className="text-sm font-semibold text-slate-50">
            Biodata for Marriage
          </p>
          <p className="max-w-md text-xs leading-relaxed text-slate-300/80">
            Create elegant, ready-to-share marriage biodata cards with
            thoughtfully crafted templates designed for modern arranged
            marriages.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Quick links
          </p>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/templates" className="hover:text-white">
                Templates
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Legal &amp; contact
          </p>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <a href="mailto:support@example.com" className="hover:text-white">
                support@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-4">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Biodata for Marriage. All rights
          reserved.
        </p>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-slate-500">Follow</span>
          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[11px] text-slate-200 hover:border-white/25 hover:text-white"
              aria-label="Visit our Instagram"
            >
              IG
            </button>
            <button
              type="button"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[11px] text-slate-200 hover:border-white/25 hover:text-white"
              aria-label="Visit our LinkedIn"
            >
              in
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

