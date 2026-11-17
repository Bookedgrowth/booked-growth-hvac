import { site } from "@/content";
import Icon from "./Icon";

/** Real credentials only, from site.ts. Renders nothing if the list is empty. */
export default function Credentials({ className = "" }: { className?: string }) {
  const list: readonly { name: string }[] = site.credentials;
  if (list.length === 0) return null;
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {list.map((c) => (
        <li
          key={c.name}
          className="inline-flex items-center gap-2.5 rounded-full border border-[var(--line-strong)] bg-[var(--bg-raised)] py-2 pl-2 pr-4 text-[14px] font-semibold"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(7,201,143,0.16)] text-[var(--green-light)]">
            <Icon name="check" size={15} strokeWidth={2.8} />
          </span>
          {c.name}
        </li>
      ))}
    </ul>
  );
}
