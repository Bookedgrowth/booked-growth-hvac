import { faqs, industry, site } from "@/content";

/** llms.txt: a plain-text overview for AI tools (see llmstxt.org). Built from the content config. */
export function GET() {
  const lines = [
    `# ${site.brandName}`,
    "",
    `> ${industry.organizationDescription}`,
    "",
    `Based in ${site.location.city}, ${site.location.region}. Serves ${industry.audience.plural} across ${site.location.serviceArea}.`,
    `Contact: ${site.email}. Free online audit: ${site.url}${site.primaryCta.href}`,
    "",
    "## Services",
    ...industry.services.map((s) => `- [${s.navLabel}](${site.url}/services/${s.slug}): ${s.schemaDescription}`),
    "",
    "## Key pages",
    `- [How it works](${site.url}/how-it-works)`,
    `- [FAQ](${site.url}/faq): ${faqs.length} questions answered`,
    `- [Blog](${site.url}/blog)`,
    `- [About](${site.url}/about)`,
    `- [Sample HVAC websites](${site.url}/samples)`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
