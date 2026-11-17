import Image from "next/image";
import Link from "next/link";
import { industry, site } from "@/content";
import { buildMetadata } from "@/lib/seo";
import HeroPhoto from "@/components/HeroPhoto";
import BoardCompare from "@/components/BoardCompare";
import WhereFound from "@/components/WhereFound";
import ServiceCards from "@/components/ServiceCards";
import ClosingCta from "@/components/ClosingCta";
import { GuaranteeGrid } from "@/components/Guarantees";
import { Headline, RichText } from "@/components/Text";
import { StatSource } from "@/components/StatNote";
import Icon from "@/components/Icon";
import { SampleAudit, Testimonials, FoundingPartner } from "@/components/Proof";

const h = industry.home;

export const metadata = buildMetadata({ ...h.meta, path: "/", ogTitle: h.hero.h1Options[h.hero.activeH1] });

const performIcons = ["mobile", "phone", "pin", "chart", "calendar", "shield"];

export default function HomePage() {
  return (
    <>
      <HeroPhoto />

      {/* Problem */}
      <section className="section light" aria-labelledby="problem">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">{h.problem.eyebrow}</span>
            <Headline text={h.problem.h2} id="problem" />
          </div>
          <div className="flex flex-col gap-4 lead">
            {h.problem.body.map((p, i) => (
              <p key={i} className={i === h.problem.body.length - 1 ? "text-white" : ""}>
                <RichText text={p} />
              </p>
            ))}
            {h.problem.statIds?.map((id) => <StatSource key={id} id={id} />)}
          </div>
        </div>
      </section>

      <WhereFound />

      {/* Services */}
      <section className="section light" aria-labelledby="services">
        <div className="container">
          <div className="max-w-[760px]">
            <Headline text={h.servicesGrid.h2} id="services" />
            <p className="lead mt-5">{h.servicesGrid.intro}</p>
          </div>
          <div className="mt-10">
            <ServiceCards services={industry.services} />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section light section-alt" aria-labelledby="process">
        <div className="container">
          <Headline text={h.process.h2} id="process" />
          <div className="mt-10">
            <BoardCompare />
          </div>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {h.process.steps.map((s, i) => (
              <li key={s.title} className="card relative">
                <span className="font-display text-[56px] font-extrabold leading-none gradient-text">{i + 1}</span>
                <h3 className="h3 mt-4">{s.title}</h3>
                <p className="mt-2 muted">{s.body}</p>
              </li>
            ))}
          </ol>
          <Link href="/how-it-works" className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--cyan)] hover:text-white">
            {h.process.linkLabel} <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>

      {/* Built to perform */}
      <section className="section light" aria-labelledby="perform">
        <div className="container">
          <div className="max-w-[760px]">
            <Headline text={h.builtToPerform.h2} id="perform" />
            <p className="lead mt-5">{h.builtToPerform.intro}</p>
          </div>
          <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {h.builtToPerform.items.map((it, i) => (
              <li key={it.title} className="flex gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(7,201,143,0.14)] text-[var(--green)]">
                  <Icon name={performIcons[i % performIcons.length]} size={20} />
                </span>
                <div>
                  <h3 className="h3 !text-[18px]">{it.title}</h3>
                  <p className="mt-1 muted">{it.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Proof without testimonials */}
      <SampleAudit />
      <Testimonials />
      <FoundingPartner />

      {/* Guarantees */}
      <section className="section section-navy" aria-labelledby="guarantees">
        <div className="container">
          <div className="max-w-[760px]">
            <Headline text={h.guarantees.h2} id="guarantees" />
            <p className="lead mt-5">{h.guarantees.intro}</p>
          </div>
          <div className="mt-10">
            <GuaranteeGrid />
          </div>
        </div>
      </section>

      {/* Who we are (business first, founder second) */}
      <section className="section light" aria-labelledby="founder">
        <div className="container">
          <div className="card grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-10">
            <div>
              <span className="eyebrow">{h.founder.eyebrow}</span>
              <Headline text={h.founder.h2} id="founder" className="h2 !text-[clamp(26px,3.4vw,36px)]" />
              <p className="mt-4 lead max-w-[620px]">{h.founder.line}</p>
              <Link href="/about" className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--cyan)] hover:text-white">
                {h.founder.linkLabel} <Icon name="arrow" size={18} />
              </Link>
            </div>
            <div className="flex items-center gap-4 md:justify-end">
              <Image
                src={site.founder.headshot}
                alt={`${site.founder.name}, ${site.founder.role} of ${site.brandName}`}
                width={72}
                height={72}
                sizes="72px"
                className="h-[72px] w-[72px] shrink-0 rounded-full object-cover object-top"
              />
              <p className="font-semibold">{h.founder.founderLine}</p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta h2={h.closing.h2} body={h.closing.body} />
    </>
  );
}
