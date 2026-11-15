import { industry } from "@/content";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/ClosingCta";
import { Headline } from "@/components/Text";
import { PrimaryCta } from "@/components/CtaButton";
import Icon from "@/components/Icon";

const hw = industry.howItWorks;

export const metadata = buildMetadata({ ...hw.meta, path: "/how-it-works", ogTitle: hw.hero.h1 });

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow={hw.hero.eyebrow} h1={hw.hero.h1} sub={hw.hero.sub} crumbs={[{ name: "How It Works", path: "/how-it-works" }]}>
        <div className="mt-8">
          <PrimaryCta />
        </div>
      </PageHero>

      <section className="section" aria-label="Our process">
        <div className="container">
          <ol className="relative flex flex-col gap-6 md:gap-8">
            <span aria-hidden="true" className="absolute left-[23px] top-4 bottom-4 hidden w-px md:block" style={{ background: "var(--gradient)" }} />
            {hw.phases.map((ph, i) => (
              <li key={ph.title} className="relative grid gap-4 md:grid-cols-[48px_1fr] md:gap-8">
                <span className="relative z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--bg)] font-display text-lg font-extrabold text-white md:inline-flex">
                  {i + 1}
                </span>
                <div className="card grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-10">
                  <div>
                    <p className="flex flex-wrap items-center gap-2 text-sm font-bold">
                      <span className="text-[var(--cyan)] uppercase tracking-[0.14em]">{ph.label}</span>
                      <span className="rounded-full bg-[rgba(7,201,143,0.14)] px-2.5 py-0.5 text-[var(--green-light)]">{ph.timing}</span>
                    </p>
                    <h2 className="h3 !text-[26px] mt-3">{ph.title}</h2>
                    <p className="mt-3 muted text-[17px]">{ph.body}</p>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {ph.checklist.map((c) => (
                      <li key={c} className="flex gap-3 text-[16px]">
                        <span className="mt-1 text-[var(--green)] shrink-0"><Icon name="check" size={16} strokeWidth={2.8} /></span>
                        <span className="text-white/90">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="reporting">
        <div className="container">
          <div className="max-w-[760px]">
            <Headline text={hw.reporting.h2} id="reporting" />
            <p className="lead mt-5">{hw.reporting.body}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {hw.reporting.metrics.map((m) => (
              <div key={m.title} className="card gradient-border">
                <h3 className="font-display text-2xl font-extrabold gradient-text">{m.title}</h3>
                <p className="mt-2 muted">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="no-surprises">
        <div className="container-narrow">
          <Headline text={hw.noSurprises.h2} id="no-surprises" />
          <ul className="mt-8 flex flex-col gap-4">
            {hw.noSurprises.items.map((it) => (
              <li key={it} className="flex gap-3 text-lg">
                <span className="mt-1 text-[var(--green)] shrink-0"><Icon name="check" size={20} strokeWidth={2.8} /></span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
