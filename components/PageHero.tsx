import { Headline } from "./Text";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

export default function PageHero({
  eyebrow,
  h1,
  sub,
  crumbs,
  children,
  center = false,
}: {
  eyebrow?: string;
  h1: string;
  sub?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <section className="relative overflow-hidden grid-bg px-[var(--gutter)] pt-[calc(var(--nav-h)+40px)] pb-[var(--section-y)] md:pt-[calc(var(--nav-h)+64px)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(75,137,243,0.16), transparent 65%)" }}
      />
      <div className={`container relative ${center ? "text-center" : ""}`}>
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div className={center ? "mx-auto max-w-[820px]" : "max-w-[820px]"}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <Headline as="h1" className="h1" text={h1} />
          {sub && <p className={`lead mt-5 ${center ? "mx-auto" : ""} max-w-[680px]`}>{sub}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
