/**
 * HVAC and plumbing copy. Every industry-specific word on the site lives here
 * (plus hvac-faq.ts for questions and content/blog for posts).
 *
 * Rules: no em dashes, no pricing, no testimonials or client names, no stats
 * without a source in `stats`. Reading level: 6th to 8th grade.
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
      navDesc: "Get the call the moment they search",
      cardTitle: "Google & Meta Ads",
      cardBlurb: "Show up the moment someone searches 'AC repair near me.'",
      schemaServiceType: "HVAC pay-per-click advertising",
      schemaDescription:
        "Google Search ads, Google Local Services Ads and Meta ads for HVAC and plumbing companies, tracked to cost per booked job.",
      breadcrumbName: "Paid Ads",
      meta: {
        title: "HVAC Google Ads, LSAs and Meta Ads | Booked Growth",
        description:
          "HVAC Google Ads, Local Services Ads and Meta ads built to book jobs, not clicks. We track cost per booked job and set budgets that follow the weather.",
      },
      hero: {
        eyebrow: "HVAC Google Ads, LSAs & Meta Ads",
        h1: "Get the Call Before **Your Competitor Does.**",
        sub: "When a homeowner's AC quits, they search, tap and call within minutes. We put your company at the top of that search and track every call back to the ad that made it ring.",
      },
      problem: {
        h2: "Ads That Get Clicks Are Easy. **Ads That Book Jobs** Are Not.",
        body: [
          "Most HVAC owners have tried ads. The clicks came in. The bill came in. The booked jobs? Hard to say.",
          "That happens when ads run without a plan. They show for the wrong searches. They send people to a page that doesn't load fast on a phone. And nobody checks which calls turned into jobs.",
          "We fix the plan first, then turn on the spend.",
        ],
      },
      extraSections: [
        {
          eyebrow: "Three ad types, in plain words",
          h2: "Where Your Ads **Show Up.**",
          body: [
            "There are three kinds of ads that matter for HVAC and plumbing. Each one catches homeowners at a different moment.",
          ],
          bullets: [
            {
              title: "Google Local Services Ads (LSAs)",
              body: "The boxes at the very top of Google with the green check mark. You pay per lead, not per click. Google checks your license and insurance first, and your reviews help decide where you show.",
            },
            {
              title: "Google Search ads",
              body: "The text ads right under the LSAs. You pick the searches you want, like 'AC repair near me' or 'water heater install.' We write the ads and send people to a page built to make them call.",
            },
            {
              title: "Meta ads (Facebook and Instagram)",
              body: "People aren't searching here, so these ads work differently. They keep your name in front of local homeowners before they need you, and they work well for tune-up and maintenance plan offers.",
            },
          ],
        },
        {
          eyebrow: "What leads cost",
          h2: "Know the Numbers **Before You Spend.**",
          body: [
            "Lead costs swing by city, season and competition. Here is what recent HVAC data shows, so you can see why we usually start with Local Services Ads.",
            "We'll show you real numbers for your market on the free audit.",
          ],
          statIds: ["lsa-cost", "search-cost"],
        },
        {
          eyebrow: "Our readiness approach",
          h2: "Foundation First. **Then the Gas.**",
          body: [
            "Ads make a weak setup fail faster. If your Google profile has 12 reviews and your site takes 8 seconds to load, paid traffic just leaks out.",
            "So before we spend a dollar of your budget, we make sure three things are ready: a strong Google Business Profile, a fast site with tap-to-call on every page, and call tracking that works.",
            "If something isn't ready, we tell you on the audit and fix it first.",
          ],
        },
        {
          eyebrow: "How we measure",
          h2: "We Track **Booked Jobs,** Not Clicks.",
          body: [
            "Clicks don't pay your techs. Booked jobs do. Every ad gets its own tracking number, and every form is tagged by source.",
            "Each month you see how many calls came in, how many turned into booked jobs, and what each booked job cost. If a campaign isn't booking jobs, we change it or cut it.",
          ],
        },
        {
          eyebrow: "Seasonality",
          h2: "Budgets That **Follow the Weather.**",
          body: [
            "HVAC demand isn't flat. The first hot week brings a flood of AC calls. Mild weeks go quiet.",
            "We plan for that. We push spend up when the heat hits and pull it back when calls slow down. In slow months we shift to tune-ups, maintenance plans and replacement offers, so your board stays full all year.",
          ],
        },
      ],
      deliverables: {
        h2: "What You **Get.**",
        items: [
          { title: "Local Services Ads setup", body: "We handle the Google Guaranteed check, service list and lead disputes, so you only pay for real leads." },
          { title: "Google Search campaigns", body: "Built around the searches that book jobs, with negative keywords that block the ones that don't." },
          { title: "Meta ads that build demand", body: "Tune-up and plan offers that keep your name in front of homeowners before something breaks." },
          { title: "Landing pages that convert", body: "Fast, phone-first pages with one job: get the homeowner to call or book." },
          { title: "Call tracking on every ad", body: "You'll know which ad made the phone ring and which calls turned into jobs." },
          { title: "A monthly plain-English report", body: "Calls, booked jobs and cost per booked job. No jargon, no vanity numbers." },
        ],
      },
      steps: {
        h2: "How Paid Ads **Work With Us.**",
        items: [
          { title: "Check readiness", body: "We review your Google profile, site and tracking. Anything weak gets fixed before ads go live." },
          { title: "Launch the right mix", body: "Usually Local Services Ads first, then Google Search, then Meta once calls are flowing." },
          { title: "Tune every month", body: "We cut what doesn't book jobs, add budget to what does, and adjust for the season." },
        ],
      },
      guarantee: "paidAds",
      related: ["google-business-profile", "website-design"],
      blogSlugs: ["lsa-vs-google-search-ads-hvac", "missed-hvac-calls"],
    },
    {
      slug: "website-design",
      navLabel: "Website Design",
      navDesc: "A site that makes the phone ring",
      cardTitle: "Website Design",
      cardBlurb: "A site that makes the phone ring, not just looks nice.",
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
        sub: "Homeowners judge your company in seconds, usually on a phone, often with no AC. We build HVAC sites that load fast, earn trust and make calling you the easy next step.",
      },
      problem: {
        h2: "Pretty Sites **Don't Pay** the Bills.",
        body: [
          "A lot of contractor sites look fine on a laptop. On a phone, the number is hard to find, the pages load slow and there's no clear next step.",
          "A homeowner with a broken AC won't wait. They hit back and call the next company.",
          "Your website should work like your best CSR: answer the big questions fast and get them on the phone.",
        ],
      },
      deliverables: {
        h2: "What You **Get.**",
        items: [
          { title: "Phone-first design", body: "Built for the screen your customers use most, then scaled up for desktop." },
          { title: "Tap-to-call everywhere", body: "Your number sits in the header and a sticky call button follows the visitor down the page." },
          { title: "Service and city pages", body: "A page for each service and each area you serve, so you show up where you work." },
          { title: "Online booking or text-to-book", body: "For homeowners who would rather tap a time than make a call." },
          { title: "Trust built in", body: "Space for your reviews, licenses, warranties, financing and team photos." },
          { title: "Tracking from day one", body: "Call and form tracking, so you know what the site brings in." },
        ],
      },
      steps: {
        h2: "How Your **Site Gets Built.**",
        items: [
          { title: "Week 1: Gather", body: "You send your logo, photos, services and service area. We handle the rest." },
          { title: "Weeks 2 to 3: Build", body: "We write the copy, design the pages and set up tracking." },
          { title: "Week 4: Review and launch", body: "You review, we polish, and your new site goes live." },
        ],
      },
      samplesBlock: {
        h2: "See Sample **HVAC Sites.**",
        body: "We built sample HVAC sites to show what's possible. Yours would use your logo, colors, photos and service area.",
        ctaLabel: "See sample HVAC sites",
      },
      guarantee: "websiteDesign",
      related: ["seo", "paid-ads"],
      blogSlugs: ["hvac-website-must-haves", "missed-hvac-calls"],
    },
    {
      slug: "google-business-profile",
      navLabel: "Google Business Profile",
      navDesc: "Win the Maps pack where you work",
      cardTitle: "Google Business Profile",
      cardBlurb: "Win the Maps pack in the neighborhoods you serve.",
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
        sub: "When homeowners search 'AC repair near me,' Google shows a map with three companies. Your Google Business Profile decides if you're one of them.",
      },
      problem: {
        h2: "If You're Not in the **Top Three,** You're Invisible.",
        body: [
          "Most homeowners never scroll past the map. They see three companies, check the stars and call one.",
          "A half-filled profile with old photos and a few reviews won't make that list, even if you've served the area for 20 years.",
          "The fix isn't magic. It's a complete, active profile and a steady flow of real reviews.",
        ],
      },
      deliverables: {
        h2: "What You **Get.**",
        items: [
          { title: "Full profile setup", body: "Categories, services, service areas, hours and business details, all filled in the right way." },
          { title: "Photos that build trust", body: "We guide you on the photos that matter: your team, your trucks and real jobs." },
          { title: "A simple review system", body: "An easy way to ask every happy customer for a review, right after the job." },
          { title: "Weekly posts", body: "Short updates and offers that keep your profile active." },
          { title: "Ready for Local Services Ads", body: "Your profile and reviews feed into LSAs, so this sets up your ads to win too." },
        ],
      },
      steps: {
        h2: "How We **Build Your Profile.**",
        items: [
          { title: "Audit", body: "We check what's missing, what's wrong and how you compare to the top three." },
          { title: "Fix and fill", body: "We complete every section and set up your review requests." },
          { title: "Keep it active", body: "Posts, photos and review replies, every month." },
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
      cardBlurb: "A page for every service and city, so you rank where you work.",
      schemaServiceType: "HVAC local SEO",
      schemaDescription:
        "Local SEO for HVAC and plumbing companies: service pages, city pages, citations and on-page optimization.",
      breadcrumbName: "Local SEO",
      meta: {
        title: "HVAC Local SEO: Rank Where You Work | Booked Growth",
        description:
          "HVAC local SEO with a page for every service and every city you serve. Rank in Google for the jobs you want, in the areas you actually drive to.",
      },
      hero: {
        eyebrow: "Local SEO for HVAC",
        h1: "Rank Where **You Actually Work.**",
        sub: "You serve a dozen cities. Your website probably talks about one. Local SEO gives Google a clear page for each service and each area, so you show up in all of them.",
      },
      problem: {
        h2: "One Page **Can't Rank** Everywhere.",
        body: [
          "Most HVAC sites have one 'Services' page and one 'Areas We Serve' list. Google can't rank that page for 'AC repair in Hialeah' and 'water heater install in Doral' at the same time.",
          "Your competitors who rank have a page for each. That's the gap.",
        ],
      },
      deliverables: {
        h2: "What You **Get.**",
        items: [
          { title: "Service pages", body: "A real page for AC repair, installs, heating, maintenance, plumbing and more." },
          { title: "City pages", body: "Useful pages for each area you serve, not copy-and-paste filler." },
          { title: "On-page fixes", body: "Titles, headings, speed and schema, done right on every page." },
          { title: "Citations", body: "Your name, address and phone listed the same way across key directories." },
          { title: "Monthly ranking report", body: "Where you rank, what changed and what we're doing next." },
        ],
      },
      steps: {
        h2: "How Local SEO **Works With Us.**",
        items: [
          { title: "Map your market", body: "We list your services and cities and see what homeowners search for in each." },
          { title: "Build the pages", body: "Service pages first, then city pages, in order of what brings the most jobs." },
          { title: "Grow and adjust", body: "We track rankings and calls, then add or improve pages every month." },
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
      cardBlurb: "Get recommended when homeowners ask ChatGPT who to call.",
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
        sub: "Some homeowners now skip the search bar and ask ChatGPT or Google's AI, 'Who's a good AC company near me?' We help make sure your name is in the answer.",
      },
      problem: {
        h2: "AI Can't Recommend **What It Can't Read.**",
        body: [
          "AI tools build their answers from what they find online: your website, your Google profile, your reviews and what other sites say about you.",
          "If your site is thin, your info doesn't match across the web, or your services are hard to find, AI tools skip you and name someone else.",
        ],
      },
      deliverables: {
        h2: "What You **Get.**",
        items: [
          { title: "Clear, quotable pages", body: "Service pages and FAQs written so AI tools can pull a direct answer." },
          { title: "Structured data", body: "Behind-the-scenes code that tells search engines and AI exactly who you are and what you do." },
          { title: "Matching info everywhere", body: "Your name, services and areas listed the same way across the web." },
          { title: "AI answer checks", body: "We test the questions homeowners ask in ChatGPT, Google AI and Perplexity and track if you show up." },
        ],
      },
      steps: {
        h2: "How AI Visibility **Works With Us.**",
        items: [
          { title: "Test the answers", body: "We ask AI tools the questions your customers ask and see who gets named." },
          { title: "Fill the gaps", body: "We fix your pages, profile and listings so the facts about you are clear and consistent." },
          { title: "Check every month", body: "AI answers change. We re-test and keep improving." },
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
      cardBlurb: "Stay top of mind between breakdowns.",
      schemaServiceType: "Social media management",
      schemaDescription:
        "Social media content and management for HVAC and plumbing companies on Facebook, Instagram and Google.",
      breadcrumbName: "Social Media",
      meta: {
        title: "Social Media for HVAC Companies | Booked Growth",
        description:
          "Simple, steady social media for HVAC companies. Real jobs, real techs and seasonal tips that keep homeowners thinking of you before something breaks.",
      },
      hero: {
        eyebrow: "Social media for HVAC",
        h1: "Stay Top of Mind **Between Breakdowns.**",
        sub: "A homeowner might need you once or twice a year. Social media keeps your name familiar the rest of the time, so you're the first call when the AC quits.",
      },
      problem: {
        h2: "Silent Pages **Lose Trust.**",
        body: [
          "Homeowners check you out before they call. If your last Facebook post is from 2022, it makes them wonder if you're still around.",
          "You don't need viral videos. You need a steady, real presence that shows your team doing good work.",
        ],
      },
      deliverables: {
        h2: "What You **Get.**",
        items: [
          { title: "A monthly content plan", body: "Seasonal tips, job photos, team intros and offers, planned ahead." },
          { title: "Posts written for you", body: "We write and schedule every post. You just send photos from the field." },
          { title: "Facebook, Instagram and Google", body: "Your profiles kept active and looking the same everywhere." },
          { title: "Ready for ads", body: "An active page makes your Meta ads look more trustworthy." },
        ],
      },
      steps: {
        h2: "How Social **Works With Us.**",
        items: [
          { title: "Plan", body: "We build a simple monthly calendar around your season and offers." },
          { title: "Create", body: "You snap photos on the job. We turn them into posts." },
          { title: "Post and review", body: "We publish on schedule and share what's working each month." },
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
      eyebrow: "HVAC & plumbing marketing, South Florida",
      h1Options: {
        A: "Homeowners Are Calling Someone. **Make It You.**",
        B: "When the AC Dies at 9pm, **Who Do They Find?**",
      },
      activeH1: "A",
      sub: "Booked Growth builds the websites, Google profiles and ads that turn local searches into booked HVAC jobs. Built only for HVAC and plumbing companies.",
      primaryCta: "Get Your Free Online Audit",
      secondaryCta: { label: "See how it works", href: "/how-it-works" },
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
      notifications: [
        { icon: "phone", app: "Phone", text: "New call from Local Services Ads, AC not cooling" },
        { icon: "chat", app: "Messages", text: "Missed call, text sent back automatically" },
        { icon: "calendar", app: "Calendar", text: "Job booked, Tue 2:00 PM, AC repair" },
      ],
    },
    problem: {
      eyebrow: "The problem",
      h2: "Great Techs. **Empty Schedule.**",
      body: [
        "You do good work. But when a homeowner's AC quits, they grab their phone and call whoever shows up first.",
        "If that's not you, the job goes to the shop down the road, even if you're better.",
        "And the calls you do get? More than 1 in 4 calls to HVAC businesses goes unanswered. Every one of those is money you already paid to get.",
      ],
      statIds: ["unanswered-calls"],
    },
    whereFound: {
      h2: "Five Places Homeowners Look. **Be in All of Them.**",
      intro: "When the AC dies, a homeowner sees five kinds of results on one Google search. Here's who wins each spot, and how.",
      businessName: "Your Company Heating & Air",
      cards: [
        { kind: "lsa", label: "Local Services Ads", winner: "Paid Ads", href: "/services/paid-ads" },
        { kind: "searchAd", label: "Google Search ad", winner: "Paid Ads", href: "/services/paid-ads" },
        { kind: "maps", label: "Google Maps pack", winner: "Google Business Profile", href: "/services/google-business-profile" },
        { kind: "organic", label: "Organic result", winner: "SEO + Website", href: "/services/seo" },
        { kind: "reviews", label: "Reviews", winner: "Google Business Profile + Reviews", href: "/services/google-business-profile" },
      ],
    },
    servicesGrid: {
      h2: "Everything Your HVAC Company Needs to **Get the Call.**",
      intro: "Six services that work together. Most companies start with the foundation and add ads once it's ready.",
    },
    process: {
      h2: "Three Steps to a **Fuller Schedule.**",
      steps: [
        { title: "See where you stand", body: "A free audit of your Google profile, website and ads." },
        { title: "We build the foundation", body: "Website, Google profile and tracking, set up the right way." },
        { title: "Turn on the calls", body: "Ads and Local Services Ads, once the foundation is ready." },
      ],
      linkLabel: "See the full process",
      board: {
        ariaLabel:
          "Two weekly job boards side by side. Before: only two jobs booked all week. After: every slot from Monday to Friday is booked.",
        before: { label: "Before", caption: "A slow week. Two jobs booked." },
        after: { label: "After", caption: "Calls answered, jobs booked, board full." },
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
      h2: "Built to **Perform.**",
      intro: "Every site we build comes with the basics that turn visitors into calls.",
      items: [
        { title: "Mobile-first design", body: "Made for the phone in a homeowner's hand." },
        { title: "Tap-to-call everywhere", body: "Your number is one tap away on every page." },
        { title: "Service and city pages", body: "So you show up for each job, in each area." },
        { title: "Call tracking", body: "Know which ads ring the phone." },
        { title: "Online booking or text-to-book", body: "For customers who'd rather not call." },
        { title: "Google Business Profile setup", body: "Your map listing, done right." },
      ],
    },
    sampleAudit: {
      h2: "See What Your **Free Audit** Finds.",
      intro: "Every audit ends with a short list of real problems and a clear fix for each one. Here's what that looks like.",
      label: "Sample audit, fictional company",
      company: "Sample Heating & Air",
      companyNote: "Sample data",
      findings: [
        { severity: "High", title: "Not in the top 3 of the Maps pack for 'AC repair near me'", fix: "Fix your categories, add your services and start a steady review system." },
        { severity: "High", title: "No call tracking on the website", fix: "Add tracking numbers so you know which ads and pages ring the phone." },
        { severity: "High", title: "Site loads in 7.2 seconds on mobile", fix: "Compress images and trim heavy scripts so the page loads fast on a phone." },
        { severity: "Medium", title: "Google profile missing 6 services", fix: "List every service you offer so Google shows you for more searches." },
        { severity: "Medium", title: "Missed calls get no reply after hours", fix: "Turn on automatic text-back so after-hours callers hear from you right away." },
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
      intro: "Simple promises, in writing.",
    },
    founder: {
      eyebrow: "Who we are",
      h2: "A South Florida Agency Built for **the Trades.**",
      line: "Booked Growth works only with HVAC and plumbing companies. You get one dedicated point of contact who knows your account, and reports measured in booked jobs.",
      founderLine: "Founded by Stefano Branca",
      linkLabel: "More about us",
    },
    closing: {
      h2: "Ready to **Fill the Board?**",
      body: "Get a free audit of how homeowners find you today, and what it would take to get more of their calls.",
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
      sub: "No black box. Here is exactly what happens, what we need from you and when things go live.",
    },
    // TODO(stefano): confirm these timelines match how you want to run onboarding.
    phases: [
      {
        label: "Step 1",
        timing: "30 minutes",
        title: "The free audit",
        body: "A video call where we show you how homeowners find you today and where you're losing calls.",
        checklist: [
          "Your Google Business Profile: categories, reviews, photos and Maps ranking",
          "Your website: speed on a phone, tap-to-call, service and city pages",
          "Your ads, if you run them: what you pay and what you get back",
          "Your top competitors and why they show up above you",
          "A short list of what to fix first",
        ],
      },
      {
        label: "Step 2",
        timing: "Week 1",
        title: "Onboarding",
        body: "We collect what we need in one week. That's what lets us promise a live site in 30 days.",
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
        body: "We write the copy, design the site and fix your Google profile. You get a preview link to review.",
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
        body: "Your site goes live. We test every call button and form, then submit it to Google.",
        checklist: [
          "Final review with you",
          "Live on your domain",
          "Tracking tested end to end",
          "Ads planned, once the foundation is ready",
        ],
      },
      {
        label: "Step 5",
        timing: "Every month",
        title: "Reporting and tuning",
        body: "A short report in plain English, plus a call if you want one. We keep improving what works.",
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
      body: "Three numbers matter most. Everything in your report ties back to them.",
      metrics: [
        { title: "Calls", body: "How many calls and form leads came in, and from where." },
        { title: "Booked jobs", body: "How many of those leads turned into real work on your board." },
        { title: "Cost per lead", body: "What each lead cost, so you know if the spend is worth it." },
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
        "When a homeowner's AC quits, they don't research who does the best work. They pick whoever shows up first and looks the most trustworthy.",
        "So good companies lose jobs every day to competitors with louder ads and better websites, not better techs.",
        "We exist to close that gap. We help good HVAC and plumbing companies get found first, look the part and turn more calls into booked jobs.",
      ],
    },
    principles: {
      h2: "What We **Stand For.**",
      items: [
        { icon: "home", title: "You own everything", body: "Your website, domain, Google profile and ad accounts stay in your name. Always." },
        { icon: "chart", title: "Booked jobs, not clicks", body: "We report calls, booked jobs and cost per lead. Not vanity numbers." },
        { icon: "shield", title: "Foundation before ads", body: "We don't spend your money on ads until your profile and site are ready to turn clicks into calls." },
        { icon: "mail", title: "Plain-English reporting", body: "One clear monthly report. No jargon, no 40-page decks." },
        // TODO(stefano): add your response-time promise here (for example, "a reply within one business day").
        { icon: "chat", title: "Fast answers", body: "Questions get a clear, direct answer from someone who knows your account." },
        { icon: "check", title: "Honest guarantees", body: "Simple promises with no fine print. [See our guarantees](/#guarantees)." },
      ],
    },
    whyOnly: {
      h2: "Why HVAC and **Plumbing Only.**",
      body: [
        "When you serve one kind of business, you learn it deeply. We know the seasons, the searches, the jobs that pay and the ones that don't.",
        "HVAC and plumbing are urgent. When something breaks, homeowners need help now, and the company that shows up first usually gets the job. That's exactly where good marketing makes the biggest difference.",
      ],
    },
    howWeWork: {
      h2: "How **We Work.**",
      steps: [
        { title: "Free audit", body: "We show you how homeowners find you today and where calls slip away." },
        { title: "Build the foundation", body: "Website, Google profile and call tracking, set up the right way." },
        { title: "Turn on the calls", body: "Ads and Local Services Ads, once the foundation is ready." },
        { title: "Report and improve", body: "A plain-English report every month, and steady tuning." },
      ],
      linkLabel: "See the full process",
    },
    credentialsH2: "Credentials",
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
        "Plain-English HVAC marketing guides for HVAC and plumbing owners: Google Ads, Local Services Ads, local SEO, websites, reviews and AI search.",
    },
    h1: "HVAC Marketing **Playbook.**",
    intro: "Plain-English guides for HVAC and plumbing owners who want more calls.",
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
      body: "Get a free audit of your Google profile, website and ads. 30 minutes, no pressure.",
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
    sub: "A 30-minute call where we show you how homeowners find you today and where you're losing calls. No pressure, no pitch deck.",
    formTitle: "Tell us about your company",
    formNote: "Takes 2 minutes. Website URL is optional.",
    calTitle: "Book Your Free Online Audit Call",
    calNote: "Pick a time that works for you. Free, 30 minutes, held via Google Meet.",
    reassurance: "Free. No commitment. Just a clear look at where your calls are going.",
    submitLabel: "Get My Free Audit",
    successTitle: "You're all set.",
    successBody:
      "We'll review how homeowners find you and reach out within 48 hours. Want to skip the wait? Book a call below.",
    leadSource: "HVAC site",
    fields: [
      { kind: "text", name: "full_name", label: "Full Name", placeholder: "John Smith", required: true, autoComplete: "name" },
      { kind: "email", name: "email", label: "Email", placeholder: "john@yourcompany.com", required: true, autoComplete: "email" },
      { kind: "tel", name: "phone", label: "Phone", placeholder: "(305) 555-0100", required: true, autoComplete: "tel" },
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
    body: "Get a free audit of how homeowners find you today, and what it would take to get more of their calls.",
  },
  seeAllFaqLabel: "See all questions",
};
