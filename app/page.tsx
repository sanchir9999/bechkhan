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
    "Орос Монгол ачаа тээвэр",
    "ачаa тээвэр УБ",
    "Улаан-Үд УБ cargo",
    "сборный груз",
    "FTL тээвэр",
    "логистик компани Монгол",
    "гаалийн бүрдүүлэлт",
    "агуулах үйлчилгээ",
    "cargo Mongolia",
  ],

  alternates: {
    canonical: siteUrl,
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