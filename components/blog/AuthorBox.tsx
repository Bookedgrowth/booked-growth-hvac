import Image from "next/image";
import Link from "next/link";
import { industry, site } from "@/content";

export default function AuthorBox({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-4 ${compact ? "" : "card"}`}>
      <Image
        src={site.founder.headshot}
        alt={site.founder.name}
        width={compact ? 44 : 72}
        height={compact ? 44 : 72}
        sizes={compact ? "44px" : "72px"}
        className={`${compact ? "h-11 w-11" : "h-[72px] w-[72px]"} shrink-0 rounded-full object-cover object-top`}
      />
      <div>
        <p className="font-semibold text-white">
          {compact ? "By " : ""}
          <Link href="/about" className="hover:underline underline-offset-4">{site.founder.name}</Link>
        </p>
        {!compact && <p className="mt-1 text-[15px] muted">{industry.blog.authorLine}</p>}
      </div>
    </div>
  );
}
