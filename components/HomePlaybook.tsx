/**
 * Home-only blog strip ("From the Playbook"). Pulls the newest posts from content/blog
 * through the same loader the /blog index uses, so new posts appear here automatically.
 * Hidden when there are no posts.
 */

import Image from "next/image";
import Link from "next/link";
import { industry } from "@/content";
import { getAllPosts, type PostMeta } from "@/lib/blog";
import { Headline } from "./Text";
import Icon from "./Icon";

const pb = industry.home.playbook;

function CardCover({ post }: { post: PostMeta }) {
  if (post.cover) {
    return (
      <div className="relative aspect-[5/2]">
        <Image src={post.cover} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      </div>
    );
  }
  // Branded placeholder, never a stock photo.
  return (
    <div
      className="relative flex aspect-[5/2] items-end px-[18px] py-4"
      style={{ background: "linear-gradient(135deg, #131620 0%, #1c2440 55%, #1845a9 140%)" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 80% at 90% 10%, rgba(7,201,143,0.28), transparent 70%)" }}
      />
      <span className="on-color relative inline-flex items-center rounded-full bg-white/[0.12] px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.04em]">
        {post.category}
      </span>
    </div>
  );
}

export default function HomePlaybook() {
  const posts = getAllPosts().slice(0, pb.count);
  if (posts.length === 0) return null;

  return (
    <section className="section light section-alt" aria-labelledby="playbook">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[760px]">
            <span className="eyebrow">{pb.eyebrow}</span>
            <Headline text={pb.h2} id="playbook" />
            <p className="lead mt-5">{pb.intro}</p>
          </div>
          <Link href="/blog" className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-[var(--cyan)] hover:text-white">
            {pb.linkLabel} <Icon name="arrow" size={16} />
          </Link>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug} className="flex">
              <Link href={`/blog/${post.slug}`} className="card card-hover !p-0 !bg-white flex w-full flex-col overflow-hidden !shadow-[0_1px_2px_rgba(19,22,32,0.04),0_12px_32px_rgba(19,22,32,0.08)]">
                <CardCover post={post} />
                <div className="flex flex-1 flex-col px-[22px] pt-[22px] pb-6">
                  <span className="flex items-center gap-2 text-[13px] subtle">
                    <span>{post.readTime} min read</span>
                    {post.draft && (
                      <>
                        <span aria-hidden="true">&middot;</span>
                        <span className="tag-draft rounded-md px-[7px] py-px text-[11px] font-bold">Draft</span>
                      </>
                    )}
                  </span>
                  <h3 className="mt-2.5 font-display text-[19px] font-bold leading-[1.3]">{post.title}</h3>
                  <p className="mt-2.5 line-clamp-2 text-[15px] leading-[1.55] muted">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-[18px] text-[15px] font-semibold text-[var(--cyan)]">
                    {pb.cardCta} <Icon name="arrow" size={16} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
