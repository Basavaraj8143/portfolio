import { MetadataRoute } from "next";
import { siteData } from "@/lib/site-data";
import { getPublishedArticles } from "./blog/blog-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteData.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteData.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...getPublishedArticles().map((article) => ({
      url: `${siteData.url}/blog/${article.slug}`,
      lastModified: new Date(`${article.date}T00:00:00.000Z`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
