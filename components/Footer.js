import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import { SmartLink } from "./SmartLink";
import { ScrollToFormButton } from "./ScrollToFormButton";

const quickNavigation = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Template Library", path: "/templates" },
  { name: "Biodata Builder", path: "/#biodata-form" },
];

const popularTemplates = [
  { name: "Traditional Biodata", path: "/templates" },
  { name: "Modern & Minimalist", path: "/templates" },
  { name: "Premium & Gold", path: "/templates" },
];

const weddingCategories = [
  { name: "Islamic Themes", path: "/muslim-biodata-for-marriage" },
  { name: "Hindu Themes", path: "/hindu-marriage-biodata" },
  { name: "Royal & Elegant", path: "/templates" },
];

const freeResources = [
  { name: "Blog", path: "/blog" },
  { name: "Design Tips", path: "/#design-tips" },
  { name: "How to Create Biodata", path: "/#how-to-create" },
  { name: "FAQ", path: "/#faq" },
];

const supportLegal = [
  { name: "Contact Us", path: "/contact-us" },
  { name: "marriagebiodatahub@gmail.com", path: "mailto:marriagebiodatahub@gmail.com", external: true },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
];

function FooterColumn({ title, children }) {
  return (
    <div className="space-y-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-300/90 sm:text-xs">
        {title}
      </p>
      {children}
    </div>
  );
}

function FooterLink({ href, children, external }) {
  const className =
    "group flex items-center text-sm text-slate-400 transition-colors duration-300 hover:text-white sm:text-[15px]";

  const inner = (
    <>
      <span className="mr-0 h-px w-0 shrink-0 rounded-full bg-gradient-to-r from-brand-500 to-rose-500 transition-all duration-300 group-hover:mr-2.5 group-hover:w-2.5" />
      <span className="group-hover:underline group-hover:underline-offset-4 group-hover:decoration-brand-500/40">
        {children}
      </span>
    </>
  );

  if (external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {inner}
      </a>
    );
  }

  return (
    <SmartLink href={href} className={className}>
      {inner}
    </SmartLink>
  );
}

function FooterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute -left-[15%] top-0 h-[55%] w-[50%] rounded-full bg-brand-500/12 blur-[120px]"
      />
      <div
        className="absolute -right-[10%] bottom-0 h-[60%] w-[55%] rounded-full bg-rose-500/10 blur-[130px]"
      />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[90px]" />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      <svg
        className="absolute -right-8 top-8 h-48 w-48 text-white/[0.04]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
        <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5" />
        <path d="M50 8 C62 8 62 28 50 42 C38 28 38 8 50 8 Z" stroke="currentColor" strokeWidth="0.5" />
        <path d="M50 92 C62 92 62 72 50 58 C38 72 38 92 50 92 Z" stroke="currentColor" strokeWidth="0.5" />
        <path d="M8 50 C8 62 28 62 42 50 C28 38 8 38 8 50 Z" stroke="currentColor" strokeWidth="0.5" />
        <path d="M92 50 C92 62 72 62 58 50 C72 38 92 38 92 50 Z" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <svg
        className="absolute -left-6 bottom-16 h-40 w-40 text-brand-400/[0.06]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon points="50,5 95,50 50,95 5,50" stroke="currentColor" strokeWidth="0.5" />
        <polygon points="50,18 82,50 50,82 18,50" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-full text-white/[0.04]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M0,64 C240,96 480,32 720,48 C960,64 1200,16 1440,40 L1440,120 L0,120 Z"
        />
      </svg>

      <svg
        className="absolute left-0 top-0 w-full rotate-180 text-white/[0.02]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,40 C360,8 720,72 1080,48 C1260,36 1380,28 1440,32 L1440,0 L0,0 Z" />
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-20 w-full">
      <div className="relative overflow-hidden rounded-t-[2.5rem] p-[1px] shadow-[0_-20px_80px_rgba(0,0,0,0.35)] sm:rounded-t-[3rem]">
        <div
          className="premium-frame-glow absolute inset-0 rounded-t-[2.5rem] sm:rounded-t-[3rem]"
          aria-hidden
        />

        <div className="premium-panel rounded-t-[calc(2.5rem-1px)] border-t border-white/[0.08] sm:rounded-t-[calc(3rem-1px)]">
          <FooterBackground />

          <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            {/* CTA */}
            <div className="premium-card group relative mb-14 p-6 sm:mb-16 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/15 blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl"
                aria-hidden
              />
              <div className="relative mb-6 text-center lg:mb-0 lg:text-left">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-200">
                  <Sparkles className="h-3.5 w-3.5 text-brand-400" aria-hidden />
                  Free & easy
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Create Your Biodata Now
                </h2>
                <p className="mt-2 text-sm font-medium text-slate-400 sm:text-base">
                  Start in minutes — choose a template, fill your details, and download instantly.
                </p>
              </div>
              <ScrollToFormButton
                className="relative inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_24px_rgba(244,63,94,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(244,63,94,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98] lg:w-auto"
              >
                Get Started For Free
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ScrollToFormButton>
            </div>

            {/* Main grid */}
            <div className="mb-14 grid grid-cols-1 gap-12 lg:mb-16 lg:grid-cols-12 lg:gap-10">
              {/* Brand */}
              <div className="space-y-6 lg:col-span-5 lg:pr-6">
                <Link href="/" className="group relative inline-block">
                  <div
                    className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-brand-500/20 to-rose-500/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <Image
                    src="/images/Logo-of-marriage-biodata-hub.webp"
                    alt="Marriage Biodata Hub Logo"
                    width={280}
                    height={85}
                    className="relative h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-16"
                  />
                </Link>

                <div className="space-y-4">
                  <p className="text-sm font-medium leading-[1.85] text-slate-400 sm:text-base">
                    A marriage biodata maker app dedicated to providing the easiest way to create your biodata in minutes. We understand why it’s important to find the right match, as it is about to spend the whole life with someone, and creating biodata is the initial stage of this long, beautiful walk. Our app will help you to create biodata in three easy steps: fill, choose, and download.
                  </p>
                  <p className="text-sm font-medium leading-[1.85] text-slate-400 sm:text-base">
                    We have the most popular, elegant, and premium template to make a strong impact. We hope you will enjoy our service, and once again, best of luck with your future endeavor.
                  </p>
                </div>

                <div className="premium-card-static p-4 transition-colors duration-300 hover:border-emerald-500/20">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Connect with us
                  </p>
                  <SocialLinks />
                </div>
              </div>

              {/* Link columns */}
              <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4 lg:col-span-7">
                <FooterColumn title="Quick Navigation">
                  <ul className="space-y-3">
                    {quickNavigation.map((item) => (
                      <li key={item.path}>
                        <FooterLink href={item.path}>{item.name}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </FooterColumn>

                <FooterColumn title="Popular Biodata Templates">
                  <ul className="space-y-3">
                    {popularTemplates.map((item) => (
                      <li key={item.name}>
                        <FooterLink href={item.path}>{item.name}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </FooterColumn>

                <FooterColumn title="Wedding Biodata Categories">
                  <ul className="space-y-3">
                    {weddingCategories.map((item) => (
                      <li key={item.name}>
                        <FooterLink href={item.path}>{item.name}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </FooterColumn>

                <FooterColumn title="Resources & Support">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    Free Resources
                  </p>
                  <ul className="mb-6 space-y-3">
                    {freeResources.map((item) => (
                      <li key={item.path}>
                        <FooterLink href={item.path}>{item.name}</FooterLink>
                      </li>
                    ))}
                  </ul>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    Support & Legal
                  </p>
                  <ul className="space-y-3">
                    {supportLegal.map((item) => (
                      <li key={item.name}>
                        <FooterLink
                          href={item.path}
                          external={item.external || item.path.startsWith("mailto:")}
                        >
                          {item.name}
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                </FooterColumn>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
              <p className="text-center text-sm font-medium text-slate-500 md:text-left">
                © {new Date().getFullYear()} Marriage Biodata Hub. All rights reserved.
              </p>
              <p className="text-center text-xs text-slate-600 md:text-right">
                Crafted for beautiful matrimonial introductions worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
