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
  return (
    <>
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
