/**
 * JSON-LD builders. Rule from GHL validator: `image` and `logo` are always plain
 * string URLs, never ImageObject.
 */
import { site, industry, socialLinks } from "@/content";
import type { FaqItem, ServiceContent } from "@/content";
import { absoluteUrl } from "./seo";

const ORG_ID = `${site.url}/#organization`;

const stripLinks = (s: string) => s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: site.brandName,
        legalName: site.legalName,
        url: site.url,
        logo: site.logo.schemaUrl,
        image: site.logo.schemaUrl,
        description: industry.organizationDescription,
        email: site.email,
        telephone: site.phone.tel,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location.city,
          addressRegion: site.location.region,
          addressCountry: site.location.country,
        },
        areaServed: site.location.areaServedSchema.map((name) => ({ "@type": "AdministrativeArea", name })),
        founder: { "@type": "Person", name: site.founder.name },
        knowsAbout: industry.services.map((s) => s.schemaServiceType),
        ...(socialLinks.length ? { sameAs: socialLinks.map((s) => s.url) } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.brandName,
        url: site.url,
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(s: ServiceContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.breadcrumbName,
    serviceType: s.schemaServiceType,
    description: s.schemaDescription,
    url: absoluteUrl(`/services/${s.slug}`),
    provider: { "@id": ORG_ID },
    areaServed: site.location.areaServedSchema.map((name) => ({ "@type": "AdministrativeArea", name })),
    audience: { "@type": "BusinessAudience", name: industry.audience.plural },
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items
      .filter((f) => !f.todo)
      .map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer.map(stripLinks).join(" ") },
      })),
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  updated?: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    image: absoluteUrl(post.image),
    url: absoluteUrl(`/blog/${post.slug}`),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: {
      "@type": "Person",
      name: site.founder.name,
      jobTitle: site.founder.role,
      url: absoluteUrl("/about"),
      image: absoluteUrl(site.founder.headshot),
    },
    publisher: { "@id": ORG_ID, "@type": "Organization", name: site.brandName, logo: site.logo.schemaUrl },
  };
}
