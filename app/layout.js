import Script from "next/script";
import { Inter } from "next/font/google";
import { ScrollMotionProvider } from "../components/ScrollMotionProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Create & Download Biodata For Marriage Free | Marriage Biodata Hub",
  description:
    "Create beautiful marriage biodata online with modern and traditional templates. Design, customize, and download biodata in minutes.",
  keywords: [
    "marriage biodata",
    "biodata maker",
    "create biodata online",
    "marriage resume",
    "matrimonial biodata",
    "wedding biodata templates",
  ],
  authors: [{ name: "Marriage Biodata Hub" }],
  creator: "Marriage Biodata Hub",
  applicationName: "Marriage Biodata Hub",
  alternates: {
    canonical: "https://marriagebiodatahub.com",
  },
  category: "lifestyle",
  themeColor: "#0f172a",
  icons: {
    icon: "/icon.png",
  },
  metadataBase: new URL("https://marriagebiodatahub.com"),
  openGraph: {
    title: "Create & Download Biodata For Marriage Free | Marriage Biodata Hub",
    description:
      "Create beautiful marriage biodata online with modern and traditional templates. Design, customize, and download biodata in minutes.",
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
    title: "Create & Download Biodata For Marriage Free | Marriage Biodata Hub",
    description:
      "Create beautiful marriage biodata online with modern and traditional templates. Design, customize, and download biodata in minutes.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Marriage Biodata Hub",
    url: "https://marriagebiodatahub.com",
    logo: "https://marriagebiodatahub.com/icon.png",
    email: "marriagebiodatahub@gmail.com",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61589515107640",
      "https://www.pinterest.com/marriagebiodatahub/",
    ],
  };

  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RR32YP6S8H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
        <ScrollMotionProvider>
          <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col bg-slate-950/40 px-4 pb-10 pt-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </ScrollMotionProvider>
      </body>
    </html>
  );
}
