/** Blog types and helpers that are safe to import in client components (no fs). */

export type PostMeta = {
  title: string;
  seoTitle?: string;
  slug: string;
  date: string;
  updated?: string;
  category: string;
  excerpt: string;
  cover?: string;
  draft?: boolean;
  featured?: boolean;
  readTime: number;
  services: string[];
};

export type Post = PostMeta & { body: string; headings: { id: string; text: string }[] };

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
