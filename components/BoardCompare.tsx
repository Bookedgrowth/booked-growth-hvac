/**
 * Static before/after weekly job board for the "Three Steps" section.
 * No animation: the Before board shows the first few jobs, the After board shows all.
 */

import { industry } from "@/content";
import Icon from "./Icon";

const board = industry.home.process.board;
const SLOTS = 4;

function Board({ count, label, caption, full }: { count: number; label: string; caption: string; full: boolean }) {
  const jobs = board.jobs.slice(0, count);
  return (
    <figure className="card !p-4 md:!p-5">
      <figcaption className="mb-3 flex items-center justify-between gap-3">
        <span className="flex items-center gap-2">
          <span className={full ? "text-[var(--green-light)]" : "text-[var(--text-subtle)]"}>
            <Icon name="calendar" size={16} />
          </span>
          <span className="font-display text-[15px] font-bold">{label}</span>
        </span>
        <span className={`text-[13px] font-semibold ${full ? "text-[var(--green-light)]" : "subtle"}`}>{caption}</span>
      </figcaption>
      <div className="grid grid-cols-5 gap-1">
        {board.days.map((d) => (
          <div key={d} className="pb-1 text-center text-[11px] font-bold uppercase tracking-wider subtle">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-1" style={{ gridTemplateRows: `repeat(${SLOTS}, minmax(44px, auto))` }}>
        {Array.from({ length: board.days.length * SLOTS }).map((_, i) => (
          <div
            key={`e${i}`}
            className="rounded-md border border-dashed border-[var(--line)]"
            style={{ gridColumn: (i % board.days.length) + 1, gridRow: Math.floor(i / board.days.length) + 1 }}
          />
        ))}
        {jobs.map((j, i) => (
          <div
            key={i}
            className="rounded-md px-1.5 py-1.5 text-[10px] font-semibold leading-tight [overflow-wrap:anywhere] sm:px-2 sm:text-[11px]"
            style={{
              gridColumn: j.day + 1,
              gridRow: j.slot + 1,
              background: full ? "rgba(7,201,143,0.14)" : "rgba(24,69,169,0.1)",
              borderLeft: `3px solid ${full ? "#07c98f" : "#1845a9"}`,
            }}
          >
            {j.label}
          </div>
        ))}
      </div>
    </figure>
  );
}

export default function BoardCompare() {
  return (
    <div role="img" aria-label={board.ariaLabel} className="grid gap-4 md:grid-cols-2">
      <Board count={board.beforeCount} label={board.before.label} caption={board.before.caption} full={false} />
      <Board count={board.jobs.length} label={board.after.label} caption={board.after.caption} full />
    </div>
  );
}
