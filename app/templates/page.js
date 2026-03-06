import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TEMPLATE_DEFINITIONS } from "../../components/templatesConfig";

export const metadata = {
  title: "Marriage Biodata Templates | Biodata for Marriage",
  description:
    "Browse premium marriage biodata templates in minimal, traditional, modern and elegant styles. Download your biodata as PDF or JPEG.",
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
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-xs text-slate-200"
              >
                <div>
                  <p className="text-[13px] font-semibold text-slate-50">
                    {template.name}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                    {template.style}
                  </p>
                  <p className="mt-3 text-[11px] leading-relaxed text-slate-300">
                    {template.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="inline-flex h-6 items-center rounded-full bg-slate-900 px-2 text-[10px] text-slate-300">
                    {template.layout}
                  </span>
                  <Link
                    href={`/templates/${template.id}`}
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-rose-500 px-3 py-1.5 text-[11px] font-semibold text-white shadow-soft transition hover:brightness-110"
                  >
                    Open template
                  </Link>
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

