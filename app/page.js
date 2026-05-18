import Script from "next/script";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowToCreateBiodata } from "../components/HowToCreateBiodata";

import { BiodataFormatExplanation } from "../components/BiodataFormatExplanation";
import { FeatureBanner } from "../components/FeatureBanner";
import { WhyNeedBiodata } from "../components/WhyNeedBiodata";
import { BenefitsSection } from "../components/BenefitsSection";
import { WhyPeopleLoveUs } from "../components/WhyPeopleLoveUs";
import { HowToShareBiodata } from "../components/HowToShareBiodata";
import { DesignTips } from "../components/DesignTips";
import { CTASection } from "../components/CTASection";

const sectionPlaceholder = (
  <div
    className="my-8 h-48 animate-pulse rounded-3xl border border-white/10 bg-slate-900/50"
    aria-hidden="true"
  />
);

const TemplateCarousel = dynamic(
  () => import("../components/TemplateCarousel").then((mod) => mod.TemplateCarousel),
  { loading: () => sectionPlaceholder }
);
const BiodataForm = dynamic(
  () => import("../components/BiodataForm").then((mod) => mod.BiodataForm),
  { loading: () => sectionPlaceholder }
);
const FAQ = dynamic(() => import("../components/FAQ").then((mod) => mod.FAQ), {
  loading: () => sectionPlaceholder,
});

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Marriage Biodata Hub",
      description: "Create beautiful, modern marriage biodata cards in minutes. Choose from premium templates, customise details, and download in PDF or JPEG formats.",
      url: "https://marriagebiodatahub.com",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      url: "https://marriagebiodatahub.com",
      logo: "https://marriagebiodatahub.com/images/Logo-of-marriage-biodata-hub.png",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61589515107640",
        "https://www.pinterest.com/marriagebiodatahub/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Marriage Biodata Hub",
      url: "https://marriagebiodatahub.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Create a Marriage Biodata",
      description: "Create your marriage biodata in 3 easy steps.",
      step: [
        {
          "@type": "HowToStep",
          name: "Fill Details",
          text: "Enter your personal, family, and contact information into the biodata form."
        },
        {
          "@type": "HowToStep",
          name: "Choose a Template",
          text: "Select from our premium and elegant biodata templates."
        },
        {
          "@type": "HowToStep",
          name: "Download",
          text: "Download your completed marriage biodata in PDF or JPEG format."
        }
      ]
    }
  ];

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
        <HowToCreateBiodata />
        {/* <HowItWorks /> */}
        <TemplateCarousel />
        <BiodataForm />
        <BiodataFormatExplanation />
        <FeatureBanner />
        <WhyNeedBiodata />
        <BenefitsSection />
        <WhyPeopleLoveUs />
        <HowToShareBiodata />
        <DesignTips />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
