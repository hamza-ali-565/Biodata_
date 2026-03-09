import "./globals.css";

export const metadata = {
  title: "Biodata for Marriage | Create Beautiful Marriage Biodata in Minutes",
  description:
    "Create beautiful, modern marriage biodata cards in minutes. Choose from premium templates, customise details, and download in PDF or JPEG formats.",
  keywords: [
    "marriage biodata",
    "biodata maker",
    "create biodata online",
    "marriage resume",
    "matrimonial biodata",
    "wedding biodata templates",
  ],
  authors: [{ name: "Biodata for Marriage" }],
  creator: "Biodata for Marriage",
  metadataBase: new URL("https://biodata-for-marriage.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Biodata for Marriage | Create Beautiful Marriage Biodata",
    description:
      "Design premium, ready-to-share marriage biodata cards with elegant templates in minutes.",
    url: "/",
    siteName: "Biodata for Marriage",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Biodata for Marriage Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biodata for Marriage | Create Beautiful Marriage Biodata",
    description:
      "Design premium, ready-to-share marriage biodata cards with elegant templates.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col bg-slate-950/40 px-4 pb-10 pt-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}

