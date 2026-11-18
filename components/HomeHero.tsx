"use client";

/**
 * Home hero: full-bleed tech photo, copy on the left, a calendar-app style week on the right.
 *
 * At 1024px+ (motion allowed) the hero pins while the visitor scrolls about 130vh,
 * and the calendar fills: jobs pop in, the counter counts up, the progress bar fills
 * and the source captions light up in order (3 jobs per stage, the last stage adds the rest).
 * Below 1024px or with reduced motion, it renders the finished board, no pinning.
 * All copy and job data live in content (industry.home.hero).
 */

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { industry, site } from "@/content";
import { Headline } from "./Text";
import Icon from "./Icon";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], display: "swap" });

const hero = industry.home.hero;
const cal = hero.calendar;
const TOTAL = cal.jobs.length;
const TO_ADD = TOTAL - cal.alreadyBooked;
const LAST_STAGE = cal.stages.length - 1;

/* Sequence runs between these scroll-progress points, so the end state holds briefly before unpinning. */
const SEQ_START = 0.04;
const SEQ_END = 0.86;

function addedAt(progress: number) {
  const t = (progress - SEQ_START) / (SEQ_END - SEQ_START);
  return Math.max(0, Math.min(TO_ADD, Math.round(t * TO_ADD)));
}

function stageOfJob(i: number) {
  if (i < cal.alreadyBooked) return -1;
  return Math.min(Math.floor((i - cal.alreadyBooked) / cal.perStage), LAST_STAGE);
}

const GRID = "#dadce0";
const ROW_H = 54;

