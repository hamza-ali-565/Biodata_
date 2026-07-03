import Script from "next/script";
import { Inter } from "next/font/google";
import RouteLoader from "@/components/RouteLoader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport = {
  themeColor: "#0f172a",
};

export const metadata = {
  title: "Free Marriage Biodata Maker — Create & Download | MBH",
  description:
    "Create your marriage biodata free in 5 minutes. 28+ templates for Hindu, Muslim, Sikh & all Indian communities. No login. No watermark.",
  authors: [{ name: "Marriage Biodata Hub" }],
  creator: "Marriage Biodata Hub",
  applicationName: "Marriage Biodata Hub",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com",
  },
  category: "lifestyle",
  icons: {
    icon: "/icon.png",
  },
  metadataBase: new URL("https://www.marriagebiodatahub.com"),
  openGraph: {
    title: "Free Marriage Biodata Maker — Create & Download | MBH",
    description:
      "Create your marriage biodata free in 5 minutes. 28+ templates for Hindu, Muslim, Sikh & all Indian communities. No login. No watermark.",
    url: "/",
    siteName: "Marriage Biodata Hub",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Marriage Biodata Hub Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Marriage Biodata Maker — Create & Download | MBH",
    description:
      "Create your marriage biodata free in 5 minutes. 28+ templates for Hindu, Muslim, Sikh & all Indian communities. No login. No watermark.",
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "SWErkN6mrIIpREHtIRhmRTsBneFsCJQ_wsKEI01HtDM",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.marriagebiodatahub.com/#organization",
      name: "Marriage Biodata Hub",
      url: "https://www.marriagebiodatahub.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.marriagebiodatahub.com/images/Logo-of-marriage-biodata-hub.webp",
        width: 640,
        height: 640,
      },
      description: "Free online marriage biodata maker for all Indian communities. 28+ templates. No login. No watermark.",
      email: "marriagebiodatahub@gmail.com",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61589515107640",
        "https://www.pinterest.com/marriagebiodatahub/",
        "https://www.linkedin.com/in/marriage-biodata-hub-1b2267412/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "marriagebiodatahub@gmail.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.marriagebiodatahub.com/#website",
      name: "Marriage Biodata Hub",
      url: "https://www.marriagebiodatahub.com",
      inLanguage: "en-IN",
      publisher: {
        "@id": "https://www.marriagebiodatahub.com/#organization",
      },
    },
  ];

  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Sanskrit&family=Noto+Nastaliq+Urdu&family=Noto+Sans+Gurmukhi&family=Mukta+Mahee&family=Noto+Serif+Devanagari&family=Noto+Sans+Devanagari&family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Source+Sans+3:wght@400;600;700&family=Eczar:wght@400;600;700&family=Hind:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RR32YP6S8H"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RR32YP6S8H');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
          <RouteLoader />
          <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col bg-slate-950/40 px-4 pb-10 pt-4 sm:px-6 lg:px-8">
            {children}
          </div>
      </body>
    </html>
  );
}
