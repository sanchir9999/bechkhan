import type { Metadata } from "next";
import HomePage from "@/components/home-page";

const siteUrl = "https://bechekhan.mn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Орос Монгол Ачаа Тээвэр | Bechekhan MN",
    template: "%s | Bechekhan MN",
  },

  description:
    "ОХУ-аас Монгол руу ачаа тээвэр, Улаан-Үдээс Улаанбаатар хүртэл сборный груз болон FTL тээвэр. Гаалийн бүрдүүлэлт, агуулах үйлчилгээтэй найдвартай логистик шийдэл.",

  keywords: [
    // Монгол хайлт
    "Орос Монгол ачаа тээвэр",
    "ачаа тээвэр ОХУ",
    "Улаан-Үд Улаанбаатар ачаа",
    "сборный груз Монгол",
    "FTL тээвэр",
    "логистик компани Монгол",
    "гаалийн бүрдүүлэлт",
    "агуулах үйлчилгээ",
    // Орос хайлт
    "грузоперевозки Россия Монголия",
    "перевозки Улан-Удэ Улан-Батор",
    "сборный груз Монголия",
    "карго Монголия из России",
    "логистика Монголия",
    "таможенное оформление Монголия",
    "автоперевозки Россия Монголия",
    "грузоперевозки в Монголию",
    "доставка груза в Монголию",
  ],

  alternates: {
    canonical: siteUrl,
    languages: {
      "mn": siteUrl,
      "ru": `${siteUrl}/gruzoperevozki-rossiya-mongoliya`,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Bechekhan MN",
    title: "Орос Монгол Ачаа Тээвэр | Bechekhan MN",
    description:
      "Найдвартай ОХУ-Монгол ачаа тээвэр, Улаан-Үд УБ чиглэлд сборный груз болон FTL үйлчилгээ.",
    locale: "mn_MN",
    images: [
      {
        url: "/facebook-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bechekhan cargo transportation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Орос Монгол Ачаа Тээвэр | Bechekhan MN",
    description:
      "ОХУ-Монгол хоорондын найдвартай ачаа тээвэр, логистик үйлчилгээ.",
    images: ["/facebook-preview.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <main>
      <HomePage />
    </main>
  );
}