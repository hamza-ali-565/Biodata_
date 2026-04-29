import Script from "next/script";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowToCreateBiodata } from "../components/HowToCreateBiodata";

const TemplateCarousel = dynamic(() => import('../components/TemplateCarousel').then(mod => mod.TemplateCarousel));
const BiodataForm = dynamic(() => import('../components/BiodataForm').then(mod => mod.BiodataForm));
const BiodataFormatExplanation = dynamic(() => import('../components/BiodataFormatExplanation').then(mod => mod.BiodataFormatExplanation));
const FeatureBanner = dynamic(() => import('../components/FeatureBanner').then(mod => mod.FeatureBanner));
const WhyNeedBiodata = dynamic(() => import('../components/WhyNeedBiodata').then(mod => mod.WhyNeedBiodata));
const BenefitsSection = dynamic(() => import('../components/BenefitsSection').then(mod => mod.BenefitsSection));
const WhyPeopleLoveUs = dynamic(() => import('../components/WhyPeopleLoveUs').then(mod => mod.WhyPeopleLoveUs));
const HowToShareBiodata = dynamic(() => import('../components/HowToShareBiodata').then(mod => mod.HowToShareBiodata));
const DesignTips = dynamic(() => import('../components/DesignTips').then(mod => mod.DesignTips));
const FAQ = dynamic(() => import('../components/FAQ').then(mod => mod.FAQ));
const CTASection = dynamic(() => import('../components/CTASection').then(mod => mod.CTASection));

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Biodata for Marriage",
    description: "Create beautiful, modern marriage biodata cards in minutes. Choose from premium templates, customise details, and download in PDF or JPEG formats.",
    url: "https://marriagebiodatahub.com",
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
