import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = "https://bechekhan.mn";

    return [
        { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        { url: `${siteUrl}/oros-mongol-acha`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${siteUrl}/gruzoperevozki-rossiya-mongoliya`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${siteUrl}/services/auto-transport`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${siteUrl}/services/railway`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${siteUrl}/services/customs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${siteUrl}/services/ved`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ];
}