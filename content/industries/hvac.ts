/**
 * HVAC and plumbing copy. Every industry-specific word on the site lives here
 * (plus hvac-faq.ts for questions and content/blog for posts).
 *
 * Rules: no em dashes, no pricing, no testimonials or client names, no stats
 * without a source in `stats`. Voice: clear and professional, written for owners
 * running multi-truck, multi-million-dollar operations. Plain, never dumbed down.
 * **Double asterisks** mark the gradient words in a headline.
 */

import type { IndustryContent } from "./types";
import { hvacFaqs } from "./hvac-faq";

export { hvacFaqs };

export const hvac: IndustryContent = {
  key: "hvac",
  audience: {
    singular: "HVAC company",
    plural: "HVAC and plumbing companies",
    customer: "homeowner",
    customers: "homeowners",
  },
  positioning:
    "Websites, Google profiles and ads that turn local searches into booked HVAC and plumbing jobs.",
  footerServing: "Serving HVAC and plumbing companies across South Florida",
  organizationDescription:
    "Booked Growth is a South Florida marketing agency for HVAC and plumbing companies. We build websites, Google Business Profiles, local SEO, AI search visibility and paid ads (Google Ads, Local Services Ads and Meta) that turn local searches into booked jobs.",

  stats: [
    {
      id: "unanswered-calls",
      text: "More than 1 in 4 calls to HVAC businesses goes unanswered.",
      sourceLabel: "WhatConverts",
      url: "https://www.whatconverts.com/?p=35621",
    },
    {
      id: "lsa-cost",
      text: "Google Local Services Ads averaged about $51 per HVAC lead in Feb 2026, and 44% of those leads booked a job.",
      sourceLabel: "SearchLight via Enrich Labs",
      url: "https://www.enrichlabs.ai/blog/hvac-marketing-complete-guide-2026",
    },
    {
      id: "search-cost",
      text: "Non-branded Google Search ads averaged about $149 per HVAC lead in Jan 2026.",
      sourceLabel: "SearchLight via Enrich Labs",
      url: "https://www.enrichlabs.ai/blog/hvac-marketing-complete-guide-2026",
    },
    {
      id: "marketing-share",
      text: "The average HVAC contractor puts about 6% of revenue into marketing.",
      sourceLabel: "Contracting Business",
      url: "https://contractingbusiness.com/industry-news/news/55336587/hvac-study-reveals-key-drivers-of-contractor-profitability-and-growth",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Services (order = order in grids and menus; paid ads first)          */
  /* ------------------------------------------------------------------ */
  services: [
    {
      slug: "paid-ads",
      featured: true,
      navLabel: "Google Ads, LSAs & Meta",
      navDesc: "Win the call the moment homeowners search",
      cardTitle: "Google & Meta Ads",
      cardBlurb: "Capture high-intent demand the moment homeowners search, with every campaign tracked to cost per booked job.",
      schemaServiceType: "HVAC pay-per-click advertising",
      schemaDescription:
        "Google Search ads, Google Local Services Ads and Meta ads for HVAC and plumbing companies, tracked to cost per booked job.",
      breadcrumbName: "Paid Ads",
      meta: {
        title: "HVAC Google Ads, LSAs and Meta Ads | Booked Growth",
        description:
          "HVAC Google Ads, Local Services Ads and Meta ads built to book jobs, not clicks. Every campaign is tracked to cost per booked job and tuned to the season.",
      },
      hero: {
        eyebrow: "HVAC Google Ads, LSAs & Meta Ads",
        h1: "Get the Call Before **Your Competitor Does.**",
        sub: "When a homeowner's AC fails, the decision happens in minutes: search, tap, call. We put your company at the top of that search and attribute every call to the campaign that produced it.",
      },
      problem: {
        h2: "Ads That Get Clicks Are Easy. **Ads That Book Jobs** Are Not.",
        body: [
          "Most HVAC owners have run ads before. The clicks came in and the invoices came in, but the booked jobs were hard to pin down.",
          "That's what spend without a strategy looks like: ads triggered by the wrong searches, traffic sent to pages that load slowly on a phone, and no one tracking which calls became revenue.",
          "We build the strategy first, then scale the spend.",
        ],
      },
      extraSections: [
        {
          eyebrow: "Three channels, three roles",
          h2: "Where Your Ads **Show Up.**",
          body: [
            "Three ad platforms matter for HVAC and plumbing. Each one reaches homeowners at a different point in the buying decision.",
          ],
          bullets: [
            {
              title: "Google Local Services Ads (LSAs)",
              body: "The listings at the very top of Google with the blue 'Google Verified' check mark. You pay per lead, not per click. Google verifies your license and insurance up front, and your reviews and responsiveness influence your placement.",
            },
            {
              title: "Google Search ads",
              body: "The text ads directly below the LSAs. We target the searches that produce jobs, such as 'AC repair near me' or 'water heater installation,' write the ads and send traffic to a page built to convert.",
            },
            {
              title: "Meta ads (Facebook and Instagram)",
              body: "No one is searching on Facebook or Instagram, so these ads play a different role. They build familiarity with local homeowners before they need service, and they perform well for tune-up and maintenance plan offers.",
            },
          ],
        },
        {
          eyebrow: "What leads cost",
          h2: "Know the Numbers **Before You Spend.**",
          body: [
            "Lead costs vary by market, season and competition. Recent HVAC benchmarks show why we usually lead with Local Services Ads.",
            "On the free audit, we'll walk you through the numbers for your market.",
          ],
          statIds: ["lsa-cost", "search-cost"],
        },
        {
          eyebrow: "Our readiness approach",
          h2: "Foundation First. **Then the Gas.**",
          body: [
            "Paid traffic exposes a weak foundation quickly. If your Google profile has 12 reviews and your site takes 8 seconds to load, ad spend leaks out before it produces a call.",
            "Before we spend any of your budget, we confirm three things are in place: a strong Google Business Profile, a fast site with click-to-call on every page, and working call tracking.",
            "If any of those falls short, we flag it on the audit and fix it first.",
          ],
        },
        {
          eyebrow: "How we measure",
          h2: "We Track **Booked Jobs,** Not Clicks.",
          body: [
            "Clicks don't cover payroll. Booked jobs do. Every campaign gets its own tracking number, and every form submission is tagged by source.",
            "Each month you see calls, booked jobs and cost per booked job, broken down by campaign. Campaigns that don't produce jobs get restructured or cut.",
          ],
        },
        {
          eyebrow: "Seasonality",
          h2: "Budgets That **Follow the Weather.**",
          body: [
            "HVAC demand isn't flat. The first heat wave floods the phones with AC calls, and mild weeks go quiet.",
            "We plan around that cycle, increasing spend when demand spikes and pulling back when it softens. In the off-season we shift budget toward tune-ups, maintenance plans and replacement offers to keep the schedule full year-round.",
          ],
        },
      ],
      deliverables: {
        h2: "What You **Get.**",
        items: [
          { title: "Local Services Ads management", body: "We manage Google verification, service categories and lead disputes, so you pay only for legitimate leads." },
          { title: "Google Search campaigns", body: "Structured around the searches that book jobs, with negative keywords that filter out the ones that don't." },
          { title: "Meta ads that build demand", body: "Tune-up and maintenance plan offers that keep your brand in front of homeowners before they need service." },
          { title: "Landing pages that convert", body: "Fast, mobile-first pages with a single goal: a call or a booking." },
          { title: "Call tracking on every campaign", body: "See which campaign drove each call and which calls became booked jobs." },
          { title: "Clear monthly reporting", body: "Calls, booked jobs and cost per booked job. No jargon, no vanity metrics." },
        ],
      },
      steps: {
        h2: "How Paid Ads **Work With Us.**",
        items: [
          { title: "Confirm readiness", body: "We review your Google profile, website and tracking, and close any gaps before launch." },
          { title: "Launch the right mix", body: "Typically Local Services Ads first, then Google Search, then Meta once call volume is established." },
          { title: "Optimize monthly", body: "We cut what doesn't book jobs, reallocate budget to what does and adjust for the season." },
        ],
      },
      guarantee: "paidAds",
      related: ["google-business-profile", "website-design"],
      blogSlugs: ["lsa-vs-google-search-ads-hvac", "missed-hvac-calls"],
    },
    {
      slug: "website-design",
      navLabel: "Website Design",
      navDesc: "A site engineered to produce calls",
      cardTitle: "Website Design",
      cardBlurb: "A fast, mobile-first site engineered to produce calls, not just impressions.",
      schemaServiceType: "HVAC website design",
      schemaDescription:
        "Mobile-first websites for HVAC and plumbing companies with tap-to-call, service and city pages, and online booking.",
      breadcrumbName: "Website Design",
      meta: {
        title: "HVAC Website Design That Gets Calls | Booked Growth",
        description:
          "HVAC website design built for phones: tap-to-call on every page, service and city pages, and online booking. Live in 30 days, or your next month is free.",
      },
      hero: {
        eyebrow: "HVAC website design",
        h1: "A Website That **Makes the Phone Ring.**",
        sub: "Homeowners size up your company in seconds, usually on a phone and often with a failed system. We build HVAC websites that load fast, establish credibility and make calling you the obvious next step.",
      },
      problem: {
        h2: "Pretty Sites **Don't Pay** the Bills.",
        body: [
          "Many contractor sites look fine on a desktop. On a phone, the number is hard to find, pages load slowly and there's no clear next step.",
          "A homeowner with a broken AC won't wait. They hit back and call the next company.",
          "Your website should perform like your best CSR: answer the key questions quickly and get the customer on the phone.",
        ],
      },
      deliverables: {
        h2: "What You **Get.**",
        items: [
          { title: "Mobile-first design", body: "Designed for the device most of your customers use, then scaled up for desktop." },
          { title: "Click-to-call on every page", body: "Your number sits in the header, with a sticky call button that follows visitors down the page." },
          { title: "Service and city pages", body: "Dedicated pages for each service line and market, so you rank where you operate." },
          { title: "Online booking or text-to-book", body: "For homeowners who would rather pick a time slot than make a call." },
          { title: "Credibility built in", body: "Dedicated space for reviews, licenses, warranties, financing and team photos." },
          { title: "Tracking from day one", body: "Call and form tracking from launch, so you know exactly what the site produces." },
        ],
      },
      steps: {
        h2: "How Your **Site Gets Built.**",
        items: [
          { title: "Week 1: Onboarding", body: "You provide your logo, photos, services and service area. We handle everything else." },
          { title: "Weeks 2 to 3: Build", body: "We write the copy, design the pages and configure tracking." },
          { title: "Week 4: Review and launch", body: "You review, we refine, and the new site goes live." },
        ],
      },
      samplesBlock: {
        h2: "See Sample **HVAC Sites.**",
        body: "We built sample HVAC sites to show what's possible. Yours would carry your branding, photos and service area.",
        ctaLabel: "See sample HVAC sites",
      },
      guarantee: "websiteDesign",
      related: ["seo", "paid-ads"],
      blogSlugs: ["hvac-website-must-haves", "missed-hvac-calls"],
    },
    {
      slug: "google-business-profile",
      navLabel: "Google Business Profile",
      navDesc: "Rank in the Maps pack where you operate",
      cardTitle: "Google Business Profile",
      cardBlurb: "Rank in the Maps pack across every neighborhood you service.",
      schemaServiceType: "Google Business Profile optimization",
      schemaDescription:
        "Google Business Profile setup, optimization and review growth for HVAC and plumbing companies.",
      breadcrumbName: "Google Business Profile",
      meta: {
        title: "Google Business Profile for HVAC | Booked Growth",
        description:
          "Get your HVAC company into the Google Maps pack. We set up and optimize your Google Business Profile, included free with every plan.",
      },
      hero: {
        eyebrow: "Google Business Profile for HVAC",
        h1: "Own the Map in **Your Service Area.**",
        sub: "When homeowners search 'AC repair near me,' Google shows a map with three companies. Your Google Business Profile determines whether you're one of them.",
      },
      problem: {
        h2: "If You're Not in the **Top Three,** You're Invisible.",
        body: [
          "Most homeowners never scroll past the map. They compare three companies, check the ratings and call one.",
          "An incomplete profile with outdated photos and a handful of reviews won't make that list, even after 20 years in the area.",
          "The fix isn't complicated: a complete, active profile and a consistent flow of genuine reviews.",
        ],
      },
      deliverables: {
        h2: "What You **Get.**",
        items: [
          { title: "Full profile optimization", body: "Categories, services, service areas, hours and business details, configured correctly." },
          { title: "Photos that build trust", body: "Guidance on the photos that convert: your team, your trucks and real jobs." },
          { title: "A review generation system", body: "A frictionless way to request a review from every satisfied customer, right after the job." },
          { title: "Weekly posts", body: "Updates and offers that keep your profile active and relevant." },
          { title: "Ready for Local Services Ads", body: "Your profile and reviews feed directly into LSAs, so this work strengthens your ads too." },
        ],
      },
      steps: {
        h2: "How We **Build Your Profile.**",
        items: [
          { title: "Audit", body: "We identify what's missing or misconfigured and benchmark you against the top three." },
          { title: "Optimize", body: "We complete every section and launch your review requests." },
          { title: "Maintain momentum", body: "Posts, photos and review responses, every month." },
        ],
      },
      guarantee: "googleBusinessProfile",
      related: ["seo", "paid-ads"],
      blogSlugs: ["lsa-vs-google-search-ads-hvac", "hvac-website-must-haves"],
    },
    {
      slug: "seo",
      navLabel: "Local SEO",
      navDesc: "Rank in every city you serve",
      cardTitle: "Local SEO",
      cardBlurb: "Service and city pages that compound into lower-cost organic leads.",
      schemaServiceType: "HVAC local SEO",
      schemaDescription:
        "Local SEO for HVAC and plumbing companies: service pages, city pages, citations and on-page optimization.",
      breadcrumbName: "Local SEO",
      meta: {
        title: "HVAC Local SEO: Rank Where You Work | Booked Growth",
        description:
          "HVAC local SEO with a dedicated page for every service and city you serve. Rank in Google for the jobs you want, in the markets you actually work.",
      },
      hero: {
        eyebrow: "Local SEO for HVAC",
        h1: "Rank Where **You Actually Work.**",
        sub: "You serve a dozen cities, but your website likely targets one. Local SEO gives Google a dedicated page for each service and each market, so you can rank in all of them.",
      },
      problem: {
        h2: "One Page **Can't Rank** Everywhere.",
        body: [
          "Most HVAC sites have one 'Services' page and one 'Areas We Serve' list. Google can't rank that page for 'AC repair in Hialeah' and 'water heater install in Doral' at the same time.",
          "The competitors outranking you have a dedicated page for each. That's the gap we close.",
        ],
      },
      deliverables: {
        h2: "What You **Get.**",
        items: [
          { title: "Service pages", body: "Dedicated pages for AC repair, installation, heating, maintenance, plumbing and more." },
          { title: "City pages", body: "Substantive pages for each market you serve, not duplicated filler." },
          { title: "On-page optimization", body: "Titles, headings, page speed and structured data, optimized on every page." },
          { title: "Citations", body: "A consistent name, address and phone number across the directories that matter." },
          { title: "Monthly ranking report", body: "Where you rank, what changed and what comes next." },
        ],
      },
      steps: {
        h2: "How Local SEO **Works With Us.**",
        items: [
          { title: "Map your market", body: "We map your services and cities against what homeowners actually search in each market." },
          { title: "Build the pages", body: "Service pages first, then city pages, prioritized by revenue potential." },
          { title: "Expand and refine", body: "We track rankings and calls, then add and improve pages every month." },
        ],
      },
      related: ["website-design", "ai-search-visibility"],
      blogSlugs: ["hvac-website-must-haves"],
    },
    {
      slug: "ai-search-visibility",
      navLabel: "AI Search Visibility",
      navDesc: "Get named by ChatGPT and Google AI",
      cardTitle: "AI Search Visibility",
      cardBlurb: "Be the company ChatGPT and Google AI recommend when homeowners ask who to call.",
      schemaServiceType: "AI search optimization",
      schemaDescription:
        "AI search visibility for HVAC and plumbing companies, so ChatGPT, Google AI Overviews and Perplexity can find and recommend them.",
      breadcrumbName: "AI Search Visibility",
      meta: {
        title: "AI Search Visibility for HVAC Companies | Booked Growth",
        description:
          "Homeowners now ask ChatGPT and Google AI who to call. We make your HVAC company easy for AI tools to find, trust and recommend.",
      },
      hero: {
        eyebrow: "AI search visibility for HVAC",
        h1: "Be the Company **AI Recommends.**",
        sub: "Some homeowners now skip the search bar and ask ChatGPT or Google's AI, 'Who's a good AC company near me?' We position your company to be in that answer.",
      },
      problem: {
        h2: "AI Can't Recommend **What It Can't Read.**",
        body: [
          "AI tools build their answers from what they find online: your website, your Google profile, your reviews and what other sites say about you.",
          "If your site is thin, your information is inconsistent across the web or your services are hard to identify, AI tools pass over you and recommend someone else.",
        ],
      },
      deliverables: {
        h2: "What You **Get.**",
        items: [
          { title: "Clear, quotable pages", body: "Service pages and FAQs structured so AI tools can extract a direct answer." },
          { title: "Structured data", body: "Schema markup that tells search engines and AI exactly who you are, what you do and where." },
          { title: "Consistent information everywhere", body: "Your name, services and service areas presented identically across the web." },
          { title: "AI answer monitoring", body: "We test the questions homeowners ask in ChatGPT, Google AI and Perplexity and track whether you're named." },
        ],
      },
      steps: {
        h2: "How AI Visibility **Works With Us.**",
        items: [
          { title: "Test the answers", body: "We run the questions your customers ask through AI tools and record who gets recommended." },
          { title: "Close the gaps", body: "We strengthen your pages, profile and listings so the facts about your company are clear and consistent." },
          { title: "Re-test monthly", body: "AI answers shift over time. We re-test every month and keep improving." },
        ],
      },
      related: ["seo", "google-business-profile"],
      blogSlugs: ["hvac-website-must-haves"],
    },
    {
      slug: "social-media",
      navLabel: "Social Media",
      navDesc: "Stay top of mind between calls",
      cardTitle: "Social Media",
      cardBlurb: "A consistent brand presence that supports referrals, reviews and ad performance.",
      schemaServiceType: "Social media management",
      schemaDescription:
        "Social media content and management for HVAC and plumbing companies on Facebook, Instagram and Google.",
      breadcrumbName: "Social Media",
      meta: {
        title: "Social Media for HVAC Companies | Booked Growth",
        description:
          "Consistent social media for HVAC companies: real jobs, real techs and seasonal tips that keep your brand top of mind before homeowners need service.",
      },
      hero: {
        eyebrow: "Social media for HVAC",
        h1: "Stay Top of Mind **Between Breakdowns.**",
        sub: "A homeowner may need you once or twice a year. Social media keeps your brand familiar in between, so you're the first call when the system fails.",
      },
      problem: {
        h2: "Silent Pages **Lose Trust.**",
        body: [
          "Homeowners vet you before they call. If your last Facebook post is from 2022, they start to wonder whether you're still in business.",
          "You don't need viral videos. You need a consistent, credible presence that shows your team doing quality work.",
        ],
      },
      deliverables: {
        h2: "What You **Get.**",
        items: [
          { title: "A monthly content plan", body: "Seasonal tips, job photos, team features and offers, planned in advance." },
          { title: "Posts written for you", body: "We write and schedule every post. Your team just sends photos from the field." },
          { title: "Facebook, Instagram and Google", body: "Your profiles kept active and consistent across every platform." },
          { title: "Ready for ads", body: "An active page lends credibility to your Meta ads." },
        ],
      },
      steps: {
        h2: "How Social **Works With Us.**",
        items: [
          { title: "Plan", body: "We build a monthly content calendar around your season and offers." },
          { title: "Create", body: "Your techs capture photos on the job. We turn them into posts." },
          { title: "Publish and report", body: "We publish on schedule and report on what's performing each month." },
        ],
      },
      related: ["paid-ads", "google-business-profile"],
      blogSlugs: ["missed-hvac-calls"],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Home                                                                */
  /* ------------------------------------------------------------------ */
  home: {
    meta: {
      title: "HVAC Marketing Agency, South Florida | Booked Growth",
      description:
        "HVAC marketing for South Florida HVAC and plumbing companies: websites, Google profiles, local SEO and Google Ads that turn searches into booked jobs.",
    },
    hero: {
      eyebrow: "HVAC & plumbing marketing",
      h1Options: {
        A: "Homeowners Are Making Service Calls. **Make Sure They're Calling You.**",
        B: "When the AC Dies at 9pm, **Who Do They Find?**",
      },
      activeH1: "A",
      sub: "We build the websites, Google presence and paid campaigns that convert local search demand into booked jobs, and we report results in revenue terms, not clicks. Exclusively for HVAC and plumbing companies.",
      primaryCta: "Get Your Free Online Audit",
      secondaryCta: { label: "See Our Process", href: "/how-it-works" },
      /*
       * Hero photo. Free license from Pexels (no attribution required).
       * Source: https://www.pexels.com/photo/technician-inspecting-outdoor-hvac-unit-32497161/
       * Photographer: Kathleen Austin Kuhn (https://www.pexels.com/@kathleen-austin-kuhn)
       * Cropped to remove the equipment brand logo and a parts label at the bottom.
       */
      photo: {
        src: "/hero-tech.jpg",
        width: 1800,
        height: 1360,
        alt: "HVAC technician inspecting a home's outdoor AC unit with a flashlight",
      },
      calendar: {
        ariaLabel:
          "A weekly calendar fills with booked HVAC jobs as calls come in from map pack visibility, Local Services Ads, captured calls and reviews.",
        appName: "Calendar",
        todayLabel: "Today",
        month: "November 2026",
        days: [
          { label: "MON", date: "16" },
          { label: "TUE", date: "17" },
          { label: "WED", date: "18" },
          { label: "THU", date: "19" },
          { label: "FRI", date: "20" },
        ],
        todayIndex: 2,
        rows: ["8 AM", "10 AM", "1 PM", "4 PM"],
        // Order matters: the first 2 are already booked, then 3 per stage, and the last stage adds the rest.
        jobs: [
          { col: 2, row: 2, title: "Tune-up", time: "11 AM" },
          { col: 4, row: 3, title: "AC repair", time: "2 PM" },
          { col: 1, row: 1, title: "No cooling", time: "8 AM" },
          { col: 3, row: 2, title: "Tune-up", time: "10 AM" },
          { col: 5, row: 3, title: "AC repair", time: "1 PM" },
          { col: 1, row: 3, title: "System quote", time: "2 PM" },
          { col: 2, row: 4, title: "Water heater", time: "4 PM" },
          { col: 4, row: 1, title: "Drain clog", time: "8 AM" },
          { col: 3, row: 4, title: "Tune-up", time: "4 PM" },
          { col: 5, row: 1, title: "Leak repair", time: "9 AM" },
          { col: 2, row: 1, title: "Thermostat", time: "8 AM" },
          { col: 3, row: 1, title: "Duct check", time: "9 AM" },
          { col: 4, row: 4, title: "AC repair", time: "5 PM" },
          { col: 1, row: 2, title: "Tune-up", time: "11 AM" },
          { col: 5, row: 2, title: "Install", time: "11 AM" },
          { col: 1, row: 4, title: "AC repair", time: "4 PM" },
          { col: 3, row: 3, title: "Heat pump", time: "1 PM" },
          { col: 4, row: 2, title: "Tune-up", time: "10 AM" },
          { col: 2, row: 3, title: "AC repair", time: "2 PM" },
          { col: 5, row: 4, title: "Tune-up", time: "4 PM" },
        ],
        alreadyBooked: 2,
        bookedColor: "#616161",
        perStage: 3,
        stages: [
          { caption: "Map pack visibility", color: "#0b8043" },
          { caption: "Local Services Ads leads", color: "#3f51b5" },
          { caption: "Every call captured", color: "#8e24aa" },
          { caption: "Reviews that close", color: "#b06000" },
          { caption: "Capacity filled", color: "#00796b" },
        ],
        counterLabel: "{n} of {total} booked",
        fullLabel: "Board full",
      },
    },
    problem: {
      eyebrow: "Where jobs are lost",
      h2: "The Work Isn't the Problem. **The Phone Is.**",
      body: [
        "Most HVAC companies don't lose jobs on quality. They lose them in the first minute: a homeowner with a failed system searches, calls the first credible name on the page and books whoever answers.",
        "If your company isn't on that first screen, the job goes to a competitor regardless of who does better work. Over a season, that gap compounds into lost market share.",
        "The calls you already pay for leak too. More than 1 in 4 calls to HVAC businesses goes unanswered, which means part of your marketing budget never reaches a technician.",
      ],
      statIds: ["unanswered-calls"],
    },
    whereFound: {
      h2: "Five Placements Decide Who Gets the Call. **Win All Five.**",
      intro: "A single \"AC repair near me\" search returns five distinct placements, each with its own rules and economics. Here's what each one is and how we compete for it.",
      businessName: "Your Company Heating & Air",
      winLabel: "How we win it",
      cards: [
        { kind: "lsa", label: "Local Services Ads", winner: "Paid Ads", href: "/services/paid-ads" },
        { kind: "searchAd", label: "Google Search ad", winner: "Paid Ads", href: "/services/paid-ads" },
        { kind: "maps", label: "Google Maps pack", winner: "Google Business Profile", href: "/services/google-business-profile" },
        { kind: "organic", label: "Organic result", winner: "SEO + Website", href: "/services/seo" },
        { kind: "reviews", label: "Reviews", winner: "Google Business Profile + Reviews", href: "/services/google-business-profile" },
      ],
    },
    servicesGrid: {
      h2: "One Integrated System **Built to Generate Booked Jobs.**",
      intro: "Six services, deployed in the right order. We build the foundation first, then layer paid media on top, so every ad dollar lands on a profile and site built to convert.",
      // Home-only overrides. The service pages keep their own shared cardBlurb and bullets.
      cardBlurbs: {
        "paid-ads": "Capture high-intent demand the moment homeowners search, with every campaign tracked to cost per booked job.",
        "website-design": "A fast, mobile-first site engineered to produce calls, not just impressions.",
        "google-business-profile": "Rank in the Maps pack across every neighborhood you service.",
        seo: "Service and city pages that compound into lower-cost organic leads.",
        "ai-search-visibility": "Be the company ChatGPT and Google AI recommend when homeowners ask who to call.",
        "social-media": "A consistent brand presence that supports referrals, reviews and ad performance.",
      },
      flagshipPoints: [
        { title: "Google Local Services Ads (LSAs)", body: "Pay-per-lead placement at the very top of Google, marked with the Google Verified badge." },
        { title: "Google Search ads", body: "Keyword-level campaigns for repair, replacement and maintenance searches." },
        { title: "Meta ads (Facebook and Instagram)", body: "Demand generation and retargeting for memberships, seasonal offers and system replacements." },
      ],
    },
    process: {
      h2: "A Clear Path **From Audit to Full Schedule.**",
      steps: [
        { title: "Audit", body: "A full review of your Google presence, website, tracking and ad accounts, with a prioritized fix list." },
        { title: "Build the foundation", body: "Website, Google Business Profile and call tracking configured so every lead is attributable." },
        { title: "Scale demand", body: "Local Services Ads and search campaigns launched once the foundation converts, then optimized monthly." },
      ],
      linkLabel: "See the full process",
      board: {
        ariaLabel:
          "Two weekly job boards side by side. Before: only two jobs booked all week. After: every slot from Monday to Friday is booked.",
        before: { label: "Before", caption: "A soft week. Two jobs on the board." },
        after: { label: "After", caption: "Calls captured, capacity filled." },
        days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        // slot 0 to 3 = morning to evening. The first `beforeCount` jobs show on the Before board.
        beforeCount: 2,
        jobs: [
          { day: 1, slot: 1, label: "Tune-up, 11am" },
          { day: 3, slot: 2, label: "AC repair, 2pm" },
          { day: 0, slot: 0, label: "No cooling, 8am" },
          { day: 2, slot: 1, label: "Tune-up, 10am" },
          { day: 4, slot: 2, label: "AC repair, 1pm" },
          { day: 0, slot: 2, label: "New system quote, 2pm" },
          { day: 1, slot: 3, label: "Water heater, 4pm" },
          { day: 3, slot: 0, label: "Drain clog, 8am" },
          { day: 2, slot: 3, label: "Tune-up, 4pm" },
          { day: 4, slot: 0, label: "Leak repair, 9am" },
          { day: 1, slot: 0, label: "Thermostat, 8am" },
          { day: 2, slot: 0, label: "Duct check, 9am" },
          { day: 3, slot: 3, label: "AC repair, 5pm" },
          { day: 0, slot: 1, label: "Tune-up, 11am" },
          { day: 4, slot: 1, label: "Install, 11am" },
          { day: 0, slot: 3, label: "AC repair, 4pm" },
          { day: 2, slot: 2, label: "Heat pump, 1pm" },
          { day: 3, slot: 1, label: "Tune-up, 10am" },
          { day: 1, slot: 2, label: "AC repair, 2pm" },
          { day: 4, slot: 3, label: "Tune-up, 4pm" },
        ],
      },
    },
    builtToPerform: {
      h2: "Built to **Convert.**",
      intro: "Every site we deliver ships with the infrastructure that turns traffic into revenue.",
      items: [
        { title: "Mobile-first architecture", body: "Most HVAC searches happen on a phone, often mid-emergency. The site is built for that moment." },
        { title: "Click-to-call on every page", body: "One tap from any page to your dispatch line." },
        { title: "Service and city pages", body: "Dedicated pages for each service line and market you want to rank in." },
        { title: "Call tracking and attribution", body: "See which campaigns, pages and keywords produce booked jobs." },
        { title: "Online booking and text-to-book", body: "Capture the customers who won't pick up the phone." },
        { title: "Google Business Profile optimization", body: "Categories, services and service areas configured to rank." },
      ],
    },
    sampleAudit: {
      h2: "See What Your **Free Audit** Uncovers.",
      intro: "Every audit closes with a prioritized list of what's costing you calls and exactly how to fix it. Here's an example.",
      label: "Sample audit, fictional company",
      company: "Sample Heating & Air",
      companyNote: "Sample data",
      findings: [
        { severity: "High", title: "Not ranking in the top 3 of the Maps pack for 'AC repair near me'", fix: "Correct primary and secondary categories, add every service and launch a consistent review program." },
        { severity: "High", title: "No call tracking on the website", fix: "Deploy dynamic call tracking to attribute every call to its campaign and page." },
        { severity: "High", title: "Mobile load time of 7.2 seconds", fix: "Compress media and defer non-critical scripts to bring load time under 3 seconds." },
        { severity: "Medium", title: "Google Business Profile missing 6 services", fix: "List every service line to expand the searches you qualify for." },
        { severity: "Medium", title: "After-hours missed calls receive no follow-up", fix: "Enable automated text-back so after-hours callers get a response within seconds." },
      ],
    },
    testimonials: {
      h2: "What Clients Say About **Working With Us.**",
      // Real quotes only, added with written permission. Never add placeholder quotes.
      items: [],
    },
    foundingPartner: {
      eyebrow: "Founding Partner Program",
      h2: "Become a **Founding Partner.**",
      body: "We're taking on a limited number of HVAC and plumbing companies as founding partners. You get priority attention and a hands-on launch. We get a case study and your honest feedback.",
    },
    guarantees: {
      h2: "We Put Our Work **on the Line.**",
      intro: "Clear commitments, in writing.",
    },
    founder: {
      eyebrow: "Who we are",
      h2: "A South Florida Agency Built for **the Trades.**",
      line: "Booked Growth works exclusively with HVAC and plumbing companies. You get a dedicated point of contact who knows your account, and reporting built around the numbers an owner actually runs on: calls, booked jobs and cost per acquisition.",
      founderLine: "Founded by Stefano Branca",
      linkLabel: "More about us",
    },
    playbook: {
      eyebrow: "From the playbook",
      h2: "Insights From **the Playbook.**",
      intro: "Practical breakdowns of the channels, numbers and decisions behind a full schedule.",
      linkLabel: "View all guides",
      cardCta: "Read the guide",
      count: 3,
    },
    closing: {
      h2: "Ready to **Fill the Board?**",
      body: "Get a clear picture of how homeowners find you today, where calls are leaking and what it would take to capture more of them. No cost, no obligation.",
    },
  },

  /* ------------------------------------------------------------------ */
  /* How It Works                                                        */
  /* ------------------------------------------------------------------ */
  howItWorks: {
    meta: {
      title: "How Our HVAC Marketing Works | Booked Growth",
      description:
        "Our HVAC marketing process, step by step: free audit, one-week onboarding, build, launch and monthly reports on calls, booked jobs and cost per lead.",
    },
    hero: {
      eyebrow: "How it works",
      h1: "Our HVAC Marketing Process, **Step by Step.**",
      sub: "No black box. Here's exactly what happens, what we need from you and when each piece goes live.",
    },
    // TODO(stefano): confirm these timelines match how you want to run onboarding.
    phases: [
      {
        label: "Step 1",
        timing: "30 minutes",
        title: "The free audit",
        body: "A video call where we walk through how homeowners find you today and where calls are slipping away.",
        checklist: [
          "Your Google Business Profile: categories, reviews, photos and Maps ranking",
          "Your website: mobile speed, click-to-call, service and city pages",
          "Your ad accounts, if you run ads: what you spend and what it returns",
          "Your top competitors and why they rank above you",
          "A prioritized list of what to fix first",
        ],
      },
      {
        label: "Step 2",
        timing: "Week 1",
        title: "Onboarding",
        body: "We gather everything we need in the first week. That's what allows us to commit to a live site in 30 days.",
        checklist: [
          "Logo and brand colors",
          "Photos of your team, trucks and real jobs",
          "Your services, service area and hours",
          "Access to your Google Business Profile and any ad accounts",
          "Your license and insurance info (needed for Local Services Ads)",
        ],
      },
      {
        label: "Step 3",
        timing: "Weeks 2 to 3",
        title: "The build",
        body: "We write the copy, design the site and optimize your Google profile. You get a preview link to review.",
        checklist: [
          "Website copy and design",
          "Service pages and city pages",
          "Google Business Profile updates",
          "Call tracking and form tracking",
          "A review request system",
        ],
      },
      {
        label: "Step 4",
        timing: "Week 4",
        title: "Launch",
        body: "Your site goes live. We test every call button and form, then submit the site to Google.",
        checklist: [
          "Final review with you",
          "Live on your domain",
          "Tracking tested end to end",
          "Ad launch planned once the foundation is ready",
        ],
      },
      {
        label: "Step 5",
        timing: "Every month",
        title: "Reporting and tuning",
        body: "A concise monthly report and an optional review call. We keep refining what's working.",
        checklist: [
          "Calls and form leads, by source",
          "Booked jobs",
          "Cost per lead and cost per booked job",
          "What we changed and what's next",
        ],
      },
    ],
    reporting: {
      h2: "What You'll See **Every Month.**",
      body: "Three numbers matter most, and everything in your report ties back to them.",
      metrics: [
        { title: "Calls", body: "Call and form lead volume, broken down by source." },
        { title: "Booked jobs", body: "How many of those leads became revenue on your schedule." },
        { title: "Cost per lead", body: "What each lead cost, so you can judge the return on your spend." },
      ],
    },
    noSurprises: {
      h2: "No **Surprises.**",
      items: [
        "You own your website, your Google profile and your ad accounts.",
        "You get one dedicated point of contact who knows your account.",
        "Pricing is covered on the free audit call, before you commit to anything.",
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  /* About                                                               */
  /* ------------------------------------------------------------------ */
  about: {
    meta: {
      title: "About Booked Growth | HVAC & Plumbing Marketing Agency",
      description:
        "Booked Growth is a South Florida marketing agency for HVAC and plumbing companies. We build websites, Google profiles and ads measured in booked jobs.",
    },
    eyebrow: "About us",
    h1: "Marketing Built for the Trades. **Measured in Booked Jobs.**",
    sub: "Booked Growth is a South Florida marketing agency that works only with HVAC and plumbing companies. We build the websites, Google profiles and ads that turn local searches into booked jobs.",
    why: {
      eyebrow: "Why we exist",
      h2: "Good Contractors Shouldn't Lose Jobs to **Louder Ones.**",
      body: [
        "When a homeowner's AC fails, they don't research who does the best work. They choose whoever appears first and looks the most credible.",
        "As a result, good companies lose jobs every day to competitors with louder ads and better websites, not better technicians.",
        "We exist to close that gap: helping strong HVAC and plumbing companies get found first, present themselves professionally and convert more calls into booked jobs.",
      ],
    },
    principles: {
      h2: "What We **Stand For.**",
      items: [
        { icon: "home", title: "You own everything", body: "Your website, domain, Google profile and ad accounts stay in your name. Always." },
        { icon: "chart", title: "Booked jobs, not clicks", body: "We report calls, booked jobs and cost per lead. No vanity metrics." },
        { icon: "shield", title: "Foundation before ads", body: "We don't put your budget into ads until your profile and site are ready to convert clicks into calls." },
        { icon: "mail", title: "Clear reporting", body: "One concise monthly report. No jargon, no 40-page decks." },
        // TODO(stefano): add your response-time promise here (for example, "a reply within one business day").
        { icon: "chat", title: "Fast answers", body: "Questions get a direct answer from someone who knows your account." },
        { icon: "check", title: "Honest guarantees", body: "Clear commitments with no fine print. [See our guarantees](/#guarantees)." },
      ],
    },
    whyOnly: {
      h2: "Why HVAC and **Plumbing Only.**",
      body: [
        "Serving one industry means knowing it deeply: the seasons, the searches, the jobs that drive margin and the ones that don't.",
        "HVAC and plumbing are urgent purchases. When something breaks, homeowners need help now, and the first credible company usually wins the job. That's where strong marketing has the greatest impact.",
      ],
    },
    howWeWork: {
      h2: "How **We Work.**",
      steps: [
        { title: "Free audit", body: "We show you how homeowners find you today and where calls are slipping away." },
        { title: "Build the foundation", body: "Website, Google Business Profile and call tracking, configured correctly." },
        { title: "Scale demand", body: "Local Services Ads and search campaigns, launched once the foundation converts." },
        { title: "Report and optimize", body: "A clear monthly report and continuous optimization." },
      ],
      linkLabel: "See the full process",
    },
    founder: {
      title: "Founded by Stefano Branca",
      quote:
        "I started Booked Growth to give hardworking local companies the same marketing big brands get, with honest reporting and no runaround.",
      // TODO(stefano): confirm whether to add "Stefano also manages client accounts for a marketing agency." Leave empty to hide it.
      note: "",
    },
  },

  /* ------------------------------------------------------------------ */
  /* Samples                                                             */
  /* ------------------------------------------------------------------ */
  samples: {
    meta: {
      title: "Sample HVAC Website Designs | Booked Growth",
      description:
        "Sample HVAC website designs from Booked Growth. See five styles, from family-business classic to phone-first, built to show what your site could be.",
    },
    h1: "Sample HVAC **Websites.**",
    intro:
      "These are sample designs we built to show what's possible. Your site would use your logo, colors, photos and service area.",
    disclaimer:
      "These are design samples with made-up company names. They are not client sites.",
    category: "hvac",
    // Flip `live` to true when a sample is published on samples.bookedgrowth.net.
    sites: [
      { slug: "hometown-pro", name: "Hometown Pro", style: "Bold colors, coupon strip and an owner photo. Feels like an established family business.", live: false },
      { slug: "clean-comfort", name: "Clean Comfort", style: "White and calm, with a rounded hero card and reviews up front. Modern and trustworthy.", live: false },
      { slug: "phone-first", name: "Phone First", style: "A giant tap-to-call and short pages. Built for emergency calls from ads.", live: false },
      { slug: "premium-install", name: "Premium Install", style: "Dark navy and metal tones with a payment estimator. Built for system replacements.", live: false },
      { slug: "bilingual", name: "Bilingual South Florida", style: "English and Spanish on every page, with hurricane-season and humidity messaging.", live: false },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* FAQ page                                                            */
  /* ------------------------------------------------------------------ */
  faqPage: {
    meta: {
      title: "HVAC Marketing FAQ: Ads, SEO, Websites | Booked Growth",
      description:
        "Straight answers to the questions HVAC and plumbing owners ask about Google Ads, Local Services Ads, websites, Google Business Profile, SEO and AI search.",
    },
    eyebrow: "FAQ",
    h1: "HVAC Marketing **Questions, Answered.**",
    intro: "Straight answers to what HVAC and plumbing owners ask us most. Don't see yours? Ask on your free audit.",
    pricingAnswer: "Pricing depends on your goals and market; we cover it on the free audit call.",
  },

  /* ------------------------------------------------------------------ */
  /* Blog                                                                */
  /* ------------------------------------------------------------------ */
  blog: {
    meta: {
      title: "HVAC Marketing Playbook: Guides for Owners | Booked Growth",
      description:
        "Practical HVAC marketing guides for HVAC and plumbing owners: Google Ads, Local Services Ads, local SEO, websites, reviews and AI search.",
    },
    h1: "HVAC Marketing **Playbook.**",
    intro: "Practical guides for HVAC and plumbing owners focused on generating more calls and booked jobs.",
    categories: ["Google Ads", "Local SEO", "Websites", "Reviews", "AI Search"],
    signup: {
      h2: "Get One Useful **Marketing Tip** a Month.",
      body: "Short, practical and written for busy owners. No spam.",
      buttonLabel: "Sign me up",
      placeholderNote: "Signups open soon.",
    },
    authorLine: "Founder of Booked Growth. Google Ads Search certified. Helps HVAC and plumbing companies in South Florida get more calls.",
    ctaBox: {
      h3: "Want to Know Where **You're Losing Calls?**",
      body: "Get a free audit of your Google profile, website and ads. 30 minutes, no obligation.",
    },
  },

  /* ------------------------------------------------------------------ */
  /* Contact                                                             */
  /* ------------------------------------------------------------------ */
  contact: {
    meta: {
      title: "Free HVAC Marketing Audit | Booked Growth",
      description:
        "Book a free 30-minute HVAC marketing audit. See how homeowners find you today and where you're losing calls. No pressure, no pitch deck.",
    },
    eyebrow: "Free audit",
    h1: "Get Your Free **Online Audit.**",
    sub: "A 30-minute call where we show you how homeowners find you today and where calls are slipping away. No pressure, no pitch deck.",
    formTitle: "Tell us about your company",
    formNote: "Takes 2 minutes. Website URL is optional.",
    calTitle: "Book Your Free Online Audit Call",
    calNote: "Pick a time that works for you. Free, 30 minutes, held via Google Meet.",
    reassurance: "Free, with no commitment. Just a clear view of where your calls are going.",
    submitLabel: "Get My Free Audit",
    successTitle: "You're all set.",
    successBody:
      "We'll review how homeowners find you and reach out within 48 hours. Want to skip the wait? Book a call below.",
    leadSource: "HVAC site",
    fields: [
      { kind: "text", name: "full_name", label: "Full Name", placeholder: "John Smith", required: true, autoComplete: "name" },
      { kind: "email", name: "email", label: "Email", placeholder: "john@yourcompany.com", required: true, autoComplete: "email" },
      { kind: "tel", name: "phone", label: "Phone", placeholder: "Best number to reach you", required: true, autoComplete: "tel" },
      { kind: "text", name: "company_name", label: "Company Name", placeholder: "Your Company Heating & Air", required: true, autoComplete: "organization" },
      { kind: "url", name: "website_url", label: "Website URL", placeholder: "yourcompany.com (optional)", autoComplete: "url", wide: true },
      {
        kind: "checkboxes",
        name: "services_offered",
        label: "Services you offer",
        options: ["AC/heating", "Plumbing", "Other"],
        required: true,
      },
      {
        kind: "select",
        name: "number_of_trucks",
        label: "Number of trucks",
        placeholder: "Select one",
        options: ["1", "2 to 3", "4 to 7", "8+"],
        required: true,
      },
      {
        kind: "select",
        name: "biggest_challenge",
        label: "Biggest challenge",
        placeholder: "Select your biggest challenge",
        options: [
          "Not enough calls",
          "Leads are low quality",
          "Missing calls",
          "Ads not working",
          "No website or an outdated one",
          "Other",
        ],
        required: true,
      },
    ],
  },

  closingCta: {
    h2: "Ready to **Fill the Board?**",
    body: "Get a clear picture of how homeowners find you today and what it would take to capture more of their calls.",
  },
  seeAllFaqLabel: "See all questions",
};
