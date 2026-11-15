import type { Metadata } from "next";
import { site } from "@/content";

/** Strips the **gradient** markers from a headline for plain-text use. */
export const plain = (s: string) => s.replace(/\*\*/g, "");

export function ogImageUrl(title: string) {
  return `/og?title=${encodeURIComponent(plain(title))}`;
}

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

/** Builds per-page metadata: unique title/description, canonical, OG image. */
export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  type?: "website" | "article";
}): Metadata {
  const image = ogImageUrl(ogTitle ?? title.split(" | ")[0]);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.brandName,
      type,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: plain(ogTitle ?? title) }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
