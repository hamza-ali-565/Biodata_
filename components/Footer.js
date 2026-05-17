import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="mt-14 w-full relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950/60 shadow-2xl">
      <div className="w-full mx-auto px-8 sm:px-12 lg:px-16 pt-20 lg:pt-24 pb-12 relative z-10">

        {/* Top Footer Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 mb-20">

          {/* Brand & About (Left Side - Anchor) */}
          <div className="lg:w-5/12 space-y-8 lg:pr-16">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Logo-of-marriage-biodata-hub.png"
                alt="Marriage Biodata Hub Logo"
                width={280}
                height={85}
                className="h-16 w-auto object-contain drop-shadow-sm transition-opacity hover:opacity-90"
              />
            </Link>
            <p className="text-base leading-relaxed text-slate-300 max-w-sm font-medium">
              A marriage biodata maker app dedicated to providing the easiest way to create your biodata in minutes. We understand why it’s important to find the right match, as it is about to spend the whole life with someone, and creating biodata is the initial stage of this long, beautiful walk. Our app will help you to create biodata in three easy steps: fill, choose, and download.
            </p>
            <p className="text-base leading-relaxed text-slate-300 max-w-sm font-medium">
              We have the most popular, elegant, and premium template to make a strong impact. We hope you will enjoy our service, and once again, best of luck with your future endeavor.
            </p>
          </div>

          {/* Links (Right Side - Evenly Spaced Columns) */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8 pt-4 lg:pt-0">

            {/* Column 1: Platform */}
            <div className="space-y-8">
              <p className="text-white font-bold tracking-wider uppercase text-sm">
                Platform
              </p>
              <ul className="space-y-5">
                <li>
                  <Link href="/" className="text-base text-slate-400 hover:text-white transition-colors duration-200 font-medium p-2 inline-block min-h-[44px] flex items-center">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="text-base text-slate-400 hover:text-white transition-colors duration-200 font-medium p-2 inline-block min-h-[44px] flex items-center">
                    Template Library
                  </Link>
                </li>
                <li>
                  <Link href="/#biodata-form" className="text-base text-slate-400 hover:text-white transition-colors duration-200 font-medium p-2 inline-block min-h-[44px] flex items-center">
                    Biodata Builder
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Templates */}
            <div className="space-y-8">
              <p className="text-white font-bold tracking-wider uppercase text-sm">
                Templates
              </p>
              <ul className="space-y-5">
                <li>
                  <Link href="/templates" className="text-base text-slate-400 hover:text-white transition-colors duration-200 font-medium p-2 inline-block min-h-[44px] flex items-center">
                    Traditional Biodata
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="text-base text-slate-400 hover:text-white transition-colors duration-200 font-medium p-2 inline-block min-h-[44px] flex items-center">
                    Modern & Minimalist
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="text-base text-slate-400 hover:text-white transition-colors duration-200 font-medium p-2 inline-block min-h-[44px] flex items-center">
                    Premium & Gold
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Support & Legal */}
            <div className="space-y-8">
              <p className="text-white font-bold tracking-wider uppercase text-sm">
                Support & Legal
              </p>
              <ul className="space-y-5">
                <li>
                  <Link href="/contact-us" className="text-base text-slate-400 hover:text-white transition-colors duration-200 font-medium p-2 inline-block min-h-[44px] flex items-center">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="mailto:marriagebiodatahub@gmail.com" className="text-base text-slate-400 hover:text-white transition-colors duration-200 truncate font-medium p-2 inline-block min-h-[44px] flex items-center">
                    marriagebiodatahub@gmail.com
                  </a>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-base text-slate-400 hover:text-white transition-colors duration-200 font-medium p-2 inline-block min-h-[44px] flex items-center">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Marriage Biodata Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}

