import Script from "next/script";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowToCreateBiodata } from "../components/HowToCreateBiodata";
import { IntersectionObserverWrapper } from "../components/IntersectionObserverWrapper";

// Dynamic Imports for ALL below-the-fold static sections
const BiodataFormatExplanation = dynamic(() => import("../components/BiodataFormatExplanation").then(mod => mod.BiodataFormatExplanation));
const EditableBiodataArticle = dynamic(() => import("../components/EditableBiodataArticle").then(mod => mod.EditableBiodataArticle));
const MarriageBiodataProblemsArticle = dynamic(() => import("../components/MarriageBiodataProblemsArticle").then(mod => mod.MarriageBiodataProblemsArticle));
const FeatureBanner = dynamic(() => import("../components/FeatureBanner").then(mod => mod.FeatureBanner));
const WhyNeedBiodata = dynamic(() => import("../components/WhyNeedBiodata").then(mod => mod.WhyNeedBiodata));
const BenefitsSection = dynamic(() => import("../components/BenefitsSection").then(mod => mod.BenefitsSection));
const WhyPeopleLoveUs = dynamic(() => import("../components/WhyPeopleLoveUs").then(mod => mod.WhyPeopleLoveUs));
const HowToShareBiodata = dynamic(() => import("../components/HowToShareBiodata").then(mod => mod.HowToShareBiodata));
const DesignTips = dynamic(() => import("../components/DesignTips").then(mod => mod.DesignTips));
const CTASection = dynamic(() => import("../components/CTASection").then(mod => mod.CTASection));

// High-value interactive sections (already dynamically imported but we keep them here)
import { TemplateCarousel, BiodataForm, FAQ } from "../components/DynamicHomeComponents";

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
        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="300px">
          <HowToCreateBiodata />
        </IntersectionObserverWrapper>
        
        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="400px">
          <TemplateCarousel />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="400px">
          <BiodataForm />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="300px">
          <BiodataFormatExplanation />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="300px">
          <EditableBiodataArticle />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="300px">
          <MarriageBiodataProblemsArticle />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="300px">
          <FeatureBanner />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="300px">
          <WhyNeedBiodata />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="300px">
          <BenefitsSection />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="300px">
          <HowToShareBiodata />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="300px">
          <WhyPeopleLoveUs />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="300px">
          <DesignTips />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="300px">
          <FAQ />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="200px">
          <CTASection />
        </IntersectionObserverWrapper>
      </main>
      <Footer />
    </>
  );
}
