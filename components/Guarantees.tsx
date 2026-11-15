import { site, type GuaranteeKey } from "@/content/site";
import Icon from "./Icon";

export function GuaranteeCard({ k }: { k: GuaranteeKey }) {
  const g = site.guarantees[k];
  return (
    <div className="card gradient-border h-full">
      <div className="flex items-center gap-2 text-[var(--green)] mb-4">
        <Icon name="shield" size={22} />
        <span className="text-sm font-bold uppercase tracking-[0.14em]">{g.service}</span>
      </div>
      <p className="font-display text-white text-2xl font-extrabold leading-tight">{g.headline}</p>
    </div>
  );
}

export function GuaranteeGrid() {
  const keys = Object.keys(site.guarantees) as GuaranteeKey[];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {keys.map((k) => (
        <GuaranteeCard key={k} k={k} />
      ))}
    </div>
  );
}
