import { industry } from "@/content";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import AuditForm from "@/components/AuditForm";
import CalBooking from "@/components/CalBooking";

const c = industry.contact;

export const metadata = buildMetadata({ ...c.meta, path: "/contact", ogTitle: c.h1 });

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={c.eyebrow} h1={c.h1} sub={c.sub} center crumbs={[{ name: "Contact", path: "/contact" }]} />

      <section className="px-[var(--gutter)] pb-[var(--section-y)]">
        <div className="mx-auto flex max-w-[960px] flex-col gap-8">
          <div className="card">
            <h2 className="h3 !text-[22px] mb-2">{c.formTitle}</h2>
            <p className="text-sm subtle mb-7">{c.formNote}</p>
            <AuditForm />
          </div>

          <div className="flex items-center gap-4 py-2" aria-hidden="true">
            <div className="h-px flex-1 bg-[var(--line)]" />
            <span className="px-2 text-sm font-semibold subtle">Or skip the wait</span>
            <div className="h-px flex-1 bg-[var(--line)]" />
          </div>

          <div className="card">
            <h2 className="h3 !text-[22px] mb-2">{c.calTitle}</h2>
            <p className="text-sm subtle mb-7">{c.calNote}</p>
            <CalBooking />
          </div>

          <p className="pb-4 text-center text-sm subtle">{c.reassurance}</p>
        </div>
      </section>
    </>
  );
}
