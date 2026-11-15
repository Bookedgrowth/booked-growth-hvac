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
      "The way homeowners search for a plumber is a lot like how they search for AC repair: it's urgent, it's local and they call the first company they trust. The same playbook works for both.",
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
      "A two-truck shop in one city needs something different than an eight-truck company in three counties. On the audit we look at where you are today and give you a clear plan before you commit to anything.",
    ],
  },

  /* Working With Us */
  {
    id: "need-from-me",
    category: "Working With Us",
    services: ["website-design", "social-media"],
    question: "What do you need from me to start?",
    answer: [
      "About an hour of your time and a few items in the first week: your logo, photos, service list, service area and access to your Google profile and any ad accounts.",
      "If you send everything within a week, we can have your new site live in 30 days. We'll give you a simple checklist so nothing gets missed.",
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
      "We'll walk through the terms for each service on your free audit call, before you sign anything.",
    ],
  },
  {
    id: "tracking",
    category: "Working With Us",
    services: ["paid-ads", "seo"],
    question: "How do you track results?",
    answer: [
      "We track calls, form leads and booked jobs, and we tie each one back to where it came from.",
      "Every ad and channel gets its own tracking number, and forms are tagged by source. Each month you get a plain-English report showing calls, booked jobs, cost per lead and cost per booked job.",
    ],
  },
  {
    id: "who",
    category: "Working With Us",
    question: "Who will I work with day to day?",
    answer: [
      "You work with me, Stefano, the founder. There are no account-manager hand-offs.",
      "I do your audit, build your plan and do the work. You get my direct number and email.",
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
      "The first month is about learning which searches and areas book the best jobs. Results usually get better in months two and three as we cut what doesn't work and push what does.",
    ],
  },
  {
    id: "website-before-ads",
    category: "Paid Ads",
    services: ["paid-ads", "website-design"],
    question: "Do I need a new website before running ads?",
    answer: [
      "Not always, but your site has to load fast on a phone and make it easy to call. If it doesn't, ads will waste money.",
      "On the free audit we check your current site. If it's good enough, we start ads. If not, we fix the site first, then turn on ads. Local Services Ads don't send people to your website at all, so they can sometimes start sooner.",
    ],
  },
  {
    id: "what-are-lsa",
    category: "Paid Ads",
    services: ["paid-ads", "google-business-profile"],
    question: "What are Local Services Ads?",
    answer: [
      "Local Services Ads are the ads at the very top of Google with a 'Google Guaranteed' or 'Google Screened' badge. You pay per lead, not per click.",
      "Google checks your business license and insurance before you can run them. Your reviews and how fast you answer leads help decide how often you show up. Recent data shows HVAC LSA leads averaged about $51 each in Feb 2026, with 44% booking a job ([SearchLight via Enrich Labs](https://www.enrichlabs.ai/blog/hvac-marketing-complete-guide-2026)).",
    ],
  },
  {
    id: "meta-ads",
    category: "Paid Ads",
    services: ["social-media"],
    question: "Do Facebook and Instagram ads work for HVAC?",
    answer: [
      "Yes, but they work differently than Google ads. People on Facebook aren't searching for AC repair, so Meta ads are best for building demand.",
      "We use them for tune-up offers, maintenance plans and replacement promos, and to keep your name familiar so homeowners think of you first when something breaks.",
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
      "That timeline starts once we have what we need from you, which usually takes about a week. Then we build in weeks two and three and launch in week four.",
    ],
  },

  /* Google Business Profile */
  {
    id: "why-gbp",
    category: "Google Business Profile",
    services: ["google-business-profile", "seo"],
    question: "Why does my Google Business Profile matter so much?",
    answer: [
      "Your Google Business Profile is what shows up on Google Maps and in the top three map results. For 'near me' searches, it's often the first thing a homeowner sees.",
      "It also feeds your reviews into Local Services Ads and gives AI tools facts about your business. That's why it's the foundation everything else builds on.",
    ],
  },
  {
    id: "reviews",
    category: "Google Business Profile",
    services: ["google-business-profile"],
    question: "How do I get more Google reviews?",
    answer: [
      "Ask every happy customer, right after the job, with a direct link that takes one tap.",
      "We set up a simple text or email request your techs can send from the driveway. Never buy reviews or offer rewards for them. Google can remove reviews and limit your profile if you do.",
    ],
  },
  {
    id: "gbp-free",
    category: "Google Business Profile",
    services: ["google-business-profile"],
    question: "Why is the Google Business Profile included free?",
    answer: [
      "Because every other service works better when your profile is strong, so we include it free.",
      "Ads, SEO and AI search all lean on your Google profile and reviews. Starting there makes everything else cost less and work faster.",
    ],
  },

  /* SEO */
  {
    id: "seo-timeline",
    category: "SEO",
    services: ["seo"],
    question: "How long does local SEO take to work?",
    answer: [
      "SEO takes months, not weeks. Busy cities and tough services take longer than quiet ones.",
      "SEO builds over time. Ads bring calls now; SEO lowers what you pay for calls later. Many companies run both.",
    ],
  },
  {
    id: "city-pages",
    category: "SEO",
    services: ["seo", "website-design"],
    question: "Why do I need a page for each service and city?",
    answer: [
      "Google ranks pages, not companies. One page can't rank for 'AC repair in Hialeah' and 'water heater install in Doral' at the same time.",
      "A clear page for each service and each area tells Google exactly what you do and where. Each page needs real, useful info, not the same text with a new city name.",
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
      "These tools pull from your website, your Google profile, reviews and other sites. We make sure the facts about your company are clear, matching and easy for them to find.",
    ],
  },
  {
    id: "chatgpt-recommend",
    category: "AI Search",
    services: ["ai-search-visibility"],
    question: "Can ChatGPT really recommend my HVAC company?",
    answer: [
      "Yes. When ChatGPT searches the web, it can name local companies and link to them.",
      "It tends to name companies with clear websites, consistent listings and strong reviews. No one can promise a spot in an AI answer, but you can make your company much easier to pick.",
    ],
  },
  {
    id: "ai-vs-google",
    category: "AI Search",
    services: ["ai-search-visibility", "seo"],
    question: "Is AI search replacing Google?",
    answer: [
      "Not yet. Most homeowners still use Google, but Google now shows AI answers on many searches and more people try ChatGPT first.",
      "The good news: the same things that help you rank on Google, like a strong site and Google profile, also help you show up in AI answers.",
    ],
  },
  {
    id: "ai-check",
    category: "AI Search",
    services: ["ai-search-visibility"],
    question: "How do you check if AI tools mention my company?",
    answer: [
      "We ask AI tools the same questions your customers ask, several times each, and track how often your company shows up.",
      "AI answers change from one try to the next, so one test isn't enough. We track your mention rate month over month and compare it to your competitors.",
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
      "A page with recent posts tells people you're real and still in business. It also makes your Meta ads look more trustworthy.",
    ],
  },
  {
    id: "what-post",
    category: "Social Media",
    services: ["social-media"],
    question: "What do you post for an HVAC company?",
    answer: [
      "Real jobs, real techs and useful tips. Before-and-after photos, team intros, seasonal reminders and offers.",
      "Simple tips work well, like when to change your filter or what to do if the AC stops at night. They help homeowners and show you know your stuff.",
    ],
  },
  {
    id: "how-often",
    category: "Social Media",
    services: ["social-media"],
    question: "How often will you post?",
    answer: [
      "A few times a week is enough for most HVAC companies. Steady beats busy.",
      // TODO(stefano): confirm the posting frequency you want to offer.
      "We plan the month ahead around your season and offers, and you just send photos from the field.",
    ],
  },
];
