"use client";

/**
 * "Empty Schedule, Full Board" hero (home page only).
 * A weekly dispatch board starts nearly empty and fills with job cards as the
 * visitor scrolls, in 5 stages. The whole sequence finishes inside the hero's
 * own scroll distance. Static fallback for reduced motion and screens < 1024px.
 */

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { industry, site } from "@/content";
import { Headline } from "./Text";
import Icon from "./Icon";

const hero = industry.home.hero;
const scene = hero.scene;

const START = 0.06;
const STAGE_LEN = 0.17;
const stageStart = (i: number) => START + i * STAGE_LEN;
const ALWAYS = 2; // first N jobs are on the board from the start
const PER_STAGE = 3;

function jobStart(idx: number) {
  if (idx < ALWAYS) return -1;
  const k = idx - ALWAYS;
  const stage = Math.min(Math.floor(k / PER_STAGE), scene.stages.length - 1);
  const inStage = stage === scene.stages.length - 1 ? k - stage * PER_STAGE : k % PER_STAGE;
  const groupSize = stage === scene.stages.length - 1 ? scene.jobs.length - ALWAYS - stage * PER_STAGE : PER_STAGE;
  return stageStart(stage) + 0.02 + (inStage * (STAGE_LEN * 0.7)) / groupSize;
}

const stageIcons = ["pin", "shield", "phone", "star", "calendar"];

/* ---------------- shared bits ---------------- */

function HeroCopy() {
  return (
    <div className="max-w-[600px]">
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
  );
}

function JobChip({ label, highlight = false }: { label: string; highlight?: boolean }) {
  return (
    <div
      className="h-full w-full rounded-md px-1.5 py-1.5 text-[10px] font-semibold leading-tight text-white [overflow-wrap:anywhere] sm:px-2 sm:text-[11px]"
      style={{
        background: highlight ? "linear-gradient(135deg, rgba(7,201,143,0.32), rgba(49,207,249,0.22))" : "rgba(75,137,243,0.22)",
        borderLeft: `3px solid ${highlight ? "var(--green)" : "var(--blue)"}`,
      }}
    >
      {label}
    </div>
  );
}

