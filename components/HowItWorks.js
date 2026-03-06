import { FileText, LayoutTemplate, Download } from "lucide-react";

const steps = [
  {
    title: "Enter your details",
    description: "Share personal, family, and contact information in a guided, structured form with validation.",
    icon: FileText,
  },
  {
    title: "Pick a template",
    description: "Choose from modern, traditional, minimal, and elegant layouts crafted for marriage biodata.",
    icon: LayoutTemplate,
  },
  {
    title: "Download & share",
    description: "Export your biodata as high-quality PDF or JPEG, ready to share on WhatsApp, email, or print.",
    icon: Download,
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="mt-14 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950/60 px-6 py-12 sm:px-12 relative overflow-hidden shadow-2xl"
    >
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-500/10 blur-[80px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-rose-500/10 blur-[80px]" />

      <div className="relative max-w-2xl text-center mx-auto mb-12">
        <h2
          id="how-it-works-heading"
          className="text-2xl font-bold tracking-tight text-white mb-4 sm:text-3xl"
        >
          How It Works
        </h2>
        <p className="text-sm text-slate-300 sm:text-base font-medium">
          A simple three-step flow designed for families, matchmakers, and individuals preparing for arranged marriages.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full" />
        </div>
      </div>

      <ol className="relative grid gap-8 md:grid-cols-3" aria-label="3-step process">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li
              key={step.title}
              className="group relative flex flex-col items-center text-center rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-8 hover:bg-slate-800/60 transition-all duration-300 cursor-default"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-8 w-8 text-brand-400 drop-shadow-lg" />
              </div>
              <h3 className="text-base font-bold text-white mb-3">
                <span className="text-brand-400 mr-2">{index + 1}.</span> {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

