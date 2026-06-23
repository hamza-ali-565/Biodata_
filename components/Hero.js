import Image from "next/image";
import { ScrollToFormButton } from "./ScrollToFormButton";
import { SmartLink } from "./SmartLink";
import { MandalaSVG } from "./MandalaSVG";
export function Hero() {
    return (
    <section
      aria-labelledby="hero-heading"
      className="premium-section relative grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:py-14"
    >
      {/* Asian Wedding Theme Background Art: Mandala Motif */}
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] opacity-[0.03] pointer-events-none rotate-12" aria-hidden="true">
        <MandalaSVG />
      </div>

      <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] opacity-[0.03] pointer-events-none -rotate-45" aria-hidden="true">
        <MandalaSVG />
      </div>


      <div className="relative z-10 space-y-6">
        <p className="premium-chip px-3 py-1 text-[11px] font-medium tracking-wide text-brand-200">
          Premium Marriage Biodata Maker
        </p>
        <div>
          <h1
            id="hero-heading"
            className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]"
          >
            Create & Download Biodata For Marriage Free in Minutes
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-medium">
            Create your fully customizable marriage biodata instantly with our{" "}
            <SmartLink href="/templates" className="text-brand-400 hover:text-brand-300 transition-colors">
              free, elegant, popular, and premium templates
            </SmartLink>
            . We’re just 3 steps away from creating a beautiful biodata for marriage fill information, choose a template & download. No login required, as our services are free, and lastly, best of luck with your new chapter.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <ScrollToFormButton
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Create Biodata
          </ScrollToFormButton>
          <p className="text-xs text-slate-400 font-medium tracking-wide">
            No signup required. Export-ready in a few clicks.
          </p>
        </div>
      </div>
      <div className="premium-card-static relative z-10 hidden min-h-[300px] items-center justify-center p-5 transition-transform sm:flex">
        <div className="absolute -left-5 top-6 h-14 w-14 rounded-2xl bg-gradient-to-tr from-brand-400/60 via-brand-500/40 to-rose-500/40 blur-2xl" />
        <div className="absolute -right-4 bottom-4 h-16 w-16 rounded-full bg-gradient-to-tr from-sky-400/40 via-cyan-400/30 to-emerald-400/40 blur-2xl" />

        <div className="premium-card-static relative aspect-[1/1.414] w-full max-w-[280px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full transition-opacity duration-700">
            <Image
              src="/images/new-templates/beautiful-golden-border-marriage-biodata.webp"
              alt="Premium Marriage Biodata Template"
              fill
              className="object-cover transition-opacity duration-700 hover:opacity-0"
              priority
              fetchPriority="high"
              sizes="280px"
            />
            <Image
              src="/images/new-templates/beautiful-leafs-effect-marriage-biodata.webp"
              alt="Premium Marriage Biodata Template 2"
              fill
              className="object-cover opacity-0 transition-opacity duration-700 hover:opacity-100 absolute inset-0 pointer-events-none"
              priority
              fetchPriority="high"
              sizes="280px"
            />
          </div>
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

