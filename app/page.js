import Script from "next/script";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowToCreateBiodata } from "../components/HowToCreateBiodata";
import { IntersectionObserverWrapper } from "../components/IntersectionObserverWrapper";
import { AutoScrollTrigger } from "../components/AutoScrollTrigger";

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
    canonical: "https://www.marriagebiodatahub.com",
  },
};

const sectionPlaceholder = (
  <div className="w-full h-64 md:h-96 my-8 animate-pulse bg-slate-900/50 rounded-3xl" aria-hidden="true" />
);

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Marriage Biodata Hub",
      "@id": "https://www.marriagebiodatahub.com/#app",
      url: "https://www.marriagebiodatahub.com",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Web Browser, Android, iOS",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      description: "Free online marriage biodata maker with 40+ templates for Hindu, Muslim, Sikh, Christian, Jain, Marathi, and all Indian communities. No login required. Your data stays in your browser.",
      inLanguage: "en-IN",
      publisher: {
        "@type": "Organization",
        name: "Marriage Biodata Hub",
        url: "https://www.marriagebiodatahub.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.marriagebiodatahub.com/images/Logo-of-marriage-biodata-hub.webp",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Create a Marriage Biodata",
      description: "Create and download a free marriage biodata in 3 steps. Most families finish in under 5 minutes.",
      totalTime: "PT5M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Personal Info",
          text: "Enter your basic details, identity, and physical traits — name, date of birth, height, religion, caste, horoscope details, hobbies, and partner expectations.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Family Info",
          text: "Add details about your parents' names and occupations, number and marital status of siblings, family type (joint or nuclear), and native place.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Contact Info",
          text: "Add the contact number (typically a parent's number), address, and WhatsApp number so interested families can reach you directly.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a marriage biodata?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A marriage biodata is a structured one-page document used in Indian arranged marriages. It introduces a bride or groom to a potential match's family, covering personal details, family background, education, career, horoscope information (for Hindu families), and partner preferences. It works like a resume but for the marriage process — and is typically shared via WhatsApp with relatives or uploaded to matrimonial sites like Shaadi.com and BharatMatrimony.",
          },
        },
        {
          "@type": "Question",
          name: "Is Marriage Biodata Hub completely free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can create your full biodata, choose any template, preview it, and download the PDF completely free — no login, no email, no credit card. Your data is processed in your browser and never stored on our servers.",
          },
        },
        {
          "@type": "Question",
          name: "Can I edit my biodata after downloading?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, always. Return to marriagebiodatahub.com on the same device and your information will be restored from your browser's local storage. Update any field and re-download your updated PDF anytime.",
          },
        },
        {
          "@type": "Question",
          name: "How do I share my marriage biodata on WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After downloading your PDF, tap the WhatsApp share button on the download screen. This opens WhatsApp with your biodata PDF attached and a ready-to-send message. You can also share the private link we generate — it opens your biodata beautifully on any phone without needing to download a file.",
          },
        },
        {
          "@type": "Question",
          name: "Which Indian communities does Marriage Biodata Hub support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We have dedicated templates and fields for Hindu, Muslim, Sikh, Christian, Jain, Marathi, Gujarati, Tamil, Telugu, Bengali, and Punjabi communities. Each template includes the community-specific fields that families actually check — Gotra, Rashi, and Manglik for Hindu families; Sect and Biradari for Muslim families; Kul and Kulswamini for Marathi families; Natchathiram and Rasi for Tamil families.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to include a photo in my biodata?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if possible. A biodata with a photo receives significantly more responses than one without. Use a recent photo taken in the last 6 months, with a plain or light background, natural lighting, and a clear face. Avoid filters.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <AutoScrollTrigger />
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
