import Link from "next/link";
import { industry, site, socialLinks } from "@/content";
import Logo from "./Logo";
import Icon from "./Icon";

const pages = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Sample Sites", href: "/samples" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact / Free Audit", href: "/contact" },
];

async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-deep)] px-[var(--gutter)] pt-14 pb-24 md:pb-10">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 text-[15px] muted max-w-[300px]">{industry.positioning}</p>
            <p className="mt-4 text-[15px] subtle">{industry.footerServing}</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] subtle mb-4">Services</p>
            <ul className="flex flex-col gap-2.5 text-[15px]">
              {industry.services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="muted hover:text-white">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] subtle mb-4">Company</p>
            <ul className="flex flex-col gap-2.5 text-[15px]">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="muted hover:text-white">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] subtle mb-4">Contact</p>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li>
                <a href={`tel:${site.phone.tel}`} className="inline-flex items-center gap-2 text-white hover:text-[var(--green-light)]">
                  <Icon name="phone" size={16} /> {site.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-white hover:text-[var(--green-light)] break-all">
                  <Icon name="mail" size={16} /> {site.email}
                </a>
              </li>
              <li className="subtle">
                {site.location.city}, {site.location.region}
              </li>
            </ul>
            {socialLinks.length > 0 && (
              <ul className="mt-4 flex gap-3 text-sm">
                {socialLinks.map((s) => (
                  <li key={s.name}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="muted capitalize hover:text-white">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <Link href={site.primaryCta.href} className="btn btn-primary btn-sm mt-6">
              {site.primaryCta.label}
            </Link>
          </div>
        </div>

        {/* Business info required for SMS (A2P 10DLC) registration */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--line)] pt-6 text-sm subtle md:flex-row md:items-center md:justify-between">
          <p>
            {/* TODO(stefano): confirm the exact legal name for A2P. It comes from site.legalName. */}
            &copy; <CopyrightYear /> {site.legalName}. {site.location.city}, {site.location.region}.{" "}
            <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a> ·{" "}
            <a href={`tel:${site.phone.tel}`} className="hover:text-white">{site.phone.display}</a>
          </p>
          <ul className="flex gap-5">
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
