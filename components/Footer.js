import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 pt-8 text-sm text-slate-300/80">
      <div className="grid gap-8 md:grid-cols-4">
        <div className="space-y-2 md:col-span-2">
          <div className="flex flex-col gap-2 mb-4">
            <Image
              src="/images/Marriage-biodata-hub.png"
              alt="Marriage Biodata Hub Logo"
              width={200}
              height={60}
              className="h-22 w-auto object-contain drop-shadow-md"
            />
            {/* <p className="text-sm font-semibold text-slate-50">
              Biodata for Marriage
            </p> */}
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-300/80">
            A marriage biodata maker app dedicated to providing the easiest way to create your biodata in minutes. We understand why it’s important to find the right match, as it is about to spend the whole life with someone, and creating biodata is the initial stage of this long, beautiful walk. Our app will help you to create biodata in three easy steps: fill, choose, and download.
          </p>
          <p className="max-w-md text-xs leading-relaxed text-slate-300/80">
            We have the most popular, elegant, and premium template to make a strong impact. We hope you will enjoy our service, and once again, best of luck with your future endeavor.
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
            {/* <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li> */}
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

