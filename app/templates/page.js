import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AnimatedTemplateSections } from "./AnimatedTemplateSections";

export const metadata = {
  title: "Marriage Biodata Templates | Marriage Biodata Hub",
  description:
    "Browse premium marriage biodata templates in minimal, traditional, modern and elegant styles. Download your biodata as PDF or JPEG.",
  alternates: {
    canonical: "/templates",
  },
  openGraph: {
    title: "Marriage Biodata Templates | Marriage Biodata Hub",
    description: "Browse premium marriage biodata templates in minimal, traditional, modern and elegant styles. Download your biodata as PDF or JPEG.",
    url: "/templates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata Templates | Marriage Biodata Hub",
    description: "Browse premium marriage biodata templates in minimal, traditional, modern and elegant styles. Download your biodata as PDF or JPEG.",
  },
};

export default function TemplatesPage() {
  return (
    <>
      <Header />
      <main className="mt-2 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <AnimatedTemplateSections />
      </main>
      <Footer />
    </>
  );
}

