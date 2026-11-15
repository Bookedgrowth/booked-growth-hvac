import type { MetadataRoute } from "next";
import { industry, site } from "@/content";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/how-it-works", "/about", "/samples", "/faq", "/blog", "/contact", "/privacy-policy", "/terms"];
  const services = industry.services.map((s) => `/services/${s.slug}`);
  const posts = getAllPosts().map((p) => ({ path: `/blog/${p.slug}`, date: p.updated ?? p.date }));
  return [
    ...[...pages, ...services].map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const })),
    ...posts.map((p) => ({ url: `${site.url}${p.path}`, lastModified: p.date })),
  ];
}
