import Link from "next/link";
import { site } from "@/content";
import Icon from "./Icon";

/** Sticky bottom bar on phones: tap-to-call plus the free audit. */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-[var(--line)] bg-[rgba(13,16,26,0.96)] p-2 backdrop-blur md:hidden">
      <a href={`tel:${site.phone.tel}`} className="btn btn-outline btn-sm !min-h-[46px]">
        <Icon name="phone" size={16} /> Call
      </a>
      <Link href={site.primaryCta.href} className="btn btn-primary btn-sm !min-h-[46px]">
        {site.primaryCta.shortLabel}
      </Link>
    </div>
  );
}
