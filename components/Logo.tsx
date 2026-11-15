import Image from "next/image";
import Link from "next/link";
import { site } from "@/content";

// TODO(stefano): swap in your final SVG logo files in /public/brand/ if they differ from these.
export default function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={`${site.brandName} home`}>
      <Image src={site.logo.mark} alt="" width={41} height={24} priority={priority} className="h-6 w-auto" />
      <span className="font-display font-extrabold text-[17px] tracking-tight text-white">{site.brandName}</span>
    </Link>
  );
}