function Calendar({ added }: { added: number }) {
  const booked = cal.alreadyBooked + added;
  const full = booked >= TOTAL;
  const activeStage = added <= 0 ? -1 : Math.min(Math.floor((added - 1) / cal.perStage), LAST_STAGE);
  const counter = cal.counterLabel.replace("{n}", String(booked)).replace("{total}", String(TOTAL));
  const pill = "ml-auto shrink-0 whitespace-nowrap rounded-[14px] px-2.5 py-[5px] text-[12px] font-bold";

  return (
    <figure role="img" aria-label={cal.ariaLabel} className="m-0">
      <div
        className={`${roboto.className} overflow-hidden rounded-2xl bg-white text-[#3c4043]`}
        style={{ boxShadow: "0 30px 70px rgba(0,0,0,0.5)" }}
      >
        {/* Toolbar */}
        <div className="flex items-center gap-2 border-b px-3 py-3 sm:px-4" style={{ borderColor: GRID }}>
          <span aria-hidden="true" className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[#1a73e8] text-white">
            <Icon name="calendar" size={17} strokeWidth={2.2} />
          </span>
          <span className="text-[17px]">{cal.appName}</span>
          <span className="ml-1 hidden rounded-[18px] border px-3 py-1.5 text-[13px] font-medium sm:inline-block" style={{ borderColor: GRID }}>
            {cal.todayLabel}
          </span>
          <span aria-hidden="true" className="hidden gap-0.5 text-[#5f6368] sm:inline-flex">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </span>
          <span className="whitespace-nowrap text-[16px] sm:text-[17px]">{cal.month}</span>
          <span className={`${pill} hh-counter-static bg-[#e6f4ea] text-[#137333]`}>{cal.fullLabel}</span>
          <span
            className={`${pill} hh-counter-live`}
            style={{ background: full ? "#e6f4ea" : "#e8f0fe", color: full ? "#137333" : "#1967d2" }}
          >
            {full ? cal.fullLabel : counter}
          </span>
        </div>

        {/* Day header */}
        <div className="grid border-b pt-2 pr-1.5 pb-1.5" style={{ gridTemplateColumns: "46px repeat(5, minmax(0, 1fr))", borderColor: GRID }}>
          <div />
          {cal.days.map((d, i) => {
            const today = i === cal.todayIndex;
            return (
              <div key={d.label} className="flex flex-col items-center gap-0.5">
                <span className="text-[11px] font-medium tracking-[0.06em]" style={{ color: today ? "#1a73e8" : "#70757a" }}>
                  {d.label}
                </span>
                <span
                  className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full text-[17px]"
                  style={{ background: today ? "#1a73e8" : "transparent", color: today ? "#ffffff" : "#3c4043" }}
                >
                  {d.date}
                </span>
              </div>
            );
          })}
        </div>

        {/* Time grid */}
        <div className="grid pr-1.5 pb-2" style={{ gridTemplateColumns: "46px minmax(0, 1fr)" }}>
          <div className="grid" style={{ gridTemplateRows: `repeat(${cal.rows.length}, ${ROW_H}px)` }}>
            {cal.rows.map((r) => (
              <span key={r} className="-translate-y-1.5 pr-2 text-right text-[10px] text-[#70757a]">
                {r}
              </span>
            ))}
          </div>
          <div className="relative">
            <div className="grid" style={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gridTemplateRows: `repeat(${cal.rows.length}, ${ROW_H}px)` }}>
              {Array.from({ length: cal.days.length * cal.rows.length }).map((_, k) => (
                <div key={k} style={{ borderTop: `1px solid ${GRID}`, borderLeft: `1px solid ${GRID}` }} />
              ))}
            </div>
            <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gridTemplateRows: `repeat(${cal.rows.length}, ${ROW_H}px)` }}>
              {/* Current-time line in today's column */}
              <div className="pointer-events-none relative z-[2]" style={{ gridColumn: cal.todayIndex + 1, gridRow: 2 }} aria-hidden="true">
                <div className="absolute inset-x-0 h-0.5 bg-[#ea4335]" style={{ top: "38%" }} />
                <div className="absolute -left-[5px] h-2.5 w-2.5 rounded-full bg-[#ea4335]" style={{ top: "calc(38% - 4px)" }} />
              </div>
              {cal.jobs.map((j, i) => {
                const st = stageOfJob(i);
                return (
                  <div key={i} className="min-w-0 p-[3px] pb-0.5" style={{ gridColumn: j.col, gridRow: j.row }}>
                    <div
                      data-on={i < booked}
                      className={`hh-event h-full overflow-hidden rounded px-1.5 py-1 leading-[1.25] text-white`}
                      style={{ background: st < 0 ? cal.bookedColor : cal.stages[st].color }}
                    >
                      <span className="block text-[11px] font-medium [overflow-wrap:anywhere]">{j.title}</span>
                      <span className="block text-[10px]">{j.time}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Progress and source captions */}
      <div className="mt-4 rounded-[14px] border border-white/10 px-4 py-3.5" style={{ background: "rgba(19,22,32,0.78)" }}>
        <div className="h-1 overflow-hidden rounded bg-white/[0.12]">
          <div
            className={`hh-bar h-full`}
            style={{ "--p": `${Math.round((added / TO_ADD) * 100)}%`, background: "linear-gradient(90deg, #4b89f3, #07c98f)" } as CSSProperties}
          />
        </div>
        <ol className="mt-3 grid gap-2.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(104px, 1fr))" }}>
          {cal.stages.map((st, i) => (
            <li key={st.caption} data-on={full || i <= activeStage} className={`hh-stage flex items-start gap-2`}>
              <span aria-hidden="true" className="mt-1 h-2.5 w-2.5 shrink-0 rounded-[3px]" style={{ background: st.color }} />
              <span className="text-[12.5px] font-semibold leading-[1.3] text-white">{st.caption}</span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [added, setAdded] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = addedAt(v);
    setAdded((prev) => (prev === next ? prev : next));
  });
  // Page may load or restore mid-scroll.
  useEffect(() => {
    setAdded(addedAt(scrollYProgress.get()));
  }, [scrollYProgress]);

  return (
    <section ref={ref} className="hh-wrap">
      <div className="hh-pin">
        <Image
          src={hero.photo.src}
          alt={hero.photo.alt}
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-[62%_30%]"
        />
        <div aria-hidden="true" className="hh-overlay" />
        <div aria-hidden="true" className="hh-navshade" />

        <div className={`container relative grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14 hh-inner`}>
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
          </div>

          <div className="relative w-full max-w-[500px] lg:justify-self-end">
            <Calendar added={added} />
          </div>
        </div>
      </div>
    </section>
  );
}
