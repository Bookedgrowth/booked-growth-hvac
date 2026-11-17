import Link from "next/link";
import type { PostMeta } from "@/lib/blog-utils";
import { formatDate } from "@/lib/blog-utils";
import Cover from "./Cover";

export default function PostCard({ post, featured = false }: { post: PostMeta; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`card card-hover !p-0 overflow-hidden flex flex-col ${featured ? "md:grid md:grid-cols-2" : ""}`}
    >
      <Cover post={post} className={featured ? "md:h-full md:min-h-[320px]" : ""} />
      <div className={`flex flex-1 flex-col p-6 ${featured ? "md:p-10 md:justify-center" : ""}`}>
        <div className="flex flex-wrap items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em]">
          <span className="text-[var(--cyan)]">{post.category}</span>
          {post.draft && <span className="tag-draft rounded px-1.5 py-0.5">Draft</span>}
        </div>
        <h3 className={`mt-3 font-display font-extrabold leading-tight text-white ${featured ? "text-[clamp(24px,3vw,34px)]" : "text-[21px]"}`}>
          {post.title}
        </h3>
        <p className="mt-3 muted">{post.excerpt}</p>
        <p className="mt-auto pt-5 text-sm subtle">
          {formatDate(post.date)} · {post.readTime} min read
        </p>
      </div>
    </Link>
  );
}
