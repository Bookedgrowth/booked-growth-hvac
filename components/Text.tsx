import { Fragment, type ElementType } from "react";

/**
 * Renders a headline string where **double asterisks** mark the gradient words.
 * This is the signature headline device: white text, 1 or 2 words in the gradient.
 */
export function Headline({
  text,
  as: Tag = "h2",
  className = "h2",
  id,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  id?: string;
}) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <Tag className={className} id={id}>
      {parts.map((part, i) =>
        part.startsWith("**") ? (
          <span key={i} className="gradient-text">
            {part.slice(2, -2)}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </Tag>
  );
}

/** Renders a body string, turning [label](url) into links. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        const external = m[2].startsWith("http");
        return (
          <a
            key={i}
            href={m[2]}
            className="link"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {m[1]}
          </a>
        );
      })}
    </>
  );
}
