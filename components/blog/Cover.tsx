import Image from "next/image";
import type { PostMeta } from "@/lib/blog-utils";
import Icon from "../Icon";

const catIcon: Record<string, string> = {
  "Google Ads": "ads",
  "Local SEO": "search",
  Websites: "monitor",
  Reviews: "star",
  "AI Search": "sparkle",
};

/** Uses the post's cover image if set; otherwise a branded placeholder. */
export default function Cover({ post, className = "" }: { post: PostMeta; className?: string }) {
  if (post.cover) {
    return (
      <div className={`relative aspect-[16/9] ${className}`}>
        <Image src={post.cover} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[16/9] overflow-hidden ${className}`}
      style={{ background: "radial-gradient(circle at 70% 30%, rgba(49,207,249,0.25), transparent 55%), radial-gradient(circle at 20% 90%, rgba(7,201,143,0.2), transparent 55%), #171b28" }}
    >
      <span className="absolute inset-0 flex items-center justify-center text-white/70">
        <Icon name={catIcon[post.category] ?? "chart"} size={56} strokeWidth={1.4} />
      </span>
    </div>
  );
}
