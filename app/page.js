import Script from "next/script";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowToCreateBiodata } from "../components/HowToCreateBiodata";
import { IntersectionObserverWrapper } from "../components/IntersectionObserverWrapper";

import { BiodataFormatExplanation } from "../components/BiodataFormatExplanation";
import { EditableBiodataArticle } from "../components/EditableBiodataArticle";
import { MarriageBiodataProblemsArticle } from "../components/MarriageBiodataProblemsArticle";
import { FeatureBanner } from "../components/FeatureBanner";
import { WhyNeedBiodata } from "../components/WhyNeedBiodata";
import { BenefitsSection } from "../components/BenefitsSection";
import { WhyPeopleLoveUs } from "../components/WhyPeopleLoveUs";
import { HowToShareBiodata } from "../components/HowToShareBiodata";
import { DesignTips } from "../components/DesignTips";
import { CTASection } from "../components/CTASection";
import { FAQ } from "../components/FAQ";

// High-value interactive sections (kept dynamically imported)
import { TemplateCarousel, BiodataForm } from "../components/DynamicHomeComponents";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

const sectionPlaceholder = (
  <div className="w-full h-64 md:h-96 my-8 animate-pulse bg-slate-900/50 rounded-3xl" aria-hidden="true" />
);

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
      logo: "https://marriagebiodatahub.com/images/Logo-of-marriage-biodata-hub.webp",
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
        
        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="400px">
          <TemplateCarousel />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper id="biodata-form-wrapper" fallback={sectionPlaceholder} rootMargin="400px">
          <BiodataForm />
        </IntersectionObserverWrapper>

        <BiodataFormatExplanation />
        <EditableBiodataArticle />
        <MarriageBiodataProblemsArticle />
        <FeatureBanner />
        <WhyNeedBiodata />
        <BenefitsSection />
        <HowToShareBiodata />
        <WhyPeopleLoveUs />
        <DesignTips />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
