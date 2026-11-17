/**
 * Home hero: copy on the left, a real photo on the right (desktop).
 * On phones the photo sits behind the copy under a dark overlay.
 * Three phone-style notifications slide in once on page load (CSS only,
 * so this stays a server component). Reduced motion shows them at rest.
 * Not pinned and not scroll-driven: the page scrolls freely.
 */

import Image from "next/image";
import Link from "next/link";
import { industry, site } from "@/content";
import { Headline } from "./Text";
import Icon from "./Icon";
import Credentials from "./Credentials";

const hero = industry.home.hero;

const appStyle: Record<string, { bg: string; fg: string }> = {
  phone: { bg: "#34c759", fg: "#ffffff" },
  chat: { bg: "#34c759", fg: "#ffffff" },
  calendar: { bg: "#ffffff", fg: "#ff3b30" },
};

function Notifications({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex w-full max-w-[340px] flex-col gap-2.5 ${className}`} aria-label="Example phone notifications">
      {hero.notifications.map((n, i) => {
        const st = appStyle[n.icon] ?? appStyle.phone;
        return (
          <li
            key={n.text}
            className="notif flex items-start gap-3 rounded-[20px] px-3.5 py-3 text-[#131620]"
            style={{ animationDelay: `${0.5 + i * 0.6}s` }}
          >
            <span
              className="mt-0.5 inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[9px] shadow-sm"
              style={{ background: st.bg, color: st.fg }}
            >
              <Icon name={n.icon} size={19} strokeWidth={2.4} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center justify-between text-[12px] font-medium text-[#3c3c43]">
                <span className="uppercase tracking-[0.04em]">{n.app}</span>
                <span>now</span>
              </span>
              <span className="mt-0.5 block text-[14.5px] font-semibold leading-snug">{n.text}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default function HeroPhoto() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] px-[var(--gutter)] pt-[calc(var(--nav-h)+40px)] pb-[var(--section-y)] lg:pt-[calc(var(--nav-h)+56px)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{ background: "radial-gradient(ellipse 50% 60% at 10% 10%, rgba(75,137,243,0.14), transparent 70%)" }}
      />
      <div className="container grid items-center gap-10 lg:relative lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <div className="relative z-10 max-w-[600px]">
          <span className="eyebrow">{hero.eyebrow}</span>
          <Headline as="h1" className="h1" text={hero.h1Options[hero.activeH1]} />
          <p className="lead mt-5">{hero.sub}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={site.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta}
              <Icon name="arrow" size={18} />
            </Link>
            <Link href={hero.secondaryCta.href} className="btn btn-outline">
              {hero.secondaryCta.label}
            </Link>
          </div>
          <Credentials className="mt-7" />
        </div>

        {/* On phones this column is static, so the photo fills the whole section behind the copy. */}
        <div className="lg:relative">
          <div className="absolute inset-0 overflow-hidden lg:relative lg:inset-auto lg:aspect-[1800/1360] lg:rounded-3xl lg:border lg:border-[var(--line-strong)] lg:shadow-2xl lg:shadow-black/40">
            <Image
              src={hero.photo.src}
              alt={hero.photo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              quality={72}
              className="object-cover object-[62%_30%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 lg:hidden"
              style={{ background: "linear-gradient(180deg, rgba(13,16,26,0.86) 0%, rgba(13,16,26,0.8) 55%, rgba(13,16,26,0.9) 100%)" }}
            />
          </div>
          <Notifications className="relative z-10 lg:absolute lg:-bottom-6 lg:-left-10" />
        </div>
      </div>
    </section>
  );
}
