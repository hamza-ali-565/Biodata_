import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TEMPLATE_DEFINITIONS } from "../../components/templatesConfig";
import { TemplateList } from "../../components/TemplateList";

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
              Trending Marriage Biodata Templates In 2026
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Explore premium matrimonial biodata designs. Open a template to
              customise fonts, colours and download a high-quality PDF or JPEG.
            </p>
          </header>
          <TemplateList templates={TEMPLATE_DEFINITIONS} />
        </section>
      </main>
      <Footer />
    </>
  );
}

