import type { FaqItem } from "@/content";
import { RichText } from "./Text";
import Icon from "./Icon";

/** Accordion built on <details>, so it works with no JavaScript and is easy to rebuild in GHL. */
export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((f) => (
        <details key={f.id} id={f.id} className="group card !p-0 open:border-[rgba(75,137,243,0.45)]">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 md:p-6 [&::-webkit-details-marker]:hidden">
            <h3 className="h3 !text-[18px] md:!text-[19px]">{f.question}</h3>
            <span className="mt-1 shrink-0 text-[var(--cyan)] transition-transform group-open:rotate-180">
              <Icon name="chevron" />
            </span>
          </summary>
          <div className="px-5 pb-5 md:px-6 md:pb-6 -mt-1 flex flex-col gap-3 muted">
            {f.answer.map((a, i) => (
              <p key={i} className={i === 0 ? "text-white" : ""}>
                <RichText text={a} />
              </p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
