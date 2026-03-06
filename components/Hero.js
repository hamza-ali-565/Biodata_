import { Hero3D } from "./Hero3D";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative grid gap-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 px-6 py-10 shadow-soft sm:px-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:py-14"
    >
      <Hero3D />
      <div className="relative z-10 space-y-6">
        <p className="inline-flex rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-sm px-3 py-1 text-[11px] font-medium tracking-wide text-brand-200 shadow-xl">
          Premium Marriage Biodata Maker
        </p>
        <div>
          <h1
            id="hero-heading"
            className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]"
          >
            Create Beautiful Marriage Biodata in Minutes
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-medium">
            Craft an elegant, well-organised biodata that highlights who you
            are. Choose from premium templates, personalise every detail, and
            download as PDF or JPEG—ready to share with families and
            matchmakers.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#biodata-form"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Create Biodata
          </a>
          <p className="text-xs text-slate-400 font-medium tracking-wide">
            No signup required. Export-ready in a few clicks.
          </p>
        </div>
      </div>
      <div className="relative z-10 hidden min-h-[300px] items-center justify-center rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-5 sm:flex shadow-2xl">
        <div className="absolute -left-5 top-6 h-14 w-14 rounded-2xl bg-gradient-to-tr from-brand-400/60 via-brand-500/40 to-rose-500/40 blur-2xl" />
        <div className="absolute -right-4 bottom-4 h-16 w-16 rounded-full bg-gradient-to-tr from-sky-400/40 via-cyan-400/30 to-emerald-400/40 blur-2xl" />
        <div className="relative flex w-full max-w-sm flex-col gap-3 rounded-2xl bg-slate-950/80 p-5 text-xs text-slate-100 shadow-2xl border border-white/5">
          <div className="flex gap-3">
            <div className="h-16 w-16 rounded-xl bg-slate-800/80" aria-hidden />
            <div className="space-y-1.5">
              <div className="h-2.5 w-28 rounded-full bg-slate-700" />
              <div className="h-2 w-24 rounded-full bg-slate-800" />
              <div className="h-2 w-20 rounded-full bg-slate-800" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="space-y-1">
              <div className="h-2 w-16 rounded-full bg-slate-700" />
              <div className="h-2 w-20 rounded-full bg-slate-800" />
            </div>
            <div className="space-y-1">
              <div className="h-2 w-16 rounded-full bg-slate-700" />
              <div className="h-2 w-20 rounded-full bg-slate-800" />
            </div>
          </div>
          <div className="mt-2 h-10 w-full rounded-xl bg-gradient-to-r from-brand-500/80 to-rose-500/80 shadow-inner" />
        </div>
      </div>
    </section>
  );
}

