import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { industry } from "@/content";
import { buildMetadata, ogImageUrl } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import { formatDate, getAllPosts, getPost, slugify } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBox from "@/components/blog/CtaBox";
import AuthorBox from "@/components/blog/AuthorBox";
import PostCard from "@/components/blog/PostCard";
import Icon, { serviceIcon } from "@/components/Icon";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const title = post.seoTitle ?? `${post.title} | Booked Growth`;
  return buildMetadata({ title, description: post.excerpt, path: `/blog/${slug}`, ogTitle: post.title, type: "article" });
}

const textOf = (children: React.ReactNode): string =>
  typeof children === "string" ? children : Array.isArray(children) ? children.map(textOf).join("") : "";

const mdxComponents = {
  h2: ({ children }: { children?: React.ReactNode }) => <h2 id={slugify(textOf(children))}>{children}</h2>,
  a: ({ href = "", children }: { href?: string; children?: React.ReactNode }) =>
    href.startsWith("http") ? (
      <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    ) : (
      <Link href={href}>{children}</Link>
    ),
  CtaBox,
};

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const all = getAllPosts();
  const related = [
    ...all.filter((p) => p.slug !== slug && p.category === post.category),
    ...all.filter((p) => p.slug !== slug && p.category !== post.category),
  ].slice(0, 3);
  const services = industry.services.filter((s) => post.services.includes(s.slug));
  const showToc = post.headings.length >= 4;

  return (
    <>
      <JsonLd data={articleSchema({ ...post, image: ogImageUrl(post.title) })} />
      <article className="px-[var(--gutter)] pt-[calc(var(--nav-h)+40px)] pb-[var(--section-y)]">
        <div className="container-narrow">
          <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${slug}` }]} />
          <div className="flex flex-wrap items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em]">
            <span className="text-[var(--cyan)]">{post.category}</span>
            {post.draft && <span className="rounded bg-[#fbbf24]/15 px-1.5 py-0.5 text-[#fcd34d]">Draft</span>}
          </div>
          <h1 className="h1 mt-3 !text-[clamp(32px,5vw,50px)]">{post.title}</h1>
          <p className="lead mt-5">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-[var(--line)] py-4 text-sm subtle">
            <AuthorBox compact />
            <span>
              <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime} min read
            </span>
          </div>

          {showToc && (
            <nav aria-label="Table of contents" className="card mt-8 !p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] subtle">In this guide</p>
              <ol className="mt-3 flex list-decimal flex-col gap-1.5 pl-5 text-[16px] marker:text-[var(--cyan)]">
                {post.headings.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="muted hover:text-white">{h.text}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="prose mt-10">
            <MDXRemote source={post.body} components={mdxComponents} options={{ blockJS: false, blockDangerousJS: true, mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>

          <CtaBox />

          {services.length > 0 && (
            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] subtle">Related services</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="card card-hover !p-4 flex items-center gap-3">
                      <span className="text-[var(--cyan)]"><Icon name={serviceIcon[s.slug]} size={20} /></span>
                      <span className="font-semibold text-white">{s.navLabel}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10">
            <AuthorBox />
          </div>
        </div>

        {related.length > 0 && (
          <div className="container mt-[var(--section-y)]">
            <h2 className="h2 !text-[28px] mb-6">Related posts</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => <PostCard key={p.slug} post={p} />)}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
