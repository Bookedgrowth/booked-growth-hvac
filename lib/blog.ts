import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { slugify, type Post } from "./blog-utils";

export * from "./blog-utils";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function parse(file: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).filter(Boolean).length;
  const headings = [...content.matchAll(/^## (.+)$/gm)].map((m) => ({ text: m[1].trim(), id: slugify(m[1]) }));
  return {
    title: data.title,
    seoTitle: data.seoTitle || undefined,
    slug: data.slug ?? file.replace(/\.mdx$/, ""),
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    updated: data.updated ? String(data.updated) : undefined,
    category: data.category,
    excerpt: data.excerpt,
    cover: data.cover || undefined,
    draft: Boolean(data.draft),
    featured: Boolean(data.featured),
    services: data.services ?? [],
    readTime: Math.max(1, Math.round(words / 230)),
    body: content,
    headings,
  };
}

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(parse)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

