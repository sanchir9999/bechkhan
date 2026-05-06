import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://bechekhan.mn";

export const metadata: Metadata = {
  title: "Орос Монгол Ачаа Тээвэр | Bechekhan MN",
  description: "ОХУ, Казахстан, Беларусь улсаас Монгол Улс руу ачаа тээвэрлэлтийн үйлчилгээ",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bechekhan MN",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    telephone: "+79914271904",
    email: "oyuna@bechekhan.ru",
    description: "ОХУ-аас Монгол руу ачаа тээвэр, гаалийн бүрдүүлэлт. Грузоперевозки Россия Монголия.",
    areaServed: ["Mongolia", "Russia", "Kazakhstan", "Belarus"],
    serviceType: "Cargo Transportation",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MN",
      addressRegion: "Улаанбаатар",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+79914271904",
      contactType: "Customer Service",
      availableLanguage: ["Mongolian", "Russian"],
      areaServed: ["MN", "RU", "KZ", "BY"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Logistics Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Авто тээвэр", url: `${siteUrl}/services/auto-transport` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Төмөр замын тээвэр", url: `${siteUrl}/services/railway` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Гаалийн бүрдүүлэлт", url: `${siteUrl}/services/customs` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ВЭД зөвлөгөө", url: `${siteUrl}/services/ved` } },
      ],
    },
    sameAs: ["https://wa.me/79914271904"],
  };

  return (
    <html
      lang="mn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="alternate" hrefLang="mn" href="https://bechekhan.mn" />
        <link rel="alternate" hrefLang="ru" href="https://bechekhan.mn/gruzoperevozki-rossiya-mongoliya" />
        <link rel="alternate" hrefLang="x-default" href="https://bechekhan.mn" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
