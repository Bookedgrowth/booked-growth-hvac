"use client";

import { useState } from "react";
import { industry } from "@/content";
import { Headline } from "../Text";

const s = industry.blog.signup;

// TODO(stefano): connect this form to a GHL form/list. It does not send anything yet.
export default function EmailSignup() {
  const [note, setNote] = useState("");
  return (
    <div className="card gradient-border md:flex md:items-center md:justify-between md:gap-10">
      <div className="max-w-[520px]">
        <Headline text={s.h2} className="h2 !text-[28px]" />
        <p className="mt-3 muted">{s.body}</p>
      </div>
      <form
        className="mt-6 flex w-full max-w-[440px] flex-col flex-wrap gap-3 sm:flex-row md:mt-0"
        onSubmit={(e) => {
          e.preventDefault();
          setNote(s.placeholderNote);
        }}
      >
        <label htmlFor="signup-email" className="sr-only">Email address</label>
        <input
          id="signup-email"
          type="email"
          required
          placeholder="you@yourcompany.com"
          className="min-h-[48px] flex-1 rounded-[10px] border border-white/15 bg-white/5 px-4 text-white placeholder:text-[var(--text-subtle)]"
        />
        <button type="submit" className="btn btn-primary">{s.buttonLabel}</button>
        {note && <p role="status" className="text-sm text-[var(--green-light)] sm:basis-full">{note}</p>}
      </form>
    </div>
  );
}
