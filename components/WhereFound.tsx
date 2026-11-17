import Link from "next/link";
import { industry } from "@/content";
import { Headline } from "./Text";
import Icon from "./Icon";

const wf = industry.home.whereFound;
const name = wf.businessName;

function Mock({ kind }: { kind: (typeof wf.cards)[number]["kind"] }) {
  const tag = "inline-block rounded px-1.5 py-0.5 text-[10px] font-bold";
  switch (kind) {
    case "lsa":
      return (
        <div>
          <span className={`${tag} bg-[rgba(26,115,232,0.1)] text-[var(--verified)]`}>
            <span className="inline-flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="11" fill="#1a73e8" />
                <path d="m7 12.5 3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Google Verified
            </span>
          </span>
          <p className="mt-2 text-[14px] font-bold text-white">{name}</p>
          <p className="text-[12px] text-[var(--star)]">★★★★★ <span className="text-[var(--text-subtle)]">(your reviews)</span></p>
          <p className="text-[12px] text-[var(--text-subtle)]">Serves your area · Open 24 hours</p>
        </div>
      );
    case "searchAd":
      return (
        <div>
          <p className="text-[11px] text-[var(--text-subtle)]"><b className="text-white">Sponsored</b> · yourcompany.com</p>
          <p className="mt-1 text-[14px] font-semibold leading-snug text-[var(--serp-title)]">AC Repair Near You, Same-Day Service | {name}</p>
          <p className="mt-1 text-[12px] leading-snug text-[var(--text-subtle)]">Fast, honest AC repair. Call now for a tech today.</p>
        </div>
      );
    case "maps":
      return (
        <div>
          <div className="relative h-14 overflow-hidden rounded-md" style={{ background: "repeating-linear-gradient(45deg,var(--map-a) 0 8px,var(--map-b) 8px 16px)" }}>
            <span className="absolute left-1/2 top-2 -translate-x-1/2 text-[var(--green)]"><Icon name="pin" size={22} strokeWidth={2.4} /></span>
          </div>
          <p className="mt-2 text-[14px] font-bold text-white">{name}</p>
          <p className="text-[12px] text-[var(--star)]">★★★★★ <span className="text-[var(--text-subtle)]">· HVAC contractor</span></p>
        </div>
      );
    case "organic":
      return (
        <div>
          <p className="text-[11px] text-[var(--text-subtle)]">yourcompany.com › ac-repair › your-city</p>
          <p className="mt-1 text-[14px] font-semibold leading-snug text-[var(--serp-title)]">AC Repair in [Your City] | {name}</p>
          <p className="mt-1 text-[12px] leading-snug text-[var(--text-subtle)]">Licensed techs, upfront quotes and same-day service across [Your City].</p>
        </div>
      );
    case "reviews":
      return (
        <div>
          <p className="font-display text-[28px] font-extrabold leading-none text-white">
            4.9 <span className="text-[16px] text-[var(--star)]">★★★★★</span>
          </p>
          <p className="mt-1 text-[11px] text-[var(--text-subtle)]">Sample rating, yours goes here</p>
          <p className="mt-2 text-[12px] leading-snug text-[var(--text-muted)]">&ldquo;Your customer&apos;s review here.&rdquo;</p>
        </div>
      );
  }
}

export default function WhereFound() {
  return (
    <section className="section light section-alt" aria-labelledby="where-found">
      <div className="container">
        <div className="max-w-[760px]">
          <Headline text={wf.h2} id="where-found" />
          <p className="lead mt-5">{wf.intro}</p>
        </div>

        <div className="-mx-[var(--gutter)] mt-10 overflow-x-auto no-scrollbar snap-x snap-mandatory px-[var(--gutter)] scroll-px-[var(--gutter)] lg:mx-0 lg:overflow-visible lg:px-0">
          <ol className="flex gap-4 lg:grid lg:grid-cols-5">
            {wf.cards.map((c, i) => (
              <li key={c.kind} className="w-[250px] shrink-0 snap-start lg:w-auto flex flex-col">
                <p className="mb-2 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--text-subtle)]">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/10 text-[11px] text-white">{i + 1}</span>
                  {c.label}
                </p>
                <div className="flex-1 rounded-xl border border-[var(--line-strong)] bg-[var(--bg-raised)] p-4" aria-hidden="true">
                  <Mock kind={c.kind} />
                </div>
                <p className="mt-3 text-[12px] uppercase tracking-[0.12em] subtle">Won with</p>
                <Link href={c.href} className="mt-0.5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--green-light)] hover:text-white">
                  {c.winner}
                  <Icon name="arrow" size={14} />
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-4 text-sm subtle lg:hidden">Swipe to see all five.</p>
      </div>
    </section>
  );
}
