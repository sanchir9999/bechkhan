import type { Metadata } from "next";
import HomePage from "@/components/home-page";

const siteUrl = "https://bechekhan.mn"; // өөрийн жинхэнэ домэйнээр солино

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bechekhan MN | Олон улсын ачаа тээвэр",
    template: "%s | Bechekhan MN",
  },
  description:
    "ОХУ, Казахстан, Беларусь болон Монголын хооронд авто болон төмөр замын ачаа тээвэр, гаалийн бүрдүүлэлт, импорт экспортын зөвлөгөө.",
  keywords: [
    "Bechekhan MN",
    "ачаа тээвэр",
    "олон улсын тээвэр",
    "Монгол ОХУ ачаа тээвэр",
    "Казахстан Монгол логистик",
    "Беларусь Монгол карго",
    "төмөр замын тээвэр",
    "авто тээвэр",
    "гаалийн бүрдүүлэлт",
    "импорт экспорт",
    "cargo transportation Mongolia",
    "rail freight Mongolia",
    "road freight Mongolia",
    "customs clearance Mongolia",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "mn-MN": "/",
      "en-US": "/?lang=en",
      "ru-RU": "/?lang=ru",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Bechekhan MN",
    title: "Bechekhan MN | International Cargo Transportation",
    description:
      "Reliable road and rail cargo transportation between Russia, Kazakhstan, Belarus and Mongolia.",
    locale: "mn_MN",
    alternateLocale: ["en_US", "ru_RU"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bechekhan MN cargo transportation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bechekhan MN | International Cargo Transportation",
    description:
      "Road and rail cargo transportation, customs clearance, and logistics support.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Logistics",
};

export default function Page() {
  return <HomePage />;
}