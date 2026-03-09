import Script from "next/script";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { BiodataForm } from "../components/BiodataForm";
import { TemplateCarousel } from "../components/TemplateCarousel";
import { BiodataFormatExplanation } from "../components/BiodataFormatExplanation";
import { FeatureBanner } from "../components/FeatureBanner";
import { FAQ } from "../components/FAQ";
import { CTASection } from "../components/CTASection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Biodata for Marriage",
    description: "Create beautiful, modern marriage biodata cards in minutes. Choose from premium templates, customise details, and download in PDF or JPEG formats.",
    url: "https://biodata-for-marriage.example.com",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <TemplateCarousel />
        <BiodataFormatExplanation />
        <BiodataForm />
        <FeatureBanner />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
