"use client";

/*
 * Copied from the live site's AuditForm (Formspree POST, honeypot, success state,
 * GA4 generate_lead event). Changes: fields now come from the industry config,
 * a checkbox group type was added, and leads are tagged with lead_source.
 */

import { useState } from "react";
import { industry, site } from "@/content";
import type { FormField } from "@/content";
import { sendEvent } from "./Analytics";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: "10px",
  padding: "12px 16px",
  color: "#fff",
  fontSize: "16px",
  minHeight: "48px",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: 600,
  color: "var(--text-muted)",
  marginBottom: "8px",
};

const c = industry.contact;

type Values = Record<string, string | string[]>;

const initial = (): Values =>
  Object.fromEntries(c.fields.map((f) => [f.name, f.kind === "checkboxes" ? [] : ""]));

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<Values>(initial);

  const set = (name: string, value: string | string[]) => setForm((prev) => ({ ...prev, [name]: value }));

  const toggle = (name: string, option: string) => {
    const current = (form[name] as string[]) ?? [];
    set(name, current.includes(option) ? current.filter((o) => o !== option) : [...current, option]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const missingGroup = c.fields.find(
      (f) => f.kind === "checkboxes" && f.required && (form[f.name] as string[]).length === 0,
    );
    if (missingGroup) {
      setError(`Please choose at least one option under "${missingGroup.label}".`);
      return;
    }

    setLoading(true);
    const honeypot = (e.currentTarget.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value;
    const payload = Object.fromEntries(
      Object.entries(form).map(([k, v]) => [k, Array.isArray(v) ? v.join(", ") : v]),
    );

    try {
      const res = await fetch(site.forms.formspreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...payload, lead_source: c.leadSource, _gotcha: honeypot ?? "" }),
      });

      if (res.ok) {
        sendEvent("generate_lead");
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const focusBorder = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "#4b89f3";
  };
  const blurBorder = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(255,255,255,0.16)";
  };

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        role="status"
        style={{ border: "1px solid rgba(75,137,243,0.3)", background: "rgba(75,137,243,0.06)" }}
      >
        <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: "#07c98f" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#131620" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-xl mb-3">{c.successTitle}</h3>
        <p className="muted" style={{ lineHeight: "1.75", fontSize: "16px" }}>
          {c.successBody}
        </p>
      </div>
    );
  }

  const req = <span style={{ color: "#4b89f3" }} aria-hidden="true"> *</span>;

  const renderField = (f: FormField) => {
    const id = `f-${f.name}`;
    if (f.kind === "checkboxes") {
      return (
        <fieldset key={f.name} className="sm:col-span-2">
          <legend style={labelStyle}>
            {f.label}
            {f.required && req}
          </legend>
          <div className="flex flex-wrap gap-3">
            {f.options.map((o) => {
              const checked = (form[f.name] as string[]).includes(o);
              return (
                <label
                  key={o}
                  className="inline-flex cursor-pointer items-center gap-2.5 rounded-[10px] px-4 min-h-[48px] text-[15px] text-white"
                  style={{
                    border: `1px solid ${checked ? "#4b89f3" : "rgba(255,255,255,0.16)"}`,
                    background: checked ? "rgba(75,137,243,0.12)" : "rgba(255,255,255,0.05)",
                  }}
                >
                  <input
                    type="checkbox"
                    name={f.name}
                    value={o}
                    checked={checked}
                    onChange={() => toggle(f.name, o)}
                    className="h-4 w-4 accent-[#07c98f]"
                  />
                  {o}
                </label>
              );
            })}
          </div>
        </fieldset>
      );
    }
    if (f.kind === "select") {
      const value = form[f.name] as string;
      return (
        <div key={f.name}>
          <label htmlFor={id} style={labelStyle}>
            {f.label}
            {f.required && req}
          </label>
          <div className="relative">
            <select
              id={id}
              name={f.name}
              required={f.required}
              value={value}
              onChange={(e) => set(f.name, e.target.value)}
              style={{ ...inputStyle, appearance: "none", cursor: "pointer", paddingRight: 40, color: value ? "#fff" : "var(--text-subtle)" }}
              onFocus={focusBorder}
              onBlur={blurBorder}
            >
              <option value="" disabled style={{ background: "#131620" }}>
                {f.placeholder}
              </option>
              {f.options.map((o) => (
                <option key={o} value={o} style={{ background: "#131620", color: "#fff" }}>
                  {o}
                </option>
              ))}
            </select>
            <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-subtle)]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      );
    }
    return (
      <div key={f.name} className={f.wide ? "sm:col-span-2" : undefined}>
        <label htmlFor={id} style={labelStyle}>
          {f.label}
          {f.required && req}
        </label>
        <input
          id={id}
          name={f.name}
          type={f.kind === "url" ? "text" : f.kind}
          inputMode={f.kind === "url" ? "url" : undefined}
          required={f.required}
          autoComplete={f.autoComplete}
          value={form[f.name] as string}
          onChange={(e) => set(f.name, e.target.value)}
          placeholder={f.placeholder}
          style={inputStyle}
          onFocus={focusBorder}
          onBlur={blurBorder}
        />
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      {/* Honeypot */}
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-5">{c.fields.map(renderField)}</div>

      {error && (
        <p className="text-sm" role="alert" style={{ color: "#fca5a5" }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-full py-4 text-base"
        style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "wait" : "pointer" }}
      >
        {loading ? "Submitting..." : c.submitLabel}
      </button>
    </form>
  );
}
