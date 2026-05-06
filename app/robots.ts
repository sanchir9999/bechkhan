import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/*.json$", "/*?*"],
      },
    ],
    sitemap: "https://bechekhan.mn/sitemap.xml",
  };
}
