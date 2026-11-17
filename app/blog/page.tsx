import { industry } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/blog/PostCard";
import BlogGrid from "@/components/blog/BlogGrid";
import EmailSignup from "@/components/blog/EmailSignup";

const b = industry.blog;

export const metadata = buildMetadata({ ...b.meta, path: "/blog", ogTitle: b.h1 });

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);
  // Send only metadata (no post bodies) to the client-side filter.
  const lite = rest.map((p) => ({
    title: p.title, slug: p.slug, date: p.date, category: p.category, excerpt: p.excerpt,
    cover: p.cover, draft: p.draft, readTime: p.readTime, services: p.services,
  }));

  return (
    <>
      <PageHero h1={b.h1} sub={b.intro} crumbs={[{ name: "Blog", path: "/blog" }]} />
      <section className="section light">
        <div className="container flex flex-col gap-14">
          {featured && (
            <div>
              <h2 className="sr-only">Featured guide</h2>
              <PostCard post={featured} featured />
            </div>
          )}
          <div>
            <h2 className="h2 !text-[28px] mb-6">All guides</h2>
            <BlogGrid posts={lite} categories={b.categories} />
          </div>
          <EmailSignup />
        </div>
      </section>
    </>
  );
}
