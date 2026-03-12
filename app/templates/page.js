import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TEMPLATE_DEFINITIONS } from "../../components/templatesConfig";
import { TemplateThumbnail } from "../../components/TemplateThumbnail";

export const metadata = {
  title: "Marriage Biodata Templates | Biodata for Marriage",
  description:
    "Browse premium marriage biodata templates in minimal, traditional, modern and elegant styles. Download your biodata as PDF or JPEG.",
  alternates: {
    canonical: "/templates",
  },
  openGraph: {
    title: "Marriage Biodata Templates | Biodata for Marriage",
    description: "Browse premium marriage biodata templates in minimal, traditional, modern and elegant styles. Download your biodata as PDF or JPEG.",
    url: "/templates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata Templates | Biodata for Marriage",
    description: "Browse premium marriage biodata templates in minimal, traditional, modern and elegant styles. Download your biodata as PDF or JPEG.",
  },
};

export default function TemplatesPage() {
  return (
    <>
      <Header />
      <main className="mt-2 flex-1">
        <section className="rounded-3xl border border-white/10 bg-slate-900/80 px-6 py-8 sm:px-10">
          <header className="max-w-2xl">
            <h1 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
              Choose your biodata template
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Explore premium matrimonial biodata designs. Open a template to
              customise fonts, colours and download a high-quality PDF or JPEG.
            </p>
          </header>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TEMPLATE_DEFINITIONS.map((template) => (
              <article
                key={template.id}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/70 text-xs text-slate-200 overflow-hidden shadow-lg hover:border-brand-500/30 transition-all hover:shadow-brand-500/10 hover:shadow-2xl hover:-translate-y-1"
              >
                <TemplateThumbnail templateDefinition={template} />

                <div className="p-5 flex-1 flex flex-col">
                  <div>
                    <h2 className="text-[15px] font-bold text-slate-50 group-hover:text-brand-400 transition-colors">
                      {template.name}
                    </h2>
                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                      {template.style}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      {template.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-2 border-t border-white/5 pt-4 mt-auto">
                    <span className="inline-flex h-6 items-center rounded-full bg-slate-900 border border-white/5 px-2.5 text-[10px] font-medium text-slate-400">
                      {template.layout}
                    </span>
                    <Link
                      href={`/templates/${template.id}`}
                      className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[11px] font-bold text-slate-900 shadow-soft transition hover:scale-105 hover:bg-brand-500 hover:text-white"
                    >
                      Open template
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

