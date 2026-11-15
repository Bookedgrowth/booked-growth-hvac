import Link from "next/link";
import { faqs, industry, site } from "@/content";
import type { ServiceSlug } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { getAllPosts } from "@/lib/blog";
import JsonLd from "./JsonLd";
import PageHero from "./PageHero";
import ClosingCta from "./ClosingCta";
import FaqList from "./FaqList";
import { GuaranteeCard } from "./Guarantees";
import { Headline, RichText } from "./Text";
import { StatCard } from "./StatNote";
import { PrimaryCta } from "./CtaButton";
import Icon, { serviceIcon } from "./Icon";

export function getService(slug: ServiceSlug) {
  const s = industry.services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service ${slug}`);
  return s;
}

export function serviceMetadata(slug: ServiceSlug) {
  const s = getService(slug);
  return buildMetadata({ ...s.meta, path: `/services/${slug}`, ogTitle: s.hero.h1 });
}

/** One shared layout for all six service pages. */
export default function ServicePage({ slug }: { slug: ServiceSlug }) {
  const s = getService(slug);
  // FAQs come from the single FAQ file. No FAQPage schema here (it lives on /faq only).
  const serviceFaqs = faqs.filter((f) => f.services?.includes(slug) && !f.todo).slice(0, 6);
  const related = s.related.map(getService);
  const posts = getAllPosts().filter((p) => s.blogSlugs.includes(p.slug));

  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <PageHero
        eyebrow={s.hero.eyebrow}
        h1={s.hero.h1}
        sub={s.hero.sub}
        crumbs={[{ name: s.breadcrumbName, path: `/services/${slug}` }]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryCta />
          <a href={`tel:${site.phone.tel}`} className="btn btn-outline">
            <Icon name="phone" size={18} /> {site.phone.display}
          </a>
        </div>
      </PageHero>

      {/* The problem */}
      <section className="section" aria-labelledby="problem">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <span className="eyebrow">The problem</span>
            <Headline text={s.problem.h2} id="problem" />
          </div>
          <div className="flex flex-col gap-4 lead">
            {s.problem.body.map((p, i) => (
              <p key={i}><RichText text={p} /></p>
            ))}
          </div>
        </div>
      </section>

      {/* Extra sections (paid ads is the long page) */}
      {s.extraSections?.map((block, bi) => (
        <section key={block.h2} className={`section ${bi % 2 === 0 ? "section-alt" : ""}`} aria-labelledby={`extra-${bi}`}>
          <div className="container">
            <div className="max-w-[760px]">
              {block.eyebrow && <span className="eyebrow">{block.eyebrow}</span>}
              <Headline text={block.h2} id={`extra-${bi}`} />
              <div className="mt-5 flex flex-col gap-4 lead">
                {block.body.map((p, i) => (
                  <p key={i}><RichText text={p} /></p>
                ))}
              </div>
            </div>
            {block.bullets && (
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {block.bullets.map((b) => (
                  <div key={b.title} className="card">
                    <h3 className="h3">{b.title}</h3>
                    <p className="mt-3 muted">{b.body}</p>
                  </div>
                ))}
              </div>
            )}
            {block.statIds && (
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {block.statIds.map((id) => <StatCard key={id} id={id} />)}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* What you get */}
      <section className={`section ${(s.extraSections?.length ?? 0) % 2 === 0 ? "section-alt" : ""}`} aria-labelledby="deliverables">
        <div className="container">
          <Headline text={s.deliverables.h2} id="deliverables" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.deliverables.items.map((d) => (
              <li key={d.title} className="card">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(7,201,143,0.14)] text-[var(--green)]">
                  <Icon name="check" size={18} strokeWidth={2.6} />
                </span>
                <h3 className="h3 mt-4">{d.title}</h3>
                <p className="mt-2 muted">{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works for this service */}
      <section className="section" aria-labelledby="steps">
        <div className="container">
          <Headline text={s.steps.h2} id="steps" />
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {s.steps.items.map((st, i) => (
              <li key={st.title} className="card">
                <span className="font-display text-[48px] font-extrabold leading-none gradient-text">{i + 1}</span>
                <h3 className="h3 mt-3">{st.title}</h3>
                <p className="mt-2 muted">{st.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Samples block (website design) */}
      {s.samplesBlock && (
        <section className="section-tight" aria-labelledby="samples">
          <div className="container">
            <div className="card gradient-border flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-[620px]">
                <Headline text={s.samplesBlock.h2} id="samples" className="h2 !text-[30px]" />
                <p className="mt-3 muted">{s.samplesBlock.body}</p>
              </div>
              <Link href="/samples" className="btn btn-outline shrink-0">
                {s.samplesBlock.ctaLabel} <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Guarantee */}
      {s.guarantee && (
        <section className="section-tight" aria-label="Our guarantee">
          <div className="container max-w-[720px]">
            <GuaranteeCard k={s.guarantee} />
          </div>
        </section>
      )}

      {/* FAQ */}
      {serviceFaqs.length > 0 && (
        <section className="section section-alt" aria-labelledby="faq">
          <div className="container-narrow">
            <Headline text="Common **Questions.**" id="faq" />
            <div className="mt-8">
              <FaqList items={serviceFaqs} />
            </div>
            <Link href="/faq" className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--cyan)] hover:text-white">
              {industry.seeAllFaqLabel} <Icon name="arrow" size={18} />
            </Link>
          </div>
        </section>
      )}

      {/* Related services + reading */}
      <section className="section" aria-labelledby="related">
        <div className="container">
          <Headline text="Works Even Better **Together.**" id="related" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="card card-hover flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(75,137,243,0.14)] text-[var(--cyan)]">
                  <Icon name={serviceIcon[r.slug]} size={22} />
                </span>
                <span>
                  <span className="h3 block">{r.navLabel}</span>
                  <span className="mt-1 block muted">{r.cardBlurb}</span>
                </span>
              </Link>
            ))}
          </div>
          {posts.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] subtle">From the playbook</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {posts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="link text-[17px]">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
