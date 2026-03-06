import "./globals.css";

export const metadata = {
  title: "Biodata for Marriage | Create Beautiful Marriage Biodata in Minutes",
  description:
    "Create beautiful, modern marriage biodata cards in minutes. Choose from premium templates, customise details, and download in PDF or JPEG formats.",
  metadataBase: new URL("https://biodata-for-marriage.example.com"),
  openGraph: {
    title: "Biodata for Marriage",
    description:
      "Design premium, ready-to-share marriage biodata cards with elegant templates.",
    url: "/",
    siteName: "Biodata for Marriage",
    type: "website",
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

