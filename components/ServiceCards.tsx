import Link from "next/link";
import type { ServiceContent } from "@/content";
import Icon, { serviceIcon } from "./Icon";

export default function ServiceCards({ services }: { services: ServiceContent[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          className={`card card-hover group flex flex-col ${s.featured ? "gradient-border lg:col-span-2 lg:row-span-2 justify-between" : ""}`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: s.featured ? "var(--green)" : "rgba(75,137,243,0.14)", color: s.featured ? "var(--bg)" : "var(--cyan)" }}
              >
                <Icon name={serviceIcon[s.slug]} size={22} />
              </span>
              {s.featured && (
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--green-light)]">Flagship</span>
              )}
            </div>
            <h3 className={`h3 mt-5 ${s.featured ? "!text-[26px]" : ""}`}>{s.cardTitle}</h3>
            <p className={`mt-2 muted ${s.featured ? "text-lg" : ""}`}>{s.cardBlurb}</p>
            {s.featured && s.extraSections?.[0]?.bullets && (
              <ul className="mt-6 hidden flex-col gap-3 lg:flex">
                {s.extraSections[0].bullets.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <span className="mt-1 text-[var(--green)] shrink-0"><Icon name="check" size={16} strokeWidth={2.8} /></span>
                    <span>
                      <span className="block font-semibold text-white">{b.title}</span>
                      <span className="block text-[15px] subtle">{b.body.split(". ")[0]}.</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--cyan)] group-hover:gap-2.5 transition-all">
            Learn more <span className="sr-only">about {s.cardTitle}</span>
            <Icon name="arrow" size={16} />
          </span>
        </Link>
      ))}
    </div>
  );
}
