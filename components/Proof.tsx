/**
 * Honest proof sections for the home page (no invented testimonials):
 * - SampleAudit: findings from a clearly labeled fictional company.
 * - Testimonials: built, but hidden unless site.showTestimonials is true AND real quotes exist.
 * - FoundingPartner: built, but hidden unless site.showFoundingPartner is true.
 */

import { industry, site } from "@/content";
import { Headline } from "./Text";
import { PrimaryCta } from "./CtaButton";

const h = industry.home;

const severityStyle: Record<string, string> = {
  High: "bg-[#fde8e8] text-[#9b1c1c]",
  Medium: "bg-[#fef3c7] text-[#92400e]",
  Low: "bg-[#e0ecff] text-[#1845a9]",
};

export function SampleAudit() {
  const a = h.sampleAudit;
  return (
    <section className="section light section-alt" aria-labelledby="sample-audit">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
        <div>
          <Headline text={a.h2} id="sample-audit" />
          <p className="lead mt-5">{a.intro}</p>
          <div className="mt-8">
            <PrimaryCta />
          </div>
        </div>

        <figure className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_1px_2px_rgba(19,22,32,0.04),0_16px_40px_rgba(19,22,32,0.1)]">
          <figcaption className="flex flex-wrap items-center justify-between gap-3 bg-[var(--bg)] px-5 py-4 on-color">
            <span>
              <span className="block text-[12px] font-bold uppercase tracking-[0.14em] text-[#b4bdd0]">Online audit report</span>
              <span className="block font-display text-[17px] font-bold">
                {a.company} <span className="text-[13px] font-medium text-[#b4bdd0]">({a.companyNote})</span>
              </span>
            </span>
            <span className="rounded-full border border-white/25 px-3 py-1 text-[12px] font-semibold on-color">{a.label}</span>
          </figcaption>
          <ol className="divide-y divide-[var(--line)]">
            {a.findings.map((f) => (
              <li key={f.title} className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-start sm:gap-4">
                <span className={`inline-flex w-fit shrink-0 rounded-md px-2 py-0.5 text-[12px] font-bold uppercase tracking-wide sm:mt-0.5 sm:w-[74px] sm:justify-center ${severityStyle[f.severity]}`}>
                  {f.severity}
                </span>
                <span>
                  <span className="block font-semibold leading-snug">{f.title}</span>
                  <span className="mt-1 block text-[15px] muted">
                    <b className="font-semibold text-[var(--green-light)]">Fix:</b> {f.fix}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}

export function Testimonials() {
  const t = h.testimonials;
  if (!site.showTestimonials || t.items.length === 0) return null;
  return (
    <section className="section light" aria-labelledby="testimonials">
      <div className="container">
        <Headline text={t.h2} id="testimonials" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {t.items.map((q) => (
            <figure key={q.quote} className="card flex flex-col justify-between gap-5">
              <blockquote className="text-[17px] leading-relaxed">&ldquo;{q.quote}&rdquo;</blockquote>
              <figcaption className="text-sm muted">
                <span className="font-semibold text-white">{q.firstName}</span>, {q.businessType}, {q.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FoundingPartner() {
  const f = h.foundingPartner;
  if (!site.showFoundingPartner) return null;
  return (
    <section className="section light" aria-labelledby="founding-partner">
      <div className="container">
        <div className="card gradient-border flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="max-w-[680px]">
            <span className="eyebrow">{f.eyebrow}</span>
            <Headline text={f.h2} id="founding-partner" className="h2 !text-[clamp(26px,3.4vw,36px)]" />
            <p className="mt-4 lead">{f.body}</p>
          </div>
          <PrimaryCta className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
