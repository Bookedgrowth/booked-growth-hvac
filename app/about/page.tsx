import Image from "next/image";
import { industry, site } from "@/content";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import ClosingCta from "@/components/ClosingCta";
import { Headline } from "@/components/Text";
import Icon from "@/components/Icon";

const a = industry.about;

export const metadata = buildMetadata({ ...a.meta, path: "/about", ogTitle: a.h1 });

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={a.eyebrow} h1={a.h1} crumbs={[{ name: "About", path: "/about" }]} />

      <section className="section !pt-0" aria-labelledby="story">
        <div className="container grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
          <div>
            <Image
              src={site.founder.headshot}
              alt={`${site.founder.name}, ${site.founder.role} of ${site.brandName}`}
              width={380}
              height={533}
              sizes="(min-width: 1024px) 380px, 100vw"
              priority
              className="w-full max-w-[380px] rounded-2xl border border-[var(--line)] object-cover"
            />
            <ul className="mt-6 flex flex-col gap-2.5">
              {a.facts.map((f) => (
                <li key={f} className="flex gap-3 text-[16px]">
                  <span className="mt-1 text-[var(--green)] shrink-0"><Icon name="check" size={16} strokeWidth={2.8} /></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-[680px]">
            <Headline text={a.h2} id="story" />
            <div className="mt-6 flex flex-col gap-4 lead">
              {a.story.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="mt-14">
              <Headline text={a.whyOnly.h2} className="h2 !text-[32px]" />
              <div className="mt-5 flex flex-col gap-4 lead">
                {a.whyOnly.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="how-i-work">
        <div className="container">
          <Headline text={a.howIWork.h2} id="how-i-work" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {a.howIWork.items.map((it) => (
              <div key={it.title} className="card">
                <h3 className="h3">{it.title}</h3>
                <p className="mt-2 muted">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
