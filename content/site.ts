/**
 * Site-wide values that do NOT change by industry.
 * Industry copy lives in content/industries/<industry>.ts.
 */

export const site = {
  brandName: "Booked Growth",
  // TODO(stefano): confirm the exact registered legal name for A2P (must match your EIN/business registration).
  legalName: "Booked Growth LLC",

  // TODO(stefano): confirm the final production domain for this version of the site.
  url: "https://bookedgrowth.net",

  // Keep false until launch is approved. Adds noindex to every page and blocks crawlers in robots.txt.
  indexing: false,

  colors: {
    bg: "#131620",
    bgDeep: "#0d101a",
    blueDeep: "#1845a9",
    blueMid: "#245e89",
    blueBright: "#4b89f3",
    cyan: "#31cff9",
    green: "#07c98f",
    greenLight: "#92f18f",
  },

  phone: {
    display: "+1 (786) 833-7314",
    tel: "+17868337314",
  },

  email: "sbranca@bookedgrowth.net",

  location: {
    // TODO(stefano): add a street address only if you want it public (needed for some citations, not for A2P).
    city: "Miami",
    region: "FL",
    country: "US",
    serviceArea: "South Florida",
    areaServedSchema: ["Miami-Dade County, FL", "Broward County, FL", "Palm Beach County, FL"],
  },

  // TODO(stefano): add your real profile URLs. Empty entries are skipped everywhere.
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    youtube: "",
  },

  founder: {
    name: "Stefano Branca",
    role: "Founder",
    headshot: "/brand/stefano.png",
  },

  logo: {
    mark: "/brand/logo-mark.png",
    // Plain string URL for schema (never an ImageObject).
    schemaUrl: "https://bookedgrowth.net/brand/logo-mark.png",
  },

  calcom: {
    namespace: "free-online-audit-call",
    calLink: "bookedgrowth/free-online-audit-call",
  },

  forms: {
    // Same Formspree endpoint as the live site. Leads are tagged with lead_source so you can tell them apart.
    // TODO(stefano): point this at a GHL form/webhook when the GHL rebuild starts.
    formspreeUrl: "https://formspree.io/f/mnjokyvy",
  },

  // TODO(stefano): paste the GA4 measurement ID (G-XXXXXXX). GA4 does not load while this is empty.
  ga4MeasurementId: "",

  primaryCta: {
    label: "Get Your Free Online Audit",
    shortLabel: "Free Audit",
    href: "/contact",
  },

  // Guarantee headlines. Use exactly as written. No conditions or fine print on the site.
  guarantees: {
    websiteDesign: {
      service: "Website Design",
      headline: "Live in 30 days, or your next month is free.",
    },
    googleBusinessProfile: {
      service: "Google Business Profile",
      headline: "Included, free. The foundation everything else builds on.",
    },
    paidAds: {
      service: "Paid Ads",
      headline: "We don't stop working until you see real growth.",
    },
  },

  samplesBaseUrl: "https://samples.bookedgrowth.net",

  // Home page sections that stay hidden until there is something real to show.
  // Testimonials: only real quotes, with written permission. Data lives in the industry file.
  showTestimonials: false,
  // TODO(stefano): set the number of founding partner spots and the terms before turning this on.
  showFoundingPartner: false,

  // Real credentials only. Shown on About and in the home trust row.
  // TODO(stefano): confirm the exact certification name and add others as you earn them.
  credentials: [{ name: "Google Ads Search Certified", issuer: "Google" }],
} as const;

export type GuaranteeKey = keyof typeof site.guarantees;

export const socialLinks = Object.entries(site.social)
  .filter(([, url]) => Boolean(url))
  .map(([name, url]) => ({ name, url }));
