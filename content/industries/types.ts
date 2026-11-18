/**
 * Shape every industry file must follow. A new industry (for example therapy.ts)
 * fills in this same shape and the components render it with no changes.
 *
 * Headline strings use **double asterisks** around the 1 or 2 words that get the
 * blue-to-green gradient. Example: "Great Techs. **Empty Schedule.**"
 */

import type { GuaranteeKey } from "../site";

export type ServiceSlug =
  | "paid-ads"
  | "website-design"
  | "google-business-profile"
  | "seo"
  | "ai-search-visibility"
  | "social-media";

export type PageMeta = { title: string; description: string };

export type Stat = {
  id: string;
  text: string;
  sourceLabel: string;
  url: string;
};

export type TitledText = { title: string; body: string };

export type ContentBlock = {
  eyebrow?: string;
  h2: string;
  body: string[];
  bullets?: TitledText[];
  statIds?: string[];
};

export type ServiceContent = {
  slug: ServiceSlug;
  navLabel: string;
  navDesc: string;
  cardTitle: string;
  cardBlurb: string;
  featured?: boolean;
  schemaServiceType: string;
  schemaDescription: string;
  meta: PageMeta;
  breadcrumbName: string;
  hero: { eyebrow: string; h1: string; sub: string };
  problem: ContentBlock;
  deliverables: { h2: string; intro?: string; items: TitledText[] };
  extraSections?: ContentBlock[];
  steps: { h2: string; items: TitledText[] };
  samplesBlock?: { h2: string; body: string; ctaLabel: string };
  guarantee?: GuaranteeKey;
  related: ServiceSlug[];
  blogSlugs: string[];
};

export type FaqCategory =
  | "General"
  | "Working With Us"
  | "Paid Ads"
  | "Websites"
  | "Google Business Profile"
  | "SEO"
  | "AI Search"
  | "Social Media";

export type FaqItem = {
  id: string;
  question: string;
  /** First entry is the 1 to 2 sentence direct answer. Later entries add detail. */
  answer: string[];
  category: FaqCategory;
  services?: ServiceSlug[];
  /** Set when the answer still needs Stefano's wording. */
  todo?: string;
};

export type FormField =
  | {
      kind: "text" | "email" | "tel" | "url";
      name: string;
      label: string;
      placeholder?: string;
      required?: boolean;
      autoComplete?: string;
      /** Spans both columns on wider screens. */
      wide?: boolean;
    }
  | {
      kind: "select";
      name: string;
      label: string;
      placeholder: string;
      options: string[];
      required?: boolean;
    }
  | {
      kind: "checkboxes";
      name: string;
      label: string;
      options: string[];
      required?: boolean;
    };

/** Home hero calendar (styled like a calendar app). Home page only. */
export type HeroCalendar = {
  ariaLabel: string;
  appName: string;
  todayLabel: string;
  month: string;
  days: { label: string; date: string }[];
  todayIndex: number;
  rows: string[];
  /** col and row are 1-based. The first `alreadyBooked` jobs show from the start. */
  jobs: { col: number; row: number; title: string; time: string }[];
  alreadyBooked: number;
  bookedColor: string;
  perStage: number;
  stages: { caption: string; color: string }[];
  counterLabel: string; // "{n} of {total} booked"
  fullLabel: string;
};

export type Testimonial = {
  quote: string;
  firstName: string;
  businessType: string;
  city: string;
};

export type SampleSite = {
  slug: string;
  name: string;
  style: string;
  live: boolean;
};

export type IndustryContent = {
  key: string;
  audience: {
    singular: string; // "HVAC company"
    plural: string; // "HVAC and plumbing companies"
    customer: string; // "homeowner"
    customers: string; // "homeowners"
  };
  positioning: string;
  footerServing: string;
  organizationDescription: string;

  stats: Stat[];
  services: ServiceContent[];

  home: {
    meta: PageMeta;
    hero: {
      eyebrow: string;
      h1Options: { A: string; B: string };
      activeH1: "A" | "B";
      sub: string;
      primaryCta: string;
      secondaryCta: { label: string; href: string };
      photo: { src: string; width: number; height: number; alt: string };
      calendar: HeroCalendar;
    };
    problem: ContentBlock;
    whereFound: {
      h2: string;
      intro: string;
      businessName: string;
      winLabel: string;
      cards: { kind: "maps" | "lsa" | "searchAd" | "organic" | "reviews"; label: string; winner: string; href: string }[];
    };
    servicesGrid: {
      h2: string;
      intro: string;
      /** Home-only card copy. Keyed by service slug; falls back to the shared cardBlurb. */
      cardBlurbs?: Record<string, string>;
      /** Home-only flagship card points; falls back to the paid ads page bullets. */
      flagshipPoints?: TitledText[];
    };
    process: {
      h2: string;
      steps: TitledText[];
      linkLabel: string;
      board: {
        ariaLabel: string;
        before: { label: string; caption: string };
        after: { label: string; caption: string };
        days: string[];
        beforeCount: number;
        jobs: { day: number; slot: number; label: string }[];
      };
    };
    builtToPerform: { h2: string; intro: string; items: TitledText[] };
    sampleAudit: {
      h2: string;
      intro: string;
      label: string;
      company: string;
      companyNote: string;
      findings: { severity: "High" | "Medium" | "Low"; title: string; fix: string }[];
    };
    testimonials: { h2: string; items: Testimonial[] };
    foundingPartner: { eyebrow: string; h2: string; body: string };
    guarantees: { h2: string; intro: string };
    founder: { eyebrow: string; h2: string; line: string; founderLine: string; linkLabel: string };
    /** Home-only blog strip. Shows the 3 newest posts automatically; hidden when there are none. */
    playbook: { eyebrow: string; h2: string; intro: string; linkLabel: string; cardCta: string; count: number };
    closing: { h2: string; body: string };
  };

  howItWorks: {
    meta: PageMeta;
    hero: { eyebrow: string; h1: string; sub: string };
    phases: { label: string; timing: string; title: string; body: string; checklist: string[] }[];
    reporting: { h2: string; body: string; metrics: TitledText[] };
    noSurprises: { h2: string; items: string[] };
  };

  about: {
    meta: PageMeta;
    eyebrow: string;
    h1: string;
    sub: string;
    why: { eyebrow: string; h2: string; body: string[] };
    principles: { h2: string; items: { icon: string; title: string; body: string }[] };
    whyOnly: { h2: string; body: string[] };
    howWeWork: { h2: string; steps: TitledText[]; linkLabel: string };
    founder: { title: string; quote: string; note: string };
  };

  samples: {
    meta: PageMeta;
    h1: string;
    intro: string;
    disclaimer: string;
    category: string; // URL segment on samples.bookedgrowth.net
    sites: SampleSite[];
  };

  faqPage: {
    meta: PageMeta;
    eyebrow: string;
    h1: string;
    intro: string;
    pricingAnswer: string;
  };

  blog: {
    meta: PageMeta;
    h1: string;
    intro: string;
    categories: string[];
    signup: { h2: string; body: string; buttonLabel: string; placeholderNote: string };
    authorLine: string;
    ctaBox: { h3: string; body: string };
  };

  contact: {
    meta: PageMeta;
    eyebrow: string;
    h1: string;
    sub: string;
    formTitle: string;
    formNote: string;
    calTitle: string;
    calNote: string;
    reassurance: string;
    submitLabel: string;
    successTitle: string;
    successBody: string;
    leadSource: string;
    fields: FormField[];
  };

  closingCta: { h2: string; body: string };
  seeAllFaqLabel: string;
};
