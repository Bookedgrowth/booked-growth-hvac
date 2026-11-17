"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { industry, site } from "@/content";
import Icon, { serviceIcon } from "./Icon";

type DropKey = "services" | "resources" | null;

const resources = [
  { label: "Blog", href: "/blog", desc: "Plain-English marketing guides" },
  { label: "FAQ", href: "/faq", desc: "Straight answers to common questions" },
];

const pageLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Samples", href: "/samples" },
];
const tailLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<DropKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // Hover handling: the wrapper holds both trigger and menu, and the menu has a
  // padded "bridge" with no gap, plus a short close delay. Moving the mouse from
  // the trigger into the menu never closes it (the bug on the old site).
  const enter = (k: DropKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(k);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 180);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const solid = scrolled || mobileOpen;

  const dropdown = (k: Exclude<DropKey, null>, label: string, items: { label: string; href: string; desc: string; icon?: string }[], wide = false) => (
    <div className="relative" onMouseEnter={() => enter(k)} onMouseLeave={leave}>
      <button
        type="button"
        className={`flex items-center gap-1 whitespace-nowrap py-2 text-[14px] font-medium transition-colors xl:text-[15px] ${open === k || items.some((i) => isActive(i.href)) ? "text-white" : "text-[var(--text-muted)] hover:text-white"}`}
        aria-expanded={open === k}
        aria-controls={`menu-${k}`}
        onClick={() => setOpen(open === k ? null : k)}
      >
        {label}
        <Icon name="chevron" size={16} className={`transition-transform ${open === k ? "rotate-180" : ""}`} />
      </button>
      <div
        id={`menu-${k}`}
        className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 ${open === k ? "visible opacity-100" : "invisible opacity-0"} transition-opacity duration-150`}
      >
        <ul
          className={`rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-raised)] p-2 shadow-2xl shadow-black/40 ${wide ? "w-[560px] grid grid-cols-2" : "w-[300px]"}`}
        >
          {items.map((i) => (
            <li key={i.href}>
              <Link
                href={i.href}
                className={`flex gap-3 rounded-xl p-3 transition-colors hover:bg-white/5 ${isActive(i.href) ? "bg-white/5" : ""}`}
              >
                {i.icon && (
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(75,137,243,0.14)] text-[var(--cyan)]">
                    <Icon name={i.icon} size={16} />
                  </span>
                )}
                <span>
                  <span className="block text-[15px] font-semibold text-white">{i.label}</span>
                  <span className="block text-[13px] leading-snug text-[var(--text-subtle)]">{i.desc}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const services = industry.services.map((s) => ({
    label: s.navLabel,
    href: `/services/${s.slug}`,
    desc: s.navDesc,
    icon: serviceIcon[s.slug],
  }));

  const linkCls = (href: string) =>
    `whitespace-nowrap py-2 text-[14px] font-medium transition-colors xl:text-[15px] ${isActive(href) ? "text-white" : "text-[var(--text-muted)] hover:text-white"}`;

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        background: solid ? "rgba(19,22,32,0.96)" : "transparent",
        backdropFilter: solid ? "blur(12px)" : "none",
        borderBottom: solid ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 btn btn-primary btn-sm">
        Skip to content
      </a>
      <div className="mx-auto flex h-[var(--nav-h)] max-w-[1240px] items-center justify-between gap-3 px-[var(--gutter)]">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={`${site.brandName} home`}>
          <Image src={site.logo.mark} alt="" width={41} height={24} priority className="h-6 w-auto" />
          <span className="font-display font-extrabold text-[16px] tracking-tight text-white sm:text-[17px]">
            {site.brandName}
          </span>
        </Link>

        {/* Desktop */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-3.5 xl:gap-6">
          {dropdown("services", "Services", services, true)}
          {pageLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkCls(l.href)}>
              {l.label}
            </Link>
          ))}
          {dropdown("resources", "Resources", resources)}
          {tailLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkCls(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone.tel}`}
            className="hidden h-10 items-center gap-2 rounded-[10px] px-2 text-[15px] font-semibold text-white hover:text-[var(--green-light)] sm:inline-flex xl:px-3"
            aria-label={`Call ${site.phone.display}`}
          >
            <Icon name="phone" size={18} />
            <span className="hidden whitespace-nowrap lg:inline">{site.phone.display}</span>
          </a>
          <Link href={site.primaryCta.href} className="btn btn-primary btn-sm whitespace-nowrap">
            {site.primaryCta.shortLabel}
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-white hover:bg-white/5"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="lg:hidden h-[calc(100dvh-var(--nav-h))] overflow-y-auto border-t border-[var(--line)] bg-[var(--bg)] px-[var(--gutter)] pb-10 pt-4"
        >
          <p className="eyebrow !mb-2">Services</p>
          <ul className="flex flex-col">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="flex items-center gap-3 py-3 text-[17px] font-semibold text-white">
                  <span className="text-[var(--cyan)]"><Icon name={s.icon} size={18} /></span>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="my-4 h-px bg-[var(--line)]" />
          <ul className="flex flex-col">
            {[...pageLinks, ...resources, ...tailLinks].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-3 text-[17px] font-semibold text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Link href={site.primaryCta.href} className="btn btn-primary w-full">
              {site.primaryCta.label}
            </Link>
            <a href={`tel:${site.phone.tel}`} className="btn btn-outline w-full">
              <Icon name="phone" size={18} /> Call {site.phone.display}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
