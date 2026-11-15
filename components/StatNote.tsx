import { industry } from "@/content";

/** Renders an approved stat with its source as a small footnote link. */
export function StatCard({ id }: { id: string }) {
  const stat = industry.stats.find((s) => s.id === id);
  if (!stat) return null;
  return (
    <figure className="card gradient-border">
      <blockquote className="text-white font-display font-bold text-xl md:text-2xl leading-snug">{stat.text}</blockquote>
      <figcaption className="mt-3 text-sm subtle">
        Source:{" "}
        <a href={stat.url} target="_blank" rel="noopener noreferrer" className="link">
          {stat.sourceLabel}
        </a>
      </figcaption>
    </figure>
  );
}

export function StatSource({ id }: { id: string }) {
  const stat = industry.stats.find((s) => s.id === id);
  if (!stat) return null;
  return (
    <p className="mt-3 text-sm subtle">
      Source:{" "}
      <a href={stat.url} target="_blank" rel="noopener noreferrer" className="link">
        {stat.sourceLabel}
      </a>
    </p>
  );
}
