"use client";

import { useState } from "react";
import type { PostMeta } from "@/lib/blog-utils";
import PostCard from "./PostCard";

export default function BlogGrid({ posts, categories }: { posts: PostMeta[]; categories: string[] }) {
  const [active, setActive] = useState<string>("All");
  const shown = active === "All" ? posts : posts.filter((p) => p.category === active);
  return (
    <div>
      <div role="group" aria-label="Filter by category" className="-mx-[var(--gutter)] flex gap-2 overflow-x-auto no-scrollbar px-[var(--gutter)] md:mx-0 md:flex-wrap md:px-0">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={`min-h-[40px] shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors ${
              active === c ? "border-[var(--green)] bg-[var(--green)] text-[var(--bg)]" : "border-[var(--line-strong)] text-white/90 hover:border-white/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      {shown.length ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      ) : (
        <p className="mt-8 muted">No posts in this category yet. More are on the way.</p>
      )}
    </div>
  );
}
