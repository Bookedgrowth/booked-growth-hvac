import { industry } from "@/content";
import { Headline } from "../Text";
import { PrimaryCta } from "../CtaButton";

export default function CtaBox() {
  const c = industry.blog.ctaBox;
  return (
    <aside className="my-10 rounded-2xl border border-[rgba(7,201,143,0.35)] bg-[rgba(7,201,143,0.07)] p-6 md:p-8">
      <Headline as="p" text={c.h3} className="font-display text-[24px] font-extrabold leading-tight text-white" />
      <p className="mt-2 text-[17px] text-[var(--text-muted)]">{c.body}</p>
      <div className="mt-5">
        <PrimaryCta />
      </div>
    </aside>
  );
}