function BoardFrame({ children, counter }: { children: React.ReactNode; counter: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-raised)] p-4 shadow-2xl shadow-black/50">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[var(--cyan)]"><Icon name="calendar" size={16} /></span>
          <span className="font-display text-sm font-bold text-white">{scene.boardTitle}</span>
        </div>
        <div className="text-xs font-semibold text-[var(--text-subtle)]">{counter}</div>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {scene.days.map((d) => (
          <div key={d} className="pb-1 text-center text-[11px] font-bold uppercase tracking-wider text-[var(--text-subtle)]">
            {d}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

const cellStyle = { gridRow: 0, gridColumn: 0 };
const pos = (day: number, slot: number) => ({ ...cellStyle, gridColumn: day + 1, gridRow: slot + 1 });

function EmptyCells() {
  return (
    <>
      {scene.days.flatMap((_, d) =>
        [0, 1, 2, 3].map((s) => (
          <div key={`${d}-${s}`} style={pos(d, s)} className="rounded-md border border-dashed border-white/[0.07]" />
        )),
      )}
    </>
  );
}

/* ---------------- static version ---------------- */

function StaticScene() {
  return (
    <div>
      <BoardFrame counter={<span className="text-[var(--green-light)]">{scene.fullLabel}</span>}>
        <div className="grid grid-cols-5 gap-1" style={{ gridTemplateRows: "repeat(4, minmax(48px, auto))" }}>
          <EmptyCells />
          {scene.jobs.map((j, i) => (
            <div key={i} style={pos(j.day, j.slot)}>
              <JobChip label={j.label} highlight={i >= ALWAYS} />
            </div>
          ))}
        </div>
      </BoardFrame>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2">
        {scene.stages.map((s, i) => (
          <li key={s.caption} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(7,201,143,0.14)] text-[var(--green)]">
              <Icon name={stageIcons[i]} size={16} />
            </span>
            <span>
              <span className="block font-semibold text-white">{s.caption}</span>
              <span className="block text-sm subtle">{s.detail}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------------- animated version ---------------- */

function AnimatedJob({ p, idx }: { p: MotionValue<number>; idx: number }) {
  const j = scene.jobs[idx];
  const s = jobStart(idx);
  const opacity = useTransform(p, s < 0 ? [0, 1] : [s, s + 0.025], s < 0 ? [1, 1] : [0, 1]);
  const scale = useTransform(p, s < 0 ? [0, 1] : [s, s + 0.025], s < 0 ? [1, 1] : [0.7, 1]);
  return (
    <motion.div style={{ ...pos(j.day, j.slot), opacity, scale }} className="h-12">
      <JobChip label={j.label} highlight={idx >= ALWAYS} />
    </motion.div>
  );
}

function useStageWindow(p: MotionValue<number>, i: number, hold = false) {
  const s = stageStart(i);
  const e = s + STAGE_LEN;
  return useTransform(p, hold ? [s, s + 0.03] : [s, s + 0.03, e - 0.02, e], hold ? [0, 1] : [0, 1, 1, 0]);
}

function Overlays({ p }: { p: MotionValue<number> }) {
  const o0 = useStageWindow(p, 0);
  const o1 = useStageWindow(p, 1);
  const o2 = useStageWindow(p, 2);
  const o3 = useStageWindow(p, 3);
  const o4 = useStageWindow(p, 4, true);
  const pinY = useTransform(p, [stageStart(0), stageStart(0) + 0.04], [-36, 0]);
  const lsaX = useTransform(p, [stageStart(1), stageStart(1) + 0.04], [60, 0]);
  const callY = useTransform(p, [stageStart(2), stageStart(2) + 0.04], [-30, 0]);
  const revScale = useTransform(p, [stageStart(3), stageStart(3) + 0.04], [0.8, 1]);

  return (
    <>
      {/* 1. Map pin drops near a house */}
      <motion.div style={{ opacity: o0 }} className="absolute -left-10 -top-14 w-[200px] rounded-xl border border-[var(--line-strong)] bg-[#1d2333] p-3 shadow-xl">
        <div className="relative h-[86px] overflow-hidden rounded-lg" style={{ background: "repeating-linear-gradient(45deg,#232a3d 0 10px,#20273a 10px 20px)" }}>
          <div className="absolute left-0 right-0 top-[52px] h-[6px] bg-[#2d3650]" />
          <div className="absolute bottom-0 left-[92px] top-0 w-[6px] bg-[#2d3650]" />
          <span className="absolute left-[40px] top-[22px] text-[var(--text-subtle)]"><Icon name="home" size={22} /></span>
          <motion.span style={{ y: pinY }} className="absolute left-[62px] top-[8px] text-[var(--green)] drop-shadow">
            <Icon name="pin" size={28} strokeWidth={2.4} />
          </motion.span>
        </div>
        <p className="mt-2 text-[12px] font-bold text-white">{scene.mapLabel}</p>
        <p className="text-[11px] text-[var(--green-light)]">★★★★★ · Open now</p>
      </motion.div>

      {/* 2. LSA lead card slides in */}
      <motion.div style={{ opacity: o1, x: lsaX }} className="absolute -right-12 top-10 w-[230px] rounded-xl border border-[var(--line-strong)] bg-[#1d2333] p-3 shadow-xl">
        <span className="inline-flex items-center gap-1 rounded-full bg-[rgba(7,201,143,0.16)] px-2 py-0.5 text-[10px] font-bold text-[var(--green-light)]">
          <Icon name="shield" size={12} /> {scene.lsaCard.badge}
        </span>
        <p className="mt-2 text-[13px] font-bold text-white">{scene.lsaCard.title}</p>
        <p className="text-[11px] text-[var(--text-subtle)]">{scene.lsaCard.meta}</p>
      </motion.div>

      {/* 3. Phone notification */}
      <motion.div style={{ opacity: o2, y: callY }} className="absolute -top-10 right-6 w-[260px] rounded-2xl border border-[var(--line-strong)] bg-[#232a3d]/95 p-3 shadow-xl backdrop-blur">
        <div className="flex items-start gap-2.5">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--green)] text-[var(--bg)]">
            <Icon name="phone" size={16} />
          </span>
          <div>
            <p className="text-[12px] font-bold text-white">{scene.callCard.title}</p>
            <p className="text-[11px] leading-snug text-[var(--text-muted)]">{scene.callCard.body}</p>
          </div>
        </div>
      </motion.div>

      {/* 4. Review card */}
      <motion.div style={{ opacity: o3, scale: revScale }} className="absolute -bottom-10 -left-8 w-[240px] rounded-xl border border-[var(--line-strong)] bg-[#1d2333] p-3 shadow-xl">
        <p className="text-[15px] tracking-wider text-[#fbbf24]" aria-hidden="true">{"★".repeat(scene.reviewCard.stars)}</p>
        <p className="mt-1 text-[12px] leading-snug text-white">&ldquo;{scene.reviewCard.body}&rdquo;</p>
        <p className="mt-1 text-[10px] text-[var(--text-subtle)]">Google review</p>
      </motion.div>

      {/* 5. Full board */}
      <motion.div style={{ opacity: o4 }} className="absolute -bottom-5 right-6 inline-flex items-center gap-2 rounded-full bg-[var(--green)] px-4 py-2 text-[13px] font-bold text-[var(--bg)] shadow-[0_10px_40px_rgba(7,201,143,0.45)]">
        <Icon name="check" size={16} strokeWidth={3} /> {scene.fullLabel}
      </motion.div>
    </>
  );
}

function AnimatedScene({ p }: { p: MotionValue<number> }) {
  const [stage, setStage] = useState(-1);
  useMotionValueEvent(p, "change", (v) => {
    let s = -1;
    for (let i = 0; i < scene.stages.length; i++) if (v >= stageStart(i)) s = i;
    if (s !== stage) setStage(s);
  });
  const booked = useTransform(p, (v) => {
    let n = 0;
    scene.jobs.forEach((_, i) => {
      if (jobStart(i) + 0.012 <= v) n++;
    });
    return `${n} of ${scene.jobs.length} booked`;
  });
  const bar = useTransform(p, [START, stageStart(scene.stages.length - 1) + 0.04], ["0%", "100%"]);

  return (
    <div>
      <div className="relative mx-10 my-14">
        <BoardFrame counter={<motion.span>{booked}</motion.span>}>
          <div className="grid grid-cols-5 grid-rows-4 gap-1.5" style={{ gridAutoRows: "48px" }}>
            <EmptyCells />
            {scene.jobs.map((_, i) => (
              <AnimatedJob key={i} p={p} idx={i} />
            ))}
          </div>
        </BoardFrame>
        <Overlays p={p} />
      </div>

      {/* Stage captions */}
      <div className="mx-10" aria-live="polite">
        <div className="h-1 overflow-hidden rounded-full bg-white/10">
          <motion.div className="h-full rounded-full" style={{ width: bar, background: "var(--gradient)" }} />
        </div>
        <ol className="mt-4 grid grid-cols-5 gap-2">
          {scene.stages.map((s, i) => (
            <li key={s.caption} className={`text-[12px] font-semibold leading-snug transition-colors duration-300 ${i <= stage ? "text-white" : "text-white/35"}`}>
              <span className={`mb-1.5 inline-flex h-6 w-6 items-center justify-center rounded-md transition-colors duration-300 ${i <= stage ? "bg-[var(--green)] text-[var(--bg)]" : "bg-white/10 text-white/50"}`}>
                <Icon name={stageIcons[i]} size={13} />
              </span>
              <span className="block">{s.caption}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ---------------- section ---------------- */

export default function HeroScroll() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const bg = (
    <>
      <div aria-hidden="true" className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 55% at 75% 40%, rgba(49,207,249,0.12), transparent 70%), radial-gradient(ellipse 50% 50% at 15% 10%, rgba(75,137,243,0.14), transparent 70%)" }}
      />
    </>
  );

  // One H1 in the DOM: the copy renders once; only the board swaps by breakpoint.
  return (
    <section ref={ref} className={`relative ${reduced ? "" : "lg:h-[280vh]"}`}>
      <div
        className={`relative overflow-hidden px-[var(--gutter)] pt-[calc(var(--nav-h)+36px)] pb-[var(--section-y)] ${
          reduced ? "" : "lg:sticky lg:top-0 lg:h-screen lg:pb-0 lg:pt-0"
        }`}
      >
        {bg}
        <div className={`container relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-8 ${reduced ? "" : "lg:h-full lg:pt-[var(--nav-h)]"}`}>
          <HeroCopy />
          <div role="img" aria-label={scene.ariaLabel}>
            <div className={reduced ? "" : "lg:hidden"}>
              <StaticScene />
            </div>
            {!reduced && (
              <div className="hidden lg:block">
                <AnimatedScene p={scrollYProgress} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
