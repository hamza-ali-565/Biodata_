import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

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
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-white">
                Contact Us
              </Link>
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
          <span className="text-slate-500 mr-2">Follow Us</span>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

