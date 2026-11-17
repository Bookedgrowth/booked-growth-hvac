import { industry, site } from "@/content";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/ClosingCta";
import Icon from "@/components/Icon";

const sm = industry.samples;

export const metadata = buildMetadata({ ...sm.meta, path: "/samples", ogTitle: sm.h1 });

export default function SamplesPage() {
  return (
    <>
      <PageHero h1={sm.h1} sub={sm.intro} crumbs={[{ name: "Samples", path: "/samples" }]}>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 py-2 text-sm text-white/90">
          <Icon name="sparkle" size={16} /> {sm.disclaimer}
        </p>
      </PageHero>

      <section className="section light" aria-label="Sample sites">
        <div className="container">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sm.sites.map((s) => {
              const href = `${site.samplesBaseUrl}/${sm.category}/${s.slug}`;
              return (
                <li key={s.slug} className="card !p-0 overflow-hidden flex flex-col">
                  {/* TODO(stefano): replace with a real screenshot once each sample is live. */}
                  <div className="relative aspect-[16/10] border-b border-[var(--line)] bg-[var(--bg-raised)] grid-bg">
                    <div className="absolute inset-4 flex flex-col gap-2 rounded-lg border border-white/10 bg-[var(--bg)]/70 p-3" aria-hidden="true">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white/20" />
                        <span className="h-2 w-2 rounded-full bg-white/20" />
                        <span className="h-2 w-2 rounded-full bg-white/20" />
                      </div>
                      <div className="mt-2 h-3 w-2/3 rounded bg-white/15" />
                      <div className="h-3 w-1/2 rounded bg-white/10" />
                      <div className="mt-auto h-6 w-24 rounded bg-[var(--green)]/50" />
                    </div>
                    <span className="absolute bottom-2 right-3 text-[11px] subtle">Screenshot coming soon</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="h3">{s.name}</h2>
                      <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white/80">Sample</span>
                    </div>
                    <p className="mt-2 muted flex-1">{s.style}</p>
                    {s.live ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-5">
                        View sample <span className="sr-only">{s.name}</span> <Icon name="arrow" size={18} />
                      </a>
                    ) : (
                      <span className="btn mt-5 cursor-default border border-dashed border-[var(--line-strong)] text-[var(--text-subtle)]" aria-disabled="true">
                        Coming soon
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
