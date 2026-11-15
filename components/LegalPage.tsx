import type { LegalSection } from "@/content/legal";
import Breadcrumbs from "./Breadcrumbs";
import { RichText } from "./Text";

export default function LegalPage({
  title,
  path,
  effectiveDate,
  intro,
  sections,
}: {
  title: string;
  path: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <section className="px-[var(--gutter)] pt-[calc(var(--nav-h)+40px)] pb-[var(--section-y)]">
      <div className="container-narrow">
        <Breadcrumbs items={[{ name: title, path }]} />
        <span className="eyebrow">Legal</span>
        <h1 className="h1 !text-[clamp(32px,5vw,46px)]">{title}</h1>
        <p className="mt-3 subtle">Effective date: {effectiveDate}</p>
        <div className="prose mt-10">
          <p className="text-white/90">{intro}</p>
          {sections.map((s) => (
            <div key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-3"><RichText text={p} /></p>
              ))}
              {s.bullets && (
                <ul className="mt-3">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
