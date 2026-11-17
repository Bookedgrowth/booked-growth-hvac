import { faqs, industry } from "@/content";
import type { FaqCategory } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { faqPageSchema } from "@/lib/schema";
import { slugify } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/ClosingCta";
import FaqList from "@/components/FaqList";

const fp = industry.faqPage;

export const metadata = buildMetadata({ ...fp.meta, path: "/faq", ogTitle: fp.h1 });

const order: FaqCategory[] = ["General", "Working With Us", "Paid Ads", "Websites", "Google Business Profile", "SEO", "AI Search", "Social Media"];

export default function FaqPage() {
  const groups = order.map((c) => ({ category: c, items: faqs.filter((f) => f.category === c) })).filter((g) => g.items.length);
  return (
    <>
      {/* The only FAQPage schema on the site. Questions still marked TODO are left out. */}
      <JsonLd data={faqPageSchema(faqs)} />
      <PageHero eyebrow={fp.eyebrow} h1={fp.h1} sub={fp.intro} crumbs={[{ name: "FAQ", path: "/faq" }]}>
        <nav aria-label="FAQ categories" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <li key={g.category}>
                <a href={`#${slugify(g.category)}`} className="inline-flex min-h-[40px] items-center rounded-full border border-[var(--line-strong)] px-4 text-sm font-semibold text-white/90 hover:border-[var(--cyan)] hover:text-white">
                  {g.category}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <section className="section light">
        <div className="container-narrow flex flex-col gap-14">
          {groups.map((g) => (
            <div key={g.category} id={slugify(g.category)}>
              <h2 className="h2 !text-[28px] mb-6">{g.category}</h2>
              <FaqList items={g.items} />
            </div>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
