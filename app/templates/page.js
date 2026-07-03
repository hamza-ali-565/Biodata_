import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AnimatedTemplateSections } from "./AnimatedTemplateSections";

export const metadata = {
  title: "Marriage Biodata Templates — Free Download | MBH",
  description:
    "28 free templates for Hindu, Muslim, Sikh, Marathi, Tamil & all Indian communities. Download PDF instantly. No login. No watermark.",
  alternates: {
    canonical: "/templates",
  },
  openGraph: {
    title: "Marriage Biodata Templates — Free Download | MBH",
    description: "28 free templates for Hindu, Muslim, Sikh, Marathi, Tamil & all Indian communities. Download PDF instantly. No login. No watermark.",
    url: "/templates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata Templates — Free Download | MBH",
    description: "28 free templates for Hindu, Muslim, Sikh, Marathi, Tamil & all Indian communities. Download PDF instantly. No login. No watermark.",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Marriage Biodata Templates",
  "description": "Free marriage biodata templates for Hindu, Muslim, Sikh, Marathi, Gujarati, Tamil and all Indian communities",
  "url": "https://www.marriagebiodatahub.com/templates",
  "numberOfItems": 28,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Kumkum", "description": "Deep red and cream design with traditional Indian ornamental swirls. Suited for Hindu and North Indian families.", "url": "https://www.marriagebiodatahub.com/templates/crimson-swirl-contrast" },
    { "@type": "ListItem", "position": 2, "name": "Tulsi", "description": "Decorative green border with clean right-side photo layout. Popular with Maharashtra and South Indian families.", "url": "https://www.marriagebiodatahub.com/templates/green-border-art" },
    { "@type": "ListItem", "position": 3, "name": "Kanakamala", "description": "Warm beige background with gold ornamental border. Designed for traditional Hindu and Marathi families.", "url": "https://www.marriagebiodatahub.com/templates/beautiful-golden-border" },
    { "@type": "ListItem", "position": 4, "name": "Peepal", "description": "Subtle green leaf corner artwork with oval photo frame. Natural and modern without being Western.", "url": "https://www.marriagebiodatahub.com/templates/leafs-effect" },
    { "@type": "ListItem", "position": 5, "name": "Neel", "description": "Sea-green header panel with clean oval photo. Modern format for IT professionals and urban families.", "url": "https://www.marriagebiodatahub.com/templates/sea-green-contrast" },
    { "@type": "ListItem", "position": 6, "name": "Shvetambar", "description": "Bold dark green header with circular photo cutout. High-contrast design that shares cleanly on WhatsApp.", "url": "https://www.marriagebiodatahub.com/templates/green-off-white-contrast" },
    { "@type": "ListItem", "position": 7, "name": "Rajasvi", "description": "Navy blue and gold formal design. Suited for families from UP, Bihar, Delhi and Rajasthan.", "url": "https://www.marriagebiodatahub.com/templates/sober-blue-gold" },
    { "@type": "ListItem", "position": 8, "name": "Hilal", "description": "Designed for Muslim families with Bismillah calligraphy, Islamic geometric arches, and Sect and Biradari fields.", "url": "https://www.marriagebiodatahub.com/templates/beautiful-traditional" },
    { "@type": "ListItem", "position": 9, "name": "Nutan", "description": "Minimal clean design with photo-right layout. Most popular with IT professionals and MBAs in metro cities.", "url": "https://www.marriagebiodatahub.com/templates/modern" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I switch to a different template after filling in my details?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — and you do not need to re-enter anything. Once your details are saved in your browser, go to the preview page and click any other template. Your information fills in automatically. You can try as many templates as you want before downloading." }
    },
    {
      "@type": "Question",
      "name": "Do all templates include Gotra, Rashi, and Nakshatra fields for Hindu families?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every template includes the full horoscope section — Gotra, Rashi, Nakshatra, Nadi, Gan, and Manglik status. If you are from a Muslim family, you can remove or replace these with Sect and Biradari fields using the custom fields feature. The Hilal template is specifically designed for Muslim families." }
    },
    {
      "@type": "Question",
      "name": "Which marriage biodata template is best for sharing on WhatsApp?",
      "acceptedAnswer": { "@type": "Answer", "text": "High-contrast designs with dark text on light backgrounds read most clearly after WhatsApp compresses the PDF. The Nutan, Rajasvi, and Neel templates have the best WhatsApp readability. Avoid very dark backgrounds if your biodata will be read primarily on a phone screen." }
    },
    {
      "@type": "Question",
      "name": "Is there a Marathi lagnacha biodata template with Kul and Kulswamini fields?",
      "acceptedAnswer": { "@type": "Answer", "text": "All templates support custom fields — you can add Kul, Kulswamini, and Mulchi Gavi as additional fields in the personal details section. These are standard fields for Marathi families and work within any template design." }
    },
    {
      "@type": "Question",
      "name": "Can I download the biodata template in Word format?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF and JPEG image formats are available for download. PDF is recommended for WhatsApp sharing, printing, and uploading to matrimonial sites. Word format is not currently available, but all fields are editable before download." }
    },
    {
      "@type": "Question",
      "name": "Do you have biodata templates for Christian, Jain, Sikh, or NRI families?",
      "acceptedAnswer": { "@type": "Answer", "text": "All templates are fully customizable regardless of community. Christian families can add Church name and Denomination. Jain families can add sect and dietary preferences. NRI families can add Visa status and country of residence. Sikh families can add Gurudwara name and Amritdhari status. All via the custom fields feature." }
    },
    {
      "@type": "Question",
      "name": "How many marriage biodata templates do you have?",
      "acceptedAnswer": { "@type": "Answer", "text": "We currently have 40+ templates across traditional, modern, elegant, and community-specific styles. New templates are added each season — before the November to February peak wedding season and before the April to June season around Akshaya Tritiya." }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.marriagebiodatahub.com" },
    { "@type": "ListItem", "position": 2, "name": "Marriage Biodata Templates", "item": "https://www.marriagebiodatahub.com/templates" }
  ]
};

export default function TemplatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="mt-2 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <AnimatedTemplateSections />
      </main>
      <Footer />
    </>
  );
}
