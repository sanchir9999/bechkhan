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
    "@type": ["Organization", "LocalBusiness"],
    name: "Bechekhan MN",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "ОХУ, Казахстан, Беларусь улсаас Монгол Улс руу ачаа тээвэрлэлтийн үйлчилгээ",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MN",
      addressRegion: "Улаанбаатар",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7 976 99 03 9686",
      contactType: "Customer Service",
      areaServed: ["RU", "KZ", "BY", "MN"],
    },
    sameAs: [
      "https://wa.me/79914271904",
      "viber://chat?number=+79914271904",
    ],
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
