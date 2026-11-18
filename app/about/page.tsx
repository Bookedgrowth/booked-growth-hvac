import Image from "next/image";
import Link from "next/link";
import { industry, site } from "@/content";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/ClosingCta";
import { Headline, RichText } from "@/components/Text";
import Icon from "@/components/Icon";

const a = industry.about;

export const metadata = buildMetadata({ ...a.meta, path: "/about", ogTitle: a.h1 });

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={a.eyebrow} h1={a.h1} sub={a.sub} crumbs={[{ name: "About", path: "/about" }]} />

      {/* Why we exist */}
      <section className="section light" aria-labelledby="why">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <span className="eyebrow">{a.why.eyebrow}</span>
            <Headline text={a.why.h2} id="why" />
          </div>
          <div className="flex flex-col gap-4 lead">
            {a.why.body.map((p, i) => (
              <p key={i} className={i === a.why.body.length - 1 ? "text-white" : ""}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What we stand for */}
      <section className="section light section-alt" aria-labelledby="principles">
        <div className="container">
          <Headline text={a.principles.h2} id="principles" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {a.principles.items.map((it) => (
              <li key={it.title} className="card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(24,69,169,0.1)] text-[var(--cyan)]">
                  <Icon name={it.icon} size={20} />
                </span>
                <h3 className="h3 mt-4">{it.title}</h3>
                <p className="mt-2 muted">
                  <RichText text={it.body} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why HVAC and plumbing only */}
      <section className="section light" aria-labelledby="why-only">
        <div className="container-narrow">
          <Headline text={a.whyOnly.h2} id="why-only" />
          <div className="mt-6 flex flex-col gap-4 lead">
            {a.whyOnly.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section light section-alt" aria-labelledby="how-we-work">
        <div className="container">
          <Headline text={a.howWeWork.h2} id="how-we-work" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {a.howWeWork.steps.map((s, i) => (
              <li key={s.title} className="card">
                <span className="font-display text-[44px] font-extrabold leading-none gradient-text">{i + 1}</span>
                <h3 className="h3 mt-3">{s.title}</h3>
                <p className="mt-2 muted">{s.body}</p>
              </li>
            ))}
          </ol>
          <Link href="/how-it-works" className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--cyan)] hover:text-white">
            {a.howWeWork.linkLabel} <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>

      {/* Founder note */}
      <section className="section light" aria-label={a.founder.title}>
        <div className="container-narrow">
          <figure className="card flex flex-col gap-5 sm:flex-row sm:items-center">
            <Image
              src={site.founder.headshot}
              alt={`${site.founder.name}, ${site.founder.role} of ${site.brandName}`}
              width={96}
              height={96}
              sizes="96px"
              className="h-24 w-24 shrink-0 rounded-2xl object-cover object-top"
            />
            <div>
              <figcaption className="font-display text-[18px] font-bold">{a.founder.title}</figcaption>
              <blockquote className="mt-2 muted">&ldquo;{a.founder.quote}&rdquo;</blockquote>
              {a.founder.note && <p className="mt-2 text-sm subtle">{a.founder.note}</p>}
            </div>
          </figure>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
