/**
 * Single source for every HVAC FAQ. Shown in full on /faq (with FAQPage JSON-LD)
 * and filtered by `services` on each service page (no duplicate schema there).
 *
 * Answers are "answer-first": the first string is a 1 to 2 sentence direct answer.
 */

import type { FaqItem } from "./types";

export const hvacFaqs: FaqItem[] = [
  /* General */
  {
    id: "plumbing",
    category: "General",
    question: "Do you work with plumbing companies too?",
    answer: [
      "Yes. We work with HVAC companies, plumbing companies and shops that do both.",
      "Homeowners search for a plumber the same way they search for AC repair: the need is urgent and local, and they call the first company they trust. The same strategy works for both.",
    ],
  },
  {
    id: "areas",
    category: "General",
    question: "What areas do you serve?",
    answer: [
      "We're based in South Florida and work with HVAC and plumbing companies across Miami-Dade, Broward and Palm Beach.",
      // TODO(stefano): confirm whether you take companies outside South Florida.
      "Most of our work happens online, so we can also talk with companies outside South Florida. Ask on your free audit.",
    ],
  },
  {
    id: "cost",
    category: "General",
    question: "How much does it cost?",
    answer: [
      "Pricing depends on your goals and market; we cover it on the free audit call.",
      "A two-truck operation in one city needs a different plan than an eight-truck company covering three counties. On the audit we assess where you are today and lay out a clear plan before you commit to anything.",
    ],
  },

  /* Working With Us */
  {
    id: "need-from-me",
    category: "Working With Us",
    services: ["website-design", "social-media"],
    question: "What do you need from me to start?",
    answer: [
      "About an hour of your time and a few items in the first week: your logo, photos, service list, service area, and access to your Google Business Profile and any ad accounts.",
      "With everything in hand during the first week, your new site goes live in 30 days. We provide a checklist so nothing gets missed.",
    ],
  },
  {
    id: "ownership",
    category: "Working With Us",
    services: ["paid-ads", "website-design", "google-business-profile"],
    question: "Do I own my website and ad accounts?",
    answer: [
      "Yes. You own your website, your domain, your Google Business Profile and your ad accounts.",
      "We work inside accounts that belong to you. If you ever leave, everything stays with your business.",
    ],
  },
  {
    id: "contract",
    category: "Working With Us",
    question: "Do you lock me into a long contract?",
    todo: "Paid ads terms have a 6-month minimum. Stefano will decide how to word this answer.",
    answer: [
      // TODO(stefano): write this answer. Paid ads have a 6-month minimum; decide how to say it.
      "TODO(stefano): contract answer goes here.",
    ],
  },
  {
    id: "tracking",
    category: "Working With Us",
    services: ["paid-ads", "seo"],
    question: "How do you track results?",
    answer: [
      "We track calls, form leads and booked jobs, and we tie each one back to where it came from.",
      "Every ad and channel gets its own tracking number, and forms are tagged by source. Each month you get a clear report showing calls, booked jobs, cost per lead and cost per booked job.",
    ],
  },
  {
    id: "who",
    category: "Working With Us",
    question: "Who will I work with day to day?",
    answer: [
      "You get one dedicated point of contact who knows your account.",
      "That person knows your audit, your plan and your results, so you never have to repeat yourself or chase answers.",
    ],
  },

  /* Paid Ads */
  {
    id: "ads-timing",
    category: "Paid Ads",
    services: ["paid-ads"],
    question: "How long until I see calls from ads?",
    answer: [
      "Local Services Ads and Google Search ads can bring calls within the first few weeks after launch, once your account is approved and live.",
      "The first month is about learning which searches and areas produce the best jobs. Performance typically improves in months two and three as we cut what underperforms and scale what works.",
    ],
  },
  {
    id: "website-before-ads",
    category: "Paid Ads",
    services: ["paid-ads", "website-design"],
    question: "Do I need a new website before running ads?",
    answer: [
      "Not always, but your site needs to load fast on a phone and make calling easy. If it doesn't, ad spend gets wasted.",
      "On the free audit we evaluate your current site. If it's strong enough, we launch ads. If not, we fix the site first. Local Services Ads don't send traffic to your website at all, so they can often launch sooner.",
    ],
  },
  {
    id: "what-are-lsa",
    category: "Paid Ads",
    services: ["paid-ads", "google-business-profile"],
    question: "What are Local Services Ads?",
    answer: [
      "Local Services Ads are the ads at the very top of Google with a blue 'Google Verified' badge. You pay per lead, not per click.",
      "Google verifies your business license and insurance before you can run them. Your reviews and how quickly you respond to leads influence how often you appear. Recent data shows HVAC LSA leads averaged about $51 each in Feb 2026, with 44% booking a job ([SearchLight via Enrich Labs](https://www.enrichlabs.ai/blog/hvac-marketing-complete-guide-2026)).",
    ],
  },
  {
    id: "meta-ads",
    category: "Paid Ads",
    services: ["social-media"],
    question: "Do Facebook and Instagram ads work for HVAC?",
    answer: [
      "Yes, but they play a different role than Google ads. People on Facebook aren't searching for AC repair, so Meta ads are best for generating demand.",
      "We use them for tune-up offers, maintenance plans and replacement promotions, and to keep your brand familiar so homeowners think of you first when something breaks.",
    ],
  },

  /* Websites */
  {
    id: "website-timeline",
    category: "Websites",
    services: ["website-design"],
    question: "How long does a new website take?",
    answer: [
      "Your new site goes live within 30 days, or your next month is free.",
      "The timeline starts once we have what we need from you, which typically takes about a week. We build in weeks two and three and launch in week four.",
    ],
  },

  /* Google Business Profile */
  {
    id: "why-gbp",
    category: "Google Business Profile",
    services: ["google-business-profile", "seo"],
    question: "Why does my Google Business Profile matter so much?",
    answer: [
      "Your Google Business Profile is what appears on Google Maps and in the top three map results. For 'near me' searches, it's often the first thing a homeowner sees.",
      "It also feeds your reviews into Local Services Ads and gives AI tools verified facts about your business. That's why it's the foundation everything else builds on.",
    ],
  },
  {
    id: "reviews",
    category: "Google Business Profile",
    services: ["google-business-profile"],
    question: "How do I get more Google reviews?",
    answer: [
      "Ask every satisfied customer right after the job, with a direct one-tap link.",
      "We set up a text or email request your techs can send before they leave the driveway. Never buy reviews or offer incentives for them. Google can remove reviews and restrict your profile if you do.",
    ],
  },
  {
    id: "gbp-free",
    category: "Google Business Profile",
    services: ["google-business-profile"],
    question: "Why is the Google Business Profile included free?",
    answer: [
      "Because every other service performs better when your profile is strong.",
      "Ads, SEO and AI search all rely on your Google profile and reviews. Starting there lowers costs and accelerates results across every channel.",
    ],
  },

  /* SEO */
  {
    id: "seo-timeline",
    category: "SEO",
    services: ["seo"],
    question: "How long does local SEO take to work?",
    answer: [
      "SEO takes months, not weeks. Competitive cities and services take longer than smaller markets.",
      "SEO compounds over time. Ads generate calls now; SEO lowers your cost per call later. Many companies run both.",
    ],
  },
  {
    id: "city-pages",
    category: "SEO",
    services: ["seo", "website-design"],
    question: "Why do I need a page for each service and city?",
    answer: [
      "Google ranks pages, not companies. One page can't rank for 'AC repair in Hialeah' and 'water heater install in Doral' at the same time.",
      "A dedicated page for each service and market tells Google exactly what you do and where. Each page needs substantive, useful content, not the same text with a new city name.",
    ],
  },

  /* AI Search */
  {
    id: "what-ai-search",
    category: "AI Search",
    services: ["ai-search-visibility"],
    question: "What is AI search visibility?",
    answer: [
      "AI search visibility means showing up when people ask tools like ChatGPT, Google AI Overviews or Perplexity for a recommendation.",
      "These tools draw from your website, Google profile, reviews and third-party sites. We make sure the facts about your company are clear, consistent and easy to find.",
    ],
  },
  {
    id: "chatgpt-recommend",
    category: "AI Search",
    services: ["ai-search-visibility"],
    question: "Can ChatGPT really recommend my HVAC company?",
    answer: [
      "Yes. When ChatGPT searches the web, it can name local companies and link to them.",
      "It tends to favor companies with clear websites, consistent listings and strong reviews. No one can promise placement in an AI answer, but you can make your company a much stronger candidate.",
    ],
  },
  {
    id: "ai-vs-google",
    category: "AI Search",
    services: ["ai-search-visibility", "seo"],
    question: "Is AI search replacing Google?",
    answer: [
      "Not yet. Most homeowners still use Google, but Google now shows AI answers on many searches and more people try ChatGPT first.",
      "The upside: the same fundamentals that help you rank on Google, like a strong website and Google profile, also help you appear in AI answers.",
    ],
  },
  {
    id: "ai-check",
    category: "AI Search",
    services: ["ai-search-visibility"],
    question: "How do you check if AI tools mention my company?",
    answer: [
      "We ask AI tools the same questions your customers ask, several times each, and track how often your company shows up.",
      "AI answers vary from one query to the next, so a single test isn't reliable. We track your mention rate month over month and benchmark it against competitors.",
    ],
  },

  /* Social Media */
  {
    id: "need-social",
    category: "Social Media",
    services: ["social-media"],
    question: "Does an HVAC company really need social media?",
    answer: [
      "You don't need to go viral, but you do need active profiles. Homeowners check them before they call.",
      "Recent posts signal that you're established and still in business. They also make your Meta ads more credible.",
    ],
  },
  {
    id: "what-post",
    category: "Social Media",
    services: ["social-media"],
    question: "What do you post for an HVAC company?",
    answer: [
      "Real jobs, real techs and useful tips. Before-and-after photos, team intros, seasonal reminders and offers.",
      "Practical tips perform well, like when to change a filter or what to do if the AC stops at night. They help homeowners and demonstrate expertise.",
    ],
  },
  {
    id: "how-often",
    category: "Social Media",
    services: ["social-media"],
    question: "How often will you post?",
    answer: [
      "A few times a week is enough for most HVAC companies. Consistency matters more than volume.",
      // TODO(stefano): confirm the posting frequency you want to offer.
      "We plan each month in advance around your season and offers. Your team just sends photos from the field.",
    ],
  },
];
