import Link from "next/link";
import { site } from "@/content";
import Icon from "./Icon";

export function PrimaryCta({ label = site.primaryCta.label, className = "" }: { label?: string; className?: string }) {
  return (
    <Link href={site.primaryCta.href} className={`btn btn-primary ${className}`}>
      {label}
      <Icon name="arrow" size={18} />
    </Link>
  );
}

export function PhoneLink({ className = "", showIcon = true }: { className?: string; showIcon?: boolean }) {
  return (
    <a href={`tel:${site.phone.tel}`} className={className}>
      {showIcon && <Icon name="phone" size={16} />}
      <span>{site.phone.display}</span>
    </a>
  );
}
