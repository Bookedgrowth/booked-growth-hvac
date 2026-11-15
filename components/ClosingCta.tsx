import { industry } from "@/content";
import { Headline } from "./Text";
import { PrimaryCta } from "./CtaButton";

export default function ClosingCta({ h2 = industry.closingCta.h2, body = industry.closingCta.body }: { h2?: string; body?: string }) {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="closing-cta">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(7,201,143,0.14), transparent 70%)" }}
      />
      <div className="container-narrow relative text-center">
        <Headline text={h2} id="closing-cta" />
        <p className="lead mt-5 mx-auto max-w-[560px]">{body}</p>
        <div className="mt-8">
          <PrimaryCta />
        </div>
      </div>
    </section>
  );
}
