import Link from "next/link";
import { Headline } from "@/components/Text";
import { PrimaryCta } from "@/components/CtaButton";

export default function NotFound() {
  return (
    <section className="px-[var(--gutter)] pt-[calc(var(--nav-h)+80px)] pb-[var(--section-y)] text-center">
      <div className="container-narrow">
        <Headline as="h1" className="h1" text="This Page Is **Off the Board.**" />
        <p className="lead mt-5">The page you&apos;re looking for moved or doesn&apos;t exist.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryCta />
          <Link href="/" className="btn btn-outline">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
